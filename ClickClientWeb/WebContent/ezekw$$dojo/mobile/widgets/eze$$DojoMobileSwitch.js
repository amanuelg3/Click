define(["ezekw$$dojo/mobile/widgets/eze$$DojoMobileBase","eglx/ui/rui/FilterKind"],function(){egl.defineWidget("dojo.mobile.widgets","DojoMobileSwitch","dojo.mobile.widgets","DojoMobileBase","div",{"constructor":function(){var _1=this;require(["dojo/mobile/utility/Synchronor"],function(_2){_1.synchronor=_2;_1.renderWhenDojoIsDoneLoading();});_1.value="off";},"createDojoWidget":function(_3){var _4=this;this.dojoWidget=new dojox.mobile.Switch({value:this.value,leftLabel:this.left||"ON",rightLabel:this.right||"OFF"},_3);this.synchronor.trigger(this,"SYN_READY");if(this.className){dojo.addClass(this.dojoWidget.domNode,this.className);}this.dojoWidget.onStateChanged=function(_5){_4.handleEvent(_4.getOnChange(),"onChange");};},"setValue":function(_6){this.value=_6?"on":"off";if(this.dojoWidget){if(this.isValue()==_6){return;}var e={targetTouches:null};this.dojoWidget.onTouchStart(e);this.dojoWidget.onClick(null);}},"getValue":function(){return this.isValue();},"isValue":function(){var _7=this.value;if(this.dojoWidget){_7=this.dojoWidget.get("value");}return _7=="on"?true:false;},"setOnText":function(_8){this.left=_8;if(this.dojoWidget){this.dojoWidget.set("leftLabel",_8);var _9=this.dojoWidget.domNode.getElementsByTagName("div");var _a;for(var n=0;n<_9.length;n++){if(_9[n].className=="mblSwitchText mblSwitchTextLeft"){_a=_9[n];break;}}if(_a){_a.innerHTML=this.left;}else{}}},"getOnText":function(){return this.left;},"setOffText":function(_b){this.right=_b;if(this.dojoWidget){this.dojoWidget.set("rightLabel",_b);var _c=this.dojoWidget.domNode.getElementsByTagName("div");var _d;for(var n=0;n<_c.length;n++){if(_c[n].className=="mblSwitchText mblSwitchTextRight"){_d=_c[n];break;}}if(_d){_d.innerHTML=this.right;}else{}}},"getOffText":function(){return this.right;},"setID":function(id){if(id&&id!="undefined"){this.id=id;}else{this.id="";}},"setClass":function(_e){this.className=_e;}});});