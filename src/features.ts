import { WeChatFeature } from './types';

export const UTILITIES_LIST: WeChatFeature[] = [
  {
    name: '自动领取红包',
    desc: '实时监听并领取收到的红包',
    status: 'stable',
    details: '后台实时监听红包消息，可自定义领取延迟，同时支持设置群聊黑名单，指定群组不自动领取，使用灵活。'
  },
  {
    name: '自动领取转账',
    desc: '实时监听并领取收到的转账',
    status: 'stable',
    details: '自动识别并收取好友转账，可自由配置领取延迟时长，也能添加屏蔽群聊，按需关闭对应场景的自动收取功能。'
  },
  {
    name: '消息防撤回',
    desc: '阻止他人撤回发送的消息',
    status: 'stable',
    details: '拦截对方撤回操作，被撤回的内容会正常保留展示，完整留存聊天记录，不错过任何信息。'
  },
  {
    name: '拦截双击拍拍',
    desc: '拦截双击触发拍拍动作',
    status: 'stable',
    details: '屏蔽双击头像触发的拍拍互动，避免误触打扰，保持聊天界面清爽安静。'
  },
  {
    name: '艾特清除换行',
    desc: '艾特时清除换行的符号',
    status: 'stable',
    details: '在艾特联系人时自动清理文本内换行符号，优化输入格式，让发送内容排版更规整。'
  }
];

export const UI_CUSTOMS_LIST: WeChatFeature[] = [
  {
    name: '显示会话账号',
    desc: '聊天列表显示会话账号',
    status: 'stable',
    details: '直接在聊天列表展示对应会话账号，无需点开资料页查看，快速识别联系人与群组信息。'
  },
  {
    name: '隐藏自己头像',
    desc: '在单或群聊中隐藏自己头像',
    status: 'dev',
    details: '一键隐藏个人头像，简化聊天界面视觉元素，兼顾隐私保护与界面简约需求。'
  },
  {
    name: '隐藏好友头像',
    desc: '在单聊中隐藏好友的头像',
    status: 'dev',
    details: '隐藏单聊界面对方头像，减少视觉干扰，公共场景使用也能更好保护界面隐私。'
  },
  {
    name: '强制圆形头像',
    desc: '将所有头像切割为正圆形',
    status: 'stable',
    details: '全局统一将头像修改为圆形样式，支持自定义圆形弧度，打造统一美观的界面视觉风格。'
  },
  {
    name: '自定义气泡',
    desc: '自定义聊天消息气泡',
    status: 'stable',
    details: '自由更换聊天消息气泡样式，个性化打造专属聊天界面，告别默认样式单调感。'
  },
  {
    name: '显示消息时间',
    desc: '在头像旁显示发送时间',
    status: 'stable',
    details: '在头像侧边展示消息发送时间，可调节字体大小与文字颜色，时间展示醒目又贴合使用习惯。'
  },
  {
    name: '显示实名尾字',
    desc: '在群聊中显示实名尾字',
    status: 'stable',
    details: '群聊内自动展示用户实名尾字，便于分辨身份，降低仿冒昵称带来的安全风险。'
  },
  {
    name: '显示群头衔',
    desc: '在群聊中显示群主/管理员/群员头衔',
    status: 'dev',
    details: '群聊界面直观展示群主、管理员等身份头衔，快速区分群内成员身份，提升群聊管理效率。'
  }
];

export const EXT_LIST: WeChatFeature[] = [
  {
    name: '加一复读',
    desc: '消息旁增加+1按钮快速复读',
    status: 'stable',
    details: '聊天气泡旁新增+1快捷按钮，点击即可一键复读对应消息，群聊互动跟风更加便捷。'
  },
  {
    name: '自定义公告',
    desc: '引用消息 + #公告 自定内容',
    status: 'stable',
    details: '通过引用消息搭配指定口令，快速编辑并发布群公告，操作简单，省去繁琐的发布步骤。'
  },
  {
    name: '消息详情面板',
    desc: '在长按消息时可查看详情',
    status: 'stable',
    details: '长按消息唤起详情面板，查看消息底层相关数据信息，满足调试、查看原始内容等使用需求。'
  },
  {
    name: '长按复读消息',
    desc: '在长按消息时可点击复读',
    status: 'stable',
    details: '长按消息菜单中加入复读选项，长按即可快速复读选中消息，多一种快捷互动方式。'
  },
  {
    name: '长按分析消息',
    desc: '在长按消息时可点击分析',
    status: 'stable',
    details: '长按消息支持一键分析内容，快速解析消息相关数据，适配内容核验、数据查看等场景。'
  },
  {
    name: '长按智能回复',
    desc: '在长按消息时可点击AI回复',
    status: 'stable',
    details: '长按消息调用AI智能回复功能，自动生成对应回复内容，省时省力，提升聊天效率。'
  },
  {
    name: '隐藏艾特',
    desc: '发送卡片替代真实的艾特',
    status: 'stable',
    details: '使用卡片形式替代原生艾特功能，隐藏真实艾特效果，兼顾互动需求与使用隐私。'
  },
  {
    name: '模拟位置',
    desc: '修改GPS定位的基本信息',
    status: 'stable',
    details: '支持自定义设置经纬度坐标，一键模拟设备GPS位置，灵活适配各类位置相关使用场景。'
  },
  {
    name: '伪造钱包余额',
    desc: '自定义钱包显示的数值',
    status: 'stable',
    details: '自由填写数值修改微信钱包展示余额，趣味玩法十足，可用于日常娱乐互动。'
  },
  {
    name: 'MCP 服务',
    desc: '提供基于 Model Context Protocol 的数据接口服务',
    status: 'stable',
    details: '开启MCP接口服务，可自定义运行端口，对外提供标准化数据接口，支持外部工具联动调用。'
  }
];
