import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs';
import { GitHubEmbed } from './components/GitHubEmbed';


const config: DocsThemeConfig = {
  logo: <span>Walkframe doc</span>,
  project: {
    link: 'https://github.com/walkframe',
  },
  components: {
    GitHubEmbed,
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
