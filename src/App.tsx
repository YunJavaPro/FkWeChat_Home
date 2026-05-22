/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Sparkles, Github, Palette } from 'lucide-react';

import { AppTheme, WeChatFeature } from './types';
import ThemeToggle from './components/ThemeToggle';
import Logo from './components/Logo';
import HeroSection from './components/HeroSection';
import UIPreviewSection from './components/UIPreviewSection';
import FeaturesSection from './components/FeaturesSection';
import PluginsSection from './components/PluginsSection';
import InstallSection from './components/InstallSection';
import FaqSection from './components/FaqSection';
import CommunitySection from './components/CommunitySection';
import Footer from './components/Footer';
import { UTILITIES_LIST, UI_CUSTOMS_LIST, EXT_LIST } from './features';

// Dynamic thematic options representing Material Design 3's Dynamic Color (Material You)
type MD3Accent = 'green' | 'purple' | 'blue';

export default function App() {
  const [theme, setTheme] = useState<AppTheme>('dark');
  const [accent, setAccent] = useState<MD3Accent>('green');
  const [activeTab, setActiveTab] = useState<'features' | 'plugins' | 'install' | 'faq' | 'community'>('features');
  const [activeFeatureCat, setActiveFeatureCat] = useState<'utils' | 'ui' | 'ext'>('utils');
  const [selectedFeature, setSelectedFeature] = useState<WeChatFeature>(UTILITIES_LIST[0]);
  const [faqIndex, setFaqIndex] = useState<number | null>(0);
  const [scrolled, setScrolled] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = '探索微信的深层极智拓展';

  // Typing effect - cyclic
  useEffect(() => {
    if (!isDeleting && typingIndex < fullText.length) {
      // Typing phase
      const timer = setTimeout(() => {
        setTypingText(fullText.slice(0, typingIndex + 1));
        setTypingIndex(typingIndex + 1);
      }, 100);
      return () => clearTimeout(timer);
    } else if (!isDeleting && typingIndex === fullText.length) {
      // Pause at end before deleting
      const timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(timer);
    } else if (isDeleting && typingIndex > 0) {
      // Deleting phase
      const timer = setTimeout(() => {
        setTypingText(fullText.slice(0, typingIndex - 1));
        setTypingIndex(typingIndex - 1);
      }, 50);
      return () => clearTimeout(timer);
    } else if (isDeleting && typingIndex === 0) {
      // Pause before starting again
      const timer = setTimeout(() => {
        setIsDeleting(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [typingIndex, isDeleting, fullText]);

  // Scroll handler for sticky navigation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Synchronize dynamic dark/light and Material theme attributes on document root
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as AppTheme;
    const initialTheme = savedTheme || 'dark';
    setTheme(initialTheme);
    applyThemeToDocument(initialTheme, accent);
  }, [accent]);

  const applyThemeToDocument = (currentTheme: AppTheme, currentAccent: MD3Accent) => {
    const root = document.documentElement;
    
    // Toggle dark class
    if (currentTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Set MD3 Accent color token attribute
    root.setAttribute('data-md-theme', currentAccent);
  };

  const handleThemeToggle = (newTheme: AppTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyThemeToDocument(newTheme, accent);
  };

  return (
    <div className="min-h-screen bg-[var(--md-background)] text-[var(--md-text-primary)] font-sans relative overflow-x-hidden antialiased">
      
      {/* Dreamy Fluid Flow Ambient Glows (Inspired by Material You Tonal Backdrops) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-[50%] -left-[30%] w-[100vw] h-[100vw] rounded-full bg-[var(--md-primary)]/20 dark:bg-[var(--md-primary)]/15 blur-[150px] animate-fluid-glow" />
        <div className="absolute -bottom-[40%] -right-[20%] w-[80vw] h-[80vw] rounded-full bg-[var(--md-primary)]/15 blur-[120px] animate-fluid-glow-secondary" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] rounded-full bg-[var(--md-primary)]/10 blur-[180px] animate-fluid-glow-tertiary" />
        <div className="absolute top-[20%] right-[20%] w-[50vw] h-[50vw] rounded-full bg-[var(--md-primary)]/12 blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-[30%] left-[15%] w-[40vw] h-[40vw] rounded-full bg-[var(--md-primary)]/10 blur-[80px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Fixed Top App Bar with improved styling */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 border-b border-transparent dark:border-white/5 bg-[var(--md-header-bg)] backdrop-blur-xl shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
          
          {/* Logo and Brand */}
          <div className="flex items-center gap-2.5 sm:gap-3 flex-none">
            <div className="flex-shrink-0">
              <Logo className="w-9 h-9" />
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-base sm:text-lg font-bold tracking-tight text-[var(--md-text-primary)]">
                FkWeChat <span className="hidden xs:inline">Hub</span>
              </span>
              <span className="hidden sm:inline-block text-[9px] sm:text-[10px] font-mono bg-[var(--md-primary-container)] text-[var(--md-on-primary-container)] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full font-bold select-none">
                v1.2
              </span>
            </div>
          </div>

          {/* Desktop Navigation Pills */}
          <div className="hidden lg:flex items-center gap-1.5 p-1.5 bg-[var(--md-surface-variant)]/50 dark:bg-white/5 rounded-full border border-[var(--md-outline)]/20 dark:border-white/10 backdrop-blur-sm">
            {[
              { id: 'features', label: '功能特性' },
              { id: 'plugins', label: '脚本插件' },
              { id: 'install', label: '如何激活' },
              { id: 'faq', label: '疑难解答' },
              { id: 'community', label: '反馈日常' },
            ].map(tab => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium rounded-full transition-all active:scale-95 cursor-pointer ${
                    active 
                      ? 'bg-[var(--md-primary-container)] text-[var(--md-on-primary-container)] shadow-sm font-semibold'
                      : 'text-[var(--md-text-secondary)] hover:text-[var(--md-text-primary)] hover:bg-[var(--md-surface-variant)]/30'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3">
            
            {/* Dynamic Accent Color Switcher */}
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 bg-[var(--md-surface-variant)]/40 dark:bg-white/5 rounded-full border border-[var(--md-outline)]/20 dark:border-white/10 backdrop-blur-sm">
              <Palette className="w-3.5 h-3.5 text-[var(--md-text-muted)] shrink-0" />
              {[
                { id: 'green', color: 'bg-emerald-500', title: '动态绿/Mint' },
                { id: 'purple', color: 'bg-indigo-500', title: '魅力紫/Violet' },
                { id: 'blue', color: 'bg-sky-500', title: '深邃蓝/Cobalt' }
              ].map(opt => (
                <button
                  key={opt.id}
                  title={opt.title}
                  onClick={() => setAccent(opt.id as MD3Accent)}
                  className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full transition-all cursor-pointer hover:scale-125 focus:outline-none ${opt.color} ${
                    accent === opt.id ? 'ring-2 ring-offset-2 ring-[var(--md-primary)] dark:ring-white/50 scale-110' : 'opacity-70 hover:opacity-100'
                  }`}
                />
              ))}
            </div>

            <ThemeToggle theme={theme} onChange={handleThemeToggle} />

            <a
              href="https://github.com/Xposed-Modules-Repo/me.yun.fkwechat"
              target="_blank"
              referrerPolicy="no-referrer"
              className="hidden sm:flex p-2 sm:p-2.5 text-[var(--md-text-secondary)] hover:text-[var(--md-primary)] hover:bg-[var(--md-primary-container)]/20 dark:hover:bg-[var(--md-primary-container)]/20 rounded-xl transition-all duration-300 border border-[var(--md-outline)]/20 dark:border-white/10 items-center justify-center"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-14 sm:h-16" />

      {/* Main Container Workspace */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 relative z-10 space-y-12">
        
        {/* Dynamic product Hero Section */}
        <HeroSection typingText={typingText} />

        {/* UI Preview Section */}
        <UIPreviewSection />

        {/* Navigation Selector for Mobile Terminal viewboards */}
        <section className="lg:hidden flex justify-center pb-1 border-b border-[var(--md-outline)]/20 dark:border-white/10 select-none">
          <div className="grid grid-cols-5 w-full gap-1 p-1 bg-[var(--md-surface-variant)]/40 dark:bg-white/5 rounded-full border border-[var(--md-outline)]/20 dark:border-white/10 backdrop-blur-sm">
            {[
              { id: 'features', label: '功能特性' },
              { id: 'plugins', label: '脚本插件' },
              { id: 'install', label: '如何激活' },
              { id: 'faq', label: '疑难解答' },
              { id: 'community', label: '反馈日常' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-2 text-[10px] sm:text-[11px] font-medium rounded-full transition-all text-center cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[var(--md-primary-container)] text-[var(--md-on-primary-container)] shadow-sm font-semibold'
                    : 'text-[var(--md-text-secondary)] hover:text-[var(--md-text-primary)]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </section>

        {/* Modular workspace views with dynamic tab-switching */}
        <div className="transition-all duration-300">
          
          {/* TAB 1: FEATURES LIST */}
          {activeTab === 'features' && (
            <FeaturesSection
              activeFeatureCat={activeFeatureCat}
              setActiveFeatureCat={setActiveFeatureCat}
              selectedFeature={selectedFeature}
              setSelectedFeature={setSelectedFeature}
              setActiveTab={setActiveTab}
            />
          )}

          {/* TAB 2: PLUGINS SYSTEM */}
          {activeTab === 'plugins' && <PluginsSection />}

          {/* TAB 3: INSTALLATION MANUAL */}
          {activeTab === 'install' && <InstallSection />}

          {/* TAB 4: FAQ */}
          {activeTab === 'faq' && <FaqSection faqIndex={faqIndex} setFaqIndex={setFaqIndex} />}

          {/* TAB 5: COMMUNITY */}
          {activeTab === 'community' && <CommunitySection />}
        </div>
      </main>

      <Footer />
    </div>
  );
}
