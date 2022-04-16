import Head from 'next/head'
import React, { ReactNode } from 'react'

import TopBar from './TopBar'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Next Rails' }: Props) => (
  <div className='h-screen overflow-hidden'>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <TopBar />
    <main className='flex h-full'>
      {children}
    </main>
  </div>
)

export default Layout
