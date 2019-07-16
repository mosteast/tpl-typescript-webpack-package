const fs = require('fs')
const json = require('./package.json')
const shell = require('shelljs')

const git_path = 'build/.git'
const git_backup_path = './tmp/.git_tmp_backup'
shell.mv(git_path, git_backup_path)
shell.exec(`rm -fr build/* && npx tsc`)
shell.mv(git_backup_path, git_path)
delete json.files
json.main = 'index.js'
json.type = 'index.d.ts'

fs.writeFile('./build/package.json', JSON.stringify(json), () => {})


