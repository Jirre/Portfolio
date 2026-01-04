export const projectTypes = [
  'app',
  'game',
  'tool',
  'website',
  'other',
] as const;

export type ProjectType = typeof projectTypes[number];

export const projectTypeColors: Record<ProjectType, string> = {
  'app': 'bg-blue-300 dark:bg-blue-700 text-foreground',
  'game': 'bg-green-300 dark:bg-green-700 text-foreground',
  'tool': 'bg-purple-300 dark:bg-purple-700 text-foreground',
  'website': 'bg-yellow-300 dark:bg-yellow-700 text-foreground',
  'other': 'bg-gray-300 dark:bg-gray-700 text-foreground',
}