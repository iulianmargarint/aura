import React from 'react';
import Shell from '../../components/Shell';

export const metadata = { title: 'AURA', description: 'AI for Every Human' };

export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
