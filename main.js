// Kalau mau ngedit di message/(cari aja)
'use strict';const _0x3f9f=['add','34721HqWBFc','jid','WAConnection','Maaf\x20bot\x20tidak\x20menerima\x20call','Connect,\x20Welcome\x20Owner','.json','\x27\x20Telah\x20berubah!','length','Terputus,\x20Alasan\x20:','key','11iIIVeN','CB:action,,call','existsSync','live','watchFile','./database/welcome.json','./message/group','cyan','stringify','value','default','merekam','Module\x20','Scan\x20QR\x20~~','getAfkPosition','./lib/afk','extendedText','./config.json','Xinz\x20Bot','replace','@adiwajshing/baileys','ws-close','507031OOIIMp','log','readFileSync','recording','from','cache','blockUser','connecting','./lib/myfunc','mengetik','./database/afk.json','91502cIOHHm','parse','split','Connecting...','blocklist','hasNewMessage','[\x20CREATED\x20BY\x20XINZTEAM\x20]','1SWlVpS','generate','writeFileSync','messages','1279764vbMdNq','baterai','push','open','base64EncodedAuthInfo','./message/help.js','splice','logger','\x20berhenti\x20afk,\x20dia\x20sedang\x20','./message/xinz.js','10izohYv','warn','Koneksi\x20terputus,\x20mencoba\x20menghubungkan\x20kembali..','resolve','connect','sendMessage','187301MVoIxT','85SgxCxK','checkAfkUser','3fkvIqN','135155zpilDI','CB:action,,battery','CB:Blocklist','1112780UYaQkK','\x20Dipantau\x20oleh\x20kang\x20Bakso','lastKnownPresence','qrcode-terminal','\x0aMencoba\x20mengkoneksi\x20ulang\x20:','presences'];const _0x5df51e=_0x49bf;(function(_0x16dec2,_0x284ba6){const _0x50d916=_0x49bf;while(!![]){try{const _0x334e3d=-parseInt(_0x50d916(0x1fc))*parseInt(_0x50d916(0x1e1))+parseInt(_0x50d916(0x1f5))*-parseInt(_0x50d916(0x1f8))+parseInt(_0x50d916(0x1e5))+parseInt(_0x50d916(0x1da))*-parseInt(_0x50d916(0x20d))+-parseInt(_0x50d916(0x1f9))*parseInt(_0x50d916(0x1ef))+parseInt(_0x50d916(0x1cf))+parseInt(_0x50d916(0x203))*parseInt(_0x50d916(0x1f6));if(_0x334e3d===_0x284ba6)break;else _0x16dec2['push'](_0x16dec2['shift']());}catch(_0x950f5b){_0x16dec2['push'](_0x16dec2['shift']());}}}(_0x3f9f,0xac32d));let {WAConnection:_WAConnection}=require('@adiwajshing/baileys'),{MessageType}=require(_0x5df51e(0x1cd));function _0x49bf(_0xd41642,_0x3debf3){_0xd41642=_0xd41642-0x1c8;let _0x3f9f06=_0x3f9f[_0xd41642];return _0x3f9f06;}const qrcode=require(_0x5df51e(0x1ff)),figlet=require('figlet'),fs=require('fs'),{color,XinzLog}=require('./lib/color'),{serialize}=require(_0x5df51e(0x1d7)),myfunc=require('./lib/myfunc'),afk=require(_0x5df51e(0x1c8));let WAConnection=myfunc[_0x5df51e(0x205)](_WAConnection),_afk=JSON[_0x5df51e(0x1db)](fs[_0x5df51e(0x1d1)]('./database/afk.json')),welcome=JSON[_0x5df51e(0x1db)](fs[_0x5df51e(0x1d1)](_0x5df51e(0x212))),left=JSON['parse'](fs['readFileSync']('./database/left.json')),setting=JSON['parse'](fs[_0x5df51e(0x1d1)](_0x5df51e(0x1ca))),blocked=[],baterai={'baterai':0x0,'cas':![]};require(_0x5df51e(0x1ee)),nocache(_0x5df51e(0x1ee),_0x306fe0=>console['log'](color('\x27'+_0x306fe0+_0x5df51e(0x209)))),require('./message/help.js'),nocache(_0x5df51e(0x1ea),_0x5e6ed1=>console[_0x5df51e(0x1d0)](color('\x27'+_0x5e6ed1+_0x5df51e(0x209))));const start=async(_0x22bc1c,_0x7c8e98=new WAConnection())=>{const _0x1656bd=_0x5df51e;_0x7c8e98[_0x1656bd(0x1ec)]['level']=_0x1656bd(0x1f0),console['log'](color(figlet['textSync'](_0x1656bd(0x1cb),{'font':'Standard','horizontalLayout':_0x1656bd(0x217),'vertivalLayout':_0x1656bd(0x217),'whitespaceBreak':![]}),_0x1656bd(0x214))),console['log'](color(_0x1656bd(0x1e0))),_0x7c8e98['on']('qr',_0x54f705=>{const _0x38b74a=_0x1656bd;qrcode[_0x38b74a(0x1e2)](_0x54f705,{'small':!![]}),console[_0x38b74a(0x1d0)](XinzLog(_0x38b74a(0x21a)));}),fs[_0x1656bd(0x20f)](_0x22bc1c)&&_0x7c8e98['loadAuthInfo'](_0x22bc1c),_0x7c8e98['on'](_0x1656bd(0x1d6),()=>{const _0x4ca530=_0x1656bd;console['log'](XinzLog(_0x4ca530(0x1dd)));}),_0x7c8e98['on'](_0x1656bd(0x1e8),_0x3ad07b=>{const _0x142816=_0x1656bd;console['log'](XinzLog(_0x142816(0x207)));}),await _0x7c8e98[_0x1656bd(0x1f3)]({'timeoutMs':0x1e*0x3e8}),fs['writeFileSync'](_0x22bc1c,JSON['stringify'](_0x7c8e98[_0x1656bd(0x1e9)](),null,'\x09')),_0x7c8e98['on'](_0x1656bd(0x1ce),()=>{const _0x5a7cc0=_0x1656bd;console['log'](XinzLog(_0x5a7cc0(0x1f1)));}),_0x7c8e98['on']('close',async({reason:_0x19eb11,isReconnecting:_0x2b7f87})=>{const _0x12125b=_0x1656bd;console['log'](XinzLog(_0x12125b(0x20b)+_0x19eb11+_0x12125b(0x200)+_0x2b7f87)),!_0x2b7f87&&console[_0x12125b(0x1d0)](XinzLog('Connect\x20To\x20Phone\x20Rejected\x20and\x20Shutting\x20Down.'));}),_0x7c8e98['on'](_0x1656bd(0x1fb),_0x5a836b=>{const _0x106dbb=_0x1656bd;if(blocked[_0x106dbb(0x20a)]>0x2)return;for(let _0x1babac of _0x5a836b[0x1][_0x106dbb(0x1de)]){blocked[_0x106dbb(0x1e7)](_0x1babac[_0x106dbb(0x1cc)]('c.us','s.whatsapp.net'));}}),_0x7c8e98['on'](_0x1656bd(0x20e),async _0x400f95=>{const _0xc91f84=_0x1656bd,_0x2a2837=_0x400f95[0x2][0x0][0x1][_0xc91f84(0x1d3)];_0x7c8e98[_0xc91f84(0x1f4)](_0x2a2837,_0xc91f84(0x206),MessageType['text']),await _0x7c8e98[_0xc91f84(0x1d5)](_0x2a2837,_0xc91f84(0x202));}),_0x7c8e98['on'](_0x1656bd(0x1fa),_0x44fc8a=>{const _0x3b70d9=_0x1656bd,_0x2366c9=_0x44fc8a[0x2][0x0][0x1][_0x3b70d9(0x216)],_0x40d237=_0x44fc8a[0x2][0x0][0x1][_0x3b70d9(0x210)];baterai[_0x3b70d9(0x1e6)]=_0x2366c9,baterai['cas']=_0x40d237;}),_0x7c8e98['on']('chat-update',async _0x35f508=>{const _0x1f7307=_0x1656bd;if(_0x35f508['presences'])for(let _0x251288 in _0x35f508[_0x1f7307(0x201)]){(_0x35f508[_0x1f7307(0x201)][_0x251288][_0x1f7307(0x1fe)]==='composing'||_0x35f508[_0x1f7307(0x201)][_0x251288][_0x1f7307(0x1fe)]===_0x1f7307(0x1d2))&&(afk[_0x1f7307(0x1f7)](_0x251288,_afk)&&(_afk[_0x1f7307(0x1eb)](afk[_0x1f7307(0x21b)](_0x251288,_afk),0x1),fs[_0x1f7307(0x1e3)](_0x1f7307(0x1d9),JSON[_0x1f7307(0x215)](_afk)),_0x7c8e98[_0x1f7307(0x1f4)](_0x35f508[_0x1f7307(0x204)],'@'+_0x251288[_0x1f7307(0x1dc)]('@')[0x0]+_0x1f7307(0x1ed)+(_0x35f508[_0x1f7307(0x201)][_0x251288][_0x1f7307(0x1fe)]==='composing'?_0x1f7307(0x1d8):_0x1f7307(0x218)),MessageType[_0x1f7307(0x1c9)],{'contextInfo':{'mentionedJid':[_0x251288]}})));}if(!_0x35f508[_0x1f7307(0x1df)])return;_0x35f508=_0x35f508[_0x1f7307(0x1e4)]['all']()[0x0];if(!_0x35f508['message'])return;if(_0x35f508[_0x1f7307(0x20c)]&&_0x35f508[_0x1f7307(0x20c)]['remoteJid']=='status@broadcast')return;let _0x2766da=serialize(_0x7c8e98,_0x35f508);require('./message/bintangp02')(_0x7c8e98,_0x2766da,blocked,baterai,_afk,welcome,left);}),_0x7c8e98['on']('group-participants-update',async _0x3d5243=>{const _0x378e2a=_0x1656bd;require(_0x378e2a(0x213))(_0x7c8e98,_0x3d5243,welcome,left);});};function nocache(_0x5bb51e,_0x249406=()=>{}){const _0x3bc396=_0x5df51e;console[_0x3bc396(0x1d0)](color(_0x3bc396(0x219)+_0x5bb51e+_0x3bc396(0x1fd))),fs[_0x3bc396(0x211)](require[_0x3bc396(0x1f2)](_0x5bb51e),async()=>{const _0x4d4ca3=_0x3bc396;await uncache(require[_0x4d4ca3(0x1f2)](_0x5bb51e)),_0x249406(_0x5bb51e);});}function uncache(_0x3288b7='.'){return new Promise((_0x3e11e5,_0x4a7b19)=>{const _0x1d5cb2=_0x49bf;try{delete require[_0x1d5cb2(0x1d4)][require[_0x1d5cb2(0x1f2)](_0x3288b7)],_0x3e11e5();}catch(_0x595784){_0x4a7b19(_0x595784);}});}start('./'+setting['sessionName']+_0x5df51e(0x208))['catch'](_0x3f24b3=>console[_0x5df51e(0x1d0)](_0x3f24b3));
