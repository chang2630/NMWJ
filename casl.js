/**
 作者：shawn
 日期：8-10
 长安深蓝小程序 app的一样用 一天几百积分
 抓取域名 app-api.deepal.com.cn 抓取账号请求头Authorization的值就可以
 变量格式：export caslCk='111'@'222' 多账户 换行 或者 @ 分割
 定时1-2次
 Cron：15 7,12 * * *
 [task_local]
 #长安深蓝小程序 打开积分
 [rewrite_local]
 https://app-api.deepal.com.cn/appapi/v1/member/ms/wallet url script-request-headers https://github.com/Shawn220528/scripts/blob/main/casl.js
 [MITM]
 hostname = app-api.deepal.com.cn
 */
const $=new Env('长安深蓝');const {log}=console;const Notify=0x71546^0x71547;const debug=0x5d729^0x5d729;let scriptVersion='1.0.0';let scriptVersionCheck=![];let caslCk=($['isNode']()?process['env']['caslCk']:$['getdata']('caslCk'))||'';let caslCkArr=[];let msg='';let memberId='';let memberName='';let userAgent='Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2015_6\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/15E148\x20MicroMessenger/8.0.26(0x18001a2d)\x20NetType/WIFI\x20Language/zh_CN';let curHour=new Date()['getHours']();!(async()=>{if(typeof $request!=='undefined'){await GetRewrite();}else{if(!await Envs())return;else{currTime=new Date(new Date()['getTime']()+new Date()['getTimezoneOffset']()*(0x1a7af^0x1a793)*(0xd16d4^0xd153c)+(0x2afd4^0x2afdc)*(0x193e3^0x193df)*(0x76644^0x76678)*(0xd6864^0xd6b8c))['toLocaleString']();log('\x0a\x0a=============================================\x20\x20\x20\x20\x0a脚本执行\x20-\x20北京时间(UTC+8)：'+currTime+'\x20\x0a=============================================\x0a');await getVersion();await $['wait'](randomInt(0xdf8ed^0xdfb05,0x3f2ef^0x3f957));if(!scriptVersionCheck){log('版本验证失败，请检查网络或更新版本重试！');return;}log('\x0a============\x20当前版本：'+scriptVersion+'============');log('\x0a===================\x20共找到\x20'+caslCkArr['length']+'\x20个账号\x20===================');if(debug){log('【debug】\x20这是你的全部账号数组:\x0a\x20'+caslCkArr);}for(let _0x16f832=0x0;_0x16f832<caslCkArr['length'];_0x16f832++){let _0x546c47=_0x16f832+0x1;log('\x0a=========\x20开始【第\x20'+_0x546c47+'\x20个账号】=========\x0a');caslCk=caslCkArr[_0x16f832];await $['wait'](delay());addNotifyStr('\x0a\x0a第'+_0x546c47+'个账号运行结果：',!![]);addNotifyStr('任务执行前钱包：',!![]);await wallet();await $['wait'](0x7d0);await carShow();await $['wait'](0x57017^0x571e3);await viewRule();await $['wait'](0x35d06^0x34e8e);await articlequery();await $['wait'](0x7d0);await activityquery();await $['wait'](0x7d0);addNotifyStr('任务执行后钱包：',!![]);await wallet();}await SendMsg(msg);}}})()['catch'](_0x35907c=>log(_0x35907c))['finally'](()=>$['done']());async function wallet(){return new Promise(_0x422bfc=>{let _0x3affa8={'url':'https://app-api.deepal.com.cn/appapi/v1/member/ms/wallet','headers':{'Host':'app-api.deepal.com.cn','Connection':'keep-alive','Accept':'application/json','User-Agent':''+userAgent,'Accept-Encoding':'gzip,compress,br,deflate','content-type':'application/x-www-form-urlencoded','authorization':''+caslCk,'apptype':'mp','appid':'wx0c0217402bdf4059','Referer':'https://servicewechat.com/wx0c0217402bdf4059/14/page-frame.html'}};if(debug){log('\x0a【debug】===============\x20这是\x20查看钱包\x20请求\x20url\x20===============');log(JSON['stringify'](_0x3affa8));}$['get'](_0x3affa8,async(_0x3645df,_0x4dd961,_0x4c8653)=>{try{if(debug){log('\x0a\x0a【debug】===============这是\x20查看钱包\x20返回data==============');log(_0x4c8653);}if(safeGet(_0x4c8653)){let _0x29389f=JSON['parse'](_0x4c8653);if(_0x29389f['code']==0xc8){let _0x574b64=_0x29389f['data'];memberId=_0x574b64['id'];memberName=_0x574b64['memberName'];addNotifyStr('用户信息查询成功：手机号：'+_0x574b64['mobile']+':\x20当前蓝宝石：'+_0x574b64['countPoint'],!![]);}else{addNotifyStr('用户信息查询成功失败：\x20'+_0x29389f['message'],!![]);}}}catch(_0x23afa4){log(_0x23afa4);log(_0x4c8653);}finally{_0x422bfc();}});});}async function viewRule(_0x5e9d88){return new Promise(_0x50202b=>{let _0x2b2ce7={'url':'https://app-api.deepal.com.cn/appapi/v1/member/ms/viewRule','headers':{'Host':'app-api.deepal.com.cn','Connection':'keep-alive','Accept':'application/json,\x20text/javascript,\x20*/*;\x20q=0.01','User-Agent':''+userAgent,'Accept-Language':'zh-CN,zh-Hans;q=0.9','Accept-Encoding':'gzip,compress,br,deflate','Content-Type':'application/json;charset=UTF-8','accept':'application/json','authorization':''+caslCk,'charset':'utf-8','apptype':'mp','appid':'wx0c0217402bdf4059','security-sign':'3c3049386af626e90d7479e5f6ffdd15|435a97ac-585a-4c56-b976-bfd1866a278d|1658806402133'}};if(debug){log('\x0a【debug】===============\x20这是\x20查看规则\x20请求\x20url\x20===============');log(JSON['stringify'](_0x2b2ce7));}$['get'](_0x2b2ce7,async(_0x5ef366,_0x328633,_0x5a3523)=>{try{if(debug){log('\x0a\x0a【debug】===============这是\x20查看规则\x20返回data==============');log(_0x5a3523);}if(safeGet(_0x5a3523)){let _0xc37267=JSON['parse'](_0x5a3523);addNotifyStr('查看规则：'+_0xc37267['message'],!![]);}}catch(_0x47ddc0){log(_0x47ddc0);log(_0x5a3523);}finally{_0x50202b();}});});}async function carShow(_0x447798){return new Promise(_0x42a2cd=>{let _0x2073e2={'url':'https://app-api.deepal.com.cn/appapi/v1/member/ms/carShow','headers':{'Host':'app-api.deepal.com.cn','Connection':'keep-alive','Accept':'application/json,\x20text/javascript,\x20*/*;\x20q=0.01','User-Agent':''+userAgent,'Accept-Language':'zh-CN,zh-Hans;q=0.9','Accept-Encoding':'gzip,compress,br,deflate','Content-Type':'application/json;charset=UTF-8','accept':'application/json','authorization':''+caslCk,'charset':'utf-8','apptype':'mp','appid':'wx0c0217402bdf4059','security-sign':'3c3049386af626e90d7479e5f6ffdd15|435a97ac-585a-4c56-b976-bfd1866a278d|1658806402133'}};if(debug){log('\x0a【debug】===============\x20这是\x20查看规则\x20请求\x20url\x20===============');log(JSON['stringify'](_0x2073e2));}$['get'](_0x2073e2,async(_0x58c1e0,_0x1cd581,_0x4b965f)=>{try{if(debug){log('\x0a\x0a【debug】===============这是\x20查看规则\x20返回data==============');log(_0x4b965f);}if(safeGet(_0x4b965f)){let _0x18d960=JSON['parse'](_0x4b965f);addNotifyStr('查看车型：'+_0x18d960['message'],!![]);}}catch(_0x11b61e){log(_0x11b61e);log(_0x4b965f);}finally{_0x42a2cd();}});});}async function articlequery(){return new Promise(_0x3ced4b=>{let _0x75201b={'url':'https://app-api.deepal.com.cn/appapi/v1/m_app/article/query','headers':{'Host':'app-api.deepal.com.cn','Connection':'keep-alive','Accept':'application/json,\x20text/javascript,\x20*/*;\x20q=0.01','User-Agent':''+userAgent,'Accept-Language':'zh-CN,zh-Hans;q=0.9','Accept-Encoding':'gzip,compress,br,deflate','Content-Type':'application/json;charset=UTF-8','accept':'application/json','authorization':''+caslCk,'charset':'utf-8','apptype':'mp','appid':'wx0c0217402bdf4059','security-sign':'3c3049386af626e90d7479e5f6ffdd15|435a97ac-585a-4c56-b976-bfd1866a278d|'+timestampMs()},'body':'{\x22body\x22:\x20{\x22isRecommend\x22:\x20\x221\x22},\x20\x22index\x22:\x20\x221\x22,\x20\x22size\x22:\x20\x221000\x22,\x20\x22lastId\x22:\x20\x220\x22}'};if(debug){log('\x0a【debug】===============\x20这是\x20查询主题\x20请求\x20url\x20===============');log(JSON['stringify'](_0x75201b));}$['post'](_0x75201b,async(_0x2c6ee2,_0x5d09ae,_0x1b4f9b)=>{try{if(debug){log('\x0a\x0a【debug】===============这是\x20查询主题\x20返回data==============');log(_0x1b4f9b);}if(safeGet(_0x1b4f9b)){let _0x2248fe=JSON['parse'](_0x1b4f9b);if(_0x2248fe['code']==(0xbfe1e^0xbfed6)){var _0x5dc201=_0x2248fe['data'];addNotifyStr('查询主题信息列表成功',!![]);addNotifyStr('开始随机遍历三次发帖',!![]);for(let _0x3eada7=0x0;_0x3eada7<(0xb282f^0xb282d);_0x3eada7++){var _0x599386=_0x5dc201['length']*Math['random']();var _0xdb64ad=Math['floor'](_0x599386);var _0x178b30=_0x5dc201[_0xdb64ad]['id'];addNotifyStr('【开始第'+(_0x3eada7+(0xa17eb^0xa17ea))+'个主题帖子】',!![]);await praises(_0x178b30);await $['wait'](0x53187^0x5220f);await viewarticle1(_0x178b30);await $['wait'](0x1388);await like(_0x178b30);await $['wait'](0x1388);await comment(_0x178b30);await $['wait'](0x9d50a^0x9165a);await articleshare(_0x178b30);await $['wait'](0xc350);await deletePraises(_0x178b30);await $['wait'](0x1388);await deleteLike(_0x178b30);await $['wait'](0x1388);}}else{addNotifyStr('查询主题信息列表失败：\x20'+_0x2248fe['message']);}}}catch(_0x96b89e){log(_0x96b89e);log(_0x1b4f9b);}finally{_0x3ced4b();}});});}async function activityquery(){return new Promise(_0x332427=>{let _0x17773f={'url':'https://app-api.deepal.com.cn/appapi/v1/m_app/activity/query','headers':{'Host':'app-api.deepal.com.cn','Connection':'keep-alive','Accept':'application/json,\x20text/javascript,\x20*/*;\x20q=0.01','User-Agent':''+userAgent,'Accept-Language':'zh-CN,zh-Hans;q=0.9','Accept-Encoding':'gzip,compress,br,deflate','Content-Type':'application/json;charset=UTF-8','accept':'application/json','authorization':''+caslCk,'charset':'utf-8','apptype':'mp','appid':'wx0c0217402bdf4059','security-sign':'3c3049386af626e90d7479e5f6ffdd15|435a97ac-585a-4c56-b976-bfd1866a278d|'+timestampMs()},'body':'{\x22body\x22:{\x22cityCode\x22:\x22-1\x22,\x22cityName\x22:\x22全国\x22,\x22lat\x22:0,\x22lng\x22:0},\x22index\x22:1,\x22size\x22:100,\x22lastId\x22:0}'};if(debug){log('\x0a【debug】===============\x20这是\x20查询主题信息列表\x20请求\x20url\x20===============');log(JSON['stringify'](_0x17773f));}$['post'](_0x17773f,async(_0x21267c,_0x4b72d3,_0x3723ff)=>{try{if(debug){log('\x0a\x0a【debug】===============这是\x20查询主题信息列表\x20返回data==============');log(_0x3723ff);}if(safeGet(_0x3723ff)){let _0x45d176=JSON['parse'](_0x3723ff);addNotifyStr('查询主题信息列表：\x20'+_0x45d176['message']);if(_0x45d176['code']==0xc8){var _0x1fa1d0=_0x45d176['data']['activity'];for(let _0x33cd50=0x0;_0x33cd50<_0x1fa1d0['length'];_0x33cd50++){var _0x580899=_0x1fa1d0[_0x33cd50]['body']['id'];addNotifyStr('【开始第'+(_0x33cd50+(0xd6848^0xd6849))+'个活动】',!![]);await activityview(_0x580899);await $['wait'](0x1f4);await share(_0x580899);await $['wait'](0x1f4);}}}}catch(_0x1843fa){log(_0x1843fa);log(_0x3723ff);}finally{_0x332427();}});});}async function share(_0x3bdad4){return new Promise(_0xdb3423=>{let _0x6dcb23={'url':'https://app-api.deepal.com.cn/appapi/v1/m_app/activity/'+_0x3bdad4+'/share','headers':{'Host':'app-api.deepal.com.cn','Connection':'keep-alive','Accept':'application/json,\x20text/javascript,\x20*/*;\x20q=0.01','User-Agent':''+userAgent,'Accept-Language':'zh-CN,zh-Hans;q=0.9','Accept-Encoding':'gzip,compress,br,deflate','Content-Type':'application/json;charset=UTF-8','accept':'application/json','authorization':caslCk,'charset':'utf-8','apptype':'mp','appid':'wx0c0217402bdf4059','security-sign':'3c3049386af626e90d7479e5f6ffdd15|435a97ac-585a-4c56-b976-bfd1866a278d|'+timestampMs()}};if(debug){log('\x0a【debug】===============\x20这是\x20活动分享\x20请求\x20url\x20===============');log(JSON['stringify'](_0x6dcb23));}$['post'](_0x6dcb23,async(_0x1b66c8,_0x15e56f,_0x3ce040)=>{try{if(debug){log('\x0a\x0a【debug】===============这是\x20活动分享\x20返回data==============');log(_0x3ce040);}if(safeGet(_0x3ce040)){let _0x559489=JSON['parse'](_0x3ce040);addNotifyStr('活动分享：\x20'+_0x559489['message']);}}catch(_0x4ffce1){log(_0x4ffce1);log(_0x3ce040);}finally{_0xdb3423();}});});}async function activityview(_0x1a7e7e){return new Promise(_0x330433=>{let _0x52a1b1={'url':'https://app-api.deepal.com.cn/appapi/v1/m_app/activity/'+_0x1a7e7e,'headers':{'Host':'app-api.deepal.com.cn','Connection':'keep-alive','Accept':'application/json,\x20text/javascript,\x20*/*;\x20q=0.01','User-Agent':''+userAgent,'Accept-Language':'zh-CN,zh-Hans;q=0.9','Accept-Encoding':'gzip,compress,br,deflate','Content-Type':'application/json;charset=UTF-8','accept':'application/json','authorization':caslCk,'charset':'utf-8','apptype':'mp','appid':'wx0c0217402bdf4059','security-sign':'3c3049386af626e90d7479e5f6ffdd15|435a97ac-585a-4c56-b976-bfd1866a278d|'+timestampMs()}};if(debug){log('\x0a【debug】===============\x20这是\x20活动浏览\x20请求\x20url\x20===============');log(JSON['stringify'](_0x52a1b1));}$['get'](_0x52a1b1,async(_0x3850bc,_0x1f2126,_0x44bfee)=>{try{if(debug){log('\x0a\x0a【debug】===============这是\x20活动浏览\x20返回data==============');log(_0x44bfee);}if(safeGet(_0x44bfee)){let _0x23ba8a=JSON['parse'](_0x44bfee);addNotifyStr('活动浏览：\x20'+_0x23ba8a['message']);}}catch(_0x678239){log(_0x678239);log(_0x44bfee);}finally{_0x330433();}});});}async function comment(_0x3bcadf){var _0x95dd3e=randomInt(0x1,0xf);var _0x45f4ae=['点赞','赞','赞一个','有用','强','学习','学下','看看','学到','嘿嘿','good','very\x20good','不错','真好','yyds'];var _0x38933d=_0x45f4ae[_0x95dd3e];return new Promise(_0x44ad6f=>{let _0x276cab={'url':'https://app-api.deepal.com.cn/appapi/v1/m_app/comment','headers':{'Host':'app-api.deepal.com.cn','Connection':'keep-alive','Accept':'application/json,\x20text/javascript,\x20*/*;\x20q=0.01','User-Agent':''+userAgent,'Accept-Language':'zh-CN,zh-Hans;q=0.9','Accept-Encoding':'gzip,compress,br,deflate','Content-Type':'application/json;charset=UTF-8','accept':'application/json','authorization':caslCk,'charset':'utf-8','apptype':'mp','appid':'wx0c0217402bdf4059','security-sign':'3c3049386af626e90d7479e5f6ffdd15|435a97ac-585a-4c56-b976-bfd1866a278d|'+timestampMs()},'body':'{\x22articleId\x22:'+_0x3bcadf+',\x22memberName\x22:\x22'+memberName+'\x22,\x22memberId\x22:'+memberId+',\x22memberFace\x22:\x22\x22,\x22parentId\x22:null,\x22content\x22:\x22'+_0x38933d+'\x22,\x22quote\x22:\x22长安深蓝SL03定购指南-第二弹\x22,\x22authorType\x22:\x221\x22,\x22quoteMemberId\x22:\x221\x22,\x22quoteMemberName\x22:\x22长安深蓝\x22,\x22quoteMemberFace\x22:\x22https://files.deepal.com.cn/member/head-portrait/6c599d214601820c01dedcffcb2a3be2.jpg\x22}'};if(debug){log('\x0a【debug】===============\x20这是\x20评论主题\x20请求\x20url\x20===============');log(JSON['stringify'](_0x276cab));}$['post'](_0x276cab,async(_0x5864b1,_0x3c9951,_0x49005c)=>{try{if(debug){log('\x0a\x0a【debug】===============这是\x20评论主题\x20返回data==============');log(_0x49005c);}if(safeGet(_0x49005c)){let _0x357df1=JSON['parse'](_0x49005c);addNotifyStr('评论主题：\x20'+_0x357df1['message']);}}catch(_0x49bbbf){log(_0x49bbbf);log(_0x49005c);}finally{_0x44ad6f();}});});}async function articleshare(_0x2743df){return new Promise(_0x441031=>{let _0x5a934f={'url':'https://app-api.deepal.com.cn/appapi/v1/m_app/article/'+_0x2743df+'/share','headers':{'Host':'app-api.deepal.com.cn','Connection':'keep-alive','Accept':'application/json,\x20text/javascript,\x20*/*;\x20q=0.01','User-Agent':''+userAgent,'Accept-Language':'zh-CN,zh-Hans;q=0.9','Accept-Encoding':'gzip,compress,br,deflate','Content-Type':'application/json;charset=UTF-8','accept':'application/json','authorization':''+caslCk,'charset':'utf-8','apptype':'mp','appid':'wx0c0217402bdf4059','security-sign':'3c3049386af626e90d7479e5f6ffdd15|435a97ac-585a-4c56-b976-bfd1866a278d|'+timestampMs()}};if(debug){log('\x0a【debug】===============\x20这是\x20分享主题\x20请求\x20url\x20===============');log(JSON['stringify'](_0x5a934f));}$['post'](_0x5a934f,async(_0x1b14b4,_0x3f96f4,_0x4d62c2)=>{try{if(debug){log('\x0a\x0a【debug】===============这是\x20分享主题\x20返回data==============');log(_0x4d62c2);}if(safeGet(_0x4d62c2)){let _0x4370ab=JSON['parse'](_0x4d62c2);addNotifyStr('分享主题：\x20'+_0x4370ab['message']);}}catch(_0x39e028){log(_0x39e028);log(_0x4d62c2);}finally{_0x441031();}});});}async function viewarticle1(_0x36ebce){return new Promise(_0xb4f93=>{let _0x5331b6={'url':'https://app-api.deepal.com.cn/appapi/v1/member/ms/article/view','headers':{'Host':'app-api.deepal.com.cn','Connection':'keep-alive','Accept':'application/json,\x20text/javascript,\x20*/*;\x20q=0.01','User-Agent':''+userAgent,'Accept-Language':'zh-CN,zh-Hans;q=0.9','Accept-Encoding':'gzip,compress,br,deflate','Content-Type':'application/json;charset=UTF-8','accept':'application/json','authorization':''+caslCk,'charset':'utf-8','apptype':'mp','appid':'wx0c0217402bdf4059','security-sign':'3c3049386af626e90d7479e5f6ffdd15|435a97ac-585a-4c56-b976-bfd1866a278d|'+timestampMs()},'body':'{\x22articleId\x22:\x20'+_0x36ebce+',\x20\x22type\x22:\x201}'};if(debug){log('\x0a【debug】===============\x20这是\x20浏览主题\x20请求\x20url\x20===============');log(JSON['stringify'](_0x5331b6));}$['post'](_0x5331b6,async(_0x517e2a,_0x12b1f7,_0x352209)=>{try{if(debug){log('\x0a\x0a【debug】===============这是\x20浏览主题\x20返回data==============');log(_0x352209);}if(safeGet(_0x352209)){let _0x5cc154=JSON['parse'](_0x352209);addNotifyStr('浏览主题：\x20'+_0x5cc154['message']);}}catch(_0x57c683){log(_0x57c683);log(_0x352209);}finally{_0xb4f93();}});});}async function like(_0x3d946a){return new Promise(_0x2794ac=>{let _0x6f8e87={'url':'https://app-api.deepal.com.cn/appapi/v1/m_app/article/'+_0x3d946a+'/like','headers':{'Host':'app-api.deepal.com.cn','Connection':'keep-alive','Accept':'application/json,\x20text/javascript,\x20*/*;\x20q=0.01','User-Agent':''+userAgent,'Accept-Language':'zh-CN,zh-Hans;q=0.9','Accept-Encoding':'gzip,compress,br,deflate','Content-Type':'application/json;charset=UTF-8','accept':'application/json','authorization':''+caslCk,'charset':'utf-8','apptype':'mp','appid':'wx0c0217402bdf4059','security-sign':'3c3049386af626e90d7479e5f6ffdd15|435a97ac-585a-4c56-b976-bfd1866a278d|'+timestampMs()}};if(debug){log('\x0a【debug】===============\x20这是\x20收藏主题\x20请求\x20url\x20===============');log(JSON['stringify'](_0x6f8e87));}$['post'](_0x6f8e87,async(_0xc8bf55,_0x30f3f4,_0xf1b0d6)=>{try{if(debug){log('\x0a\x0a【debug】===============这是\x20收藏主题\x20返回data==============');log(_0xf1b0d6);}if(safeGet(_0xf1b0d6)){let _0x3ca94d=JSON['parse'](_0xf1b0d6);addNotifyStr('收藏主题：\x20'+_0x3ca94d['message']);}}catch(_0x46b8eb){log(_0x46b8eb);log(_0xf1b0d6);}finally{_0x2794ac();}});});}async function deleteLike(_0x474e37){return new Promise(_0x2e7714=>{let _0x42d91f={'url':'https://app-api.deepal.com.cn/appapi/v1/m_app/article/'+_0x474e37+'/like/delete','headers':{'Host':'app-api.deepal.com.cn','Connection':'keep-alive','Accept':'application/json,\x20text/javascript,\x20*/*;\x20q=0.01','User-Agent':''+userAgent,'Accept-Language':'zh-CN,zh-Hans;q=0.9','Accept-Encoding':'gzip,compress,br,deflate','Content-Type':'application/json;charset=UTF-8','accept':'application/json','authorization':''+caslCk,'charset':'utf-8','apptype':'mp','appid':'wx0c0217402bdf4059','security-sign':'3c3049386af626e90d7479e5f6ffdd15|435a97ac-585a-4c56-b976-bfd1866a278d|'+timestampMs()}};if(debug){log('\x0a【debug】===============\x20这是\x20取消收藏主题\x20请求\x20url\x20===============');log(JSON['stringify'](_0x42d91f));}$['post'](_0x42d91f,async(_0x2f7e3a,_0x3fdd22,_0x32f7ba)=>{try{if(debug){log('\x0a\x0a【debug】===============这是\x20取消收藏主题\x20返回data==============');log(_0x32f7ba);}if(safeGet(_0x32f7ba)){let _0x563096=JSON['parse'](_0x32f7ba);addNotifyStr('取消收藏主题：\x20'+_0x563096['message']);}}catch(_0x33a323){log(_0x33a323);log(_0x32f7ba);}finally{_0x2e7714();}});});}async function praises(_0x202ddf){return new Promise(_0x47e24f=>{let _0x26f108={'url':'https://app-api.deepal.com.cn/appapi/v1/m_app/article/'+_0x202ddf+'/praises','headers':{'Host':'app-api.deepal.com.cn','Connection':'keep-alive','Accept':'application/json,\x20text/javascript,\x20*/*;\x20q=0.01','User-Agent':''+userAgent,'Accept-Language':'zh-CN,zh-Hans;q=0.9','Accept-Encoding':'gzip,compress,br,deflate','Content-Type':'application/json;charset=UTF-8','accept':'application/json','authorization':''+caslCk,'charset':'utf-8','apptype':'mp','appid':'wx0c0217402bdf4059','security-sign':'3c3049386af626e90d7479e5f6ffdd15|435a97ac-585a-4c56-b976-bfd1866a278d|'+timestampMs()}};if(debug){log('\x0a【debug】===============\x20这是\x20点赞主题\x20请求\x20url\x20===============');log(JSON['stringify'](_0x26f108));}$['post'](_0x26f108,async(_0x3c7787,_0x272f8b,_0x5187f9)=>{try{if(debug){log('\x0a\x0a【debug】===============这是\x20点赞主题\x20返回data==============');log(_0x5187f9);}if(safeGet(_0x5187f9)){let _0x485396=JSON['parse'](_0x5187f9);addNotifyStr('点赞主题：\x20'+_0x485396['message']);}}catch(_0x4c0562){log(_0x4c0562);log(_0x5187f9);}finally{_0x47e24f();}});});}async function deletePraises(_0x14e856){return new Promise(_0x7e400f=>{let _0x3f8a86={'url':'https://app-api.deepal.com.cn/appapi/v1/m_app/article/'+_0x14e856+'/praises/delete','headers':{'Host':'app-api.deepal.com.cn','Connection':'keep-alive','Accept':'application/json,\x20text/javascript,\x20*/*;\x20q=0.01','User-Agent':''+userAgent,'Accept-Language':'zh-CN,zh-Hans;q=0.9','Accept-Encoding':'gzip,compress,br,deflate','Content-Type':'application/json;charset=UTF-8','accept':'application/json','authorization':''+caslCk,'charset':'utf-8','apptype':'mp','appid':'wx0c0217402bdf4059','security-sign':'3c3049386af626e90d7479e5f6ffdd15|435a97ac-585a-4c56-b976-bfd1866a278d|'+timestampMs()}};if(debug){log('\x0a【debug】===============\x20这是\x20取消点赞主题\x20请求\x20url\x20===============');log(JSON['stringify'](_0x3f8a86));}$['post'](_0x3f8a86,async(_0x474f06,_0x95f4cd,_0x199811)=>{try{if(debug){log('\x0a\x0a【debug】===============这是\x20取消点赞主题\x20返回data==============');log(_0x199811);}if(safeGet(_0x199811)){let _0x424926=JSON['parse'](_0x199811);addNotifyStr('取消点赞主题：\x20'+_0x424926['message']);}}catch(_0xbc063d){log(_0xbc063d);log(_0x199811);}finally{_0x7e400f();}});});}function randomInt(_0x4cd642,_0x3b9272){return Math['round'](Math['random']()*(_0x3b9272-_0x4cd642)+_0x4cd642);}function timestampMs(){return new Date()['getTime']();}function timestampS(){return Date['parse'](new Date())/(0xe6917^0xe6aff);}async function Envs(){if(caslCk){if(caslCk['indexOf']('@')!=-0x1){caslCk['split']('@')['forEach'](_0xea62ed=>{caslCkArr['push'](_0xea62ed);});}else if(caslCk['indexOf']('\x0a')!=-0x1){caslCk['split']('\x0a')['forEach'](_0x150ba1=>{caslCkArr['push'](_0x150ba1);});}else{caslCkArr['push'](caslCk);}}else{log('\x0a\x20【'+$['name']+'】：未填写变量\x20caslCk');return;}return!![];}async function GetRewrite(){if($request['url']['indexOf']('appapi/v1/member/ms/wallet')>-0x1){const _0x40a92a=$request['headers']['Authorization'];if(caslCk){if(caslCk['indexOf'](_0x40a92a)==-(0xadeca^0xadecb)){caslCk=caslCk+'@'+_0x40a92a;$['setdata'](caslCk,'caslCk');let _0x19dd26=caslCk['split']('@');$['msg']('【'+$['name']+'】'+('\x20获取第'+_0x19dd26['length']+'个\x20ck\x20成功:\x20'+_0x40a92a+'\x20,不用请自行关闭重写!'));}}else{$['setdata'](_0x40a92a,'caslCk');$['msg']('【'+$['name']+'】'+('\x20获取第1个\x20ck\x20成功:\x20'+_0x40a92a+'\x20,不用请自行关闭重写!'));}}}function addNotifyStr(_0x359c34,_0x4aec1b=!![]){if(_0x4aec1b){log(_0x359c34+'\x0a');}msg+=_0x359c34+'\x0a';}async function SendMsg(_0x39625e){if(!_0x39625e)return;if(Notify>0x0){if($['isNode']()){var _0x2fd972=require('./sendNotify');await _0x2fd972['sendNotify']($['name'],_0x39625e);}else{$['msg'](_0x39625e);}}else{log(_0x39625e);}}function safeGet(_0x5337ed){try{if(typeof JSON['parse'](_0x5337ed)=='object'){return!![];}}catch(_0x30bd56){console['log'](_0x30bd56);console['log']('服务器访问数据为空，请检查自身设备网络情况');return![];}}function delay(){let _0x40bf7a=parseInt(Math['random']()*0x186a0);if(_0x40bf7a>0x7530){return delay();}else{console['log']('随机延时：',_0x40bf7a+'ms,\x20避免大家运行时间一样');return _0x40bf7a;}}function getVersion(_0x4ee889=(0xa778d^0xa778e)*(0xc9504^0xc96ec)){return new Promise(_0x68ae51=>{let _0x51cb63={'url':'https://ghproxy.com/https://github.com/Shawn220528/scripts/blob/main/version.txt'};$['get'](_0x51cb63,async(_0x56be30,_0x5b6ff7,_0x592448)=>{try{if(_0x592448['indexOf']('cb76f70fd4ce258b3a163be04acba26d76e3f68f')!=-0x1){scriptVersionCheck=!![];log('版本验证成功');}}catch(_0x24f5b3){$['logErr'](_0x24f5b3,_0x5b6ff7);}finally{_0x68ae51();}},_0x4ee889);});}function Env(_0x2efd6c,_0x155e17){'undefined'!=typeof process&&JSON['stringify'](process['env'])['indexOf']('GITHUB')>-0x1&&process['exit'](0x0);class _0x2df7b7{constructor(_0x2aefbc){this['env']=_0x2aefbc;}['send'](_0x33bf56,_0xb4146e='GET'){_0x33bf56='string'==typeof _0x33bf56?{'url':_0x33bf56}:_0x33bf56;let _0x47acb9=this['get'];return'POST'===_0xb4146e&&(_0x47acb9=this['post']),new Promise((_0x4b0348,_0x530c77)=>{_0x47acb9['call'](this,_0x33bf56,(_0x1317c7,_0x2e600a,_0x18a5c9)=>{_0x1317c7?_0x530c77(_0x1317c7):_0x4b0348(_0x2e600a);});});}['get'](_0x560c56){return this['send']['call'](this['env'],_0x560c56);}['post'](_0x2a952d){return this['send']['call'](this['env'],_0x2a952d,'POST');}}return new class{constructor(_0x1c1b98,_0x5f2d37){this['name']=_0x1c1b98,this['http']=new _0x2df7b7(this),this['data']=null,this['dataFile']='box.dat',this['logs']=[],this['isMute']=!(0x4acab^0x4acaa),this['isNeedRewrite']=!0x1,this['logSeparator']='\x0a',this['startTime']=new Date()['getTime'](),Object['assign'](this,_0x5f2d37),this['log']('','🔔'+this['name']+',\x20开始!');}['isNode'](){return'undefined'!=typeof module&&!!module['exports'];}['isQuanX'](){return'undefined'!=typeof $task;}['isSurge'](){return'undefined'!=typeof $httpClient&&'undefined'==typeof $loon;}['isLoon'](){return'undefined'!=typeof $loon;}['toObj'](_0x4cc176,_0x13f951=null){try{return JSON['parse'](_0x4cc176);}catch{return _0x13f951;}}['toStr'](_0x5076e9,_0x8bf0ae=null){try{return JSON['stringify'](_0x5076e9);}catch{return _0x8bf0ae;}}['getjson'](_0x31a516,_0x5a4bde){let _0x34c1bb=_0x5a4bde;const _0x5003cd=this['getdata'](_0x31a516);if(_0x5003cd)try{_0x34c1bb=JSON['parse'](this['getdata'](_0x31a516));}catch{}return _0x34c1bb;}['setjson'](_0x4d0b41,_0x4c6ab3){try{return this['setdata'](JSON['stringify'](_0x4d0b41),_0x4c6ab3);}catch{return!0x1;}}['getScript'](_0x3c1551){return new Promise(_0x20bcf3=>{this['get']({'url':_0x3c1551},(_0x2366b5,_0x3b44bb,_0x7b7d3f)=>_0x20bcf3(_0x7b7d3f));});}['runScript'](_0x39ef19,_0x4dc269){return new Promise(_0x2b0b6e=>{let _0x3dcf99=this['getdata']('@chavy_boxjs_userCfgs.httpapi');_0x3dcf99=_0x3dcf99?_0x3dcf99['replace'](/\n/g,'')['trim']():_0x3dcf99;let _0x1898a6=this['getdata']('@chavy_boxjs_userCfgs.httpapi_timeout');_0x1898a6=_0x1898a6?(0x2874d^0x2874c)*_0x1898a6:0x14,_0x1898a6=_0x4dc269&&_0x4dc269['timeout']?_0x4dc269['timeout']:_0x1898a6;const [_0x1abf2e,_0x153687]=_0x3dcf99['split']('@'),_0x34f8ee={'url':'http://'+_0x153687+'/v1/scripting/evaluate','body':{'script_text':_0x39ef19,'mock_type':'cron','timeout':_0x1898a6},'headers':{'X-Key':_0x1abf2e,'Accept':'*/*'}};this['post'](_0x34f8ee,(_0x176e25,_0x7cc6ee,_0x56e88c)=>_0x2b0b6e(_0x56e88c));})['catch'](_0x151cba=>this['logErr'](_0x151cba));}['loaddata'](){if(!this['isNode']())return{};{this['fs']=this['fs']?this['fs']:require('fs'),this['path']=this['path']?this['path']:require('path');const _0xf41d0=this['path']['resolve'](this['dataFile']),_0x4bd360=this['path']['resolve'](process['cwd'](),this['dataFile']),_0x2f8bcf=this['fs']['existsSync'](_0xf41d0),_0x2f15cf=!_0x2f8bcf&&this['fs']['existsSync'](_0x4bd360);if(!_0x2f8bcf&&!_0x2f15cf)return{};{const _0x56ad82=_0x2f8bcf?_0xf41d0:_0x4bd360;try{return JSON['parse'](this['fs']['readFileSync'](_0x56ad82));}catch(_0x2ed540){return{};}}}}['writedata'](){if(this['isNode']()){this['fs']=this['fs']?this['fs']:require('fs'),this['path']=this['path']?this['path']:require('path');const _0x2a7b85=this['path']['resolve'](this['dataFile']),_0x3cc45f=this['path']['resolve'](process['cwd'](),this['dataFile']),_0xcd595d=this['fs']['existsSync'](_0x2a7b85),_0x5d5ca8=!_0xcd595d&&this['fs']['existsSync'](_0x3cc45f),_0x18dec5=JSON['stringify'](this['data']);_0xcd595d?this['fs']['writeFileSync'](_0x2a7b85,_0x18dec5):_0x5d5ca8?this['fs']['writeFileSync'](_0x3cc45f,_0x18dec5):this['fs']['writeFileSync'](_0x2a7b85,_0x18dec5);}}['lodash_get'](_0x591d8d,_0x22ba63,_0x596a8f){const _0x5c7413=_0x22ba63['replace'](/\[(\d+)\]/g,'.$1')['split']('.');let _0x410b15=_0x591d8d;for(const _0x4ccac4 of _0x5c7413)if(_0x410b15=Object(_0x410b15)[_0x4ccac4],void 0x0===_0x410b15)return _0x596a8f;return _0x410b15;}['lodash_set'](_0x5280d0,_0x2d587f,_0x42333a){return Object(_0x5280d0)!==_0x5280d0?_0x5280d0:(Array['isArray'](_0x2d587f)||(_0x2d587f=_0x2d587f['toString']()['match'](/[^.[\]]+/g)||[]),_0x2d587f['slice'](0x0,-(0x349e3^0x349e2))['reduce']((_0x2d8606,_0x3714f2,_0xfa595e)=>Object(_0x2d8606[_0x3714f2])===_0x2d8606[_0x3714f2]?_0x2d8606[_0x3714f2]:_0x2d8606[_0x3714f2]=Math['abs'](_0x2d587f[_0xfa595e+(0x55d08^0x55d09)])>>(0xd1390^0xd1390)==+_0x2d587f[_0xfa595e+(0xe3065^0xe3064)]?[]:{},_0x5280d0)[_0x2d587f[_0x2d587f['length']-0x1]]=_0x42333a,_0x5280d0);}['getdata'](_0x5086e2){let _0x2a1903=this['getval'](_0x5086e2);if(/^@/['test'](_0x5086e2)){const [,_0x3be2a8,_0x41b9ae]=/^@(.*?)\.(.*?)$/['exec'](_0x5086e2),_0x4fc841=_0x3be2a8?this['getval'](_0x3be2a8):'';if(_0x4fc841)try{const _0x44eeec=JSON['parse'](_0x4fc841);_0x2a1903=_0x44eeec?this['lodash_get'](_0x44eeec,_0x41b9ae,''):_0x2a1903;}catch(_0x1587e6){_0x2a1903='';}}return _0x2a1903;}['setdata'](_0x3e1c72,_0x370dc8){let _0x53ee5a=!0x1;if(/^@/['test'](_0x370dc8)){const [,_0x3998ae,_0x1fe66b]=/^@(.*?)\.(.*?)$/['exec'](_0x370dc8),_0x48f895=this['getval'](_0x3998ae),_0x17caa5=_0x3998ae?'null'===_0x48f895?null:_0x48f895||'{}':'{}';try{const _0x4aa28a=JSON['parse'](_0x17caa5);this['lodash_set'](_0x4aa28a,_0x1fe66b,_0x3e1c72),_0x53ee5a=this['setval'](JSON['stringify'](_0x4aa28a),_0x3998ae);}catch(_0x198d90){const _0x58cd63={};this['lodash_set'](_0x58cd63,_0x1fe66b,_0x3e1c72),_0x53ee5a=this['setval'](JSON['stringify'](_0x58cd63),_0x3998ae);}}else _0x53ee5a=this['setval'](_0x3e1c72,_0x370dc8);return _0x53ee5a;}['getval'](_0x88e804){return this['isSurge']()||this['isLoon']()?$persistentStore['read'](_0x88e804):this['isQuanX']()?$prefs['valueForKey'](_0x88e804):this['isNode']()?(this['data']=this['loaddata'](),this['data'][_0x88e804]):this['data']&&this['data'][_0x88e804]||null;}['setval'](_0x52dd1f,_0x664fe5){return this['isSurge']()||this['isLoon']()?$persistentStore['write'](_0x52dd1f,_0x664fe5):this['isQuanX']()?$prefs['setValueForKey'](_0x52dd1f,_0x664fe5):this['isNode']()?(this['data']=this['loaddata'](),this['data'][_0x664fe5]=_0x52dd1f,this['writedata'](),!(0x640d1^0x640d1)):this['data']&&this['data'][_0x664fe5]||null;}['initGotEnv'](_0x43e31d){this['got']=this['got']?this['got']:require('got'),this['cktough']=this['cktough']?this['cktough']:require('tough-cookie'),this['ckjar']=this['ckjar']?this['ckjar']:new this['cktough']['CookieJar'](),_0x43e31d&&(_0x43e31d['headers']=_0x43e31d['headers']?_0x43e31d['headers']:{},void(0x6f99d^0x6f99d)===_0x43e31d['headers']['Cookie']&&void 0x0===_0x43e31d['cookieJar']&&(_0x43e31d['cookieJar']=this['ckjar']));}['get'](_0x442c99,_0x3aa909=()=>{}){_0x442c99['headers']&&(delete _0x442c99['headers']['Content-Type'],delete _0x442c99['headers']['Content-Length']),this['isSurge']()||this['isLoon']()?(this['isSurge']()&&this['isNeedRewrite']&&(_0x442c99['headers']=_0x442c99['headers']||{},Object['assign'](_0x442c99['headers'],{'X-Surge-Skip-Scripting':!(0xa540e^0xa540f)})),$httpClient['get'](_0x442c99,(_0x547132,_0x3ec432,_0x50a179)=>{!_0x547132&&_0x3ec432&&(_0x3ec432['body']=_0x50a179,_0x3ec432['statusCode']=_0x3ec432['status']),_0x3aa909(_0x547132,_0x3ec432,_0x50a179);})):this['isQuanX']()?(this['isNeedRewrite']&&(_0x442c99['opts']=_0x442c99['opts']||{},Object['assign'](_0x442c99['opts'],{'hints':!0x1})),$task['fetch'](_0x442c99)['then'](_0x419e8a=>{const {statusCode:_0x5e34b8,statusCode:_0x402710,headers:_0x1a06a8,body:_0x5045b6}=_0x419e8a;_0x3aa909(null,{'status':_0x5e34b8,'statusCode':_0x402710,'headers':_0x1a06a8,'body':_0x5045b6},_0x5045b6);},_0x576987=>_0x3aa909(_0x576987))):this['isNode']()&&(this['initGotEnv'](_0x442c99),this['got'](_0x442c99)['on']('redirect',(_0x78db1e,_0x5ce559)=>{try{if(_0x78db1e['headers']['set-cookie']){const _0x4ea626=_0x78db1e['headers']['set-cookie']['map'](this['cktough']['Cookie']['parse'])['toString']();_0x4ea626&&this['ckjar']['setCookieSync'](_0x4ea626,null),_0x5ce559['cookieJar']=this['ckjar'];}}catch(_0x2efbc7){this['logErr'](_0x2efbc7);}})['then'](_0x4cd172=>{const {statusCode:_0x53d896,statusCode:_0x1fd2a2,headers:_0x3ab58e,body:_0x47bda6}=_0x4cd172;_0x3aa909(null,{'status':_0x53d896,'statusCode':_0x1fd2a2,'headers':_0x3ab58e,'body':_0x47bda6},_0x47bda6);},_0x3b8ce5=>{const {message:_0x4531a,response:_0x116b77}=_0x3b8ce5;_0x3aa909(_0x4531a,_0x116b77,_0x116b77&&_0x116b77['body']);}));}['post'](_0x14eb8a,_0x7cf228=()=>{}){if(_0x14eb8a['body']&&_0x14eb8a['headers']&&!_0x14eb8a['headers']['Content-Type']&&(_0x14eb8a['headers']['Content-Type']='application/x-www-form-urlencoded'),_0x14eb8a['headers']&&delete _0x14eb8a['headers']['Content-Length'],this['isSurge']()||this['isLoon']())this['isSurge']()&&this['isNeedRewrite']&&(_0x14eb8a['headers']=_0x14eb8a['headers']||{},Object['assign'](_0x14eb8a['headers'],{'X-Surge-Skip-Scripting':!0x1})),$httpClient['post'](_0x14eb8a,(_0x372cea,_0x2b7f80,_0x5ded64)=>{!_0x372cea&&_0x2b7f80&&(_0x2b7f80['body']=_0x5ded64,_0x2b7f80['statusCode']=_0x2b7f80['status']),_0x7cf228(_0x372cea,_0x2b7f80,_0x5ded64);});else if(this['isQuanX']())_0x14eb8a['method']='POST',this['isNeedRewrite']&&(_0x14eb8a['opts']=_0x14eb8a['opts']||{},Object['assign'](_0x14eb8a['opts'],{'hints':!0x1})),$task['fetch'](_0x14eb8a)['then'](_0x566f10=>{const {statusCode:_0x1f454e,statusCode:_0x315718,headers:_0x3753d3,body:_0x17f63e}=_0x566f10;_0x7cf228(null,{'status':_0x1f454e,'statusCode':_0x315718,'headers':_0x3753d3,'body':_0x17f63e},_0x17f63e);},_0x3c6e6b=>_0x7cf228(_0x3c6e6b));else if(this['isNode']()){this['initGotEnv'](_0x14eb8a);const {url:_0x2fba9b,..._0x44f77d}=_0x14eb8a;this['got']['post'](_0x2fba9b,_0x44f77d)['then'](_0x3aeec5=>{const {statusCode:_0x2f6134,statusCode:_0x247e28,headers:_0x2d8217,body:_0xcf3180}=_0x3aeec5;_0x7cf228(null,{'status':_0x2f6134,'statusCode':_0x247e28,'headers':_0x2d8217,'body':_0xcf3180},_0xcf3180);},_0x545fbf=>{const {message:_0x371b6f,response:_0x35a6b7}=_0x545fbf;_0x7cf228(_0x371b6f,_0x35a6b7,_0x35a6b7&&_0x35a6b7['body']);});}}['time'](_0x3cd88e,_0xc4557e=null){const _0x4929d5=_0xc4557e?new Date(_0xc4557e):new Date();let _0x625d9a={'M+':_0x4929d5['getMonth']()+0x1,'d+':_0x4929d5['getDate'](),'H+':_0x4929d5['getHours'](),'m+':_0x4929d5['getMinutes'](),'s+':_0x4929d5['getSeconds'](),'q+':Math['floor']((_0x4929d5['getMonth']()+(0x808d7^0x808d4))/0x3),'S':_0x4929d5['getMilliseconds']()};/(y+)/['test'](_0x3cd88e)&&(_0x3cd88e=_0x3cd88e['replace'](RegExp['$1'],(_0x4929d5['getFullYear']()+'')['substr']((0x970d8^0x970dc)-RegExp['$1']['length'])));for(let _0x2bf089 in _0x625d9a)new RegExp('('+_0x2bf089+')')['test'](_0x3cd88e)&&(_0x3cd88e=_0x3cd88e['replace'](RegExp['$1'],0x1==RegExp['$1']['length']?_0x625d9a[_0x2bf089]:('00'+_0x625d9a[_0x2bf089])['substr']((''+_0x625d9a[_0x2bf089])['length'])));return _0x3cd88e;}['msg'](_0x270649=_0x2efd6c,_0x54b2ce='',_0x38f15f='',_0x3017fb){const _0x203ba3=_0x3006d4=>{if(!_0x3006d4)return _0x3006d4;if('string'==typeof _0x3006d4)return this['isLoon']()?_0x3006d4:this['isQuanX']()?{'open-url':_0x3006d4}:this['isSurge']()?{'url':_0x3006d4}:void 0x0;if('object'==typeof _0x3006d4){if(this['isLoon']()){let _0x2a1880=_0x3006d4['openUrl']||_0x3006d4['url']||_0x3006d4['open-url'],_0xbe4813=_0x3006d4['mediaUrl']||_0x3006d4['media-url'];return{'openUrl':_0x2a1880,'mediaUrl':_0xbe4813};}if(this['isQuanX']()){let _0x14e93a=_0x3006d4['open-url']||_0x3006d4['url']||_0x3006d4['openUrl'],_0x49a079=_0x3006d4['media-url']||_0x3006d4['mediaUrl'];return{'open-url':_0x14e93a,'media-url':_0x49a079};}if(this['isSurge']()){let _0x245e86=_0x3006d4['url']||_0x3006d4['openUrl']||_0x3006d4['open-url'];return{'url':_0x245e86};}}};if(this['isMute']||(this['isSurge']()||this['isLoon']()?$notification['post'](_0x270649,_0x54b2ce,_0x38f15f,_0x203ba3(_0x3017fb)):this['isQuanX']()&&$notify(_0x270649,_0x54b2ce,_0x38f15f,_0x203ba3(_0x3017fb))),!this['isMuteLog']){let _0x1240f6=['','==============📣系统通知📣=============='];_0x1240f6['push'](_0x270649),_0x54b2ce&&_0x1240f6['push'](_0x54b2ce),_0x38f15f&&_0x1240f6['push'](_0x38f15f),console['log'](_0x1240f6['join']('\x0a')),this['logs']=this['logs']['concat'](_0x1240f6);}}['log'](..._0xb4a4ad){_0xb4a4ad['length']>(0x28eb2^0x28eb2)&&(this['logs']=[...this['logs'],..._0xb4a4ad]),console['log'](_0xb4a4ad['join'](this['logSeparator']));}['logErr'](_0x310092,_0xab8bc2){const _0x139c99=!this['isSurge']()&&!this['isQuanX']()&&!this['isLoon']();_0x139c99?this['log']('','❗️'+this['name']+',\x20错误!',_0x310092['stack']):this['log']('','❗️'+this['name']+',\x20错误!',_0x310092);}['wait'](_0x181e1c){return new Promise(_0x3b1a4d=>setTimeout(_0x3b1a4d,_0x181e1c));}['done'](_0x574de3={}){const _0x4c2a77=new Date()['getTime'](),_0x591cc5=(_0x4c2a77-this['startTime'])/0x3e8;this['log']('','🔔'+this['name']+',\x20结束!\x20🕛\x20'+_0x591cc5+'\x20秒'),this['log'](),(this['isSurge']()||this['isQuanX']()||this['isLoon']())&&$done(_0x574de3);}}(_0x2efd6c,_0x155e17);}