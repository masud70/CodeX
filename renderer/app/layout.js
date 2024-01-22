'use client';
import './globals.css';
import { NextUIProvider } from '@nextui-org/react';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    weight: '700',
    subsets: ['latin'],
});

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={roboto.className}>
            <body className="bg-[#0c0a24]">
                <NextUIProvider>
                    <div className="w-screen min-h-screen flex flex-col">
                        <div>{children}</div>
                    </div>
                </NextUIProvider>
            </body>
        </html>
    );
}
