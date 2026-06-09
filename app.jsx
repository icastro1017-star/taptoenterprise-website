/* ===== App: language state, tweaks, assembly ===== */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "defaultLang": "en",
  "accent": "#0E7C6B",
  "secondary": "#3D2B8E",
  "headingFont": "Hanken Grotesk",
  "warmBg": true
}/*EDITMODE-END*/;

function applyTweaks(tw){
  const r = document.documentElement.style;
  // CTA / growth accent
  r.setProperty('--teal', tw.accent);
  r.setProperty('--teal-bright', shade(tw.accent, 10));
  // secondary accent
  r.setProperty('--indigo', tw.secondary);
  // base warmth
  r.setProperty('--base', tw.warmBg ? '#FBFAF8' : '#F7F8FA');
  r.setProperty('--tint', tw.warmBg ? '#F3F1EC' : '#EEF1F5');
  // heading font
  const fontMap = {
    'Hanken Grotesk':'"Hanken Grotesk", system-ui, sans-serif',
    'Newsreader':'"Newsreader", Georgia, serif',
    'Bricolage Grotesque':'"Bricolage Grotesque", system-ui, sans-serif',
  };
  r.setProperty('--display', fontMap[tw.headingFont] || fontMap['Hanken Grotesk']);
}
function shade(hex, amt){
  const n = parseInt(hex.slice(1),16);
  let r=(n>>16)&255, g=(n>>8)&255, b=n&255;
  r=Math.min(255,Math.round(r*(1+amt/100)));
  g=Math.min(255,Math.round(g*(1+amt/100)));
  b=Math.min(255,Math.round(b*(1+amt/100)));
  return '#'+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1);
}

function App(){
  const [tw, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [lang, setLang] = useState(()=> localStorage.getItem('tte_lang') || tw.defaultLang || 'en');

  useEffect(()=>{ applyTweaks(tw); }, [tw]);
  useEffect(()=>{ localStorage.setItem('tte_lang', lang); document.documentElement.lang = lang; }, [lang]);

  const t = { ...window.CONTENT[lang], lang };
  const toggleLang = ()=> setLang(l => l==='en' ? 'es' : 'en');

  useReveal();

  return (
    <React.Fragment>
      <Nav t={t} lang={lang} toggleLang={toggleLang}/>
      <main>
        <Hero t={t}/>
        <Forma t={t}/>
        <Services t={t}/>
        <Clients t={t}/>
        <About t={t}/>
        <Contact t={t}/>
      </main>
      <Footer t={t} lang={lang} toggleLang={toggleLang}/>

      <TweaksPanel>
        <TweakSection label="Brand color"/>
        <TweakColor label="Growth accent (CTA)" value={tw.accent}
          options={['#0E7C6B','#1F8A5B','#C2693A','#3D2B8E']}
          onChange={v=>setTweak('accent',v)}/>
        <TweakColor label="Secondary accent" value={tw.secondary}
          options={['#3D2B8E','#1F3A5F','#0E7C6B','#6B4FA8']}
          onChange={v=>setTweak('secondary',v)}/>
        <TweakSection label="Typography"/>
        <TweakSelect label="Heading font" value={tw.headingFont}
          options={['Hanken Grotesk','Newsreader','Bricolage Grotesque']}
          onChange={v=>setTweak('headingFont',v)}/>
        <TweakSection label="Surface & language"/>
        <TweakToggle label="Warm background" value={tw.warmBg}
          onChange={v=>setTweak('warmBg',v)}/>
        <TweakRadio label="Default language" value={lang}
          options={['en','es']} onChange={v=>setLang(v)}/>
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
