import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Integrador Web Developers</span>,
  project: {
    link: 'https://github.com/HighsoftWeb/integrador-web-docs',
  },
  docsRepositoryBase: 'https://github.com/HighsoftWeb/integrador-web-docs',
  footer: {
    text: 'Integrador Web Developers',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Integrador Web Developers'
    }
  }
}

export default config
