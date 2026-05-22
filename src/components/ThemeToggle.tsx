/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sun, Moon } from 'lucide-react';
import { AppTheme } from '../types';

interface ThemeToggleProps {
  theme: AppTheme;
  onChange: (theme: AppTheme) => void;
}

export default function ThemeToggle({ theme, onChange }: ThemeToggleProps) {
  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    onChange(nextTheme);
  };

  return (
    <button
      id="theme-toggle-btn"
      onClick={toggleTheme}
      type="button"
      className="relative p-2 sm:p-2.5 rounded-xl border border-[var(--md-outline)]/20 dark:border-white/20 bg-[var(--md-surface-variant)]/40 dark:bg-white/5 backdrop-blur-md text-[var(--md-text-secondary)] dark:text-[var(--md-text-primary)] hover:text-[var(--md-primary)] dark:hover:text-[var(--md-primary)] transition-all hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer shadow-sm hover:shadow-md"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {theme === 'dark' ? (
          <Sun className="w-5 h-5 transition-transform duration-300 rotate-0 scale-100" />
        ) : (
          <Moon className="w-5 h-5 transition-transform duration-300 rotate-0 scale-100" />
        )}
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
