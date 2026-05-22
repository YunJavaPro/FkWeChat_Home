/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type AppTheme = 'dark' | 'light';

export type PortalTab = 'features' | 'install' | 'faq' | 'community';

export interface WeChatFeature {
  name: string;
  desc: string;
  status: 'stable' | 'beta' | 'dev';
  details: string;
}
