!function(n){function t(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var e={};return t.m=n,t.c=e,t.i=function(n){return n},t.d=function(n,t,e){Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:e})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=16)}({0:function(n,t){"use strict";!function(n){n.cookie={get:function(n){var t,e=new RegExp("(^| )"+n+"=([^;]*)(;|$)");return(t=document.cookie.match(e))?unescape(t[2]):null},set:function(n,t){var e=30,o=new Date;o.setTime(o.getTime()+24*e*60*60*1e3),document.cookie=n+"="+escape(t)+";expires="+o.toGMTString()+";path=/"}}}(window)},10:function(n,t){},16:function(n,t,e){"use strict";e(10),e(0),$(function(){var n={host:"www.zzs0.com",port:"3456",init:function(){var n=this;return window.cookie.get("_name")?(this.name=window.cookie.get("_name"),$("#chat-send").on("click",function(){n.send()}),$("#chat-input").on("keydown",function(t){13===t.which&&n.send()}),this.ws=new WebSocket("ws://"+this.host+":"+this.port+"?t=test"),void this.wsInit()):void(window.location.href="/")},wsInit:function(){var n=this,t=this;this.ws.onopen=function(){$("body").append("连接状态;"+(1===n.ws.readyState?"成功":"失败")+"</br>")},this.ws.onmessage=function(n){return n=JSON.parse(n.data),n.time?(n.name!==t.name&&$("body").append(n.name+" "+n.time+' </br><blockquote class="other">'+n.msg+"</blockquote>"),void(n.name===t.name&&$("body").append('<blockquote class="me">'+n.msg+"</blockquote>"))):void $("body").append(n.msg)},this.ws.onclose=function(n){console.log("WebSocketClosed!"),console.log(n)},this.ws.onerror=function(n){console.log("WebSocketError!")}},send:function(){var n=$("#chat-input").val(),t=window.cookie.get("_name"),e=JSON.stringify({name:t,msg:n});this.ws.send(e),$("#chat-input").val(""),$("#chat-input").focus()},exit:function(){var n=this.ws.close();console.log("退出",n)}};n.init()})}});