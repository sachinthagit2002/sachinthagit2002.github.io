export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: 'Data & SQL' | 'Communication' | 'Data Science';
  skills: string[];
  credentialId?: string;
  description: string;
}

/**
 * Add new certificates by appending an object to this array.
 */
export const CERTIFICATES: CertificateItem[] = [
  {
    id: 'li-understand-sql',
    title: 'Understand SQL: Explore the Power and Versatility of the SQL Database Language',
    issuer: 'LinkedIn Learning',
    date: 'Nov 2026',
    category: 'Data & SQL',
    skills: ['SQL'],
    credentialId: '1a6ea139c5babd2e69f7528d515edaa965575c2d010ce2800956166d5e4eeea3',
    description: 'Core relational querying concepts and SQL database fundamentals.',
  },
  {
    id: 'li-sql-data-analysis',
    title: 'SQL for Data Analysis',
    issuer: 'LinkedIn Learning',
    date: 'Nov 2026',
    category: 'Data & SQL',
    skills: ['Data Analysis', 'SQL'],
    credentialId: 'd76bd23df5abdb0561361111659b4196c949126008b346dd7a8a997481283446',
    description: 'Applying SQL aggregations, filtering, joins, and analytical patterns to answer business questions.',
  },
  {
    id: 'li-sql-intermediate',
    title: 'SQL Practice: Intermediate Queries',
    issuer: 'LinkedIn Learning',
    date: 'Nov 2026',
    category: 'Data & SQL',
    skills: ['Database Queries', 'SQL'],
    credentialId: '96ac2402f3e3f2794a78f0cef8edfae9b3e9d631b45056631588aa1e680b7396',
    description: 'Hands-on intermediate query writing, subqueries, and multi-table analysis.',
  },
  {
    id: 'li-mysql-hospital',
    title: 'Analyze Hospital Patient Encounters and Costs with MySQL (Guided Project)',
    issuer: 'LinkedIn Learning',
    date: 'Nov 2026',
    category: 'Data & SQL',
    skills: ['Data Analytics', 'MySQL', 'SQL'],
    credentialId: 'e32fe07c452ff1937a08ec14d122b09222955d1b3bc2ea58706499bce3a8c370',
    description: 'Practical healthcare encounter and cost analysis project executed in MySQL.',
  },
  {
    id: 'language-key-2024',
    title: 'The Language Key English Course',
    issuer: 'The Language Key',
    date: '2024',
    category: 'Communication',
    skills: ['Professional English', 'Communication'],
    description: 'Successfully completed English language training supporting academic writing and workplace communication.',
  },
];
