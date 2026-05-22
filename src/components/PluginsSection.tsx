import { Code2, FileText, ExternalLink, Terminal, Settings, Github } from 'lucide-react';

export default function PluginsSection() {
  return (
    <div className="space-y-6 text-sans">
      <div className="p-5 sm:p-6 bg-[var(--md-card-bg)]/60 dark:bg-[var(--md-card-bg)] border border-[var(--md-outline)]/20 dark:border-white/10 rounded-3xl relative overflow-hidden">
        <h3 className="text-lg sm:text-xl font-bold text-[var(--md-text-primary)] flex items-center gap-2 mb-2">
          <Code2 className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[var(--md-primary)] shrink-0" />
          插件框架
        </h3>
        <p className="text-xs sm:text-sm text-[var(--md-text-secondary)] leading-relaxed max-w-4xl">
          FkWeChat 是一款基于 Xposed 框架的微信增强模块，提供了丰富的插件系统，允许开发者使用 BeanShell 脚本扩展微信功能。
        </p>
      </div>

      <a
        href="https://decs.yunpro.club"
        target="_blank"
        referrerPolicy="no-referrer"
        className="p-5 sm:p-6 bg-[var(--md-card-bg)]/40 dark:bg-[var(--md-card-bg)] rounded-2xl sm:rounded-3xl border border-[var(--md-outline)]/20 dark:border-white/10 hover:border-[var(--md-primary)]/50 transition-all cursor-pointer flex flex-col"
      >
        <div className="space-y-3">
          <h4 className="font-bold text-sm text-[var(--md-text-primary)] flex items-center gap-2">
            <FileText className="w-4 h-4 text-[var(--md-primary)]" />
            脚本文档中心
          </h4>
          <p className="text-[11px] sm:text-xs text-[var(--md-text-secondary)]">
            完整的 BeanShell 插件开发文档，API 参考和示例代码。
          </p>
          <div className="text-[10px] font-mono text-[var(--md-primary)] bg-[var(--md-primary-container)]/30 px-3 py-1.5 rounded-full inline-block">
            decs.yunpro.club
          </div>
        </div>
        <div className="mt-4 text-[11px] sm:text-xs text-[var(--md-primary)] font-bold flex items-center gap-0.5">
          查看文档 <ExternalLink className="w-3.5 h-3.5" />
        </div>
      </a>

      <div className="p-5 sm:p-6 bg-[var(--md-card-bg)]/60 dark:bg-[var(--md-card-bg)] border border-[var(--md-outline)]/20 dark:border-white/10 rounded-3xl">
        <h4 className="text-sm font-bold text-[var(--md-text-primary)] mb-4 flex items-center gap-2">
          <Settings className="w-4 h-4 text-[var(--md-primary)]" />
          创建插件
        </h4>

        <div className="space-y-4">
          <div className="text-xs text-[var(--md-text-secondary)]">
            在以下目录创建插件文件夹：
          </div>
          <div className="bg-zinc-900 rounded-xl p-3 font-mono text-[11px] text-emerald-300 overflow-x-auto">
            /storage/emulated/0/Android/media/com.tencent.mm/FkWeChat/Plugin/
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="text-xs text-[var(--md-text-muted)] mb-2">info.prop 示例</div>
              <div className="bg-zinc-900 rounded-xl p-3 font-mono text-[11px] overflow-x-auto">
                <div className="text-amber-300">name=我的插件</div>
                <div className="text-amber-300">author=开发者</div>
                <div className="text-amber-300">version=1.0.0</div>
                <div className="text-amber-300">desc=插件描述</div>
              </div>
            </div>

            <div>
              <div className="text-xs text-[var(--md-text-muted)] mb-2">main.java 示例</div>
              <div className="bg-zinc-900 rounded-xl p-3 font-mono text-[11px] overflow-x-auto">
                <div className="text-slate-400">void onLoad() {"{"}</div>
                <div className="pl-4 text-cyan-300">log("插件已加载");</div>
                <div className="pl-4 text-cyan-300">toast("欢迎使用！");</div>
                <div className="text-slate-400">{"}"}</div>
                <div className="h-2"></div>
                <div className="text-slate-400">void onMsg(Object msg) {"{"}</div>
                <div className="pl-4 text-yellow-300">if (msg.isText() &amp;&amp; !msg.isSend()) {"{"}</div>
                <div className="pl-8 text-pink-300">sendText(msg.talker, "收到消息: " + msg.content);</div>
                <div className="pl-4 text-yellow-300">{"}"}</div>
                <div className="text-slate-400">{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="https://down.yunpro.club"
        target="_blank"
        referrerPolicy="no-referrer"
        className="p-5 sm:p-6 bg-[var(--md-card-bg)]/40 dark:bg-[var(--md-card-bg)] rounded-2xl sm:rounded-3xl border border-[var(--md-outline)]/20 dark:border-white/10 hover:border-[var(--md-primary)]/50 transition-all cursor-pointer flex flex-col"
      >
        <div className="space-y-3">
          <h4 className="font-bold text-sm text-[var(--md-text-primary)] flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[var(--md-primary)]" />
            插件仓库
          </h4>
          <p className="text-[11px] sm:text-xs text-[var(--md-text-secondary)]">
            官方插件下载中心，提供精选优质插件和自动更新服务。
          </p>
          <div className="text-[10px] font-mono text-[var(--md-primary)] bg-[var(--md-primary-container)]/30 px-3 py-1.5 rounded-full inline-block">
            down.yunpro.club
          </div>
        </div>
        <div className="mt-4 text-[11px] sm:text-xs text-[var(--md-primary)] font-bold flex items-center gap-0.5">
          浏览插件 <ExternalLink className="w-3.5 h-3.5" />
        </div>
      </a>

      <div className="p-5 sm:p-6 bg-[var(--md-card-bg)]/60 dark:bg-[var(--md-card-bg)] rounded-3xl border border-[var(--md-outline)]/20 dark:border-white/10 space-y-4">
        <h4 className="text-sm font-bold text-[var(--md-text-primary)] flex items-center gap-1.5">
          <Github className="w-4 h-4 text-[var(--md-primary)]" />
          贡献插件
        </h4>

        <div className="text-xs text-[var(--md-text-secondary)] leading-relaxed">
          想要贡献你的插件？请按照以下步骤：
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          {[
            { step: '1', title: 'Fork 仓库', desc: '访问 GitHub 仓库并 Fork 到你的账户下' },
            { step: '2', title: '创建插件', desc: '在 main/plugins/ 目录下创建插件文件夹和核心文件' },
            { step: '3', title: '提交 PR', desc: '提交 Pull Request 等待审核合并' }
          ].map((item, idx) => (
            <div key={idx} className="p-3 bg-[var(--md-surface-variant)]/30 dark:bg-white/5 rounded-xl border border-[var(--md-outline)]/15 dark:border-white/10">
              <div className="font-mono text-[var(--md-primary)] font-bold text-sm mb-1">Step {item.step}</div>
              <div className="font-bold text-[var(--md-text-primary)] mb-1">{item.title}</div>
              <div className="text-[var(--md-text-muted)]">{item.desc}</div>
            </div>
          ))}
        </div>

        <a
          href="https://github.com/YunJavaPro/FkWeChat_Plugin"
          target="_blank"
          referrerPolicy="no-referrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--md-primary)] text-white dark:text-zinc-950 rounded-full text-xs font-bold hover:opacity-90 transition-opacity"
        >
          <Github className="w-4 h-4" />
          访问插件仓库
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
