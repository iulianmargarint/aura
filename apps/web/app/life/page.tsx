'use client';
import { useState } from 'react';

export default function Life() {
  const [text, setText] = useState('Bonjour tout le monde');
  const [out, setOut] = useState('');
  const [lang, setLang] = useState('en');

  async function translate() {
    const res = await fetch('/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, target: lang })
    });
    const data = await res.json();
    setOut(data.translated ?? '');
  }

  return (
    <div>
      <h2 style={{fontWeight:'700', fontSize:'22px', marginBottom:'12px'}}>LifeOS</h2>
      <div style={{display:'grid', gap:'8px', maxWidth:640}}>
        <textarea style={{border:'1px solid #e2e8f0', borderRadius:'8px', padding:'12px'}} value={text} onChange={e=>setText(e.target.value)} />
        <div style={{display:'flex', gap:'8px'}}>
          <input style={{border:'1px solid #e2e8f0', borderRadius:'8px', padding:'8px', width:'96px'}} value={lang} onChange={e=>setLang(e.target.value)} />
          <button onClick={translate} style={{border:'1px solid #e2e8f0', borderRadius:'12px', padding:'8px 12px'}}>Translate</button>
        </div>
        <pre style={{background:'#f8fafc', border:'1px solid #e2e8f0', borderRadius:'8px', padding:'12px', minHeight:'80px'}}>{out}</pre>
      </div>
    </div>
  );
}
