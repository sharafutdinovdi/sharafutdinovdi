import { mkdir, writeFile } from 'node:fs/promises';

const palettes = {
  dark: { bg: '#0d1117', border: '#30363d', text: '#f0f6fc', muted: '#9198a1', grid: '#21262d', accent: '#58a6ff' },
  light: { bg: '#ffffff', border: '#d1d9e0', text: '#1f2328', muted: '#59636e', grid: '#eaeef2', accent: '#0969da' },
};
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const assets = new URL('../assets/', import.meta.url);
const number = (value) => Number(value.toFixed(2));

function render(calendar, days, palette, updated) {
  const { bg, border, text, muted, grid, accent } = palette;
  const left = 64, right = 1152, top = 86, bottom = 230;
  const peak = days.reduce((best, day) => day.contributionCount > best.contributionCount ? day : best);
  const maximum = Math.ceil(Math.max(4, peak.contributionCount) / 4) * 4;
  const points = days.map((day, i) => ({
    ...day,
    x: left + i * (right - left) / (days.length - 1),
    y: bottom - day.contributionCount / maximum * (bottom - top),
  }));
  // Horizontal endpoint tangents keep each cubic monotone without overshooting counts.
  let path = `M${number(points[0].x)} ${number(points[0].y)}`;
  for (let i = 1; i < points.length; i++) {
    const previous = points[i - 1], current = points[i];
    const middle = number((previous.x + current.x) / 2);
    path += ` C${middle} ${number(previous.y)} ${middle} ${number(current.y)} ${number(current.x)} ${number(current.y)}`;
  }
  const gridlines = Array.from({ length: 4 }, (_, i) => {
    const value = maximum * (i + 1) / 4;
    const y = number(bottom - (i + 1) / 4 * (bottom - top));
    return `    <line x1="${left}" y1="${y}" x2="${right}" y2="${y}" stroke="${grid}"/>
    <text x="52" y="${y + 4}" text-anchor="end">${number(value)}</text>`;
  }).join('\n');
  const labels = points.filter((point) => point.date.endsWith('-01')).map((point) =>
    `    <text x="${number(point.x)}" y="253" text-anchor="middle">${months[Number(point.date.slice(5, 7)) - 1]}</text>`
  ).join('\n');
  const dot = points.find((point) => point.date === peak.date);
  const anchor = dot.x > right - 150 ? 'end' : 'start';
  const labelX = dot.x + (anchor === 'end' ? -8 : 8);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1200 300" role="img" aria-label="Contributions — last 12 months: ${calendar.totalContributions} contributions">
  <rect x="0.5" y="0.5" width="1199" height="299" rx="16" fill="${bg}" stroke="${border}"/>
  <g font-family="'Segoe UI', Helvetica, Arial, sans-serif">
    <text x="32" y="39" font-size="14" fill="${muted}">Contributions — last 12 months</text>
    <text x="1168" y="41" text-anchor="end" font-size="20" font-weight="700" fill="${text}">${calendar.totalContributions} contributions</text>
    <g font-size="11" fill="${muted}">
${gridlines}
    <text x="52" y="234" text-anchor="end">0</text>
${labels}
    </g>
    <path d="${path} L${right} ${bottom} L${left} ${bottom} Z" fill="${accent}" fill-opacity="0.15"/>
    <path d="${path}" fill="none" stroke="${accent}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="${number(dot.x)}" cy="${number(dot.y)}" r="3.5" fill="${accent}" stroke="${bg}" stroke-width="1.5"/>
    <text x="${number(labelX)}" y="${number(dot.y - 12)}" text-anchor="${anchor}" font-size="11" fill="${text}">${peak.contributionCount} · ${peak.date}</text>
    <text x="32" y="282" font-size="11" fill="${muted}">updated ${updated}</text>
  </g>
</svg>
`;
}

async function main() {
  const token = process.env.GITHUB_TOKEN;
  if (!token) throw new Error('GITHUB_TOKEN is required.');
  const user = process.env.GH_USER || 'sharafutdinovdi';
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json', 'User-Agent': 'profile-activity-graph' },
    body: JSON.stringify({
      query: `query($login: String!) {
        user(login: $login) {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks { contributionDays { date contributionCount } }
            }
          }
        }
      }`,
      variables: { login: user },
    }),
    signal: AbortSignal.timeout(30_000),
  });
  if (!response.ok) throw new Error(`GitHub API returned HTTP ${response.status} ${response.statusText}.`);
  const result = await response.json();
  if (result.errors?.length) throw new Error(`GitHub GraphQL: ${result.errors.map((error) => error.message).join('; ')}`);
  const calendar = result.data?.user?.contributionsCollection?.contributionCalendar;
  if (!calendar || !Number.isSafeInteger(calendar.totalContributions) || calendar.totalContributions < 0 || !Array.isArray(calendar.weeks)) {
    throw new Error(`GitHub returned no valid contribution calendar for ${user}.`);
  }
  // The default API calendar may include 366 days; plot exactly the latest 365.
  const days = calendar.weeks.flatMap((week) => week.contributionDays).sort((a, b) => a.date.localeCompare(b.date)).slice(-365);
  if (days.length !== 365 || days.some((day, i) =>
    !/^\d{4}-\d{2}-\d{2}$/.test(day.date) || !Number.isSafeInteger(day.contributionCount) || day.contributionCount < 0 ||
    !Number.isFinite(Date.parse(day.date)) || (i > 0 && Date.parse(day.date) - Date.parse(days[i - 1].date) !== 86_400_000)
  )) throw new Error('GitHub returned an invalid or incomplete daily contribution calendar.');
  const updated = new Date().toISOString().slice(0, 10);
  await mkdir(assets, { recursive: true });
  console.log(`${calendar.totalContributions} contributions for ${user} (${days.length} plotted days)`);
  for (const [theme, palette] of Object.entries(palettes)) {
    const filename = `activity-${theme}.svg`;
    await writeFile(new URL(filename, assets), render(calendar, days, palette, updated));
    console.log(`Written assets/${filename}`);
  }
}

main().catch((error) => {
  console.error(`Activity graph: ${error.message}`);
  process.exitCode = 1;
});
