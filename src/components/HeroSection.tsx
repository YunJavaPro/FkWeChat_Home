import { Sparkles, Download, MessageSquare } from 'lucide-react';

interface HeroSectionProps {
  typingText: string;
}

export default function HeroSection({ typingText }: HeroSectionProps) {
  return (
    <section className="text-center max-w-4xl mx-auto space-y-6">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-[var(--md-primary-container)] text-[var(--md-on-primary-container)] text-xs sm:text-sm font-semibold select-none shadow-md">
        <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 animate-spin-slow" />
        <span>强大的微信插件系统 · 无限可能</span>
      </div>

      <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--md-text-primary)] leading-tight">
        {typingText}
        <span className="inline-block w-1 h-8 md:h-12 bg-[var(--md-primary)] ml-1 align-middle animate-pulse"></span>
      </h2>

      <p className="text-xs sm:text-sm md:text-base text-[var(--md-text-secondary)] max-w-2xl mx-auto leading-relaxed px-2">
        FkWeChat (微信 Xposed 增强模块) 是专为高级极客搭载的原生代理增强插件。
        支持<strong>无感抢红包</strong>、<strong>全局消息防撤回</strong>、<strong>头像强制圆度改造</strong>，全面摒弃冗长AI垃圾，给您最纯粹、高可靠的微信用武之地。
      </p>

      <div className="flex flex-wrap justify-center items-center gap-3 pt-3 px-4">
        <a
          href="https://github.com/Xposed-Modules-Repo/me.yun.fkwechat/releases"
          target="_blank"
          referrerPolicy="no-referrer"
          className="px-5 py-3 sm:px-6 sm:py-4 bg-[var(--md-primary)] text-white dark:text-zinc-950 font-bold rounded-2xl text-xs sm:text-sm flex items-center gap-2 transition-all hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-2xl cursor-pointer"
        >
          <Download className="w-5 h-5" />
          <span>下载最新版部署包 (XP APK)</span>
        </a>

        <a
          href="https://t.me/FkWeChat"
          target="_blank"
          referrerPolicy="no-referrer"
          className="px-5 py-3 sm:px-6 sm:py-4 bg-[var(--md-surface-variant)]/50 dark:bg-white/5 text-[var(--md-text-primary)] font-bold rounded-2xl text-xs sm:text-sm flex items-center gap-2 border border-[var(--md-outline)]/30 dark:border-white/10 transition-all hover:-translate-y-1 hover:scale-105 cursor-pointer backdrop-blur-sm"
        >
          <MessageSquare className="w-5 h-5 text-[var(--md-primary)]" />
          <span>进入 Telegram 官方频道</span>
        </a>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-3 pt-4 px-4">
        <a href="https://github.com/Xposed-Modules-Repo/me.yun.fkwechat" target="_blank" rel="noopener noreferrer">
          <img src="https://img.shields.io/github/stars/Xposed-Modules-Repo/me.yun.fkwechat" alt="GitHub Stars" className="h-6 sm:h-7" />
        </a>
        <a href="https://github.com/Xposed-Modules-Repo/me.yun.fkwechat/releases" target="_blank" rel="noopener noreferrer">
          <img src="https://img.shields.io/github/downloads/Xposed-Modules-Repo/me.yun.fkwechat/total" alt="GitHub Downloads" className="h-6 sm:h-7" />
        </a>
        <img src="https://img.shields.io/badge/Xposed-LSPosed-blue" alt="Xposed LSPosed" className="h-6 sm:h-7" />
        <a href="https://github.com/Xposed-Modules-Repo/me.yun.fkwechat/releases" target="_blank" rel="noopener noreferrer">
          <img src="https://img.shields.io/github/v/release/Xposed-Modules-Repo/me.yun.fkwechat" alt="GitHub Release" className="h-6 sm:h-7" />
        </a>
      </div>
    </section>
  );
}
