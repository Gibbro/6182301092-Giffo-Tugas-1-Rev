System.register("chunks:///_virtual/Background.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,n,r,i,o,s,a,c,p;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,r=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){o=e.cclegacy,s=e._decorator,a=e.CCFloat,c=e.Vec3,p=e.Component}],execute:function(){var u,d,l,h,f;o._RF.push({},"2118490rK5CWLZRfDdxXZFO","Background",void 0);var y=s.ccclass,g=s.property;e("Background",(u=y("Background"),d=g({type:a}),u((f=t((h=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))||this).speed=void 0,r(t,"speedX",f,i(t)),t}n(t,e);var o=t.prototype;return o.start=function(){this.speed=new c(this.speedX,0,0)},o.update=function(e){this.speed.x=this.speedX*e,this.node.translate(this.speed),this.node.position.x<-288&&this.node.translate(new c(288,0,0))},t}(p)).prototype,"speedX",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return-288}}),l=h))||l));o._RF.pop()}}}));

System.register("chunks:///_virtual/Bird.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var i,e,o,n,r,s,a,d,h,l,p,u;return{setters:[function(t){i=t.applyDecoratedDescriptor,e=t.inheritsLoose,o=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){r=t.cclegacy,s=t._decorator,a=t.Node,d=t.input,h=t.Input,l=t.Vec3,p=t.UITransform,u=t.Component}],execute:function(){var c,g,m,P,y;r._RF.push({},"2a092d8g/lCVZImBQ1NgaFl","Bird",void 0);var w=s.ccclass,f=s.property;t("Bird",(c=w("Bird"),g=f({type:a}),c((y=i((P=function(t){function i(){for(var i,e=arguments.length,r=new Array(e),s=0;s<e;s++)r[s]=arguments[s];return(i=t.call.apply(t,[this].concat(r))||this).nodeImage=void 0,i.curRotation=0,i.isFalling=!0,i.birdSpeed=350,i.defaultSpeed=200,i.gravity=500,o(i,"nodeGroupOfPipe",y,n(i)),i}e(i,t);var r=i.prototype;return r.start=function(){this.nodeImage=this.node.getChildByPath("Image-Bird"),d.on(h.EventType.TOUCH_START,this.onTouchStart,this)},r.onTouchStart=function(t){this.isFalling=!1,this.birdSpeed=this.defaultSpeed},r.update=function(t){this.birdSpeed-=this.gravity*t,this.birdSpeed<0?(this.node.translate(new l(0,this.birdSpeed*t,0)),this.curRotation>-60&&(this.curRotation-=60*t),this.nodeImage.setRotationFromEuler(new l(0,0,this.curRotation))):(this.node.translate(new l(0,this.birdSpeed*t,0)),this.curRotation<60&&(this.curRotation+=60*t),this.nodeImage.setRotationFromEuler(new l(0,0,this.curRotation))),this.isCollidingPipe(this.nodeGroupOfPipe)&&alert("game over :(")},r.isCollidingPipe=function(t){var i=t.getChildByPath("Pipe-1"),e=t.getChildByPath("Pipe-2"),o=this.nodeImage.getComponent(p).width,n=this.nodeImage.getComponent(p).height,r=this.nodeImage.worldPosition.x-o/2,s=this.nodeImage.worldPosition.x+o/2,a=this.nodeImage.worldPosition.y+n/2,d=this.nodeImage.worldPosition.y-n/2,h=i.getComponent(p).width,l=i.getComponent(p).height,u=i.worldPosition.x-h/2,c=i.worldPosition.x+h/2,g=i.worldPosition.y+l/2,m=i.worldPosition.y-l/2;if(r<=c&&s>=u&&a>m&&d<g)return!0;var P=e.getComponent(p).width,y=e.getComponent(p).height,w=e.worldPosition.x-P/2,f=e.worldPosition.x+P/2,I=e.worldPosition.y+y/2,v=e.worldPosition.y-y/2;return r<=f&&s>=w&&a>v&&d<I},i}(u)).prototype,"nodeGroupOfPipe",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=P))||m));r._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Background.ts","./Bird.ts","./Pipe.ts"],(function(){return{setters:[null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/Pipe.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,n,o,i,r,s;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,o=t._decorator,i=t.Vec3,r=t.randomRangeInt,s=t.Component}],execute:function(){var c;n._RF.push({},"e44f3qrEbpMhIguCpJWMFvG","Pipe",void 0);var p=o.ccclass;o.property,t("Pipe",p("Pipe")(c=function(t){function n(){return t.apply(this,arguments)||this}e(n,t);var o=n.prototype;return o.start=function(){},o.update=function(t){this.node.translate(new i(-100*t,0,0)),this.node.position.x<-252&&(this.node.setPosition(new i(102,0,0)),this.node.translate(new i(0,r(-40,160),0)))},n}(s))||c);n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});