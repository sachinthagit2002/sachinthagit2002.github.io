export interface JourneyItem {
  period: string;
  title: string;
  context: string;
  description: string;
  tags: string[];
  highlight?: boolean;
}

export const JOURNEY_TIMELINE: JourneyItem[] = [
  {
    period: '2026 (In Progress)',
    title: 'Final-Year Data Science Project & SQL Upskilling',
    context: 'BSc (Hons) Data Science · London Metropolitan University',
    description:
      'Engineered Auto Valuate (web scraping, IQR outlier cleaning, multi-model ML benchmarking with CatBoost/XGBoost/SHAP, and RAG verification) while completing LinkedIn Learning SQL & MySQL data analysis certifications.',
    tags: ['Python', 'CatBoost', 'SHAP', 'SQL', 'MySQL'],
    highlight: true,
  },
  {
    period: '2026',
    title: 'Data & Web Development Engineering',
    context: 'Academic Coursework · Community Sports Facilities Booking System',
    description:
      'Built an ASP.NET Core 8.0 MVC & SQL Server application featuring normalized 8-table schema design, analytical SQL queries, Stripe Sandbox payments, and 17 xUnit tests.',
    tags: ['ASP.NET Core 8', 'EF Core', 'SQL Server', 'xUnit'],
  },
  {
    period: '2025',
    title: 'Software Engineering Capstone & Full-Stack Systems',
    context: 'Higher Diploma Completion · Cardiff Metropolitan University',
    description:
      'Completed Higher Diploma in Computing and Software Engineering (2023–2025) and delivered PetWell360 (PHP/MySQL), Cozy Comfort (.NET 9/SQL Server supply-chain architecture), and City Cycle (Android/Java).',
    tags: ['PHP', 'MySQL', '.NET', 'Java', 'Software Engineering'],
  },
  {
    period: '2024',
    title: 'English Communication & Core Computing Foundations',
    context: 'The Language Key & Higher Diploma Year 1–2',
    description:
      'Completed The Language Key English Course while building programming fundamentals in C++, C#, JavaScript, HTML/CSS, and relational database modeling.',
    tags: ['Communication', 'C#', 'C++', 'Databases'],
  },
];
