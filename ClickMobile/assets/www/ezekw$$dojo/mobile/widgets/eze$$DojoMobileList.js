define(["eglx/ui/rui/FilterKind","ezekw$$dojo/mobile/widgets/eze$$DojoMobileContainer"],function(){egl.defineWidget("dojo.mobile.widgets","DojoMobileList","dojo.mobile.widgets","DojoMobileContainer","ul",{"constructor":function(){var _1=this;_1.style="Rounded Rectangle";_1.acceptChildrenTypes={"dojo.mobile.widgets.DojoMobileListCategory":true,"dojo.mobile.widgets.DojoMobileListItem":true};require(["dojo/mobile/utility/Synchronor"],function(_2){_1.synchronor=_2;_1.renderWhenDojoIsDoneLoading();});},"createDojoWidget":function(_3){this.eglParent=_3;if(this.style){this._createDojoWidget(_3);}},"_createDojoWidget":function(_4){var _5=this;var _4=_5.eglParent;if(!_5.style){return;}_5.dojoWidget={"domNode":_4};if(_5.style=="Edge to Edge"){_5.dojoWidget=new dojox.mobile.EdgeToEdgeList({},_4);}else{if(_5.style=="Rounded Rectangle"){_5.dojoWidget=new dojox.mobile.RoundRectList({},_4);if(typeof (window.eze$$device)=="string"&&window.eze$$device=="Android"){_5.dojoWidget.domNode.style.backgroundColor="transparent";}}else{throw _5.eze$$typename+".construction: Cannot create Dojo Mobile List with this style "+_5.style;}}_5.containerWidget=_5.dojoWidget;_5.synchronor.trigger(_5,"SYN_READY");_5.synchronor.wait(_5.children,"SYN_READY",function(){_5.setChildren(_5.children,_5.containerWidget);});},"setChildren":function(_6,_7){var _8=this;egl.dojo.mobile.widgets.DojoMobileContainer.prototype.setChildren.call(this,_6,_7);if(_8.dojoWidget&&_8.children&&_8.children.length>0){require(["dojo/ready"],function(_9){_9(function(){for(var i=0;i<_8.children.length;++i){if(_8.children[i].dojoWidget&&_8.children[i].dojoWidget.startup){_8.children[i].dojoWidget.startup();}}});});}},"setStyle":function(_a){if(this.dojoWidget){if(this.style!=_a){throw this.eze$$typename+".setStyle: Cannot change style after construction";}}else{this.style=_a;}},"getStyle":function(){return this.style;},"_appendChild":function(_b){egl.dojo.mobile.widgets.DojoMobileContainer.prototype._appendChild.call(this,_b);_b.setLogicalParent(this);},"setID":function(id){if(id&&id!="undefined"){this.id=id;}else{this.id="";}}});});