import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs';
import { GitHubViewer } from './components/GitHubViewer';


const config: DocsThemeConfig = {
  logo: <span>Walkframe doc</span>,
  project: {
    link: 'https://github.com/walkframe',
  },
  components: {
    GitHubViewer,
  },
  /*
  chat: {
    link: 'https://discord.com',
  },
  */
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Nextra Docs Template',
  },
}

export default config
