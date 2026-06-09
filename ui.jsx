/* ===== UI primitives: logo, nav, footer, reveal ===== */
const { useState, useEffect, useRef, useCallback } = React;

/* scroll reveal — visible by default, observer is enhancement only */
function useReveal(){
  useEffect(()=>{
    const els = Array.from(document.querySelectorAll('.reveal:not(.in)'));
    const vh = window.innerHeight || 800;
    // anything already in (or near) the viewport: show immediately
    els.forEach(e=>{ if(e.getBoundingClientRect().top < vh * 0.92) e.classList.add('in'); });
    let io;
    if('IntersectionObserver' in window){
      io = new IntersectionObserver((entries)=>{
        entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target);} });
      },{ threshold:.12, rootMargin:'0px 0px -8% 0px' });
      els.forEach(e=>{ if(!e.classList.contains('in')) io.observe(e); });
    }
    // guaranteed failsafe: nothing stays hidden even if the observer never fires
    const t = setTimeout(()=>{ document.querySelectorAll('.reveal:not(.in)').forEach(e=>e.classList.add('in')); }, 600);
    return ()=>{ io && io.disconnect(); clearTimeout(t); };
  }, []);
}

/* logo — "tap" mark + wordmark */
function Logo({ onClick, light }){
  const ink = light ? '#fff' : 'var(--ink)';
  const dim = light ? 'rgba(255,255,255,.62)' : 'var(--ink-faint)';
  return (
    <a href="#top" onClick={onClick} aria-label="Tap to Enterprise — home"
       style={{display:'inline-flex',alignItems:'center',gap:11}}>
      <span style={{
        position:'relative',width:34,height:34,borderRadius:9,
        background:'var(--navy)',display:'grid',placeItems:'center',flex:'0 0 auto',
        boxShadow:'0 4px 12px rgba(31,58,95,.28)'}}>
        <span style={{width:13,height:13,borderRadius:'50%',background:'var(--teal)',
          boxShadow:'0 0 0 4px rgba(14,124,107,.28)'}}/>
      </span>
      <span style={{display:'flex',flexDirection:'column',lineHeight:1}}>
        <span style={{fontWeight:800,fontSize:16.5,letterSpacing:'-.02em',color:ink}}>
          Tap <span style={{color:dim,fontWeight:600}}>to</span> Enterprise
        </span>
        <span style={{fontSize:10.5,letterSpacing:'.22em',textTransform:'uppercase',color:'var(--teal)',fontWeight:700,marginTop:3}}>
          The FORMA Method
        </span>
      </span>
    </a>
  );
}

/* sticky nav */
function Nav({ t, lang, toggleLang }){
  const [solid,setSolid] = useState(false);
  const [open,setOpen] = useState(false);
  useEffect(()=>{
    const onScroll = ()=> setSolid(window.scrollY > 24);
    onScroll(); window.addEventListener('scroll',onScroll,{passive:true});
    return ()=>window.removeEventListener('scroll',onScroll);
  },[]);
  const links = [
    ['#method', t.nav.method],
    ['#services', t.nav.services],
    ['#clients', t.nav.clients],
    ['#about', t.nav.about],
    ['#contact', t.nav.contact],
  ];
  const go = (e,href)=>{ e.preventDefault(); setOpen(false);
    document.querySelector(href)?.scrollIntoView({behavior:'smooth',block:'start'}); };
  return (
    <header style={{position:'sticky',top:0,zIndex:60,
      background: solid ? 'rgba(251,250,248,.82)' : 'transparent',
      backdropFilter: solid ? 'saturate(1.2) blur(14px)' : 'none',
      borderBottom: solid ? '1px solid var(--line)' : '1px solid transparent',
      transition:'background .3s ease, border-color .3s ease'}}>
      <div className="wrap" style={{height:74,display:'flex',alignItems:'center',justifyContent:'space-between',gap:20}}>
        <Logo onClick={(e)=>go(e,'#top')}/>
        <nav style={{display:'flex',alignItems:'center',gap:4}} className="nav-links">
          {links.map(([h,l])=>(
            <a key={h} href={h} onClick={(e)=>go(e,h)}
               style={{padding:'9px 13px',fontSize:14.5,fontWeight:500,color:'var(--ink-soft)',borderRadius:9}}
               onMouseEnter={e=>e.currentTarget.style.color='var(--ink)'}
               onMouseLeave={e=>e.currentTarget.style.color='var(--ink-soft)'}>{l}</a>
          ))}
        </nav>
        <div style={{display:'flex',alignItems:'center',gap:10}}>
          <button onClick={toggleLang} aria-label="Switch language"
            style={{display:'inline-flex',alignItems:'center',gap:6,padding:'8px 12px',borderRadius:999,
              border:'1.5px solid var(--line-cool)',fontSize:13,fontWeight:700,color:'var(--ink-soft)',background:'#fff'}}
            onMouseEnter={e=>e.currentTarget.style.borderColor='var(--navy)'}
            onMouseLeave={e=>e.currentTarget.style.borderColor='var(--line-cool)'}>
            <span style={{width:7,height:7,borderRadius:'50%',background:'var(--teal)'}}/>
            {t.langLabel}
          </button>
          <a href="#contact" onClick={(e)=>go(e,'#contact')} className="btn btn-primary nav-cta">{t.nav.cta}</a>
          <button className="nav-burger" onClick={()=>setOpen(o=>!o)} aria-label="Menu"
            style={{width:42,height:42,borderRadius:11,border:'1.5px solid var(--line-cool)',background:'#fff',
              display:'none',placeItems:'center'}}>
            <span style={{display:'block',width:17,height:2,background:'var(--ink)',boxShadow:'0 -5px 0 var(--ink), 0 5px 0 var(--ink)'}}/>
          </button>
        </div>
      </div>
      {open && (
        <div className="wrap" style={{paddingBottom:16}}>
          <div style={{display:'flex',flexDirection:'column',gap:2,background:'#fff',border:'1px solid var(--line)',
            borderRadius:'var(--r-md)',padding:8,boxShadow:'var(--shadow-md)'}}>
            {links.map(([h,l])=>(
              <a key={h} href={h} onClick={(e)=>go(e,h)} style={{padding:'12px 14px',fontWeight:600,borderRadius:10}}>{l}</a>
            ))}
            <a href="#contact" onClick={(e)=>go(e,'#contact')} className="btn btn-primary" style={{marginTop:6}}>{t.nav.cta}</a>
          </div>
        </div>
      )}
    </header>
  );
}

/* footer */
function Footer({ t, lang, toggleLang }){
  const go = (e,href)=>{ e.preventDefault(); document.querySelector(href)?.scrollIntoView({behavior:'smooth'}); };
  return (
    <footer style={{background:'var(--navy-deep)',color:'#fff',paddingBlock:'64px 30px'}}>
      <div className="wrap">
        <div style={{display:'flex',flexWrap:'wrap',gap:40,justifyContent:'space-between',alignItems:'flex-start'}}>
          <div style={{maxWidth:340}}>
            <Logo light onClick={(e)=>go(e,'#top')}/>
            <p className="serif" style={{fontSize:21,color:'rgba(255,255,255,.9)',marginTop:18}}>{t.footer.tagline}</p>
          </div>
          <div style={{display:'flex',gap:'48px',flexWrap:'wrap'}}>
            <div>
              <div style={{fontSize:12,letterSpacing:'.14em',textTransform:'uppercase',color:'rgba(255,255,255,.5)',fontWeight:700,marginBottom:14}}>{t.nav.services}</div>
              <div style={{display:'flex',flexDirection:'column',gap:9}}>
                {[['#method',t.nav.method],['#services',t.nav.services],['#clients',t.nav.clients],['#about',t.nav.about]].map(([h,l])=>(
                  <a key={h} href={h} onClick={(e)=>go(e,h)} style={{color:'rgba(255,255,255,.78)',fontSize:14.5}}>{l}</a>
                ))}
              </div>
            </div>
            <div>
              <div style={{fontSize:12,letterSpacing:'.14em',textTransform:'uppercase',color:'rgba(255,255,255,.5)',fontWeight:700,marginBottom:14}}>{t.contact.eyebrow}</div>
              <div style={{display:'flex',flexDirection:'column',gap:9,fontSize:14.5,color:'rgba(255,255,255,.78)'}}>
                <span>{t.contact.email}</span>
                <span>{t.contact.site}</span>
                <span>{t.contact.loc}</span>
                <button onClick={toggleLang} style={{color:'var(--teal-bright)',fontWeight:700,fontSize:14,textAlign:'left',width:'fit-content'}}>
                  {lang==='en' ? 'Ver en Español' : 'View in English'}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div style={{height:1,background:'rgba(255,255,255,.12)',marginBlock:'34px 18px'}}/>
        <div style={{display:'flex',flexWrap:'wrap',gap:12,justifyContent:'space-between',alignItems:'center',
          fontSize:13,color:'rgba(255,255,255,.55)'}}>
          <span>© {new Date().getFullYear()} Tap to Enterprise. {t.footer.rights}</span>
          <a href="#top" onClick={(e)=>go(e,'#top')} style={{color:'rgba(255,255,255,.7)',display:'inline-flex',gap:7,alignItems:'center'}}>
            {t.footer.back} <span aria-hidden>↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { useReveal, Logo, Nav, Footer });
