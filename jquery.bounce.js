// Generated by CoffeeScript 1.6.3
/*
 *
 *  jQuery Bounce by Gary Hepting - https://github.com/ghepting/jquery-bounce
 *  
 *  Open source under the MIT License.
 *
 *  Copyright © 2013 Gary Hepting. All rights reserved.
 *
*/(function(){var e;e=function(){function e(e){this.iterations=0;this.el=e;this.distance=$(this.el).data("distance")||100;this.speedDown=$(this.el).data("speed-down")||300;this.speedUp=$(this.el).data("speed-up")||600;this.gravity=$(this.el).data("gravity")||"bottom";this.timer=$(this.el).data("timer")||this.speedDown+this.speedUp;this.delay=$(this.el).data("delay")||0;this.loop=$(this.el).data("loop")||0;this.easingDown=$(this.el).data("easing-down")||"easeInQuad";this.easingUp=$(this.el).data("easing-up")||"easeOutQuad";this.init()}e.prototype.init=function(){var e=this;$(this.el).wrap('<div style="display:inline-block;position:relative;text-align:center;width:'+$(this.el).outerWidth()+"px;height:"+($(this.el).outerHeight()+parseInt(this.distance))+'px;" />');$(this.el).css({position:"absolute",top:0,left:"50%","margin-left":-($(this.el).width()/2)});return setTimeout(function(){$(e.el).stop().animate({"margin-top":(e.gravity==="top"?"-":"")+e.distance,opacity:"1"},e.speedDown,e.easingDown).animate({"margin-top":"0",opacity:"1"},e.speedUp,e.easingUp);return e.interval=setInterval(function(){e.iterations++;$(e.el).stop().animate({"margin-top":(e.gravity==="top"?"-":"")+e.distance,opacity:"1"},e.downspeed,e.easingDown).animate({"margin-top":"0",opacity:"1"},e.speedUp,e.easingUp);if(e.iterations===e.loop)return clearInterval(e.interval)},e.timer)},this.delay)};return e}();(function(t){var n;n=[];return t.fn.bounce=function(t){var r,i;r=[];i=[];return this.each(function(){return n.push(new e(this))})}})(jQuery)}).call(this);