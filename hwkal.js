
const fs = require('fs')
const chalk = require('chalk')


//gausah di apa² in!
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
//=================================================//
//—————「 Set Kebutuhan Button & Kontak 」—————//
//ubah aja kalau ada yang gapunya gsh di hps anggap aja credits :), note tanda ' gausah di hapus!
global.chrom = 'http://upload.bloggingheads.tv/upload/files/XDARK.FAMOUS.html'
global.ig = 'http://upload.bloggingheads.tv/upload/files/XDARK.FAMOUS.html'
global.mygc = 'wa.me/6283149877456'
global.myweb = 'http://upload.bloggingheads.tv/upload/files/XDARK.FAMOUS.html'
global.linkgrupss = "https://chat.whatsapp.com/HrG8dKUwik75kgrayU3B69"
global.linkpro = 'mailto:support@whatsapp.com?subject=Deactivate%20My%20Account%20Number&body=Please%20Deactivate%20The%20My%20Account%20Number%20%2B62XXXXXXXX%20Immediately%20Because%20The%20Number%20Has%20Been%20Lost'
global.email = 'a.code@gmail.com'
global.region = 'indonesia'
//—————「 Set Nama Own & Bot 」—————//
global.ownername = '𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.botname = '𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.footer = '𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
// Other
global.owner = ['6285814480623']
global.packname = '𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲'
global.ownerr = ['𝓑𝔂 : 𝓐. 𝓡𝓪𝓱𝓶𝓪𝓭𝓪𝓷𝓲']
global.author = '1337'
global.sessionName = './sessionye/haikal'
global.prefa = ['','!','.',',','🐤','🗿']
global.sp = '❍➤'
global.mess = {    
    wait: 'Waiting....',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
}
//=================================================//

//=================================================//

//=================================================//
global.thumb = fs.readFileSync("./baseikal/image/hw.jpg")
global.visoka = fs.readFileSync("./baseikal/video/hikal.gif")
global.log0 = fs.readFileSync("./baseikal/image/haikal.jpg")
global.menuimg = 'https://e.top4top.io/p_2517oeujx0.jpg'
global.ggikal = fs.readFileSync("./baseikal/video/haikal.mp4")
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
