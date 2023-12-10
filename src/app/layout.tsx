import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Header from '@/app/_header';
import Footer from '@/app/_footer';

import './globals.scss';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  icons: {
    icon: './icons/main-icon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={inter.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
