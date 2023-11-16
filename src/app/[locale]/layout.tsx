import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import './globals.css'
import { ReactNode } from 'react';
import { Suspense } from 'react'

type Props = {
  children: ReactNode;
  params: { locale: string };
};

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Joshua Ahimaz',
  description: 'Welcome to my web portfolio!',
}

async function getMessages(locale: string) {
  try {
    return (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export async function generateStaticParams() {
  return ["en", "zh"].map((locale) => ({ locale }));
}

export default async function PageLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages(locale);

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  )
}
