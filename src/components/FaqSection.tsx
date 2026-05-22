import { HelpCircle, ChevronDown } from 'lucide-react';

interface FaqSectionProps {
  faqIndex: number | null;
  setFaqIndex: (index: number | null) => void;
}

export default function FaqSection({ faqIndex, setFaqIndex }: FaqSectionProps) {
  const faqs = [
    { q: '为什么不把它上架到应用市场呢？', a: 'Xposed 模块本身不具备独立运行能力，它必须通过框架注入宿主 APP 才能工作。而且由于本工具的定位，它在大多数合规应用商店是会被直接拒绝的。' },
    { q: '安装之后没有作用怎么办？', a: '请确保你的手机已经成功 Root，并且正确配置了 LSPosed 环境。模块是否已经在 LSPosed 中启用，并且已经勾选了微信作为作用域。' },
    { q: '会导致微信封号吗？', a: '我们尽最大努力设计为低调、低风险，遵循现有的微信规则。但我们无法给出 100% 安全的承诺。使用本工具的风险由你自行承担。' },
    { q: '适配微信的哪个版本？', a: '目前支持微信 8.0.50 到 8.0.72 的版本。过低或过高的版本可能会有兼容性问题。请尽量保持在推荐版本区间。' },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="p-5 sm:p-6 bg-[var(--md-card-bg)]/60 dark:bg-[var(--md-card-bg)] border border-[var(--md-outline)]/20 dark:border-white/10 rounded-3xl relative overflow-hidden">
        <h3 className="text-lg sm:text-xl font-bold text-[var(--md-text-primary)] flex items-center gap-2 mb-4">
          <HelpCircle className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[var(--md-primary)] shrink-0" />
          常见问题 & 回答
        </h3>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`border border-[var(--md-outline)]/20 dark:border-white/10 rounded-2xl overflow-hidden transition-all ${
                faqIndex === idx ? 'bg-[var(--md-surface-variant)]/30 dark:bg-white/5' : 'bg-[var(--md-card-bg)]/40 dark:bg-[var(--md-card-bg)]'
              }`}
            >
              <button
                onClick={() => setFaqIndex(faqIndex === idx ? null : idx)}
                className="w-full text-left p-4 sm:p-5 flex items-center justify-between"
              >
                <span className="text-sm font-medium text-[var(--md-text-primary)]">{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-[var(--md-text-muted)] transition-transform ${
                    faqIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {faqIndex === idx && (
                <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs text-[var(--md-text-secondary)] leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
