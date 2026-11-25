import React from 'react';
import { Project } from '../data/projects';

interface ProjectVisualProps {
  type: Project['visualType'];
}

export const ProjectVisual: React.FC<ProjectVisualProps> = ({ type }) => {
  if (type === 'mvc-booking') {
    return (
      <div className="flex h-44 w-full items-center justify-center rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
        <svg viewBox="0 0 320 130" className="h-full w-full max-w-[300px]" aria-hidden="true">
          <rect x="8" y="14" width="84" height="36" rx="8" className="fill-white stroke-slate-300 dark:fill-slate-900 dark:stroke-slate-700" strokeWidth="1.5" />
          <text x="50" y="30" textAnchor="middle" className="fill-slate-700 text-[9px] font-semibold dark:fill-slate-200">Member / Staff</text>
          <text x="50" y="42" textAnchor="middle" className="fill-slate-400 text-[8px]">Identity Auth</text>

          <path d="M92 32 H118" className="stroke-teal-500" strokeWidth="1.8" strokeDasharray="3 2" />

          <rect x="118" y="10" width="90" height="44" rx="8" className="fill-teal-50 stroke-teal-500 dark:fill-teal-950/60 dark:stroke-teal-500" strokeWidth="1.5" />
          <text x="163" y="29" textAnchor="middle" className="fill-teal-800 text-[9px] font-bold dark:fill-teal-300">Booking Engine</text>
          <text x="163" y="42" textAnchor="middle" className="fill-teal-700 text-[8px] dark:fill-teal-400">Slot Conflict Check</text>

          <path d="M208 32 H232" className="stroke-teal-500" strokeWidth="1.8" strokeDasharray="3 2" />

          <rect x="232" y="14" width="80" height="36" rx="8" className="fill-white stroke-slate-300 dark:fill-slate-900 dark:stroke-slate-700" strokeWidth="1.5" />
          <text x="272" y="30" textAnchor="middle" className="fill-slate-700 text-[9px] font-semibold dark:fill-slate-200">Stripe Sandbox</text>
          <text x="272" y="42" textAnchor="middle" className="fill-slate-400 text-[8px]">LKR / USD Receipt</text>

          <rect x="36" y="76" width="248" height="40" rx="8" className="fill-white stroke-slate-300 dark:fill-slate-900 dark:stroke-slate-700" strokeWidth="1.5" />
          <text x="160" y="93" textAnchor="middle" className="fill-slate-800 text-[9px] font-bold dark:fill-slate-100">SQL Server · EF Core 8 (8 Entities · 17 xUnit Tests)</text>
          <text x="160" y="106" textAnchor="middle" className="fill-slate-400 text-[8px]">Facilities · Bookings · Payments · Reviews · Inquiries</text>
          <path d="M163 54 V76" className="stroke-slate-400" strokeWidth="1.5" />
        </svg>
      </div>
    );
  }

  if (type === 'pet-web') {
    return (
      <div className="flex h-44 w-full items-center justify-center rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
        <svg viewBox="0 0 320 130" className="h-full w-full max-w-[300px]" aria-hidden="true">
          <rect x="14" y="12" width="136" height="44" rx="8" className="fill-white stroke-slate-300 dark:fill-slate-900 dark:stroke-slate-700" strokeWidth="1.5" />
          <text x="82" y="31" textAnchor="middle" className="fill-slate-800 text-[9px] font-bold dark:fill-slate-100">Vet Appointments</text>
          <text x="82" y="44" textAnchor="middle" className="fill-slate-400 text-[8px]">Booked Slot Validation</text>

          <rect x="170" y="12" width="136" height="44" rx="8" className="fill-teal-50 stroke-teal-500 dark:fill-teal-950/60 dark:stroke-teal-500" strokeWidth="1.5" />
          <text x="238" y="31" textAnchor="middle" className="fill-teal-800 text-[9px] font-bold dark:fill-teal-300">Lost Pet Map</text>
          <text x="238" y="44" textAnchor="middle" className="fill-teal-700 text-[8px] dark:fill-teal-400">Leaflet.js Coordinates</text>

          <rect x="14" y="74" width="136" height="44" rx="8" className="fill-white stroke-slate-300 dark:fill-slate-900 dark:stroke-slate-700" strokeWidth="1.5" />
          <text x="82" y="93" textAnchor="middle" className="fill-slate-800 text-[9px] font-bold dark:fill-slate-100">Dealership &amp; Shop</text>
          <text x="82" y="106" textAnchor="middle" className="fill-slate-400 text-[8px]">Ad Approval &amp; Checkout</text>

          <rect x="170" y="74" width="136" height="44" rx="8" className="fill-white stroke-slate-300 dark:fill-slate-900 dark:stroke-slate-700" strokeWidth="1.5" />
          <text x="238" y="93" textAnchor="middle" className="fill-slate-800 text-[9px] font-bold dark:fill-slate-100">MySQL (petwell360)</text>
          <text x="238" y="106" textAnchor="middle" className="fill-slate-400 text-[8px]">8 Relational Tables · PHP 8</text>
        </svg>
      </div>
    );
  }

  if (type === 'microservices') {
    return (
      <div className="flex h-44 w-full items-center justify-center rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
        <svg viewBox="0 0 320 130" className="h-full w-full max-w-[300px]" aria-hidden="true">
          <rect x="64" y="10" width="192" height="30" rx="7" className="fill-teal-50 stroke-teal-500 dark:fill-teal-950/60 dark:stroke-teal-500" strokeWidth="1.5" />
          <text x="160" y="29" textAnchor="middle" className="fill-teal-800 text-[9px] font-bold dark:fill-teal-300">CozyComfort.BlazorApp (.NET 9)</text>

          <path d="M100 40 L56 62 M160 40 V62 M220 40 L264 62" className="stroke-slate-400" strokeWidth="1.4" />

          <rect x="10" y="62" width="92" height="54" rx="8" className="fill-white stroke-slate-300 dark:fill-slate-900 dark:stroke-slate-700" strokeWidth="1.5" />
          <text x="56" y="82" textAnchor="middle" className="fill-slate-800 text-[8.5px] font-bold dark:fill-slate-100">Manufacturer</text>
          <text x="56" y="95" textAnchor="middle" className="fill-slate-400 text-[7.5px]">API + SQL DB</text>
          <text x="56" y="107" textAnchor="middle" className="fill-teal-600 text-[7px] dark:fill-teal-400">Production &amp; Stock</text>

          <rect x="114" y="62" width="92" height="54" rx="8" className="fill-white stroke-slate-300 dark:fill-slate-900 dark:stroke-slate-700" strokeWidth="1.5" />
          <text x="160" y="82" textAnchor="middle" className="fill-slate-800 text-[8.5px] font-bold dark:fill-slate-100">Distributor</text>
          <text x="160" y="95" textAnchor="middle" className="fill-slate-400 text-[7.5px]">API + SQL DB</text>
          <text x="160" y="107" textAnchor="middle" className="fill-teal-600 text-[7px] dark:fill-teal-400">Reorder Automation</text>

          <rect x="218" y="62" width="92" height="54" rx="8" className="fill-white stroke-slate-300 dark:fill-slate-900 dark:stroke-slate-700" strokeWidth="1.5" />
          <text x="264" y="82" textAnchor="middle" className="fill-slate-800 text-[8.5px] font-bold dark:fill-slate-100">Seller</text>
          <text x="264" y="95" textAnchor="middle" className="fill-slate-400 text-[7.5px]">API + SQL DB</text>
          <text x="264" y="107" textAnchor="middle" className="fill-teal-600 text-[7px] dark:fill-teal-400">Customer Orders</text>
        </svg>
      </div>
    );
  }

  return (
    <div className="flex h-44 w-full items-center justify-center rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
      <svg viewBox="0 0 320 130" className="h-full w-full max-w-[300px]" aria-hidden="true">
        <rect x="30" y="14" width="96" height="102" rx="14" className="fill-white stroke-slate-300 dark:fill-slate-900 dark:stroke-slate-700" strokeWidth="2" />
        <rect x="40" y="28" width="76" height="72" rx="6" className="fill-teal-50 stroke-teal-200 dark:fill-teal-950/50 dark:stroke-teal-800" strokeWidth="1" />
        <text x="78" y="58" textAnchor="middle" className="fill-teal-800 text-[9.5px] font-bold dark:fill-teal-300">CityCycle</text>
        <text x="78" y="72" textAnchor="middle" className="fill-teal-700 text-[7.5px] dark:fill-teal-400">AndroidX · Java</text>

        <path d="M126 65 H182" className="stroke-teal-500" strokeWidth="1.8" strokeDasharray="3 2" />

        <rect x="182" y="24" width="110" height="82" rx="10" className="fill-white stroke-slate-300 dark:fill-slate-900 dark:stroke-slate-700" strokeWidth="1.5" />
        <text x="237" y="48" textAnchor="middle" className="fill-slate-800 text-[9px] font-bold dark:fill-slate-100">Gradle Kotlin DSL</text>
        <text x="237" y="64" textAnchor="middle" className="fill-slate-500 text-[8px] dark:fill-slate-400">Android Studio Project</text>
        <text x="237" y="80" textAnchor="middle" className="fill-teal-600 text-[8px] font-semibold dark:fill-teal-400">Firebase Backend</text>
      </svg>
    </div>
  );
};
