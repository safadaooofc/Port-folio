export interface Skill {
  name: string;
  icon: string;
  color: string;
  category: string;
}

export const skills: Skill[] = [
  { name: 'Roblox Lua', icon: '🎮', color: '#E2231A', category: 'Roblox' },
  { name: 'Luau', icon: '🔴', color: '#00A2FF', category: 'Roblox' },
  { name: 'Map Design', icon: '🗺️', color: '#8B5CF6', category: 'Roblox' },
  { name: 'Roleplay Systems', icon: '🎭', color: '#06B6D4', category: 'Roblox' },
  { name: 'Discord Bot', icon: '🤖', color: '#5865F2', category: 'Integração' },
  { name: 'Node.js', icon: '🟢', color: '#339933', category: 'Backend' },
  { name: 'Express', icon: '⚡', color: '#ffffff', category: 'Backend' },
  { name: 'TypeScript', icon: '🔷', color: '#3178C6', category: 'Frontend' },
  { name: 'React', icon: '⚛️', color: '#61DAFB', category: 'Frontend' },
  { name: 'JavaScript', icon: '⚡', color: '#F7DF1E', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: '💨', color: '#06B6D4', category: 'Frontend' },
  { name: 'Python', icon: '🐍', color: '#3776AB', category: 'Backend' },
  { name: 'MongoDB', icon: '🍃', color: '#47A248', category: 'Ferramentas' },
  { name: 'Git', icon: '📦', color: '#F05032', category: 'Ferramentas' },
  { name: 'Discloud', icon: '☁️', color: '#5865F2', category: 'Ferramentas' },
  { name: 'Docker', icon: '🐳', color: '#2496ED', category: 'Ferramentas' },
];

export const skillCategories = ['Roblox', 'Integração', 'Frontend', 'Backend', 'Ferramentas'] as const;
