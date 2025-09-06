import Link from 'next/link';

const tiles = [
  { href: '/life',  title: 'LifeOS',            desc: 'Plan, translate, automate.' },
  { href: '/jobs',  title: 'Job Forge',         desc: '30 days to income.' },
  { href: '/learn', title: 'Global Classroom',  desc: 'Personalized learning.' },
  { href: '/health',title: 'Health Navigator',  desc: 'Triage & prevention.' },
  { href: '/create',title: 'Creativity Engine', desc: 'Imagine → produce.' },
];

export default function Page() {
  return (
    <div>
      <h1 style={{fontWeight:'700', fontSize:'28px', marginBottom:'16px'}}>Welcome to AURA</h1>
      <div style={{display:'grid', gap:'12px', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))'}}>
        {tiles.map(t => (
          <Link key={t.href} href={t.href} style={{border:'1px solid #e5e7eb', padding:'16px', borderRadius:'16px', background:'#fff'}}>
            <div style={{fontWeight:600}}>{t.title}</div>
            <div style={{fontSize:'12px', color:'#64748b'}}>{t.desc}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
