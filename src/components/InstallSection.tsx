import { Smartphone, CheckCircle2 } from 'lucide-react';

export default function InstallSection() {
  return (
    <div className="space-y-6 animate-fade-in text-sans">
      <div className="p-5 sm:p-6 bg-[var(--md-card-bg)]/60 dark:bg-[var(--md-card-bg)] border border-[var(--md-outline)]/20 dark:border-white/10 rounded-3xl relative overflow-hidden">
        <h3 className="text-lg sm:text-xl font-bold text-[var(--md-text-primary)] flex items-center gap-2 mb-2">
          <Smartphone className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[var(--md-primary)] shrink-0" />
          激活模块指引
        </h3>
        <p className="text-xs sm:text-sm text-[var(--md-text-secondary)] leading-relaxed max-w-4xl">
          若要在设备上成功激活并享受 FkWeChat 带来的多级功能，您的手机操作系统底层必须先打好 Xposed 基座环境。遵循以下严谨实用的步骤来安全加载它。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-xs sm:text-sm text-[var(--md-text-secondary)]">
        {[
          { stage: 'Stage 01', title: '基底 root 与框架准备', desc: '您的设备须刷Magisk、KSU 或 APatch，并安装并调起最新的 lsposed 框架管理器桌面应用。' },
          { stage: 'Stage 02', title: '安装模块安装包 (APK)', desc: '从 Telegram 推荐群组中获取稳定版及预览版的 me.yun.fkwechat 软件包并正常下载安装。' },
          { stage: 'Stage 03', title: '配置微信物理作用域', desc: '打开 LSPosed 系统，找到处于禁用状态的本模块，将其开启，并在勾选列表中手动勾选【微信】。' },
          { stage: 'Stage 04', title: '杀掉进程并重启生效', desc: '在手机系统应用管理内将微信执行强制停止，以便系统内存池卸载旧类，再次重新点入微信即可。' }
        ].map((item, index) => (
          <div key={index} className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-[var(--md-outline)]/20 dark:border-white/10 bg-[var(--md-card-bg)]/40 dark:bg-[var(--md-card-bg)] backdrop-blur-md space-y-3 shadow-sm hover:border-[var(--md-primary)]/50 transition-colors">
            <span className="font-mono text-[var(--md-primary)] font-extrabold tracking-wider text-[11px] block select-none">
              {item.stage}
            </span>
            <h4 className="text-sm font-bold text-[var(--md-text-primary)] pb-2 border-b border-[var(--md-outline)]/20 dark:border-white/10">
              {item.title}
            </h4>
            <p className="text-xs text-[var(--md-text-secondary)] leading-relaxed pt-1.5">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="p-5 sm:p-6 bg-gradient-to-br from-[var(--md-primary-container)]/10 to-[var(--md-primary)]/5 rounded-3xl border border-[var(--md-outline)]/20 dark:border-white/10 space-y-4 select-none">
        <h4 className="text-sm font-bold text-[var(--md-text-primary)] flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-[var(--md-primary)]" />
          装载环境 checklist 自行核对
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            '已确认 Android 版本处于 Android 9 ~ Android 15 之间',
            '微信版本符合 8.0.50 ~ 8.0.72 (由于混淆特性，部分功能不适配过旧极低版本)',
            'LSPosed 管理端没有发生宿主闪退或驱动层被锁住的挂起异常',
            '遇到个别机型（如分身微信号）失效，这是模块特性不想解决，除非系统的分身。',
          ].map((tip, idx) => (
            <div key={idx} className="flex gap-2">
              <div className="w-5 h-5 rounded-full border-2 border-[var(--md-primary)] flex items-center justify-center shrink-0 mt-0.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[var(--md-primary)]" />
              </div>
              <p className="text-xs text-[var(--md-text-secondary)] leading-relaxed">{tip}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
