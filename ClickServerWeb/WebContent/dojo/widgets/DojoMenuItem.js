egl.defineWidget("dojo.widgets","DojoMenuItem","dojo.widgets","DojoContainer","div",{"constructor":function(){this.setChildType("dojo.widgets.DojoMenu");require(["dijit/PopupMenuItem","dijit/MenuItem","dijit/MenuSeparator"]);},"createDojoWidget":function(_1){var _2=this;if(this.children&&this.children.length){this._mergeArgs({label:this.text,disabled:this.disabled,popup:(new dijit.Menu())});if(this.id){this._args.id=this.id;}this.dojoWidget=new dijit.PopupMenuItem(this._args);}else{if(this.text){this._mergeArgs({label:this.text,id:this.id||"egl.dojoMenuItem"+(++egl._dojoSerial),iconClass:this.iconClass||"",disabled:this.disabled||false});this.dojoWidget=new dijit.MenuItem(this._args);}else{if(this.id){this._args.id=this.id;}this.dojoWidget=new dijit.MenuSeparator(this._args);}}if(this._parent){this._parent.dojoMenu.addChild(this.dojoWidget);}if(this.children&&this.children.length){this.setChildren(this.children);}},"destroyAtRender":function(){if(this.dojoWidget){if(this.logicalParent){this.logicalParent.dojoWidget.containerNode.removeChild(this.eze$$DOMElement);this._parent=this.logicalParent;}this.dojoWidget.destroy();}else{dijit.registry.remove(this.id);}},"setChildren":function(_3){var _4=this.children;this.children=_3;if(this.dojoWidget){if(!_4||_4.length<=0){this.render();}var _5={message:"A popup menu requires exactly one child, which has to be of type dojo.widgets.DojoMenu"};if(_3.length==0){this.showError("dojo.widgets.DojoMenu","DojoMenuItem",null,"getSubMenu",_5);}else{if(this.children[0].eze$$typename!="DojoMenu"){this.showError("dojo.widgets.DojoMenu","DojoMenuItem",this.children[0],"getSubMenu",_5);}}this.removeChildren();this.children[0].logicalParent=this;if(this.children[0].dojoMenu){this.dojoWidget.set("popup",this.children[0].dojoMenu);}else{this.children[0]._parent=this;}}},"setText":function(_6){var _7=this.text;this.text=_6;if(this.dojoWidget){if(_7||(this.children&&this.children.length>0)){this.dojoWidget.set("label",_6);}else{this.render();}}},"getText":function(){if(this.text.charAt(0)>=egl.LRE&&this.text.charAt(0)<=egl.RLO){return this.text.substring(1);}return egl.dojo.widgets.DojoBase.prototype.getText.call(this);},"setDisabled":function(_8){this.disabled=_8;if(this.dojoWidget){this.dojoWidget.setDisabled(_8);}},"getDisabled":function(){return this.disabled;},"setBiDiMarkers":function(_9,_a){var _b=_9=="Visual";var _c=_a=="Yes";if(this.text){this.text=this.setBiDiMarkersStr(this.text,_b,_c);}}});