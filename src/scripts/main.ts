export {};
import './scroll';

const menu = document.querySelector<HTMLElement>('#carta');
const tools = document.querySelector<HTMLElement>('#menu-tools');
const search = document.querySelector<HTMLInputElement>('#search');
const categorySelect = document.querySelector<HTMLSelectElement>('#category');
const groups = Array.from(document.querySelectorAll<HTMLElement>('[data-group]'));
const kindButtons = Array.from(document.querySelectorAll<HTMLButtonElement>('.menu-kind [data-kind]'));
const categoryLinks = Array.from(document.querySelectorAll<HTMLElement>('.category-links [data-category]'));
const clear = document.querySelector<HTMLButtonElement>('#clear-search');
const empty = document.querySelector<HTMLElement>('#empty-state');
const status = document.querySelector<HTMLElement>('#result-status');
const reset = document.querySelector<HTMLButtonElement>('#reset-menu');
const allCategory = document.querySelector<HTMLButtonElement>('.all-category');
type Kind = 'cocina' | 'bebidas' | 'todo';
let state: {kind:Kind; category:string; query:string} = { kind:'cocina', category:'todas', query:'' };
let timer: ReturnType<typeof setTimeout>;
const normalize = (value:string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('es').trim();
const meta = groups.map(group => ({id:group.dataset.group!,name:group.querySelector('h3')!.textContent!,kind:group.dataset.kind!}));

function readUrl() {
  const params = new URLSearchParams(location.search);
  const kind = params.get('tipo');
  state.kind = kind === 'bebidas' || kind === 'todo' ? kind : 'cocina';
  const category = params.get('categoria');
  const hashGroup = location.hash.startsWith('#grupo-') ? location.hash.slice(7) : null;
  const match = meta.find(g=>g.id === (category || hashGroup));
  if(match && hashGroup && !category) state.kind = match.kind as Kind;
  state.category = match && (state.kind==='todo'||match.kind===state.kind) ? match.id : 'todas';
  state.query = (params.get('buscar') || '').slice(0,100);
}

function setUrl(replace=false) {
  const url = new URL(location.href);
  url.searchParams.set('tipo',state.kind);
  url.searchParams.set('categoria',state.category);
  if(state.query) url.searchParams.set('buscar',state.query); else url.searchParams.delete('buscar');
  url.hash='#carta';
  if(url.href!==location.href) history[replace?'replaceState':'pushState'](null,'',url);
}

function render() {
  if(!menu||!search||!categorySelect||!status) return;
  search.value=state.query;
  const available = meta.filter(g=>state.kind==='todo'||g.kind===state.kind);
  const allName = state.kind==='bebidas'?'Todas las bebidas':state.kind==='todo'?'Toda la carta':'Toda la cocina';
  categorySelect.replaceChildren(new Option(allName,'todas'), ...available.map(g=>new Option(g.name,g.id)));
  categorySelect.value=state.category;
  kindButtons.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.kind===state.kind)));
  categoryLinks.forEach(link=>{
    link.hidden=link.dataset.category!=='todas'&&state.kind!=='todo'&&link.dataset.kind!==state.kind;
    if(link.dataset.category===state.category)link.setAttribute('aria-current','true');else link.removeAttribute('aria-current');
  });
  if(allCategory) allCategory.textContent=allName;
  const words=normalize(state.query).split(/\s+/).filter(Boolean);
  let count=0;
  groups.forEach(group=>{
    const eligible=(state.kind==='todo'||group.dataset.kind===state.kind)&&(state.category==='todas'||group.dataset.group===state.category);
    let localCount=0;
    group.querySelectorAll<HTMLElement>('.dish').forEach(item=>{
      const matches=eligible&&words.every(word=>(item.dataset.search || '').includes(word));
      item.hidden=!matches;if(matches)localCount++;
    });
    group.hidden=localCount===0;count+=localCount;
    const counter=group.querySelector<HTMLElement>('.group-count');
    if(counter)counter.textContent=`${localCount} ${localCount===1?'opción':'opciones'}`;
  });
  const label = state.category==='todas' ? allName : meta.find(g=>g.id===state.category)?.name || allName;
  status.textContent=`${label}: ${count} ${count===1?'opción':'opciones'}${state.query?` para “${state.query}”`:''}.`;
  if(clear)clear.hidden=!state.query;
  if(empty)empty.hidden=count!==0;
}

if(menu&&tools&&search&&categorySelect&&groups.length){
  readUrl();render();tools.hidden=false;
  [status,reset,allCategory,menu.querySelector<HTMLElement>('.mobile-category')].forEach(el=>{if(el)el.hidden=false});
  menu.dataset.enhanced='true';
  kindButtons.forEach(button=>button.addEventListener('click',()=>{
    state.kind=button.dataset.kind as Kind;state.category='todas';render();setUrl();
  }));
  categoryLinks.forEach(link=>link.addEventListener('click',event=>{
    event.preventDefault();state.category=link.dataset.category!;render();setUrl();
  }));
  categorySelect.addEventListener('change',()=>{state.category=categorySelect.value;render();setUrl()});
  search.addEventListener('input',()=>{clearTimeout(timer);state.query=search.value;timer=setTimeout(()=>{render();setUrl(true)},160)});
  document.querySelector('#menu-search')?.addEventListener('submit',event=>{event.preventDefault();clearTimeout(timer);state.query=search.value;render();setUrl(true)});
  function clearSearch(){clearTimeout(timer);state.query='';render();setUrl(true);search?.focus()}
  clear?.addEventListener('click',clearSearch);
  document.querySelector('#empty-clear')?.addEventListener('click',clearSearch);
  reset?.addEventListener('click',()=>{clearTimeout(timer);state={kind:'todo',category:'todas',query:''};render();setUrl()});
  document.querySelector('#search-all')?.addEventListener('click',()=>{state.kind='todo';state.category='todas';render();setUrl()});
  document.querySelectorAll<HTMLAnchorElement>('[data-menu-link]').forEach(link=>link.addEventListener('click',event=>{
    const group=meta.find(g=>g.id===link.dataset.menuLink);if(!group)return;
    event.preventDefault();state={kind:group.kind as Kind,category:group.id,query:''};render();setUrl();
    history.replaceState(null,'',`${location.pathname}${location.search}#carta`);
    menu.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
    const heading=document.querySelector<HTMLElement>(`#title-${group.id}`);heading?.setAttribute('tabindex','-1');heading?.focus({preventScroll:true});
  }));
  addEventListener('popstate',()=>{readUrl();render()});
}

const navigation=document.querySelector<HTMLDetailsElement>('#navigation');
const summary=navigation?.querySelector<HTMLElement>('summary');
const panel=navigation?.querySelector<HTMLElement>('#mobile-panel');
const main=document.querySelector<HTMLElement>('main');
const footer=document.querySelector<HTMLElement>('footer');
const mobile=matchMedia('(max-width: 767px)');
if(navigation)navigation.dataset.enhanced='true';
let wasOpen=false;
function syncNavigation(){
  if(!navigation)return;
  const open=navigation.open&&mobile.matches;
  document.body.classList.toggle('nav-open',open);
  if(main)main.inert=open;if(footer)footer.inert=open;
  if(open&&!wasOpen)panel?.querySelector<HTMLAnchorElement>('a')?.focus();
  wasOpen=open;
}
navigation?.addEventListener('toggle',syncNavigation);
mobile.addEventListener('change',()=>{if(navigation&&!mobile.matches)navigation.open=false;syncNavigation()});
navigation?.addEventListener('keydown',event=>{
  if(!navigation.open||!mobile.matches)return;
  if(event.key==='Escape'){event.preventDefault();navigation.open=false;syncNavigation();summary?.focus();}
  if(event.key==='Tab'){
    const focusables=Array.from(navigation.querySelectorAll<HTMLElement>('summary,a[href]'));
    const first=focusables[0],last=focusables[focusables.length-1];
    if(event.shiftKey&&document.activeElement===first){event.preventDefault();last?.focus()}
    else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first?.focus()}
  }
});
panel?.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(link=>link.addEventListener('click',event=>{
  if(event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
  event.preventDefault();
  if(navigation)navigation.open=false;syncNavigation();
  const section=document.querySelector<HTMLElement>(link.hash);
  const target=section?.querySelector<HTMLElement>('h1,h2');
  history.pushState(null,'',link.hash);
  requestAnimationFrame(()=>{
    section?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
    target?.setAttribute('tabindex','-1');target?.focus({preventScroll:true});
  });
}));

const navLinks=Array.from(document.querySelectorAll<HTMLAnchorElement>('.desktop-nav a'));
if('IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>{
    for(const entry of entries){if(entry.isIntersecting)navLinks.forEach(link=>{
      if(link.hash===`#${entry.target.id}`)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');
    })}
  },{rootMargin:'-15% 0px -60% 0px',threshold:0});
  ['inicio','carta','nosotros','galeria','ubicacion','reservas'].forEach(id=>{const el=document.getElementById(id);if(el)observer.observe(el)});
}

const carousel=document.querySelector<HTMLElement>('#food-carousel');
const slides=Array.from(carousel?.querySelectorAll<HTMLAnchorElement>('[data-slide-to]')||[]);
const currentName=document.querySelector<HTMLElement>('#active-dish-name');
const currentCategory=document.querySelector<HTMLElement>('#active-dish-category');
const currentPrice=document.querySelector<HTMLElement>('#active-dish-price');
const currentLink=document.querySelector<HTMLAnchorElement>('#active-dish-link');
const counter=document.querySelector<HTMLElement>('#carousel-counter');
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
let currentSlide=0;
let orbitRotation=0;
const wrapIndex=(index:number)=>((index%slides.length)+slides.length)%slides.length;
const formatSlide=(index:number)=>String(index+1).padStart(2,'0');
function syncDish(index:number,announce=true){
  if(!slides.length)return;
  const next=wrapIndex(index);
  const changed=next!==currentSlide;
  currentSlide=next;
  slides.forEach((slide,i)=>{
    slide.dataset.position=i===currentSlide?'current':'satellite';
    if(i===currentSlide)slide.setAttribute('aria-current','true');else slide.removeAttribute('aria-current');
  });
  const active=slides[currentSlide];
  if(currentName)currentName.textContent=active.dataset.dishName||'';
  if(currentCategory)currentCategory.textContent=active.dataset.dishCategory||'';
  if(currentPrice)currentPrice.textContent=active.dataset.dishPrice||'Consultar';
  if(currentLink){
    currentLink.href=active.hash;
    currentLink.dataset.menuLink=active.hash.replace('#grupo-','');
  }
  if(counter)counter.textContent=`${formatSlide(currentSlide)} / ${String(slides.length).padStart(2,'0')}`;
  if(changed&&announce){
    const announcement=document.querySelector('#carousel-status');
    if(announcement)announcement.textContent=`${active.dataset.dishName}, ${active.dataset.dishCategory}. Plato ${formatSlide(currentSlide)} de ${String(slides.length).padStart(2,'0')}.`;
  }
}
if(carousel&&slides.length){
  const controls=carousel.querySelector<HTMLElement>('.carousel-controls');
  if(controls)controls.hidden=false;
  const stage=carousel.querySelector<HTMLElement>('.hero-food-stage');
  const indicator=carousel.querySelector<HTMLElement>('.hero-drag-indicator');
  const step=Math.PI*2/slides.length;
  const sensitivity=.72;
  let dragStart:{pointerId:number;pointerAngle:number;totalAngle:number;startRotation:number;lastRotation:number;lastTime:number;velocity:number;moved:boolean;slideIndex:number|null;pointerType:string;startX:number;startY:number;axis:'undecided'|'drag'|'scroll'}|null=null;
  const clamp=(value:number,min:number,max:number)=>Math.min(max,Math.max(min,value));
  const normalizeAngle=(angle:number)=>Math.atan2(Math.sin(angle),Math.cos(angle));
  const orbitMetrics=(width:number,height:number)=>{
    if(width<560)return {centerX:width*.5,centerY:height*.66,radiusX:width*.63,radiusY:height*.27,skewY:0,leftRadiusScale:1};
    if(window.innerWidth>=1536)return {centerX:width*.438,centerY:height*.623,radiusX:width*.56,radiusY:height*.213,skewY:-height*.30,leftRadiusScale:.61};
    return {centerX:width*.45,centerY:height*.57,radiusX:width*.48,radiusY:height*.15,skewY:0,leftRadiusScale:1};
  };
  function orbitAngleAt(clientX:number,clientY:number,rect:DOMRect){
    const {centerX,centerY,radiusX,radiusY,skewY,leftRadiusScale}=orbitMetrics(rect.width,rect.height);
    const offsetX=clientX-rect.left-centerX;
    const cosine=offsetX/(radiusX*(offsetX<0?leftRadiusScale:1));
    const sine=(clientY-rect.top-centerY-skewY*cosine)/radiusY;
    return Math.atan2(sine,cosine);
  }
  function drawOrbit(animate=true){
    if(!stage)return;
    const width=stage.clientWidth;
    const height=stage.clientHeight;
    const diameter=Math.min(364,width*(width<560?.72:.587));
    const {centerX,centerY,radiusX,radiusY,skewY,leftRadiusScale}=orbitMetrics(width,height);
    stage.style.setProperty('--orbit-size',`${diameter}px`);
    if(!animate)stage.dataset.dragging='true';else if(!dragStart)delete stage.dataset.dragging;
    let activeX=centerX,activeY=centerY-radiusY;
    slides.forEach((slide,index)=>{
      const angle=-Math.PI/2+index*step+orbitRotation;
      const sin=Math.sin(angle);
      const cosine=Math.cos(angle);
      const x=centerX+radiusX*cosine*(cosine<0?leftRadiusScale:1);
      const y=centerY+radiusY*sin+skewY*cosine;
      const distance=Math.abs(normalizeAngle(angle-(-Math.PI/2+currentSlide*step+orbitRotation)));
      const scale=window.innerWidth>=1536
        ?1-.41*Math.min(distance/(Math.PI/2),1)-.19*Math.max(0,(distance-Math.PI/2)/(Math.PI/2))
        :.62+.38*(1-sin)/2;
      slide.style.transform=`translate3d(${x}px,${y}px,0) translate(-50%,-50%) scale(${scale})`;
      slide.style.zIndex=String(Math.round(100-sin*12));
      slide.style.opacity=String(window.innerWidth>=1536?.66+.34*scale:.66+.34*(1-sin)/2);
      if(index===currentSlide){activeX=x;activeY=y}
    });
    if(indicator&&!stage.dataset.pointer){
      const indicatorX=activeX+diameter*(window.innerWidth>=1536?.06:.27);
      const indicatorY=activeY+diameter*(window.innerWidth>=1536?-.15:.24);
      indicator.style.transform=`translate3d(${indicatorX}px,${indicatorY}px,0) translate(-50%,-50%)`;
    }
  }
  function snapToNearest(){
    const nearest=wrapIndex(Math.round(-orbitRotation/step));
    const target=-nearest*step;
    orbitRotation=target+Math.round((orbitRotation-target)/(Math.PI*2))*Math.PI*2;
    syncDish(nearest);
    drawOrbit();
  }
  function goTo(index:number,announce=true){
    const next=wrapIndex(index);
    const target=-next*step;
    orbitRotation=target+Math.round((orbitRotation-target)/(Math.PI*2))*Math.PI*2;
    syncDish(next,announce);
    drawOrbit();
  }
  const autoplayDelay=7000;
  let autoplayTimer=0;
  function stopAutoplay(){
    window.clearTimeout(autoplayTimer);
    autoplayTimer=0;
  }
  function scheduleAutoplay(){
    stopAutoplay();
    if(!carousel||reducedMotion.matches||document.hidden||carousel.contains(document.activeElement))return;
    autoplayTimer=window.setTimeout(()=>{
      if(dragStart)return;
      goTo(currentSlide+1,false);
      scheduleAutoplay();
    },autoplayDelay);
  }
  syncDish(0);
  drawOrbit();
  scheduleAutoplay();
  carousel.addEventListener('focusin',stopAutoplay);
  carousel.addEventListener('focusout',event=>{
    if(!(event.relatedTarget instanceof Node)||!carousel.contains(event.relatedTarget))scheduleAutoplay();
  });
  document.addEventListener('visibilitychange',()=>{
    if(document.hidden)stopAutoplay();else scheduleAutoplay();
  });
  reducedMotion.addEventListener('change',scheduleAutoplay);
  const resizeObserver=new ResizeObserver(()=>drawOrbit());
  if(stage)resizeObserver.observe(stage);
  slides.forEach(slide=>slide.addEventListener('click',event=>{
    event.preventDefault();
    goTo(Number(slide.dataset.slideTo));
    scheduleAutoplay();
  }));
  carousel.querySelectorAll<HTMLButtonElement>('[data-slide-step]').forEach(button=>button.addEventListener('click',()=>{
    goTo(currentSlide+Number(button.dataset.slideStep));
    scheduleAutoplay();
  }));
  carousel.addEventListener('keydown',event=>{
    if(event.key==='ArrowRight'||event.key==='ArrowLeft'){
      event.preventDefault();goTo(currentSlide+(event.key==='ArrowRight'?1:-1));
      scheduleAutoplay();
    }
  });
  let suppressClick=false;
  stage?.addEventListener('pointerdown',event=>{
    if(!event.isPrimary||event.button!==0)return;
    stopAutoplay();
    const rect=stage.getBoundingClientRect();
    const pointerAngle=orbitAngleAt(event.clientX,event.clientY,rect);
    const target=event.target instanceof Element?event.target.closest<HTMLAnchorElement>('[data-slide-to]'):null;
    dragStart={pointerId:event.pointerId,pointerAngle,totalAngle:0,startRotation:orbitRotation,lastRotation:orbitRotation,lastTime:event.timeStamp,velocity:0,moved:false,slideIndex:target?Number(target.dataset.slideTo):null,pointerType:event.pointerType,startX:event.clientX,startY:event.clientY,axis:'undecided'};
    stage.dataset.dragging='true';
    stage.setPointerCapture(event.pointerId);
  });
  stage?.addEventListener('pointermove',event=>{
    if(indicator){
      const rect=stage.getBoundingClientRect();
      indicator.style.transform=`translate3d(${event.clientX-rect.left}px,${event.clientY-rect.top}px,0) translate(-50%,-50%)`;
      stage.dataset.pointer='true';
    }
    if(!dragStart||event.pointerId!==dragStart.pointerId)return;
    if(dragStart.pointerType==='touch'&&dragStart.axis==='undecided'){
      const deltaX=event.clientX-dragStart.startX;
      const deltaY=event.clientY-dragStart.startY;
      if(Math.hypot(deltaX,deltaY)<8)return;
      dragStart.axis=Math.abs(deltaX)>=Math.abs(deltaY)?'drag':'scroll';
    }
    if(dragStart.pointerType==='touch'&&dragStart.axis==='scroll')return;
    const rect=stage.getBoundingClientRect();
    const pointerAngle=orbitAngleAt(event.clientX,event.clientY,rect);
    dragStart.totalAngle+=normalizeAngle(pointerAngle-dragStart.pointerAngle);
    dragStart.pointerAngle=pointerAngle;
    if(Math.abs(dragStart.totalAngle*sensitivity)<.07)return;
    dragStart.moved=true;
    orbitRotation=dragStart.startRotation-dragStart.totalAngle*sensitivity;
    const elapsed=event.timeStamp-dragStart.lastTime;
    if(elapsed>0)dragStart.velocity=clamp((orbitRotation-dragStart.lastRotation)/elapsed,-.01,.01);
    dragStart.lastRotation=orbitRotation;
    dragStart.lastTime=event.timeStamp;
    syncDish(wrapIndex(Math.round(-orbitRotation/step)));
    drawOrbit(false);
  });
  stage?.addEventListener('pointerup',event=>{
    if(!dragStart||event.pointerId!==dragStart.pointerId)return;
    const finished=dragStart;
    dragStart=null;
    delete stage.dataset.pointer;
    if(finished.pointerType==='touch'&&finished.axis==='scroll'){
      delete stage.dataset.dragging;
      suppressClick=true;
      setTimeout(()=>{suppressClick=false},0);
      scheduleAutoplay();
      return;
    }
    if(finished.moved){
      if(!reducedMotion.matches)orbitRotation+=clamp(finished.velocity*100,-step*.55,step*.55);
      snapToNearest();
      suppressClick=true;
      setTimeout(()=>{suppressClick=false},0);
    }else{
      delete stage.dataset.dragging;
      if(finished.slideIndex!==null){
        goTo(finished.slideIndex);
        suppressClick=true;
        setTimeout(()=>{suppressClick=false},0);
      }
    }
    scheduleAutoplay();
  });
  stage?.addEventListener('pointerleave',()=>{
    if(!dragStart)delete stage.dataset.pointer;
    drawOrbit();
  });
  stage?.addEventListener('pointercancel',()=>{
    const canceled=dragStart;
    dragStart=null;
    if(canceled?.moved)snapToNearest();else delete stage.dataset.dragging;
    delete stage.dataset.pointer;
    scheduleAutoplay();
  });
  stage?.addEventListener('lostpointercapture',()=>{
    const canceled=dragStart;
    dragStart=null;
    if(canceled?.moved)snapToNearest();else delete stage.dataset.dragging;
    scheduleAutoplay();
  });
  stage?.addEventListener('click',event=>{
    if(!suppressClick)return;
    event.preventDefault();
    event.stopPropagation();
    suppressClick=false;
  },true);
}

if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
  const photoObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('is-seen');photoObserver.unobserve(entry.target)}
    });
  },{threshold:.15});
  document.querySelectorAll('.reveal-photo').forEach(photo=>photoObserver.observe(photo));
}

const loadMap=document.querySelector<HTMLButtonElement>('#load-map');
const mapContainer=document.querySelector<HTMLElement>('#map-container');
const mapPlaceholder=document.querySelector<HTMLElement>('#map-placeholder');
if(loadMap&&mapContainer&&mapPlaceholder){
  loadMap.hidden=false;
  loadMap.addEventListener('click',()=>{
    const map=document.createElement('iframe');
    map.title='Ubicación de Los Troncos Resto Bar en Puerto Rico, Misiones';
    map.src='https://maps.google.com/maps?q=-26.8197802,-55.0273788&z=17&output=embed';
    map.referrerPolicy='no-referrer-when-downgrade';
    map.loading='lazy';
    mapContainer.append(map);mapContainer.hidden=false;mapPlaceholder.hidden=true;
    map.setAttribute('tabindex','0');map.focus({preventScroll:true});
  },{once:true});
}
