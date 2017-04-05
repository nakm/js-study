import 'source-map-support/register'
import * as fs from 'fs'

console.log(fs.readFileSync('package.json').toString())

throw new Error()
