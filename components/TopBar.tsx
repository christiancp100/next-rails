import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';


const TopBar = () => {
  return (
    <header className='flex px-12 w-full h-20 bg-primary shadow-xl'>
      <Link href="/">
        <a className='flex gap-x-4 self-center'>
          <div className='w-12 h-12'>
            <Image alt='logo' src="/logo.png" width="100%" height="100%" layout="responsive" objectFit="contain" />
          </div>
          <h1 className='self-end font-bold text-3xl text-default'>Next Rails</h1>
        </a>
      </Link>
    </header>
  );
}

export default TopBar;
