import type { Metadata } from 'next';
import './globals.css';
import { CANDIDATE_DATA } from '@/data/candidate';

export const metadata: Metadata = {
  metadataBase: new URL('https://hakim7709.github.io'),
  title: `${CANDIDATE_DATA.name} | 3D Interactive Portfolio & CV`,
  description: `${CANDIDATE_DATA.title} - 6+ Years Albaik Operations Leadership paired with Full-Stack Web Development & Python Automation. Targeting Ireland and Europe relocation.`,
  keywords: [
    'Md Hakim Mia',
    'Albaik',
    'Restaurant Assistant Coach',
    'Full Stack Developer',
    'Python Automation',
    'Ireland Jobs',
    'HACCP',
    'Operations Leadership',
    'Next.js 15',
    'Three.js'
  ],
  authors: [{ name: CANDIDATE_DATA.name }],
  openGraph: {
    title: `${CANDIDATE_DATA.name} | 3D Interactive Portfolio`,
    description: CANDIDATE_DATA.headline,
    type: 'website',
    images: [{ url: '/images/profile.jpg' }]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#070a12] text-slate-100 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
