import { Smartphone } from 'lucide-react';

export default function UIPreviewSection() {
  return (
    <section className="py-8 md:py-12">
      <div className="text-center space-y-3 mb-8 md:mb-10">
        <h3 className="text-lg md:text-2xl font-bold tracking-tight text-[var(--md-text-primary)] flex items-center justify-center gap-2">
          <Smartphone className="w-5 h-5 md:w-6 md:h-6 text-[var(--md-primary)]" />
          UI 预览展示
        </h3>
        <p className="text-xs md:text-sm text-[var(--md-text-muted)]">实际界面效果预览，提供沉浸式体验</p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="rounded-3xl overflow-hidden bg-[var(--md-surface-variant)]/50 dark:bg-white/5 border border-[var(--md-outline)]/20 dark:border-white/10 shadow-xl">
          <img 
            src="/images/features.png" 
            alt="FkWeChat Features" 
            className="w-full h-auto"
            loading="lazy"
            decoding="async"
            style={{ imageRendering: 'auto', willChange: 'auto' }}
          />
        </div>
      </div>
    </section>
  );
}
