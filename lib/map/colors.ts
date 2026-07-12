export const REGION_COLORS = [
  "#4F46E5",
  "#2563EB",
  "#0891B2",
  "#059669",
  "#65A30D",
  "#CA8A04",
  "#EA580C",
  "#DC2626",
  "#DB2777",
  "#9333EA",
  "#7C3AED",
  "#0F766E",
  "#0284C7",
  "#16A34A",
  "#84CC16",
  "#F59E0B",
  "#F97316",
  "#EC4899",
  "#8B5CF6"
];

export function getRegionColor(region: string) {
  let hash = 0;

  for (let i = 0; i < region.length; i++) {
    hash = region.charCodeAt(i) + ((hash << 5) - hash);
  }

  return REGION_COLORS[Math.abs(hash) % REGION_COLORS.length];
}