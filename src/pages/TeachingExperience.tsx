import React from 'react';
import { motion } from 'motion/react';
import { BookOpen } from 'lucide-react';

export default function TeachingExperience() {
  return (
    <div className="max-w-3xl animate-fade-in">
      <h1 className="text-2xl sm:text-3xl font-serif italic font-bold mb-8 text-stone-800 dark:text-stone-200">Teaching Experience</h1>
      
      <div className="space-y-10 text-sm">
        <section>
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-5 h-5 text-stone-600 dark:text-stone-400" />
            <h2 className="text-xl font-serif font-bold text-stone-800 dark:text-stone-200">Teaching Assistant</h2>
          </div>
          
          <ul className="space-y-8">
            <li className="flex flex-col border-l-2 border-stone-200 dark:border-stone-800 pl-5 py-1">
              <span className="text-stone-900 dark:text-stone-100 font-medium text-base mb-1">Data Structures and Algorithms</span>
              <span className="text-stone-500 dark:text-stone-400 text-xs uppercase tracking-wider mb-2">Hakim Sabzevari University &bull; Spring 2025</span>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                Teaching Assistant under the supervision of Dr. Peyman Neamatollahi.
              </p>
            </li>

            <li className="flex flex-col border-l-2 border-stone-200 dark:border-stone-800 pl-5 py-1">
              <span className="text-stone-900 dark:text-stone-100 font-medium text-base mb-1">Discrete Mathematics</span>
              <span className="text-stone-500 dark:text-stone-400 text-xs uppercase tracking-wider mb-2">Hakim Sabzevari University &bull; Spring 2025</span>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                Teaching Assistant under the supervision of Dr. Hoda Taheri.
              </p>
            </li>

            <li className="flex flex-col border-l-2 border-stone-200 dark:border-stone-800 pl-5 py-1">
              <span className="text-stone-900 dark:text-stone-100 font-medium text-base mb-1">Computer Fundamentals and Programming</span>
              <span className="text-stone-500 dark:text-stone-400 text-xs uppercase tracking-wider mb-2">Hakim Sabzevari University &bull; Fall 2024</span>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                Teaching Assistant under the supervision of Dr. Hoda Taheri.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
