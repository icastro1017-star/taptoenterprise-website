/* ===== FORMA interactive roadmap ===== */
function Forma({ t }){
  const [sel, setSel] = useState(0);
  const phases = t.forma.phases;
  const accents = ['var(--navy)','var(--navy)','var(--indigo)','var(--indigo)','var(--teal)'];

  return (
    <section id="method" className="section" style={{background:'var(--tint-navy)',position:'relative',overflow:'hidden'}}>
      {/* faint big letters backdrop */}
      <div aria-hidden style={{position:'absolute',inset:0,pointerEvents:'none',opacity:.04,
        display:'flex',alignItems:'center',justifyContent:'center',
        fontSize:'min(46vw,560px)',fontWeight:800,color:'var(--navy)',letterSpacing:'.05em',userSelect:'none'}}>
        FORMA
      </div>

      <div className="wrap" style={{position:'relative'}}>
        <div className="reveal" style={{maxWidth:680,marginBottom:46}}>
          <span className="eyebrow">{t.forma.eyebrow}</span>
          <h2 style={{fontSize:'clamp(32px,4.6vw,52px)',marginTop:16}}>
            {t.forma.title.split('.')[0]}. <span className="serif" style={{color:'var(--indigo)'}}>{t.forma.title.split('.')[1]}</span>
          </h2>
          <p style={{fontSize:'clamp(17px,1.9vw,20px)',color:'var(--ink-soft)',marginTop:16}}>{t.forma.lede}</p>
        </div>

        {/* roadmap row */}
        <div className="reveal forma-track" style={{display:'grid',gridTemplateColumns:`repeat(${phases.length},1fr)`,gap:'clamp(8px,1.4vw,18px)',marginBottom:34}}>
          {phases.map((p,i)=>{
            const active = i===sel;
            const ac = accents[i];
            return (
              <button key={p.k} onClick={()=>setSel(i)} className="forma-stone"
                style={{textAlign:'left',display:'flex',flexDirection:'column',gap:12,
                  padding:'18px 16px 18px',borderRadius:'var(--r-md)',position:'relative',
                  transform:`translateY(${(phases.length-1-i)* -10}px)`,
                  background: active ? ac : '#fff',
                  color: active ? '#fff' : 'var(--ink)',
                  border:`1.5px solid ${active ? ac : 'var(--line-cool)'}`,
                  boxShadow: active ? '0 18px 38px rgba(31,58,95,.22)' : 'var(--shadow-sm)',
                  transition:'background .25s, color .25s, box-shadow .3s, border-color .25s'}}>
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                  <span style={{fontFamily:'var(--serif)',fontStyle:'italic',fontSize:11,fontWeight:600,
                    color: active ? 'rgba(255,255,255,.7)' : 'var(--ink-faint)'}}>0{i+1}</span>
                  <span style={{width:9,height:9,borderRadius:'50%',
                    background: active ? '#fff' : ac, opacity: active?1:.85}}/>
                </div>
                <span style={{fontSize:'clamp(34px,4.4vw,52px)',fontWeight:800,lineHeight:.9,letterSpacing:'-.02em'}}>{p.k}</span>
                <span style={{fontSize:'clamp(13px,1.4vw,15.5px)',fontWeight:700,letterSpacing:'-.01em'}}>{p.name}</span>
              </button>
            );
          })}
        </div>

        {/* growth axis label */}
        <div className="reveal" style={{display:'flex',alignItems:'center',gap:12,marginBottom:34,color:'var(--ink-faint)',fontSize:12.5,fontWeight:600,letterSpacing:'.04em'}}>
          <span>{t.forma.pick}</span>
          <span style={{flex:1,height:1,background:'var(--line-cool)'}}/>
        </div>

        {/* detail panel */}
        <div className="reveal" style={{display:'grid',gridTemplateColumns:'minmax(0,1fr)',gap:0}}>
          <div key={sel} className="forma-detail" style={{
            display:'grid',gridTemplateColumns:'auto 1fr',gap:'clamp(20px,4vw,52px)',alignItems:'center',
            background:'#fff',border:'1px solid var(--line-cool)',borderRadius:'var(--r-lg)',
            padding:'clamp(26px,4vw,46px)',boxShadow:'var(--shadow-md)'}}>
            <div style={{display:'grid',placeItems:'center',width:'clamp(96px,13vw,150px)',height:'clamp(96px,13vw,150px)',
              borderRadius:'var(--r-md)',background:accents[sel],color:'#fff',
              fontSize:'clamp(54px,8vw,92px)',fontWeight:800,lineHeight:1,
              boxShadow:'0 16px 34px rgba(31,58,95,.24)'}}>{phases[sel].k}</div>
            <div>
              <h3 style={{fontSize:'clamp(26px,3.2vw,38px)'}}>{phases[sel].name}</h3>
              <div className="serif" style={{fontSize:'clamp(17px,2vw,20px)',color:'var(--indigo)',marginTop:6}}>{phases[sel].short}</div>
              <p style={{fontSize:'clamp(16px,1.8vw,19px)',color:'var(--ink-soft)',marginTop:16,maxWidth:620}}>{phases[sel].body}</p>
            </div>
          </div>
        </div>

        {/* tagline */}
        <p className="reveal serif" style={{fontSize:'clamp(20px,2.6vw,30px)',color:'var(--navy)',
          textAlign:'center',maxWidth:820,margin:'46px auto 0',lineHeight:1.35}}>
          “{t.forma.tagline}”
        </p>
      </div>
    </section>
  );
}

window.Forma = Forma;
