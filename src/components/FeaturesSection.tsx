import { Layers, CircleDot, Shield } from 'lucide-react';
import { WeChatFeature } from '../types';
import { UTILITIES_LIST, UI_CUSTOMS_LIST, EXT_LIST } from '../features';

interface FeaturesSectionProps {
  activeFeatureCat: 'utils' | 'ui' | 'ext';
  setActiveFeatureCat: (cat: 'utils' | 'ui' | 'ext') => void;
  selectedFeature: WeChatFeature;
  setSelectedFeature: (feature: WeChatFeature) => void;
  setActiveTab: (tab: any) => void;
}

export default function FeaturesSection({
  activeFeatureCat,
  setActiveFeatureCat
}: FeaturesSectionProps) {

  const currentCategoryList = () => {
    switch (activeFeatureCat) {
      case 'ui':
        return UI_CUSTOMS_LIST;
      case 'ext':
        return EXT_LIST;
      default:
        return UTILITIES_LIST;
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-5 sm:p-6 md:p-8 bg-gradient-to-br from-[var(--md-primary)]/10 via-[var(--md-surface-variant)]/30 to-[var(--md-primary)]/5 rounded-3xl border border-[var(--md-outline)]/20 dark:border-white/10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--md-primary-container)]/50 dark:bg-[var(--md-primary)]/20 rounded-full text-xs font-medium text-[var(--md-primary)] mb-4">
              <Layers className="w-4 h-4" />
              核心功能
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[var(--md-text-primary)] mb-2">
              模块功能
            </h3>
            <p className="text-sm sm:text-base text-[var(--md-text-secondary)] max-w-xl">
              精心打造三大核心模块，深度拓展微信能力边界，为您带来极致聊天体验
            </p>
          </div>

          <div className="flex flex-wrap gap-2 lg:gap-3">
            {[
              { id: 'utils', label: '实用工具', desc: '效率提升' },
              { id: 'ui', label: '外观美化', desc: '视觉升级' },
              { id: 'ext', label: '增强扩展', desc: '功能突破' }
            ].map(cat => {
              const isCatActive = activeFeatureCat === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveFeatureCat(cat.id as any);
                  }}
                  className={`flex flex-col items-center px-4 sm:px-6 py-3 sm:py-4 rounded-2xl transition-all cursor-pointer active:scale-95 ${
                    isCatActive
                      ? 'bg-[var(--md-primary)] text-white dark:text-zinc-950 shadow-lg shadow-[var(--md-primary)]/30 font-semibold'
                      : 'bg-[var(--md-surface-variant)]/40 dark:bg-white/5 text-[var(--md-text-secondary)] hover:text-[var(--md-text-primary)] hover:bg-[var(--md-surface-variant)]/60 border border-[var(--md-outline)]/20 dark:border-white/10'
                  }`}
                >
                  <span className="text-sm sm:text-base font-bold">{cat.label}</span>
                  <span className={`text-[10px] sm:text-xs mt-0.5 ${isCatActive ? 'opacity-80' : 'opacity-60'}`}>
                    {cat.desc}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

        <div className="space-y-4">
          {currentCategoryList().map((item, index) => {
            return (
              <div
                key={index}
                id={`feature-item-${index}`}
                className={`p-4 sm:p-6 rounded-2xl sm:rounded-3xl border bg-[var(--md-card-bg)]/60 dark:bg-[var(--md-card-bg)] border-[var(--md-outline)]/20 dark:border-white/10`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-base sm:text-lg text-[var(--md-text-primary)] flex items-center gap-2">
                    <CircleDot className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--md-primary)]" />
                    {item.name}
                  </span>

                  {item.status === 'dev' ? (
                    <span className="text-[9px] sm:text-[10px] font-mono font-bold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 sm:py-1 rounded-full border border-amber-500/15">
                      开发中
                    </span>
                  ) : (
                    <span className="text-[9px] sm:text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 sm:py-1 rounded-full border border-emerald-500/15">
                      物理稳定
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-[var(--md-text-secondary)] leading-relaxed mb-3">
                  {item.desc}
                </p>

                <div className="pt-3 border-t border-[var(--md-outline)]/20 dark:border-white/10">
                  <p className="text-xs sm:text-sm text-[var(--md-text-secondary)] leading-relaxed">
                    {item.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      <div className="p-5 sm:p-6 bg-[var(--md-surface-variant)]/30 dark:bg-white/5 border border-[var(--md-outline)]/20 dark:border-white/10 rounded-3xl select-none">
        <div className="border-b border-[var(--md-outline)]/20 dark:border-white/10 pb-3 mb-3">
          <h4 className="text-sm font-bold text-[var(--md-text-primary)] flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-[var(--md-primary)]" />
            安全运行说明
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-xs sm:text-sm text-[var(--md-text-secondary)] leading-relaxed">
          <p>
            <strong>不保存任何隐私</strong>：本模块读取的聊天消息、图片等数据仅用于本地功能展示，不会私自传输、收集或泄露任何个人信息。
          </p>
          <p>
            <strong>架构精简优化</strong>：精简模块运行流程，减少资源占用，在不影响主程序的前提下稳定提供拓展服务。
          </p>
        </div>
      </div>
    </div>
  );
}
