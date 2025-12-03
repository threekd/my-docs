/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: 'Home', link: '/' },
  { text: 'Recipes', link: '/Recipes/' },
  {
    text: 'Linux Notes',
    items: [
      { text: 'commands', link: '/Linux/commands.md' },
      { text: 'docker', link: '/Linux/docker.md' },
      { text: 'lnmp', link: '/Linux/lnmp.md' },
      { text: 'nginx', link: '/Linux/nginx.md' },
      { text: 'tmux', link: '/Linux/tmux.md' },
      { text: 'webs', link: '/Linux/webs.md' },
      { text: 'initial', link: '/Linux/initial.md' },
    ],
  },
  {
    text: 'Project Setups',
    items: [
      { text: 'LobeHub', link: '/Project_Setups/LobeHub/initial.md' },
      { text: 'theme-plume', link: '/Project_Setups/theme-plume/initial.md' },
    ],
  },
  {
    text: 'Somethings',
    items: [
      { text: 'Routine', link: '/Others/routine.md' },
      { text: 'resume_di', link: '/Others/resume_di.md'},
      { text: '17 Days to Conquer GRE Words', link: '/Others/ielts.md'},
    ],
  },
])
