function rand_range(a){return Math.floor(Math.random()*(a+1))}function fresh(a){var b=rand_range(a.length-2)+1,c=a[b];return a[b]=a[0],a[0]=c,c}function story(){ut="English"===language?fresh(door_en)+fresh(verb_en)+" on Platform "+fresh(linenumber)+". Please "+fresh(order_en)+".":fresh(linenumber)+"番線、"+fresh(door)+"が"+fresh(verb)+"。ご"+fresh(order)+"ください。";var a=document.getElementById("main");9>=i?i+=1:a.removeChild(document.getElementById("main").firstChild),last=document.createElement("div"),last.appendChild(document.createElement("br")),last.appendChild(document.createTextNode(ut)),a.appendChild(last);try{if("speechSynthesis"in window&&"SpeechSynthesisUtterance"in window){var b=new SpeechSynthesisUtterance;b.text=ut;var c=window.speechSynthesis.getVoices();"English"==language?(b.voiceURI="Daniel",b.voice=c.filter(function(a){return"Daniel"==a.name})[0]):(b.voiceURI="Kyoko",b.voice=c.filter(function(a){return"Kyoko"==a.name})[0]),b.volume=1,b.rate=1,b.pitch=1,speechSynthesis.speak(b)}}catch(d){}}function produce_stories(){story(),setInterval(story,8e3)}$(document).ready(function(){var a=$(window),b=$("video");a.width()<631&&b.replaceWith("<div id='mobile_image'>"),$(".dash-bottom").hide().delay(8e3).fadeIn(3e3),$(".overlay").hide().fadeIn(6e3),$(function(){endZone=a.width()<631?$("#poem").offset().top-a.height()+25:$("#poem").offset().top-a.height()+500,a.on("scroll",function(){endZone<a.scrollTop()&&(a.off("scroll"),b.prop("muted",!0),produce_stories())})}),$("a.no_default").click(function(a){a.preventDefault()}),$("a.people").on("click",function(){$("section#people").dialog({title:"People",height:460,width:320,show:{effect:"fadeIn",duration:2e3},hide:"fade"})}),$("a.code").on("click",function(){$("section#code").dialog({title:"Code",height:450,width:320,show:{effect:"fadeIn",duration:2e3},hide:"fade"})})});var language="English";$("#en").on("click",function(){language="English"}),$("#ja").on("click",function(){language="Japanese"});var i=0,ut="some utterance",linenumber=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","29","30","31","32","33"],door=["ドア","窓","天井","床","電車","地下鉄","ホーム","群衆","トンネル","駅長","線路","再終電車","特急","快速","各駅停車"],verb=["閉まります","開きます","動きます","始まります","集まります","痛みます","笑います","冷めます","起きます","見えます","咲きます","倒れます","浮かびます","話せます","壊れます","聞いています","見ています","参ります","止まります","通過します","出発します"],order=["遠慮","返事","容赦","連絡","笑納","説明","検討","用意","用心","質問","教授","自愛","確認","静聴","出席","安心","査収","同伴","理解","期待","利用","準備","返却","強力","猶予","放念","入場"],door_en=["The doors are ","The windows are ","The ceiling is ","The train is ","The subway is ","The line is ","The crowds are ","The tunnel is ","The stationmaster is ","The track is ","The last train is ","The rapid train is ","The express train is ","The local train is "],verb_en=["closing","opening","moving","beginning","gathering","hurting","laughing","getting cold","awakening","visible","blooming","falling","floating","speaking","coming to a stop","passing through","departing","breaking","listening","watching","arriving"],order_en=["restrain yourself","answer","forgive us","contact us","accept this","explain","investigate","prepare yourself","beware","question this","instruct us","take care of yourself","confirm","listen","participate","be calm","cooperate","understand","use freely","get ready","give it back","give us some time","relax","enter"];