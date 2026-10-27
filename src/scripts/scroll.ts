/** Native, reversible scroll choreography. The HTML remains the static fallback. */
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const scene = document.querySelector<HTMLElement>('[data-room-scene]');
const stage = scene?.querySelector<HTMLElement>('.room-stage');
const clamp = (value: number) => Math.max(0, Math.min(1, value));
let visible = false;
let frame = 0;

function paintRoom() {
  frame = 0;
  if (!scene || !stage || reducedMotion.matches || document.hidden) return;

  const bounds = scene.getBoundingClientRect();
  const width = stage.clientWidth;
  const height = stage.clientHeight;
  const progress = clamp(-bounds.top / Math.max(1, bounds.height - height));
  const opening = clamp(progress / 0.85);
  const eased = opening * opening * (3 - 2 * opening);
  const initialRadius = Math.min(width, height) * 0.22;
  const fullRadius = Math.hypot(width, height) / 2 + 2;
  const radius = initialRadius + (fullRadius - initialRadius) * eased;

  scene.style.setProperty('--iris-radius', `${radius.toFixed(2)}px`);
  scene.style.setProperty('--iris-scale', (1.16 - 0.16 * eased).toFixed(4));
  scene.style.setProperty('--iris-title-opacity', String(1 - clamp(eased * 2.2)));
  scene.style.setProperty('--iris-caption-opacity', String(clamp((progress - 0.56) / 0.22)));
  scene.style.setProperty('--iris-caption-y', `${(28 * (1 - clamp((progress - 0.56) / 0.22))).toFixed(2)}px`);
}

function scheduleRoom() {
  if (!frame && visible && !reducedMotion.matches) frame = requestAnimationFrame(paintRoom);
}

function setRoomMode() {
  if (!scene || !stage) return;
  const enabled = !reducedMotion.matches && CSS.supports('clip-path', 'circle(10px at 50% 50%)');
  scene.classList.toggle('is-scroll-scene', enabled);
  scene.classList.toggle('is-live', enabled);
  scene.classList.toggle('is-rest', !enabled);
  if (enabled) paintRoom();
  else {
    cancelAnimationFrame(frame);
    frame = 0;
    scene.removeAttribute('style');
  }
}

if (scene && stage && 'IntersectionObserver' in window) {
  setRoomMode();
  const sceneObserver = new IntersectionObserver(entries => {
    visible = entries[0].isIntersecting;
    if (visible) scheduleRoom();
  }, { rootMargin: '120px 0px' });
  sceneObserver.observe(scene);
  addEventListener('scroll', scheduleRoom, { passive: true });
  addEventListener('resize', () => {
    if (!reducedMotion.matches) paintRoom();
  }, { passive: true });
  document.addEventListener('visibilitychange', scheduleRoom);
  reducedMotion.addEventListener('change', setRoomMode);
}

// Brief entrances support the room sequence; filtering the menu never replays them.
if ('IntersectionObserver' in window) {
  const animations = new Set<Animation>();
  const entrances = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entrances.unobserve(entry.target);
      if (reducedMotion.matches) continue;
      const element = entry.target as HTMLElement;
      const isDish = element.classList.contains('specialty');
      const isWordmark = element.classList.contains('footer-wordmark');
      const distance = isWordmark ? 40 : 28;
      const animation = element.animate([
        { opacity: isWordmark ? 0.75 : 0.55, transform: `translateY(${distance}px)` },
        { opacity: 1, transform: 'translateY(0)' },
      ], {
        duration: isWordmark ? 900 : 700,
        delay: isDish ? Math.min(Array.from(element.parentElement!.children).indexOf(element) * 80, 160) : 0,
        easing: 'cubic-bezier(.16,1,.3,1)',
      });
      animations.add(animation);
      animation.finished.then(() => animations.delete(animation)).catch(() => animations.delete(animation));
    }
  }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });

  document.querySelectorAll('.section-intro, .proposal-bottom, .specialty, .menu-heading, .reservation-layout > div:first-child, .location-copy, .footer-wordmark').forEach(element => entrances.observe(element));
  reducedMotion.addEventListener('change', () => {
    if (reducedMotion.matches) {
      animations.forEach(animation => animation.cancel());
      animations.clear();
    }
  });
}
