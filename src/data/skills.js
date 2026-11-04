import {
  Braces,
  Code2,
  Database,
  GitBranch,
  Server,
  Terminal,
  Wrench,
} from 'lucide-react';

export const skillCategories = [
  { id: 'all', label: 'All skills' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'database', label: 'Database' },
  { id: 'core', label: 'Core CS / DSA' },
  { id: 'tools', label: 'Tools' },
];

export const skills = [
  { name: 'JavaScript (ES6+)', category: 'frontend', Icon: Braces },
  { name: 'React', category: 'frontend', Icon: Code2 },
  { name: 'HTML5 / CSS3', category: 'frontend', Icon: Code2 },
  { name: 'Bootstrap', category: 'frontend', Icon: Code2 },
  { name: 'Python', category: 'backend', Icon: Terminal },
  { name: 'Flask', category: 'backend', Icon: Server },
  { name: 'Java', category: 'backend', Icon: Braces },
  { name: 'SQL', category: 'database', Icon: Database },
  { name: 'DBMS', category: 'database', Icon: Database },
  { name: 'Data Structures & Algorithms', category: 'core', Icon: Code2 },
  { name: 'Git & GitHub', category: 'tools', Icon: GitBranch },
  { name: 'Pandas / NumPy', category: 'tools', Icon: Wrench },
];
