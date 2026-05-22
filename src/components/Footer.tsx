import { Github, Heart, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-16 pt-10 pb-8 border-t border-[var(--md-outline)]/20 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Xposed-Modules-Repo/me.yun.fkwechat"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-[var(--md-outline)]/20 dark:border-white/10 hover:bg-[var(--md-surface-variant)]/30 dark:hover:bg-white/5 transition-all"
              title="GitHub"
            >
              <Github className="w-5 h-5 text-[var(--md-text-primary)]" />
            </a>

            <a
              href="https://t.me/FkWeChat"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-[var(--md-outline)]/20 dark:border-white/10 hover:bg-[var(--md-surface-variant)]/30 dark:hover:bg-white/5 transition-all"
              title="Telegram"
            >
              <Send className="w-5 h-5 text-[var(--md-text-primary)]" />
            </a>

            <a
              href="https://t.me/FkWeChat/78"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-[var(--md-outline)]/20 dark:border-white/10 hover:bg-[var(--md-surface-variant)]/30 dark:hover:bg-white/5 transition-all"
              title="赞赏"
            >
              <Heart className="w-5 h-5 text-[var(--md-text-primary)]" />
            </a>
          </div>

          <div className="text-center">
            <div className="text-sm font-medium text-[var(--md-text-primary)] mb-1">
              by 雲上升 · 无限上升
            </div>
            <div className="text-xs text-[var(--md-text-muted)]">
              © 2026 FkWeChat · WeChat Xposed Module
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
