import { copyFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist')

// GitHub Pages non conosce le route client-side: servendo 404.html
// (una copia di index.html) anche /alessandroguglielmo/analisi funziona al refresh.
copyFileSync(path.join(dist, 'index.html'), path.join(dist, '404.html'))

// Impedisce a GitHub Pages di processare la build con Jekyll
// (che ignorerebbe le cartelle che iniziano con underscore).
writeFileSync(path.join(dist, '.nojekyll'), '')

console.log('✓ 404.html e .nojekyll generati in dist/')
