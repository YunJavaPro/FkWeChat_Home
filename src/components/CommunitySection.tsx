import { MessageSquare, Send, Github } from 'lucide-react';

export default function CommunitySection() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="p-5 sm:p-6 bg-[var(--md-card-bg)]/60 dark:bg-[var(--md-card-bg)] border border-[var(--md-outline)]/20 dark:border-white/10 rounded-3xl relative overflow-hidden">
        <h3 className="text-lg sm:text-xl font-bold text-[var(--md-text-primary)] flex items-center gap-2 mb-4">
          <MessageSquare className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[var(--md-primary)] shrink-0" />
          加入社区 & 获取帮助
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href="https://t.me/FkWeChat"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-[var(--md-surface-variant)]/40 dark:bg-white/5 border border-[var(--md-outline)]/20 dark:border-white/10 rounded-2xl flex items-center gap-3 hover:border-[var(--md-primary)]/50 transition-all"
          >
            <div className="w-10 h-10 rounded-full bg-[var(--md-primary-container)] flex items-center justify-center">
              <Send className="w-5 h-5 text-[var(--md-primary)]" />
            </div>
            <div>
              <div className="font-medium text-sm text-[var(--md-text-primary)]">Telegram 频道</div>
              <div className="text-xs text-[var(--md-text-muted)]">获取最新更新和通知</div>
            </div>
          </a>

          <a
            href="https://github.com/Xposed-Modules-Repo/me.yun.fkwechat"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-[var(--md-surface-variant)]/40 dark:bg-white/5 border border-[var(--md-outline)]/20 dark:border-white/10 rounded-2xl flex items-center gap-3 hover:border-[var(--md-primary)]/50 transition-all"
          >
            <div className="w-10 h-10 rounded-full bg-[var(--md-primary-container)] flex items-center justify-center">
              <Github className="w-5 h-5 text-[var(--md-primary)]" />
            </div>
            <div>
              <div className="font-medium text-sm text-[var(--md-text-primary)]">GitHub 仓库</div>
              <div className="text-xs text-[var(--md-text-muted)]">查看仓库文件和提交 issues</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
