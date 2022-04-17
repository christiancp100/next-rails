import Head from 'next/head'
import React, { ReactNode } from 'react'

import TopBar from './TopBar'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Next Rails' }: Props) => (
  <div className='md:h-screen md:overflow-hidden'>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    </Head>

    <TopBar />
    <main className='flex h-[calc(100%-5rem)] md:flex-row flex-col'>
      {children}
    </main>

  </div>
)

export default Layout
