define(["ezekw$$dojo/mobile/widgets/eze$$DojoMobileContainer","eglx/ui/rui/FilterKind"],function(){egl.defineWidget("dojo.mobile.widgets","DojoMobileTab","dojo.mobile.widgets","DojoMobileContainer","li",{"constructor":function(){var _1=this;this.started=false;this.selected=false;this.containerWidget=null;this.text="";require(["dojo/mobile/utility/Synchronor","dojox/mobile/TabBarButton","dojox/mobile/View"],function(_2){_1.synchronor=_2;_1.renderWhenDojoIsDoneLoading();});},"_setTab":function(){this.setTitle(this.text);if(this.icon){this.setIcon(this.icon);}},"setText":function(_3){this.text=_3;if(this.tabViewWidget){this.tabViewWidget.domNode.innerText=_3;}},"getText":function(){return this.text||"";},"createDojoWidget":function(_4){var _5=this;var _6=_4;var _7=document.createElement("div");var _8={};this.moveTo="eze$$innerView"+(++egl._dojoSerial);if(!_6||!_7){egl.createRuntimeException("ERROR CREATING TAB WIDGET");}this.tabViewWidget=new dojox.mobile.View({id:this.moveTo,selected:this.getSelected()},_7);_7.innerText=this.text;if(_5.icon1){_8.icon1=this.icon1;}if(_5.icon2){_8.icon2=this.icon2;}if(_5.moveTo){_8.moveTo=this.moveTo;}if(_5.title){_8.label=this.title;}else{_8.label="eze$$innerView"+egl._dojoSerial;}this.tabBtnWidget=new dojox.mobile.TabBarButton(_8,_6);var _9=_5.tabBtnWidget.onClick;_5.tabBtnWidget.onClick=function(_a){if(typeof _9==="function"){_9.apply(_5.tabBtnWidget,arguments);}_5.handleEvent(_5.getOnClick(),"onClick");};if(_5.parent&&_5.parent.tabBarWidget.getIndexOfChild(_5.children[i].tabBtnWidget)==-1){_5.parent.tabBarWidget.addChild(this.tabBtnWidget);_5.parent.ContainerNode.appendChild(this.tabViewWidget.domNode);_5.tabBtnWidget.startup();_5.tabViewWidget.startup();}_5.dojoWidget=_5.tabBtnWidget;_5.containerWidget=_5.tabViewWidget;_5.synchronor.trigger(_5,"SYN_READY");_5.synchronor.wait(_5.children,"SYN_READY",function(){_5.setChildren(_5.children,_5.containerWidget);});_5.started=true;},"setTitle":function(_b){this.title=_b;if(this.tabBtnWidget){this.tabBtnWidget.set({label:this.title});}},"getTitle":function(){return this.title;},"setIcon1":function(_c){this.icon1=_c;if(this.tabBtnWidget){this.tabBtnWidget.set({icon1:this.icon1});}return;},"setIcon2":function(_d){this.icon2=_d;if(this.tabBtnWidget){this.tabBtnWidget.set({icon2:this.icon2});}return;},"getIcon2":function(_e){return this.icon2;},"getIcon1":function(){return this.icon1;},"setID":function(id){if(id&&id!="undefined"){this.id=id;}else{this.id="";}},"removeChildren":function(_f){var _10=_f?_f:this.dojoWidget;this._removeChildren(1,_10);},"setChildren":function(_11,_12){var _13=this.containerWidget;if(_13){this.removeChildren(_13);if(_11){for(var n=0;n<_11.length;n++){this._appendChild(_11[n],_13);}}}this.children=_11;},"getChildren":function(){return this.children;},"setSelected":function(_14){this.selected=_14?true:false;},"getSelected":function(){return this.selected;}});});