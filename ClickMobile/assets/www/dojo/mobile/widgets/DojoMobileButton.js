egl.defineWidget("dojo.mobile.widgets","DojoMobileButton","dojo.mobile.widgets","DojoMobileBase","button",{"constructor":function(){var _1=this;require(["dojo/mobile/utility/Synchronor","dojox/mobile/Button"],function(_2){_1.synchronor=_2;_1.renderWhenDojoIsDoneLoading();});},"createDojoWidget":function(_3){var _4=this;_3.innerHTML=this.text||"";_3.onClick=function(){_4.handleEvent(_4.getOnClick(),"onClick");};this.domNode=_3;this.dojoWidget=new dojox.mobile.Button({},_3);this.dojoWidget.domNode.innerHTML=this.text||"";this.dojoWidget.onClick=function(){_4.handleEvent(_4.getOnClick(),"onClick");};this.dojoWidget.onDoubleClick=function(){_4.handleEvent(_4.getOnDoubleClick(),"onClick");};_4.synchronor.trigger(_4,"SYN_READY");},"setText":function(_5){this.text=_5;if(this.domNode){this.domNode.innerHTML=this.text;}}});