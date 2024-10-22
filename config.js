const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Nigeria,Osun,Oshogbo."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Nigeria/Osun,Oshogbo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Vah3XPC6rsQtIcfTX342";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Vah3XPC6rsQtIcfTX342" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/75fab4da4ca60e4a651d0.jpg" || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Empire_Md" 


global.devs = "2348078582627" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348078582627";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/75fab4da4ca60e4a651d0.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_59_10_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjI2LFxuICAgICAgICA4NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjM0LFxuICAgICAgICA5MCxcbiAgICAgICAgMzksXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzgsXG4gICAgICAgIDY1LFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI3LFxuICAgICAgICA5NixcbiAgICAgICAgMjE5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzQsXG4gICAgICAgIDk0LFxuICAgICAgICAyMixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDM4LFxuICAgICAgICA1NixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI5LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTg2LFxuICAgICAgICAzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTksXG4gICAgICAgIDU5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMixcbiAgICAgICAgNzQsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAzMixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDgyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDUsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjEzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODIsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDg1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAzNSxcbiAgICAgICAgMCxcbiAgICAgICAgMjI2LFxuICAgICAgICA1NyxcbiAgICAgICAgODYsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMwLFxuICAgICAgICA5OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTU0LFxuICAgICAgICA5NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTIwLFxuICAgICAgICA2NixcbiAgICAgICAgMTg2LFxuICAgICAgICA0OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDM1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTY5LFxuICAgICAgICA3NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDI5LFxuICAgICAgICAzOCxcbiAgICAgICAgODksXG4gICAgICAgIDExNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTU1LFxuICAgICAgICA5NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDQ1LFxuICAgICAgICA3NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjIwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI5LFxuICAgICAgICA0NCxcbiAgICAgICAgNzksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjIzLFxuICAgICAgICA3NixcbiAgICAgICAgMTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm8rRXQwVjlqMmlDNHE3OGFWSFZtR0R2SFdDc09ESWlabWM4T20rSkk2Smc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlo4MG1ZaVFKUktTMGQ5QVVMN0VkSndcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGJmY2Q2Y2YtZGJlYy00Y2UwLWJhNzUtZTNiNzJjYjEzYThkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyOSxcbiAgICAgIDIzOCxcbiAgICAgIDIwMSxcbiAgICAgIDEzOCxcbiAgICAgIDI0NyxcbiAgICAgIDE4MyxcbiAgICAgIDcwLFxuICAgICAgMjM0LFxuICAgICAgMTI3LFxuICAgICAgNTksXG4gICAgICAyMjMsXG4gICAgICAyNixcbiAgICAgIDI1MixcbiAgICAgIDg0LFxuICAgICAgMTA3LFxuICAgICAgMTU2LFxuICAgICAgMjE0LFxuICAgICAgMTg1LFxuICAgICAgMjM4LFxuICAgICAgOTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDAsXG4gICAgICAxODksXG4gICAgICAxOTAsXG4gICAgICA5MyxcbiAgICAgIDQyLFxuICAgICAgNzEsXG4gICAgICAyNDIsXG4gICAgICAxNTUsXG4gICAgICA2NyxcbiAgICAgIDEzMSxcbiAgICAgIDgzLFxuICAgICAgMTY4LFxuICAgICAgMTk4LFxuICAgICAgMjMyLFxuICAgICAgMjIsXG4gICAgICAxOTIsXG4gICAgICA1OSxcbiAgICAgIDI1MixcbiAgICAgIDI0LFxuICAgICAgNzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQU4zNDk2TTlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc0MjAwMTEzODo0OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIllvdXJOdXJzZVwiLFxuICAgIFwibGlkXCI6IFwiMTY5MjgyMzk0NzA2MTUyOjQ4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lqczlkZ0RFTG5mM3JnR0dDQWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiT1F4Q3NqNndWTVU2M2thTzhLampQem9aSmRmd3BGV0daOVZCanMxOHJBWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJwdU5NQWQveTlVd2pVVG1TaXhKTFlFd21zN1FFUWg4OGVaRGY3WUUwSkxudFpKSVdyZnpnWnc1WWwrQ2dwY2dRT0tDcHRwSkJrY1g2UkNURUhERUVCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI0Wnh6azAyQUV5MXJRKzlWMy8wbXJDZUFYVTEzRVA5S1JlM3lGTng4YjMxYVFpNmhkSktJVjUveCtmOFZ4bkkzeEU2bW5tZldwWFkrR2VRYmhDVEhodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NDIwMDExMzg6NDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjk2MDU1NjYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLc2pcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtzai5qc29uIjogIntcImtleURhdGFcIjpcIjlWUjlPMStwZnRxN3cvREhJZkZIL2dMMEd0WjZ1eGE3SUIveGxYaUVjdnc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTkxNzg2NTA0LFwiY3VycmVudEluZGV4XCI6MTEsXCJkZXZpY2VJbmRleGVzXCI6WzAsNCw3XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "★彡[ᴏɴʟʏ_ᴏɴᴇ_🥇ᴇᴍᴘɪʀᴇ]彡★",
  packname: process.env.PACK_NAME || "Sticker by",
  botname : process.env.BOT_NAME  || "Empire_Md",
  ownername:process.env.OWNER_NAME|| "★彡[ᴏɴʟʏ_ᴏɴᴇ_🥇ᴇᴍᴘɪʀᴇ]彡★",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
