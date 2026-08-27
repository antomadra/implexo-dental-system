import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const html = readFileSync(join(root, 'index.html'), 'utf8');
const css = readFileSync(join(root, 'style.css'), 'utf8');

test('the public site no longer exposes the private studio area', () => {
  assert.equal(existsSync(join(root, 'studio.html')), false);
  assert.doesNotMatch(html, /Il mio studio/i);
  assert.doesNotMatch(html, /href=["']studio\.html/i);
  assert.doesNotMatch(css, /#studio-page|\.studio-(?:hero|body|tab|panel)/);
});

test('the existing core copy and conversion contract remain intact', () => {
  const requiredCopy = [
    'ti portiamo',
    'pazienti ad alto valore, ogni mese',
    'Ti riconosci',
    'Due punti di accesso, un sistema',
    'Questo è ciò',
    "Chi l'ha fatto",
    'Dr. Marco Ricci',
    'Dr. Giuseppe Ferrari',
    "Richiedi un'analisi gratuita del tuo studio",
  ];

  for (const text of requiredCopy) assert.match(html, new RegExp(text, 'i'));
  assert.match(html, /action=["']https:\/\/formslist\.com\/f\/KGJrMdvT8ZfQ["']/);
  assert.match(html, /name=["']situazione["']/);
  assert.match(html, /name=["']email["'][^>]*required/);
});

test('the redesigned site uses installed editorial imagery', () => {
  const assets = [
    'assets/implexo-clinic-editorial.png',
    'assets/implexo-system-abstract.png',
  ];

  for (const asset of assets) {
    assert.equal(existsSync(join(root, asset)), true, `${asset} should exist`);
    assert.match(html, new RegExp(asset.replaceAll('/', '\\/')));
  }
});

test('navigation and motion have accessible progressive enhancement', () => {
  assert.match(html, /id=["']hamburger["'][^>]*aria-expanded=["']false["']/s);
  assert.match(html, /aria-controls=["']mobileMenu["']/);
  assert.match(html, /event\.key === ['"]Escape['"]/);
  assert.match(css, /@media\s*\(prefers-reduced-motion:\s*reduce\)/);
  assert.doesNotMatch(css, /\.fade-up\s*\{[^}]*opacity:\s*0/s);
});

test('presentation is controlled by the design system rather than inline styling', () => {
  assert.equal((html.match(/\sstyle=/g) || []).length, 0);
  assert.match(css, /--paper:/);
  assert.match(css, /--mineral:/);
  assert.match(css, /\.hero-media/);
  assert.match(css, /\.proof-ledger/);
});
