egl.defineWidget("dojo.mobile.widgets","DojoMobileIconContainer","dojo.mobile.widgets","DojoMobileContainer","div",{"constructor":function(){var _1=this;this.children=[];require(["dojox/mobile/IconContainer"],function(_2){_1.renderWhenDojoIsDoneLoading();});},"createDojoWidget":function(_3){var _4=this;_4.dojoWidget=new dojox.mobile.IconContainer({},_3);_4.containerWidget=_4.dojoWidget;require(["dojo/mobile/utility/Synchronor"],function(_5){_5.wait(_4.children,"SYN_READY",function(){if(_4.children){_4.setChildren(_4.children,_4.containerWidget,true);}_4.dojoWidget&&_4.dojoWidget.startup();for(var i=0;i<_4.children.length;++i){if(_4.children[i].dojoWidget&&_4.children[i].dojoWidget.startup){_4.children[i].dojoWidget.startup();}}_4._fixTerminator();});});},"_fixTerminator":function(){var _6=this,_7=null,_8=null;if(!_6.dojoWidget){return;}for(var i=0;i<_6.dojoWidget.domNode.childNodes.length;++i){if(_6.dojoWidget.domNode.childNodes[i].className.indexOf("mblIconItemTerminator")!=-1){_7=_6.dojoWidget.domNode.childNodes[i];}else{if(_7&&_6.dojoWidget.domNode.childNodes[i].className.indexOf("mblIconItem")!=-1){_8=i+1;}}}if(_7&&_8){_6.dojoWidget.domNode.removeChild(_7);--_8;if(_8!=_6.dojoWidget.domNode.childNodes.length){document.insertBefore(_7,_6.dojoWidget.domNode.childNodes[_8]);}else{if(_8==_6.dojoWidget.domNode.childNodes.length){_6.dojoWidget.domNode.appendChild(_7);}}}},"setChildren":function(_9,_a,_b){egl.dojo.mobile.widgets.DojoMobileContainer.prototype.setChildren.call(this,_9,_a);if(_b){this._fixTerminator();}},"removeChildren":function(_c){var _d=this._getContainerWidget(_c);this._removeChildren(1,_d);}});