'use client';
import Link from 'next/link';
import React from 'react';

export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div style={{minHeight:'100vh', background:'linear-gradient(#fff,#f8fafc)', color:'#0f172a'}}>
      <header style={{position:'sticky', top:0, backdropFilter:'blur(6px)', borderBottom:'1px solid #e2e8f0'}}>
        <div style={{maxWidth:960, margin:'0 auto', padding:'12px 16px', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
          <Link href="/" style={{fontWeight:700, fontSize:'18px'}}>AURA</Link>
          <nav style={{display:'flex', gap:'12px', fontSize:'14px'}}>
            <Link href="/life">LifeOS</Link>
            <Link href="/jobs">Job Forge</Link>
            <Link href="/learn">Classroom</Link>
            <Link href="/health">Health</Link>
            <Link href="/create">Create</Link>
          </nav>
        </div>
      </header>
      <main style={{maxWidth:960, margin:'0 auto', padding:'24px 16px'}}>{children}</main>
      <footer style={{borderTop:'1px solid #e2e8f0', padding:'16px', textAlign:'center', fontSize:'12px', color:'#64748b'}}>
        © {new Date().getFullYear()} AURA
      </footer>
    </div>
  );
}
