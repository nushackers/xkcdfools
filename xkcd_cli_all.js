/*
 * jQuery Hotkeys Plugin
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Based upon the plugin by Tzury Bar Yochay:
 * http://github.com/tzuryby/hotkeys
 *
 * Original idea by:
 * Binny V A, http://www.openjs.com/scripts/events/keyboard_shortcuts/
*/
(function(b){b.hotkeys={version:"0.8",specialKeys:{8:"backspace",9:"tab",13:"return",16:"shift",17:"ctrl",18:"alt",19:"pause",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"del",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",144:"numlock",145:"scroll",191:"/",224:"meta"},shiftNums:{"`":"~","1":"!","2":"@","3":"#","4":"$","5":"%","6":"^","7":"&","8":"*","9":"(","0":")","-":"_","=":"+",";":": ","'":'"',",":"<",".":">","/":"?","\\":"|"}};function a(d){if(typeof d.data!=="string"){return}var c=d.handler,e=d.data.toLowerCase().split(" ");d.handler=function(n){if(this!==n.target&&(/textarea|select/i.test(n.target.nodeName)||n.target.type==="text")){return}var h=n.type!=="keypress"&&b.hotkeys.specialKeys[n.which],o=String.fromCharCode(n.which).toLowerCase(),k,m="",g={};if(n.altKey&&h!=="alt"){m+="alt+"}if(n.ctrlKey&&h!=="ctrl"){m+="ctrl+"}if(n.metaKey&&!n.ctrlKey&&h!=="meta"){m+="meta+"}if(n.shiftKey&&h!=="shift"){m+="shift+"}if(h){g[m+h]=true}else{g[m+o]=true;g[m+b.hotkeys.shiftNums[o]]=true;if(m==="shift+"){g[b.hotkeys.shiftNums[o]]=true}}for(var j=0,f=e.length;j<f;j++){if(g[e[j]]){return c.apply(this,arguments)}}}}b.each(["keydown","keyup","keypress"],function(){b.event.special[this]={add:a}})})(jQuery);/*
jQuery Browser Plugin
	* Version 2.3
	* 2008-09-17 19:27:05
	* URL: http://jquery.thewikies.com/browser
	* Description: jQuery Browser Plugin extends browser detection capabilities and can assign browser selectors to CSS classes.
	* Author: Nate Cavanaugh, Minhchau Dang, & Jonathan Neal
	* Copyright: Copyright (c) 2008 Jonathan Neal under dual MIT/GPL license.
*/
(function(a){a.browserTest=function(e,g){var f="unknown",d="X",b=function(k,j){for(var c=0;c<j.length;c=c+1){k=k.replace(j[c][0],j[c][1])}return k},h=function(l,k,j,n){var m={name:b((k.exec(l)||[f,f])[1],j)};m[m.name]=true;m.version=(n.exec(l)||[d,d,d,d])[3];if(m.name.match(/safari/)&&m.version>400){m.version="2.0"}if(m.name==="presto"){m.version=(a.browser.version>9.27)?"futhark":"linear_b"}m.versionNumber=parseFloat(m.version,10)||0;m.versionX=(m.version!==d)?(m.version+"").substr(0,1):d;m.className=m.name+m.versionX;return m};e=(e.match(/Opera|Navigator|Minefield|KHTML|Chrome/)?b(e,[[/(Firefox|MSIE|KHTML,\slike\sGecko|Konqueror)/,""],["Chrome Safari","Chrome"],["KHTML","Konqueror"],["Minefield","Firefox"],["Navigator","Netscape"]]):e).toLowerCase();a.browser=a.extend((!g)?a.browser:{},h(e,/(camino|chrome|firefox|netscape|konqueror|lynx|msie|opera|safari)/,[],/(camino|chrome|firefox|netscape|netscape6|opera|version|konqueror|lynx|msie|safari)(\/|\s)([a-z0-9\.\+]*?)(\;|dev|rel|\s|$)/));a.layout=h(e,/(gecko|konqueror|msie|opera|webkit)/,[["konqueror","khtml"],["msie","trident"],["opera","presto"]],/(applewebkit|rv|konqueror|msie)(\:|\/|\s)([a-z0-9\.]*?)(\;|\)|\s)/);a.os={name:(/(win|mac|linux|sunos|solaris|iphone)/.exec(navigator.platform.toLowerCase())||[f])[0].replace("sunos","solaris")};if(!g){a("html").addClass([a.os.name,a.browser.name,a.browser.className,a.layout.name,a.layout.className].join(" "))}};a.browserTest(navigator.userAgent)})(jQuery);/*
 * jQuery Konami code trigger v. 0.1
 *
 * Copyright (c) 2009 Joe Mastey
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function(a){a.fn.konami=function(b,c){c=a.extend({},a.fn.konami.params,c);this.each(function(){var d=a(this);d.bind("konami",b).bind("keyup",function(e){a.fn.konami.checkCode(e,c,d)})});return this};a.fn.konami.params={code:[38,38,40,40,37,39,37,39,66,65],step:0};a.fn.konami.checkCode=function(b,c,d){if(b.keyCode==c.code[c.step]){c.step++}else{c.step=0}if(c.step==c.code.length){d.trigger("konami");c.step=0}}})(jQuery);function ltrim(b){if(b){var a=/\s*((\S+\s*)*)/;return b.replace(a,"$1")}return""}function rtrim(b){if(b){var a=/((\s*\S+)*)\s*/;return b.replace(a,"$1")}return""}function trim(a){if(a){return ltrim(rtrim(a))}return""}function entityEncode(a){a=a.replace(/&/g,"&amp;");a=a.replace(/</g,"&lt;");a=a.replace(/>/g,"&gt;");a=a.replace(/  /g," &nbsp;");if(/msie/i.test(navigator.userAgent)){a=a.replace("\n","&nbsp;<br />")}else{a=a.replace(/\x0D/g,"&nbsp;<br />")}return a}var TerminalShell={commands:{help:function help(a){a.print($("<h3>help</h3>"));cmd_list=$("<ul>");$.each(this.commands,function(b,c){cmd_list.append($("<li>").text(b))});a.print(cmd_list)},clear:function(a){a.clear()}},filters:[],fallback:null,lastCommand:null,process:function(a,b){try{$.each(this.filters,$.proxy(function(e,g){b=g.call(this,a,b)},this));var f=b.split(" ");var d=f.shift();f.unshift(a);if(this.commands.hasOwnProperty(d)){this.commands[d].apply(this,f)}else{if(!(this.fallback&&this.fallback(a,b))){a.print('Unrecognized command. Type "help" for assistance.')}}this.lastCommand=b}catch(c){a.print($("<p>").addClass("error").text("An internal error occured: "+c));a.setWorking(false)}}};var Terminal={buffer:"",pos:0,history:[],historyPos:0,promptActive:true,cursorBlinkState:true,_cursorBlinkTimeout:null,spinnerIndex:0,_spinnerTimeout:null,output:TerminalShell,config:{scrollStep:20,scrollSpeed:100,bg_color:"#000",fg_color:"#FFF",cursor_blink_time:700,cursor_style:"block",prompt:"guest@nushackers.org:/$ ",spinnerCharacters:["[   ]","[.  ]","[.. ]","[...]"],spinnerSpeed:250,typingSpeed:50},sticky:{keys:{ctrl:false,alt:false,scroll:false},set:function(a,b){this.keys[a]=b;$("#"+a+"-indicator").toggle(this.keys[a])},toggle:function(a){this.set(a,!this.keys[a])},reset:function(a){this.set(a,false)},resetAll:function(a){$.each(this.keys,$.proxy(function(b,c){this.reset(b)},this))}},init:function(){function a(b){return function(){if(Terminal.promptActive){b.apply(this,arguments)}}}$(document).keypress($.proxy(a(function(d){if(d.which>=32&&d.which<=126){var c=String.fromCharCode(d.which);var b=c.toLowerCase()}else{return}if($.browser.opera&&!(/[\w\s]/.test(c))){return}if(this.sticky.keys.ctrl){if(b=="w"){this.deleteWord()}else{if(b=="h"){Terminal.deleteCharacter(false)}else{if(b=="l"){this.clear()}else{if(b=="a"){this.setPos(0)}else{if(b=="e"){this.setPos(this.buffer.length)}else{if(b=="d"){this.runCommand("logout")}}}}}}}else{if(c){this.addCharacter(c);d.preventDefault()}}}),this)).bind("keydown","return",a(function(b){Terminal.processInputBuffer()})).bind("keydown","backspace",a(function(b){b.preventDefault();Terminal.deleteCharacter(b.shiftKey)})).bind("keydown","del",a(function(b){Terminal.deleteCharacter(true)})).bind("keydown","left",a(function(b){Terminal.moveCursor(-1)})).bind("keydown","right",a(function(b){Terminal.moveCursor(1)})).bind("keydown","up",a(function(b){b.preventDefault();if(b.shiftKey||Terminal.sticky.keys.scroll){Terminal.scrollLine(-1)}else{if(b.ctrlKey||Terminal.sticky.keys.ctrl){Terminal.scrollPage(-1)}else{Terminal.moveHistory(-1)}}})).bind("keydown","down",a(function(b){b.preventDefault();if(b.shiftKey||Terminal.sticky.keys.scroll){Terminal.scrollLine(1)}else{if(b.ctrlKey||Terminal.sticky.keys.ctrl){Terminal.scrollPage(1)}else{Terminal.moveHistory(1)}}})).bind("keydown","pageup",a(function(b){Terminal.scrollPage(-1)})).bind("keydown","pagedown",a(function(b){Terminal.scrollPage(1)})).bind("keydown","home",a(function(b){b.preventDefault();if(b.ctrlKey||Terminal.sticky.keys.ctrl){Terminal.jumpToTop()}else{Terminal.setPos(0)}})).bind("keydown","end",a(function(b){b.preventDefault();if(b.ctrlKey||Terminal.sticky.keys.ctrl){Terminal.jumpToBottom()}else{Terminal.setPos(Terminal.buffer.length)}})).bind("keydown","tab",function(b){b.preventDefault()}).keyup(function(c){var b=$.hotkeys.specialKeys[c.which];if(b in {ctrl:true,alt:true,scroll:true}){Terminal.sticky.toggle(b)}else{if(!(b in {left:true,right:true,up:true,down:true})){Terminal.sticky.resetAll()}}});$(window).resize(function(b){$("#screen").scrollTop($("#screen").attr("scrollHeight"))});this.setCursorState(true);this.setWorking(false);$("#prompt").html(this.config.prompt);$("#screen").hide().fadeIn("fast",function(){$("#screen").triggerHandler("cli-load")})},setCursorState:function(b,a){this.cursorBlinkState=b;if(this.config.cursor_style=="block"){if(b){$("#cursor").css({color:this.config.bg_color,backgroundColor:this.config.fg_color})}else{$("#cursor").css({color:this.config.fg_color,background:"none"})}}else{if(b){$("#cursor").css("textDecoration","underline")}else{$("#cursor").css("textDecoration","none")}}if(!a&&this._cursorBlinkTimeout){window.clearTimeout(this._cursorBlinkTimeout);this._cursorBlinkTimeout=null}this._cursorBlinkTimeout=window.setTimeout($.proxy(function(){this.setCursorState(!this.cursorBlinkState,true)},this),this.config.cursor_blink_time)},updateInputDisplay:function(){var c="",b=" ",a="";if(this.pos<0){this.pos=0}if(this.pos>this.buffer.length){this.pos=this.buffer.length}if(this.pos>0){c=this.buffer.substr(0,this.pos)}if(this.pos<this.buffer.length){b=this.buffer.substr(this.pos,1)}if(this.buffer.length-this.pos>1){a=this.buffer.substr(this.pos+1,this.buffer.length-this.pos-1)}$("#lcommand").text(c);$("#cursor").text(b);if(b==" "){$("#cursor").html("&nbsp;")}$("#rcommand").text(a);$("#prompt").text(this.config.prompt);return},clearInputBuffer:function(){this.buffer="";this.pos=0;this.updateInputDisplay()},clear:function(){$("#display").html("")},addCharacter:function(b){var c=this.buffer.substr(0,this.pos);var a=this.buffer.substr(this.pos,this.buffer.length-this.pos);this.buffer=c+b+a;this.pos++;this.updateInputDisplay();this.setCursorState(true)},deleteCharacter:function(a){var d=a?1:0;if(this.pos>=(1-d)){var c=this.buffer.substr(0,this.pos-1+d);var b=this.buffer.substr(this.pos+d,this.buffer.length-this.pos-d);this.buffer=c+b;this.pos-=1-d;this.updateInputDisplay()}this.setCursorState(true)},deleteWord:function(){if(this.pos>0){var a=this.pos;while(a>0&&this.buffer.charAt(a)!==" "){a--}left=this.buffer.substr(0,a-1);right=this.buffer.substr(a,this.buffer.length-this.pos);this.buffer=left+right;this.pos=a;this.updateInputDisplay()}this.setCursorState(true)},moveCursor:function(a){this.setPos(this.pos+a)},setPos:function(a){if((a>=0)&&(a<=this.buffer.length)){this.pos=a;Terminal.updateInputDisplay()}this.setCursorState(true)},moveHistory:function(b){var a=this.historyPos+b;if((a>=0)&&(a<=this.history.length)){if(a==this.history.length){this.clearInputBuffer()}else{this.buffer=this.history[a]}this.pos=this.buffer.length;this.historyPos=a;this.updateInputDisplay();this.jumpToBottom()}this.setCursorState(true)},addHistory:function(a){this.historyPos=this.history.push(a)},jumpToBottom:function(){$("#screen").animate({scrollTop:$("#screen").attr("scrollHeight")},this.config.scrollSpeed,"linear")},jumpToTop:function(){$("#screen").animate({scrollTop:0},this.config.scrollSpeed,"linear")},scrollPage:function(a){$("#screen").animate({scrollTop:$("#screen").scrollTop()+a*($("#screen").height()*0.75)},this.config.scrollSpeed,"linear")},scrollLine:function(a){$("#screen").scrollTop($("#screen").scrollTop()+a*this.config.scrollStep)},print:function(b){if(!b){$("#display").append($("<div>"))}else{if(b instanceof jQuery){$("#display").append(b)}else{var a=Array.prototype.slice.call(arguments,0);$("#display").append($("<p>").text(a.join(" ")))}}this.jumpToBottom()},processInputBuffer:function(a){this.print($("<p>").addClass("command").text(this.config.prompt+this.buffer));var a=trim(this.buffer);this.clearInputBuffer();if(a.length==0){return false}this.addHistory(a);if(this.output){return this.output.process(this,a)}else{return false}},setPromptActive:function(a){this.promptActive=a;$("#inputline").toggle(this.promptActive)},setWorking:function(a){if(a&&!this._spinnerTimeout){$("#display .command:last-child").add("#bottomline").first().append($("#spinner"));this._spinnerTimeout=window.setInterval($.proxy(function(){if(!$("#spinner").is(":visible")){$("#spinner").fadeIn()}this.spinnerIndex=(this.spinnerIndex+1)%this.config.spinnerCharacters.length;$("#spinner").text(this.config.spinnerCharacters[this.spinnerIndex])},this),this.config.spinnerSpeed);this.setPromptActive(false);$("#screen").triggerHandler("cli-busy")}else{if(!a&&this._spinnerTimeout){clearInterval(this._spinnerTimeout);this._spinnerTimeout=null;$("#spinner").fadeOut();this.setPromptActive(true);$("#screen").triggerHandler("cli-ready")}}},runCommand:function(e){var b=0;var d=false;this.promptActive=false;var a=window.setInterval($.proxy(function c(){if(b<e.length){this.addCharacter(e.charAt(b));b+=1}else{clearInterval(a);this.promptActive=true;this.processInputBuffer()}},this),this.config.typingSpeed)}};$(document).ready(function(){$("#welcome").show();document.onkeydown=document.onkeypress=function(a){return $.hotkeys.specialKeys[a.keyCode]!="backspace"};Terminal.init()});function pathFilename(b){var a=/\/([^\/]+)$/.exec(b);if(a){return a[1]}}function getRandomInt(b,a){return Math.floor(Math.random()*(a-b+1))+b}function randomChoice(a){return a[getRandomInt(0,a.length-1)]}var xkcd={latest:null,last:null,cache:{},base:"http://dynamic.xkcd.com/api-0/jsonp/comic/",get:function(b,c,a){if(b==null){path=""}else{if(Number(b)){path=String(b)}else{a(false);return false}}if(b in this.cache){this.last=this.cache[b];c(this.cache[b])}else{return $.ajax({url:this.base+path,dataType:"jsonp",success:$.proxy(function(d){this.last=this.cache[b]=d;c(d)},this),error:a})}}};var xkcdDisplay=TerminalShell.commands.display=function(d,e){var b,c;function a(){d.print($("<p>").addClass("error").text('display: unable to open image "'+e+'": No such file or directory.'));d.setWorking(false)}if(e){e=String(e);c=Number(e.match(/^\d+/));b=pathFilename(e);if(c>xkcd.latest.num){d.print("Time travel mode not enabled.");return}}else{c=xkcd.last.num}d.setWorking(true);xkcd.get(c,function(f){if(!b||(b==pathFilename(f.img))){$("<img>").hide().load(function(){d.print($("<h3>").text(f.num+": "+f.title));$(this).fadeIn();var g=$(this);if(f.link){g=$("<a>").attr("href",f.link).append($(this))}d.print(g);d.setWorking(false)}).attr({src:f.img,alt:f.title,title:f.alt}).addClass("comic")}else{a()}},a)};TerminalShell.commands.next=function(a){xkcdDisplay(a,xkcd.last.num+1)};TerminalShell.commands.previous=TerminalShell.commands.prev=function(a){xkcdDisplay(a,xkcd.last.num-1)};TerminalShell.commands.first=function(a){xkcdDisplay(a,1)};TerminalShell.commands.latest=TerminalShell.commands.last=function(a){xkcdDisplay(a,xkcd.latest.num)};TerminalShell.commands.random=function(a){xkcdDisplay(a,getRandomInt(1,xkcd.latest.num))};TerminalShell.commands["goto"]=function(a,b){$("#screen").one("cli-ready",function(c){a.print('Did you mean "display"?')});xkcdDisplay(a,292)};TerminalShell.commands.sudo=function(a){var c=Array.prototype.slice.call(arguments);c.shift();if(c.join(" ")=="make me a sandwich"){a.print("Okay.")}else{var b=c.shift();c.unshift(a);c.push("sudo");if(TerminalShell.commands.hasOwnProperty(b)){this.sudo=true;this.commands[b].apply(this,c);delete this.sudo}else{if(!b){a.print("sudo what?")}else{a.print("sudo: "+b+": command not found")}}}};TerminalShell.filters.push(function(b,c){if(/!!/.test(c)){var a=c.replace("!!",this.lastCommand);b.print(a);return a}else{return c}});TerminalShell.commands.shutdown=TerminalShell.commands.poweroff=function(a){if(this.sudo){a.print("Broadcast message from guest@nushackers");a.print();a.print("The system is going down for maintenance NOW!");return $("#screen").fadeOut()}else{a.print("Must be root.")}};TerminalShell.commands.logout=TerminalShell.commands.exit=TerminalShell.commands.quit=function(a){a.print("Bye.");$("#prompt, #cursor").hide();a.promptActive=false};TerminalShell.commands.restart=TerminalShell.commands.reboot=function(a){if(this.sudo){TerminalShell.commands.poweroff(a).queue(function(b){window.location.reload()})}else{a.print("Must be root.")}};function linkFile(a){return{type:"dir",enter:function(){window.location=a}}}Filesystem={"welcome.txt":{type:"file",read:function(a){a.print($("<h4>").text("CONGRATULATIONS!"));a.print("You've found this site!");a.print("You're invited to the NUS Hackers Welcome Tea on the 02-09-2011")}},"license.txt":{type:"file",read:function(a){a.print($("<p>").html('Client-side logic for Wordpress CLI theme :: <a href="http://thrind.xamai.ca/">R. McFarland, 2006, 2007, 2008</a>'));a.print($("<p>").html('jQuery rewrite and overhaul :: <a href="http://www.chromakode.com/">Chromakode, 2010</a>'));a.print($("<p>").html('Modified by <a href="http://nushackers.org">NUS Hackers 2011</a>'));a.print();$.each(["This program is free software; you can redistribute it and/or","modify it under the terms of the GNU General Public License","as published by the Free Software Foundation; either version 2","of the License, or (at your option) any later version.","","This program is distributed in the hope that it will be useful,","but WITHOUT ANY WARRANTY; without even the implied warranty of","MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the","GNU General Public License for more details.","","You should have received a copy of the GNU General Public License","along with this program; if not, write to the Free Software","Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA."],function(c,b){a.print(b)})}}};Filesystem.blog=linkFile("http://nushackers.org");Filesystem.forums=linkFile("http://groups.google.com/group/nushackers?hl=en_US");Filesystem.about=linkFile("http://nushackers.org/about/");Filesystem.code=linkFile("http://github.com/nushackers");TerminalShell.pwd=Filesystem;TerminalShell.commands.cd=function(a,b){if(b in this.pwd){if(this.pwd[b].type=="dir"){this.pwd[b].enter(a)}else{if(this.pwd[b].type=="file"){a.print("cd: "+b+": Not a directory")}}}else{a.print("cd: "+b+": No such file or directory")}};TerminalShell.commands.dir=TerminalShell.commands.ls=function(b,c){var a=$("<ul>");$.each(this.pwd,function(d,e){if(e.type=="dir"){d+="/"}a.append($("<li>").text(d))});b.print(a)};TerminalShell.commands.cat=function(a,b){if(b in this.pwd){if(this.pwd[b].type=="file"){this.pwd[b].read(a)}else{if(this.pwd[b].type=="dir"){a.print("cat: "+b+": Is a directory")}}}else{if(pathFilename(b)=="alt.txt"){a.setWorking(true);num=Number(b.match(/^\d+/));xkcd.get(num,function(c){a.print(c.alt);a.setWorking(false)},function(){a.print($("<p>").addClass("error").text('cat: "'+b+'": No such file or directory.'));a.setWorking(false)})}else{a.print("You're a kitty!")}}};TerminalShell.commands.rm=function(b,a,c){if(a&&a[0]!="-"){c=a}if(!c){b.print("rm: missing operand")}else{if(c in this.pwd){if(this.pwd[c].type=="file"){delete this.pwd[c]}else{if(this.pwd[c].type=="dir"){if(/r/.test(a)){delete this.pwd[c]}else{b.print("rm: cannot remove "+c+": Is a directory")}}}}else{if(a=="-rf"&&c=="/"){if(this.sudo){TerminalShell.commands={}}else{b.print("rm: cannot remove /: Permission denied")}}}}};TerminalShell.commands.cheat=function(a){a.print($("<a>").text("*** AWESOME MODE ENABLED ***").attr("href","http://nushackers.org/join/"))};TerminalShell.commands.wget=TerminalShell.commands.curl=function(c,b){if(b){c.setWorking(true);var a=$("<div>").addClass("browser").append($("<iframe>").attr("src",b).width("100%").height(600).one("load",function(){c.setWorking(false)}));c.print(a);return a}else{c.print("Please specify a URL.")}};TerminalShell.commands.unixkcd=function(b,a){TerminalShell.commands.curl(b,"http://www.xkcd.com/unixkcd/")};TerminalShell.commands["apt-get"]=function(b,c){if(!this.sudo&&(c in {update:true,upgrade:true,"dist-upgrade":true})){b.print("E: Unable to lock the administration directory, are you root?")}else{if(c=="update"){b.print("Reading package lists... Done")}else{if(c=="upgrade"){if(($.browser.name=="msie")||($.browser.name=="firefox"&&$.browser.versionX<3)){b.print($("<p>").append($("<a>").attr("href","http://abetterbrowser.org/").text("To complete installation, click here.")))}else{b.print("Already using an awesome browser!")}}else{if(c=="dist-upgrade"){var d={win:"Windows",mac:"OS X",linux:"Linux"};var a=$.os.name;if(a in d){a=d[a]}else{a="something fancy"}b.print("You are already running "+a+".")}else{if(c=="moo"){b.print("        (__)");b.print("        (oo)");b.print("  /------\\/ ");b.print(" / |    ||  ");b.print("*  /\\---/\\  ");b.print("   ~~   ~~  ");b.print('...."Have you mooed today?"...')}else{if(!c){b.print("This APT has Super Cow Powers.")}else{b.print("E: Invalid operation "+c)}}}}}}};function oneLiner(a,c,b){if(b.hasOwnProperty(c)){a.print(b[c]);return true}else{return false}}TerminalShell.commands.man=function(a,b){pages={last:"Man, last night was AWESOME.",help:"Man, help me out here.",next:"Request confirmed; you will be reincarnated as a man next.",cat:"You are now riding a half-man half-cat.",man:"Holy shit, man on man action!"};if(!oneLiner(a,b,pages)){a.print("Oh, I'm sure you can figure it out.")}};TerminalShell.commands.locate=function(a,b){keywords={ninja:"Ninja can not be found!",keys:"Have you checked your coat pocket?",joke:"Joke found on user.",problem:"Problem exists between keyboard and chair.",raptor:"BEHIND YOU!!!"};if(!oneLiner(a,b,keywords)){a.print("Locate what?")}};Adventure={rooms:{0:{description:"You are at a computer at SoC.",exits:{west:1,south:10}},1:{description:"Life is not peaceful here.",exits:{east:0,west:2}},2:{description:"In the server room.",exits:{east:1,west:3}},3:{description:"Study cartels. The sweet stink of students mugging.",exits:{east:2,west:4}},4:{description:"This is what we're gonna do.",exits:{east:3,west:5}},5:{description:"Suns are hotter during reading week.",exits:{east:4,west:6}},6:{description:"We will do just fine.",exits:{east:5,west:7}},7:{description:"Where the skies are blue.",exits:{east:6,west:8}},8:{description:"This is what we're gonna do.",exits:{east:7}},10:{description:"A dark hallway.",exits:{north:0,south:11},enter:function(a){if(!Adventure.status.lamp){a.print("You are eaten by a troll.");Adventure.status.alive=false;Adventure.goTo(a,666)}}},11:{description:"Bed. This is where you sleep.",exits:{north:10}},666:{description:"You're dead!"}},status:{alive:true,lamp:false},goTo:function(a,b){Adventure.location=Adventure.rooms[b];Adventure.look(a);if(Adventure.location.enter){Adventure.location.enter(a)}}};Adventure.location=Adventure.rooms[0];TerminalShell.commands.look=Adventure.look=function(b){b.print(Adventure.location.description);if(Adventure.location.exits){b.print();var a=[];$.each(Adventure.location.exits,function(c,d){a.push(c)});b.print("Exits: "+a.join(", "))}};TerminalShell.commands.go=Adventure.go=function(a,b){if(Adventure.location.exits&&b in Adventure.location.exits){Adventure.goTo(a,Adventure.location.exits[b])}else{if(!b){a.print("Go where?")}else{if(b=="down"){a.print("On our first date?")}else{a.print("You cannot go "+b+".")}}}};TerminalShell.commands.light=function(a,b){if(b=="lamp"){if(!Adventure.status.lamp){a.print("You set your lamp ablaze.");Adventure.status.lamp=true}else{a.print("Your lamp is already lit!")}}else{a.print("Light what?")}};TerminalShell.commands.sleep=function(a,b){b=Number(b);if(!b){b=5}a.setWorking(true);a.print("You take a nap.");$("#screen").fadeOut(1000);window.setTimeout(function(){a.setWorking(false);$("#screen").fadeIn();a.print("You awake refreshed.")},1000*b)};TerminalShell.commands.help=TerminalShell.commands.halp=function(a){a.print("That would be cheating!")};TerminalShell.fallback=function(a,b){oneliners={"make me a sandwich":"What? Make it yourself.","make love":"I put on my robe and wizard hat.","i read the source code":"<3",lex:"Superman kicks your ass!",pwd:"You are in a maze of twisty passages, all alike.",lpr:"PC LOAD LETTER","hello joshua":"How about a nice game of Global Thermonuclear War?",xyzzy:"Nothing happens.",date:"March 32nd",hello:"Why hello there!",who:"Doctor Who?",xkcd:"Yes, we forked it.",su:"God mode activated. Remember, with great power comes great ... aw, screw it, go have fun.",fuck:"Perhaps you mean finger?",touch:"Eww, stop touching me!",whoami:"You are Richard Stallman.",nano:"Seriously? Why don't you just use Notepad.exe? Or MS Paint?",top:"It's up there --^",moo:"moo",ping:"There is another submarine three miles ahead, bearing 225, forty fathoms down.",find:"What do you want to find? Kitten would be nice.",hello:"Hello.",more:"Oh, yes! More! More!","your gay":"Keep your hands off it!",hi:"Hi.",echo:"Echo ... echo ... echo ...",bash:"You bash your head against the wall. It's not very effective.",ssh:"ssh, this is a library.",uname:"Illudium Q-36 Explosive Space Modulator",finger:"Mmmmmm...",kill:"Terminator deployed to 1984.","use the force luke":"I believe you mean source.","use the source luke":"I'm not luke, you're luke!",serenity:"You can't take the sky from me.","enable time travel":"TARDIS error: Time Lord missing.",ed:"You are not a diety."};oneliners.emacs="You should really use vim.";oneliners.vi=oneliners.vim="You should really use emacs.";b=b.toLowerCase();if(!oneLiner(a,b,oneliners)){if(b=="asl"||b=="a/s/l"){a.print(randomChoice(["2/AMD64/Server Rack","328/M/Transylvania","6/M/Battle School","48/M/The White House","7/F/Rapture","Exactly your age/A gender you're attracted to/Far far away.","7,831/F/Lothlórien","42/M/FBI Field Office"]))}else{if(b=="hint"){a.print(randomChoice(["We did this for fun, and forked it from unixkcd","Use the source, Luke!","There are cheat codes."]))}else{if(b=="find kitten"){a.print($('<iframe width="800" height="600" src="http://www.robotfindskitten.net/rfk.swf"></iframe>'))}else{if(b=="buy stuff"){Filesystem.code.enter()}else{if(b=="time travel"){xkcdDisplay(a,630)}else{if(/:\(\)\s*{\s*:\s*\|\s*:\s*&\s*}\s*;\s*:/.test(b)){Terminal.setWorking(true)}else{$.get("/unixkcd/missing",{cmd:b});return false}}}}}}}return true};var konamiCount=0;$(document).ready(function(){Terminal.promptActive=false;function a(){Terminal.print($("<p>").addClass("error").text("Unable to load startup data. :-("));Terminal.promptActive=true}$("#screen").bind("cli-load",function(b){xkcd.get(null,function(c){if(c){xkcd.latest=c;Terminal.runCommand("cat welcome.txt")}else{a()}},a)});$(document).konami(function(){function b(c){c.css("position","relative");return window.setInterval(function(){c.css({top:getRandomInt(-3,3),left:getRandomInt(-3,3)})},100)}if(konamiCount==0){$("#screen").css("text-transform","uppercase")}else{if(konamiCount==1){$("#screen").css("text-shadow","gray 0 0 2px")}else{if(konamiCount==2){$("#screen").css("text-shadow","orangered 0 0 10px")}else{if(konamiCount==3){b($("#screen"))}else{if(konamiCount==4){$("#screen").css("background","url(over9000.png) center no-repeat")}}}}}$("<div>").height("100%").width("100%").css({background:"white",position:"absolute",top:0,left:0}).appendTo($("body")).show().fadeOut(1000);if(Terminal.buffer.substring(Terminal.buffer.length-2)=="ba"){Terminal.buffer=Terminal.buffer.substring(0,Terminal.buffer.length-2);Terminal.updateInputDisplay()}TerminalShell.sudo=true;konamiCount+=1})});