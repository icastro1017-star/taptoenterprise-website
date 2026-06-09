/* ===== Sections: Hero, Services, Clients, About, Contact ===== */

/* striped image placeholder */
function Placeholder({ label, h, style }){
  return (
    <div style={{position:'relative',width:'100%',height:h||'100%',borderRadius:'var(--r-md)',overflow:'hidden',
      background:'repeating-linear-gradient(135deg,#EDEFF3,#EDEFF3 11px,#E6E9EF 11px,#E6E9EF 22px)',
      display:'grid',placeItems:'center',...style}}>
      <span style={{fontFamily:'ui-monospace,Menlo,monospace',fontSize:12,letterSpacing:'.04em',
        color:'#9aa6b6',background:'rgba(251,250,248,.85)',padding:'5px 11px',borderRadius:999}}>{label}</span>
    </div>
  );
}

/* ---------- HERO ---------- */
function Hero({ t }){
  const go = (e,href)=>{ e.preventDefault(); document.querySelector(href)?.scrollIntoView({behavior:'smooth'}); };
  const h = t.hero;
  return (
    <section id="top" style={{position:'relative',paddingTop:'clamp(36px,6vw,72px)',paddingBottom:'clamp(56px,7vw,96px)'}}>
      <div className="wrap">
        <div className="hero-grid" style={{display:'grid',gridTemplateColumns:'1.05fr .95fr',gap:'clamp(32px,5vw,72px)',alignItems:'center'}}>
          {/* left */}
          <div>
            <span className="eyebrow reveal in">{h.eyebrow}</span>
            <h1 className="reveal in" style={{fontSize:'clamp(46px,7.4vw,86px)',marginTop:18,letterSpacing:'-.03em'}}>
              {h.title_a}<br/>
              <span style={{color:'var(--teal)'}}>{h.title_b}</span>
            </h1>
            <p className="reveal in" style={{fontSize:'clamp(17px,2vw,21px)',color:'var(--ink-soft)',marginTop:22,maxWidth:540}}>
              {h.lede}
            </p>
            <div className="reveal in" style={{display:'flex',flexWrap:'wrap',gap:12,marginTop:30}}>
              <a href="#contact" onClick={e=>go(e,'#contact')} className="btn btn-primary btn-lg">
                {h.cta1} <span className="arrow" aria-hidden>→</span>
              </a>
              <a href="#method" onClick={e=>go(e,'#method')} className="btn btn-ghost btn-lg">{h.cta2}</a>
            </div>
            <div className="reveal in hero-stats" style={{display:'flex',gap:'clamp(20px,3vw,40px)',marginTop:40,flexWrap:'wrap'}}>
              {[h.stat1,h.stat2,h.stat3].map((s,i)=>(
                <div key={i} style={{minWidth:96}}>
                  <div style={{fontSize:22,fontWeight:800,color:'var(--navy)',letterSpacing:'-.02em'}}>{s[0]}</div>
                  <div style={{fontSize:13,color:'var(--ink-faint)',marginTop:3,maxWidth:150}}>{s[1]}</div>
                </div>
              ))}
            </div>
          </div>

          {/* right visual */}
          <div className="reveal in hero-visual" style={{position:'relative'}}>
            <Placeholder label="founder / business photo" h="clamp(360px,48vw,520px)"
              style={{boxShadow:'var(--shadow-lg)',border:'1px solid var(--line)'}}/>
            {/* floating roadmap card */}
            <div style={{position:'absolute',left:'-6%',bottom:'-7%',width:'min(78%,320px)',
              background:'#fff',borderRadius:'var(--r-md)',padding:'18px 20px',boxShadow:'var(--shadow-lg)',
              border:'1px solid var(--line)'}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:14}}>
                <span style={{fontSize:11.5,fontWeight:700,letterSpacing:'.12em',textTransform:'uppercase',color:'var(--teal)'}}>Your roadmap</span>
                <span style={{fontSize:11.5,color:'var(--ink-faint)',fontWeight:600}}>2 / 5</span>
              </div>
              <div style={{display:'flex',gap:7}}>
                {['F','O','R','M','A'].map((k,i)=>(
                  <div key={k} style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',gap:7}}>
                    <div style={{width:'100%',aspectRatio:'1',borderRadius:8,display:'grid',placeItems:'center',
                      fontWeight:800,fontSize:15,
                      background: i<2?'var(--navy)':'var(--tint-navy)',
                      color: i<2?'#fff':'var(--ink-faint)'}}>{k}</div>
                  </div>
                ))}
              </div>
              <div style={{height:6,borderRadius:99,background:'var(--tint-navy)',marginTop:14,overflow:'hidden'}}>
                <div style={{width:'40%',height:'100%',background:'var(--teal)',borderRadius:99}}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SERVICES ---------- */
function Services({ t }){
  const go = (e,href)=>{ e.preventDefault(); document.querySelector(href)?.scrollIntoView({behavior:'smooth'}); };
  const s = t.services;
  return (
    <section id="services" className="section">
      <div className="wrap">
        <div className="reveal" style={{maxWidth:640,marginBottom:48}}>
          <span className="eyebrow">{s.eyebrow}</span>
          <h2 style={{fontSize:'clamp(32px,4.6vw,52px)',marginTop:16}}>{s.title}</h2>
          <p style={{fontSize:'clamp(17px,1.9vw,20px)',color:'var(--ink-soft)',marginTop:16}}>{s.lede}</p>
        </div>

        {/* core paths */}
        <div className="reveal" style={{fontSize:12.5,fontWeight:700,letterSpacing:'.14em',textTransform:'uppercase',color:'var(--ink-faint)',marginBottom:18}}>{s.coreLabel}</div>
        <div className="reveal core-grid" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:18}}>
          {s.core.map((c,i)=>(
            <div key={i} style={{display:'flex',flexDirection:'column',gap:12,padding:'26px 24px',borderRadius:'var(--r-lg)',
              background: c.featured?'var(--navy)':'#fff', color: c.featured?'#fff':'var(--ink)',
              border:`1px solid ${c.featured?'var(--navy)':'var(--line)'}`,
              boxShadow: c.featured?'0 20px 44px rgba(31,58,95,.24)':'var(--shadow-sm)',
              position:'relative',overflow:'hidden'}}>
              <span style={{alignSelf:'flex-start',fontSize:11.5,fontWeight:700,letterSpacing:'.06em',
                padding:'5px 11px',borderRadius:999,
                background: c.featured?'var(--teal)':'var(--tint-navy)',
                color: c.featured?'#fff':'var(--navy)'}}>{c.tag}</span>
              <h3 style={{fontSize:21,color:c.featured?'#fff':'var(--ink)',marginTop:4}}>{c.name}</h3>
              <div style={{fontSize:13.5,fontWeight:600,color:c.featured?'rgba(255,255,255,.72)':'var(--teal)'}}>{c.sub}</div>
              <p style={{fontSize:14.5,color:c.featured?'rgba(255,255,255,.82)':'var(--ink-soft)',marginTop:2}}>{c.body}</p>
            </div>
          ))}
        </div>

        {/* à la carte */}
        <div className="reveal" style={{display:'flex',alignItems:'baseline',gap:14,flexWrap:'wrap',margin:'56px 0 18px'}}>
          <span style={{fontSize:12.5,fontWeight:700,letterSpacing:'.14em',textTransform:'uppercase',color:'var(--ink-faint)'}}>{s.alaLabel}</span>
          <span className="serif" style={{fontSize:17,color:'var(--ink-soft)'}}>{s.alaSub}</span>
        </div>
        <div className="reveal ala-grid" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:14}}>
          {s.ala.map((a,i)=>(
            <div key={i} style={{display:'flex',gap:15,padding:'20px 22px',borderRadius:'var(--r-md)',
              background:'var(--tint)',border:'1px solid var(--line)'}}
              onMouseEnter={e=>{e.currentTarget.style.background='#fff';e.currentTarget.style.boxShadow='var(--shadow-sm)';}}
              onMouseLeave={e=>{e.currentTarget.style.background='var(--tint)';e.currentTarget.style.boxShadow='none';}}>
              <span style={{flex:'0 0 auto',fontFamily:'var(--serif)',fontStyle:'italic',fontSize:15,fontWeight:600,
                color:'var(--indigo)',width:24}}>{String(i+1).padStart(2,'0')}</span>
              <div>
                <h4 style={{fontSize:16.5,fontWeight:700}}>{a.name}</h4>
                <p style={{fontSize:14,color:'var(--ink-soft)',marginTop:5}}>{a.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* pricing + cta */}
        <div className="reveal" style={{display:'flex',flexWrap:'wrap',gap:18,alignItems:'center',justifyContent:'space-between',
          marginTop:44,padding:'24px 28px',borderRadius:'var(--r-lg)',background:'var(--tint-navy)',border:'1px solid var(--line-cool)'}}>
          <p style={{fontSize:16.5,color:'var(--ink-soft)',maxWidth:560,margin:0}}>{s.pricing}</p>
          <a href="#contact" onClick={e=>go(e,'#contact')} className="btn btn-primary btn-lg">{s.cta} <span className="arrow" aria-hidden>→</span></a>
        </div>
      </div>
    </section>
  );
}

/* ---------- CLIENTS / REFERENCES ---------- */
function Clients({ t }){
  const go = (e,href)=>{ e.preventDefault(); document.querySelector(href)?.scrollIntoView({behavior:'smooth'}); };
  const c = t.clients;
  return (
    <section id="clients" className="section" style={{paddingBottom:'clamp(40px,6vw,80px)'}}>
      <div className="wrap">
        <div className="reveal" style={{background:'var(--indigo)',color:'#fff',borderRadius:'var(--r-xl)',
          padding:'clamp(36px,6vw,72px)',position:'relative',overflow:'hidden'}}>
          <div aria-hidden style={{position:'absolute',top:-40,right:-20,fontFamily:'var(--serif)',fontStyle:'italic',
            fontSize:340,lineHeight:1,color:'rgba(255,255,255,.07)',userSelect:'none'}}>”</div>
          <div style={{position:'relative',maxWidth:840}}>
            <span className="eyebrow" style={{color:'rgba(255,255,255,.85)'}}>{c.eyebrow}</span>
            <h2 style={{color:'#fff',fontSize:'clamp(30px,4.4vw,50px)',marginTop:16}}>{c.title}</h2>
            <p className="serif" style={{fontSize:'clamp(22px,3vw,34px)',color:'#fff',marginTop:22,lineHeight:1.34}}>
              “{c.quote}”
            </p>
            <p style={{fontSize:'clamp(16px,1.9vw,19px)',color:'rgba(255,255,255,.78)',marginTop:20,maxWidth:660}}>{c.sub}</p>

            <div className="perks-grid" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:18,marginTop:38}}>
              {c.perks.map((p,i)=>(
                <div key={i} style={{padding:'20px 20px',borderRadius:'var(--r-md)',background:'rgba(255,255,255,.08)',
                  border:'1px solid rgba(255,255,255,.16)'}}>
                  <div style={{width:30,height:30,borderRadius:9,background:'var(--teal)',display:'grid',placeItems:'center',
                    fontWeight:800,fontSize:14,marginBottom:12}}>{i+1}</div>
                  <h4 style={{color:'#fff',fontSize:17}}>{p[0]}</h4>
                  <p style={{color:'rgba(255,255,255,.74)',fontSize:14.5,marginTop:6}}>{p[1]}</p>
                </div>
              ))}
            </div>
            <a href="#contact" onClick={e=>go(e,'#contact')} className="btn btn-lg" style={{marginTop:34,background:'#fff',color:'var(--indigo)'}}>
              {c.cta} <span className="arrow" aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
function About({ t }){
  const a = t.about;
  return (
    <section id="about" className="section" style={{background:'var(--tint)'}}>
      <div className="wrap">
        <div className="about-grid" style={{display:'grid',gridTemplateColumns:'.85fr 1.15fr',gap:'clamp(32px,5vw,64px)',alignItems:'center'}}>
          <div className="reveal" style={{position:'relative'}}>
            <Placeholder label="Isabel Castro — portrait" h="clamp(380px,46vw,500px)"
              style={{boxShadow:'var(--shadow-lg)',border:'1px solid var(--line)'}}/>
            <div style={{position:'absolute',right:'-5%',bottom:'-6%',background:'var(--navy)',color:'#fff',
              borderRadius:'var(--r-md)',padding:'16px 20px',boxShadow:'var(--shadow-lg)'}}>
              <div style={{fontSize:26,fontWeight:800,letterSpacing:'-.02em'}}>20+</div>
              <div style={{fontSize:12.5,color:'rgba(255,255,255,.72)'}}>years in enterprise IT</div>
            </div>
          </div>
          <div className="reveal">
            <span className="eyebrow">{a.eyebrow}</span>
            <h2 style={{fontSize:'clamp(30px,4.2vw,48px)',marginTop:16}}>{a.title}</h2>
            <div style={{display:'flex',alignItems:'center',gap:12,margin:'22px 0 18px'}}>
              <div style={{fontSize:19,fontWeight:800}}>{a.name}</div>
              <div style={{width:5,height:5,borderRadius:'50%',background:'var(--ink-faint)'}}/>
              <div style={{fontSize:15,color:'var(--teal)',fontWeight:600}}>{a.role}</div>
            </div>
            <p style={{fontSize:'clamp(16px,1.8vw,18px)',color:'var(--ink-soft)'}}>{a.p1}</p>
            <p style={{fontSize:'clamp(16px,1.8vw,18px)',color:'var(--ink-soft)',marginTop:14}}>{a.p2}</p>
            <p className="serif" style={{fontSize:'clamp(20px,2.6vw,27px)',color:'var(--navy)',marginTop:22,lineHeight:1.4}}>
              {a.p3.replace(a.pull,'').trim()} <span style={{color:'var(--indigo)'}}>{a.pull}</span>
            </p>

            <div style={{marginTop:30}}>
              <div style={{fontSize:12,letterSpacing:'.14em',textTransform:'uppercase',color:'var(--ink-faint)',fontWeight:700,marginBottom:14}}>{a.logosLabel}</div>
              <div style={{display:'flex',flexWrap:'wrap',gap:'14px 28px',alignItems:'center'}}>
                {a.logos.map((l,i)=>(
                  <span key={i} style={{fontSize:16,fontWeight:700,letterSpacing:'.01em',color:'var(--ink)',opacity:.55}}>{l}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
function Contact({ t }){
  const c = t.contact;
  const [sent,setSent] = useState(false);
  const [form,setForm] = useState({name:'',email:'',biz:'',msg:''});
  const [err,setErr] = useState({});
  const set = (k,v)=>setForm(f=>({...f,[k]:v}));
  const submit = (e)=>{
    e.preventDefault();
    const er={};
    if(!form.name.trim()) er.name=1;
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) er.email=1;
    if(!form.biz.trim()) er.biz=1;
    setErr(er);
    if(Object.keys(er).length===0) setSent(true);
  };
  const field = (k,label,type='text',area=false)=>(
    <label style={{display:'flex',flexDirection:'column',gap:7}}>
      <span style={{fontSize:13.5,fontWeight:600,color:'var(--ink-soft)'}}>{label}</span>
      {area
        ? <textarea value={form[k]} onChange={e=>set(k,e.target.value)} rows={3}
            style={{...inputStyle, borderColor: err[k]?'#d9544d':'var(--line-cool)', resize:'vertical'}}/>
        : <input type={type} value={form[k]} onChange={e=>set(k,e.target.value)}
            style={{...inputStyle, borderColor: err[k]?'#d9544d':'var(--line-cool)'}}/>}
    </label>
  );
  const inputStyle = {fontFamily:'var(--sans)',fontSize:15,padding:'12px 14px',borderRadius:'var(--r-sm)',
    border:'1.5px solid var(--line-cool)',background:'#fff',color:'var(--ink)',outline:'none',width:'100%'};

  return (
    <section id="contact" className="section" style={{background:'var(--navy-deep)',color:'#fff'}}>
      <div className="wrap">
        <div className="contact-grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'clamp(32px,5vw,72px)',alignItems:'center'}}>
          {/* left info */}
          <div className="reveal">
            <span className="eyebrow" style={{color:'var(--teal-bright)'}}>{c.eyebrow}</span>
            <h2 style={{color:'#fff',fontSize:'clamp(32px,4.6vw,52px)',marginTop:16}}>{c.title}</h2>
            <p style={{fontSize:'clamp(17px,1.9vw,20px)',color:'rgba(255,255,255,.78)',marginTop:16,maxWidth:460}}>{c.lede}</p>

            <div style={{display:'flex',flexDirection:'column',gap:20,marginTop:36}}>
              {[[c.emailLabel,c.email,c.emailNote],[c.siteLabel,c.site,null],[c.locLabel,c.loc,c.locNote]].map((row,i)=>(
                <div key={i} style={{display:'flex',gap:16,alignItems:'flex-start'}}>
                  <div style={{width:8,height:8,borderRadius:'50%',background:'var(--teal-bright)',marginTop:7,flex:'0 0 auto'}}/>
                  <div>
                    <div style={{fontSize:12,letterSpacing:'.12em',textTransform:'uppercase',color:'rgba(255,255,255,.5)',fontWeight:700}}>{row[0]}</div>
                    <div style={{fontSize:18,fontWeight:600,color:'#fff',marginTop:3}}>{row[1]}</div>
                    {row[2] && <div style={{fontSize:13.5,color:'rgba(255,255,255,.6)',marginTop:2}}>{row[2]}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* form card */}
          <div className="reveal" style={{background:'#fff',borderRadius:'var(--r-lg)',padding:'clamp(26px,3.4vw,40px)',
            boxShadow:'var(--shadow-lg)',color:'var(--ink)'}}>
            {sent ? (
              <div style={{display:'grid',placeItems:'center',textAlign:'center',minHeight:300,gap:14}}>
                <div style={{width:60,height:60,borderRadius:'50%',background:'var(--teal)',display:'grid',placeItems:'center',
                  fontSize:30,color:'#fff'}}>✓</div>
                <h3 style={{fontSize:26}}>{t.lang==='es'?'¡Listo!':'You\u2019re in.'}</h3>
                <p style={{color:'var(--ink-soft)',maxWidth:320}}>{c.formNote}</p>
              </div>
            ) : (
              <form onSubmit={submit} style={{display:'flex',flexDirection:'column',gap:16}}>
                <h3 style={{fontSize:'clamp(20px,2.4vw,26px)'}}>{c.cta}</h3>
                {field('name',c.formName)}
                {field('email',c.formEmail,'email')}
                {field('biz',c.formBiz)}
                {field('msg',c.formMsg,'text',true)}
                <button type="submit" className="btn btn-primary btn-lg" style={{marginTop:4}}>{c.formSend}</button>
                <p style={{fontSize:13,color:'var(--ink-faint)',textAlign:'center',margin:0}}>{c.formNote}</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Placeholder, Hero, Services, Clients, About, Contact });
