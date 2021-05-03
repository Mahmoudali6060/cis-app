!function($){function t(){return!!document.createElement("canvas").getContext}function i(){if(!t())return!1;var i=document.createElement("canvas"),e=i.getContext("2d");return"function"==typeof e.fillText}function e(){var t=document.createElement("div");return"undefined"!=typeof t.style.MozTransition||"undefined"!=typeof t.style.OTransition||"undefined"!=typeof t.style.webkitTransition||"undefined"!=typeof t.style.transition}function s(t,i,e,s,o){this.axisName=t,this.position=i,this.padding=e,this.plot=s,this.opts=o,this.width=0,this.height=0}function o(t,i,e,o,a){s.prototype.constructor.call(this,t,i,e,o,a)}function a(t,i,e,o,a){s.prototype.constructor.call(this,t,i,e,o,a),this.elem=null}function l(t,i,e,s,o){a.prototype.constructor.call(this,t,i,e,s,o)}function h(t,i,e,s,o){l.prototype.constructor.call(this,t,i,e,s,o),this.requiresResize=!1}function n(t){t.hooks.processOptions.push(function(t,s){if(s.axisLabels.show){var n=!1,r={},p={left:0,right:0,top:0,bottom:0},d=2;t.hooks.draw.push(function(t,s){var p=!1;n?(n=!1,$.each(t.getAxes(),function(i,e){var s=e.options||t.getOptions()[i];s&&s.axisLabel&&e.show&&r[i].draw(e.box)})):($.each(t.getAxes(),function(s,n){var f=n.options||t.getOptions()[s];if(s in r&&(n.labelHeight=n.labelHeight-r[s].height,n.labelWidth=n.labelWidth-r[s].width,f.labelHeight=n.labelHeight,f.labelWidth=n.labelWidth,r[s].cleanup(),delete r[s]),f&&f.axisLabel&&n.show){p=!0;var c=null;if(f.axisLabelUseHtml||"Microsoft Internet Explorer"!=navigator.appName)c=f.axisLabelUseHtml||!e()&&!i()&&!f.axisLabelUseCanvas?a:f.axisLabelUseCanvas||!e()?o:l;else{var b=navigator.userAgent,g=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");null!=g.exec(b)&&(rv=parseFloat(RegExp.$1)),c=rv>=9&&!f.axisLabelUseCanvas&&!f.axisLabelUseHtml?l:f.axisLabelUseCanvas||f.axisLabelUseHtml?f.axisLabelUseCanvas?o:a:h}var x=void 0===f.axisLabelPadding?d:f.axisLabelPadding;r[s]=new c(s,n.position,x,t,f),r[s].calculateSize(),f.labelHeight=n.labelHeight+r[s].height,f.labelWidth=n.labelWidth+r[s].width}}),p&&(n=!0,t.setupGrid(),t.draw()))})}})}var r={axisLabels:{show:!0}};s.prototype.cleanup=function(){},o.prototype=new s,o.prototype.constructor=o,o.prototype.calculateSize=function(){this.opts.axisLabelFontSizePixels||(this.opts.axisLabelFontSizePixels=14),this.opts.axisLabelFontFamily||(this.opts.axisLabelFontFamily="sans-serif");var t=this.opts.axisLabelFontSizePixels+this.padding,i=this.opts.axisLabelFontSizePixels+this.padding;"left"==this.position||"right"==this.position?(this.width=this.opts.axisLabelFontSizePixels+this.padding,this.height=0):(this.width=0,this.height=this.opts.axisLabelFontSizePixels+this.padding)},o.prototype.draw=function(t){this.opts.axisLabelColour||(this.opts.axisLabelColour="black");var i=this.plot.getCanvas().getContext("2d");i.save(),i.font=this.opts.axisLabelFontSizePixels+"px "+this.opts.axisLabelFontFamily,i.fillStyle=this.opts.axisLabelColour;var e=i.measureText(this.opts.axisLabel).width,s=this.opts.axisLabelFontSizePixels,o,a,l=0;"top"==this.position?(o=t.left+t.width/2-e/2,a=t.top+.72*s):"bottom"==this.position?(o=t.left+t.width/2-e/2,a=t.top+t.height-.72*s):"left"==this.position?(o=t.left+.72*s,a=t.height/2+t.top+e/2,l=-Math.PI/2):"right"==this.position&&(o=t.left+t.width-.72*s,a=t.height/2+t.top-e/2,l=Math.PI/2),i.translate(o,a),i.rotate(l),i.fillText(this.opts.axisLabel,0,0),i.restore()},a.prototype=new s,a.prototype.constructor=a,a.prototype.calculateSize=function(){var t=$('<div class="axisLabels" style="position:absolute;">'+this.opts.axisLabel+"</div>");this.plot.getPlaceholder().append(t),this.labelWidth=t.outerWidth(!0),this.labelHeight=t.outerHeight(!0),t.remove(),this.width=this.height=0,"left"==this.position||"right"==this.position?this.width=this.labelWidth+this.padding:this.height=this.labelHeight+this.padding},a.prototype.cleanup=function(){this.elem&&this.elem.remove()},a.prototype.draw=function(t){this.plot.getPlaceholder().find("#"+this.axisName+"Label").remove(),this.elem=$('<div id="'+this.axisName+'Label" " class="axisLabels" style="position:absolute;">'+this.opts.axisLabel+"</div>"),this.plot.getPlaceholder().append(this.elem),"top"==this.position?(this.elem.css("left",t.left+t.width/2-this.labelWidth/2+"px"),this.elem.css("top",t.top+"px")):"bottom"==this.position?(this.elem.css("left",t.left+t.width/2-this.labelWidth/2+"px"),this.elem.css("top",t.top+t.height-this.labelHeight+"px")):"left"==this.position?(this.elem.css("top",t.top+t.height/2-this.labelHeight/2+"px"),this.elem.css("left",t.left+"px")):"right"==this.position&&(this.elem.css("top",t.top+t.height/2-this.labelHeight/2+"px"),this.elem.css("left",t.left+t.width-this.labelWidth+"px"))},l.prototype=new a,l.prototype.constructor=l,l.prototype.calculateSize=function(){a.prototype.calculateSize.call(this),this.width=this.height=0,"left"==this.position||"right"==this.position?this.width=this.labelHeight+this.padding:this.height=this.labelHeight+this.padding},l.prototype.transforms=function(t,i,e){var s={"-moz-transform":"","-webkit-transform":"","-o-transform":"","-ms-transform":""};if(0!=i||0!=e){var o=" translate("+i+"px, "+e+"px)";s["-moz-transform"]+=o,s["-webkit-transform"]+=o,s["-o-transform"]+=o,s["-ms-transform"]+=o}if(0!=t){var a=t/90,l=" rotate("+t+"deg)";s["-moz-transform"]+=l,s["-webkit-transform"]+=l,s["-o-transform"]+=l,s["-ms-transform"]+=l}var h="top: 0; left: 0; ";for(var n in s)s[n]&&(h+=n+":"+s[n]+";");return h+=";"},l.prototype.calculateOffsets=function(t){var i={x:0,y:0,degrees:0};return"bottom"==this.position?(i.x=t.left+t.width/2-this.labelWidth/2,i.y=t.top+t.height-this.labelHeight):"top"==this.position?(i.x=t.left+t.width/2-this.labelWidth/2,i.y=t.top):"left"==this.position?(i.degrees=-90,i.x=t.left-this.labelWidth/2+this.labelHeight/2,i.y=t.height/2+t.top):"right"==this.position&&(i.degrees=90,i.x=t.left+t.width-this.labelWidth/2-this.labelHeight/2,i.y=t.height/2+t.top),i.x=Math.round(i.x),i.y=Math.round(i.y),i},l.prototype.draw=function(t){this.plot.getPlaceholder().find("."+this.axisName+"Label").remove();var i=this.calculateOffsets(t);this.elem=$('<div class="axisLabels '+this.axisName+'Label" style="position:absolute; '+this.transforms(i.degrees,i.x,i.y)+'">'+this.opts.axisLabel+"</div>"),this.plot.getPlaceholder().append(this.elem)},h.prototype=new l,h.prototype.constructor=h,h.prototype.transforms=function(t,i,e){var s="";if(0!=t){for(var o=t/90;0>o;)o+=4;s+=" filter: progid:DXImageTransform.Microsoft.BasicImage(rotation="+o+"); ",this.requiresResize="right"==this.position}return 0!=i&&(s+="left: "+i+"px; "),0!=e&&(s+="top: "+e+"px; "),s},h.prototype.calculateOffsets=function(t){var i=l.prototype.calculateOffsets.call(this,t);return"top"==this.position?i.y=t.top+1:"left"==this.position?(i.x=t.left,i.y=t.height/2+t.top-this.labelWidth/2):"right"==this.position&&(i.x=t.left+t.width-this.labelHeight,i.y=t.height/2+t.top-this.labelWidth/2),i},h.prototype.draw=function(t){l.prototype.draw.call(this,t),this.requiresResize&&(this.elem=this.plot.getPlaceholder().find("."+this.axisName+"Label"),this.elem.css("width",this.labelWidth),this.elem.css("height",this.labelHeight))},$.plot.plugins.push({init:n,options:r,name:"axisLabels",version:"2.0"})}(jQuery);