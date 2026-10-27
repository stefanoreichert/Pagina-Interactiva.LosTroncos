import { readFile } from 'node:fs/promises';

const menu = JSON.parse(await readFile(new URL('../src/data/carta.json', import.meta.url), 'utf8'));
const local = JSON.parse(await readFile(new URL('../src/data/local.json', import.meta.url), 'utf8'));
const errors = [];
const nonempty = value => typeof value === 'string' && value.trim().length > 0;
const ids = new Set();
if (!Array.isArray(menu.groups) || !menu.groups.length) throw new Error('La carta necesita categorías.');
for (const group of menu.groups) {
  const label = group.id || '(categoría sin identificador)';
  if (!/^[a-z0-9-]+$/.test(group.id || '') || ids.has(group.id)) errors.push(`${label}: identificador inválido o repetido.`);
  ids.add(group.id);
  if (!nonempty(group.name) || !['cocina', 'bebidas'].includes(group.kind)) errors.push(`${label}: nombre o tipo inválido.`);
  if (typeof group.note !== 'string' || !Array.isArray(group.items) || !group.items.length) {
    errors.push(`${label}: nota o lista de opciones inválida.`);
    continue;
  }
  for (const [i, item] of group.items.entries()) {
    if (!nonempty(item.name) || typeof item.description !== 'string') errors.push(`${label}, opción ${i + 1}: falta nombre o descripción textual.`);
    if (item.price !== null && !(typeof item.price === 'number' && Number.isFinite(item.price) && item.price > 0)) errors.push(`${label}, ${item.name}: usar precio numérico positivo o null para Consultar.`);
  }
}
for (const key of ['name','address','city','hoursDays','hoursTime','phoneDisplay']) if (!nonempty(local[key])) errors.push(`Datos del local: falta ${key}.`);
for (const key of ['maps','instagram','facebook']) {
  try { if (new URL(local[key]).protocol !== 'https:') throw new Error(); }
  catch { errors.push(`Datos del local: ${key} debe ser un enlace HTTPS válido.`); }
}
if (errors.length) throw new Error(`Revisá los datos antes de publicar:\n${errors.join('\n')}`);
console.log(`Contenido válido: ${menu.groups.length} categorías y ${menu.groups.reduce((sum, group) => sum + group.items.length, 0)} opciones.`);
