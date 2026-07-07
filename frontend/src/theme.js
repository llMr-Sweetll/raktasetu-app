// Design tokens and constants — NO React imports, NO circular deps
export const T = {
  oxblood: '#7A1626',
  oxbloodDark: '#5E0F1D',
  arterial: '#C8102E',
  arterialSoft: '#FBEBEE',
  ink: '#17151A',
  mut: '#6F6963',
  faint: '#9A938C',
  porcelain: '#F5F3F0',
  card: '#FFFFFF',
  line: '#E8E3DD',
  leaf: '#0F6B4A',
  leafSoft: '#E8F2EE',
  consoleBg: '#14161C',
  consoleCard: '#1D2028',
  consoleLine: '#2B2F3A',
  consoleMut: '#8B909C',
  gold: '#8A6A1F',
};

export const GIVERS = {
  'O-': ['O-'],
  'O+': ['O-', 'O+'],
  'A-': ['O-', 'A-'],
  'A+': ['O-', 'O+', 'A-', 'A+'],
  'B-': ['O-', 'B-'],
  'B+': ['O-', 'O+', 'B-', 'B+'],
  'AB-': ['O-', 'A-', 'B-', 'AB-'],
  'AB+': ['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'],
};

export const RARE = ['O-', 'AB-'];
export const GROUPS = ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'];
