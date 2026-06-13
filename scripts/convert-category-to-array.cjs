const fs = require('fs')
const path = require('path')

const inputPath = path.join(__dirname, '..', 'src', 'data', 'words.json')
const words = JSON.parse(fs.readFileSync(inputPath, 'utf-8'))

let changed = 0
for (const w of words) {
  if (typeof w.category === 'string') {
    w.category = [w.category]
    changed++
  }
}

fs.writeFileSync(inputPath, JSON.stringify(words, null, 2) + '\n', 'utf-8')
console.log(`Done. Converted ${changed} entries.`)
