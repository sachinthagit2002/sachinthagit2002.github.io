export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  status: 'In Progress' | 'Completed';
  highlights: string[];
  note?: string;
}

export const EDUCATION: EducationItem[] = [
  {
    id: 'bsc-ds',
    degree: 'BSc (Hons) Data Science (Top-Up Degree)',
    institution: 'London Metropolitan University',
    period: 'In Progress',
    status: 'In Progress',
    highlights: [
      'Final-Year Project (CS6P05ES): Auto Valuate — AI-Powered Used Car Price Prediction System for the Sri Lankan Market.',
      'Data & Web Development: Community Sports Facilities Booking System with relational database design, analytical SQL queries, and payment integration.',
      'Core focus areas: Data analytics, machine learning pipelines, data preprocessing, predictive modeling, and explainable AI (SHAP).',
    ],
    note: 'Local partner institute name and expected graduation date can be added once confirmed.',
  },
  {
    id: 'hd-cse',
    degree: 'Higher Diploma in Computing and Software Engineering',
    institution: 'Cardiff Metropolitan University',
    period: '2023 – 2025',
    status: 'Completed',
    highlights: [
      'Awarded at the end-of-year 2025 ceremony upon completion of the 2023–2025 programme.',
      'Built strong foundations in software engineering, relational databases (SQL/MySQL/SQL Server), object-oriented programming, web engineering, and mobile development.',
      'Completed academic software projects including PetWell360 (PHP/MySQL), City Cycle (Android/Java/Firebase), and Cozy Comfort (.NET/SQL Server).',
    ],
  },
];
