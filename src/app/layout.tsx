import type { Metadata } from 'next';
import React, { useEffect } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import './globalicon.css';
import Head from 'next/head';
import 'react-tooltip/dist/react-tooltip.css';
import NavigationFixed from '@/app/_component/organism/navigationFixed';
import { LocalStorage } from '@/hooks/useUtil';

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const accessToken = LocalStorage.getItem('accessToken');
    if (accessToken) {
      console.log('Access Token:', accessToken);
    } else {
      localStorage.removeItem('accessToken');
      window.location.href = '/';
    }
  }, []);

  return (
    <html lang="ko">
      <head>
        <title>백곰</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,viewport-fit=cover"
        />
        <meta name="theme-color" content="#4196FD" />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta http-equiv="Cache-control" content="no-store" />

        <link rel="manifest" href="/assets/pwa/mainfest.json" />
        <link rel="apple-touch-icon" href="/assets/pwa/apple-touch-icon.png" />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/assets/pwa/apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/assets/pwa/apple-touch-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/assets/pwa/apple-touch-icon-167x167.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/pwa/apple-touch-icon-180x180.png"
        />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="백곰" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
