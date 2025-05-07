import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone' 
import fs from 'fs' 

//OwnerShip
global.owner = [
  [process.env.OWNER_NUMBER || '92 323 7098573', process.env.OWNER_NAME || 'Developer Saqib', true],
  ['923237098573', 'Ghazi Tech ✨', true]
]
global.mods = []
global.prems = []

global.author = process.env.OWNER_NAME || 'Saqib Sarwar'
global.botname = process.env.BOT_NAME || 'Ghazi-XMD'
 
 
 //Api's
global.APIs = {
}
global.APIKeys = { 
}

//Apikeys
global.shizokeys = 'shizo'

//Sticker Watermarks
global.stkpack = process.env.BOT_NAME || 'Ghazi-XMD'
global.stkowner = process.env.OWNER_NAME || '© Saqib Sarwar'

//Watermark
global.maker = process.env.MAKER || 'Made with Saqib Sarwar'

//global emojis
global.wait = '*⌛ _Charging..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

//management
global.bug = '*!! Sorry 💢 !!*\nSomething went wrong 🌋'
global.stop = '*!! 🎭 Unfortunately 💔 !!*\nBot system is not Responding 🙃'

//TimeLines
global.botdate = `*⫹⫺ Date:*  ${moment.tz('Africa/Nairobi').format('DD/MM/YY')}`
global.bottime = `*⫹⫺ Time:* ${moment.tz('Africa/Nairobi').format('HH:mm:ss')}`

//Hosting Management
global.serverHost = 1
global.getQrWeb = 0
global.renderHost = 0
global.replitHost = 0

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
