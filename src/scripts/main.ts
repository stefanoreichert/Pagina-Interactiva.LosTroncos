export {};

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
let state: {kind:Kind; category:string; query:string} = { kind:'cocina', category:'pizzas', query:'' };
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
  state.category = match && (state.kind==='todo'||match.kind===state.kind) ? match.id : category==='todas' || state.kind!=='cocina' ? 'todas' : 'pizzas';
  state.query = (params.get('buscar') || '').slice(0,100);
}

function setUrl(replace=false) {
  const url = new URL(location.href);
  url.searchParams.set('tipo',state.kind);
  url.searchParams.set('categoria',state.category);
  if(state.query) url.searchParams.set('buscar',state.query); else url.searchParams.delete('buscar');
  if(url.hash.startsWith('#grupo-')) url.hash='#carta';
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
panel?.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(link=>link.addEventListener('click',()=>{
  if(navigation)navigation.open=false;syncNavigation();
  const target=document.querySelector<HTMLElement>(link.hash)?.querySelector<HTMLElement>('h1,h2');
  target?.setAttribute('tabindex','-1');target?.focus({preventScroll:true});
}));

const navLinks=Array.from(document.querySelectorAll<HTMLAnchorElement>('.desktop-nav a'));
if('IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>{
    for(const entry of entries){if(entry.isIntersecting)navLinks.forEach(link=>{
      if(link.hash===`#${entry.target.id}`)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');
    })}
  },{rootMargin:'-15% 0px -60% 0px',threshold:0});
  ['carta','el-lugar','ambiente','visitanos'].forEach(id=>{const el=document.getElementById(id);if(el)observer.observe(el)});
}
