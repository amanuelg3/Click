define(["ezekw$$dojo/widgets/eze$$DojoButton","ezekw$$dojo/widgets/eze$$DojoContainer"],function(){egl.defineWidget("dojo.widgets","DojoDialog","dojo.widgets","DojoContainer","div",{"constructor":function(){this.requireList=["dijit/Dialog"];this.setRequireWidgetList(this.requireList);this.content=egl.createElement("div");this.content.height="auto";this.draggable=true;this.isOpen=false;},"createDojoWidget":function(_1){this.dojoID="egl.DojoDialog_"+(++egl._dojoSerial);for(var n=0;n<this.children.length;n++){this.content.appendChild(this.children[n].eze$$DOMElement);}var c=[this.content];if(this.buttons!=null){var _2=document.createElement("div");_2.className="dijitDialogPaneActionBar";for(var n=0;n<this.buttons.length;n++){_2.appendChild(this.buttons[n].eze$$DOMElement);}c.push(_2);}this._mergeArgs({title:this.title||"",id:this.id||this.dojoID,content:c});var _3=this;this._args.onCancel=function(){_3.handleEvent(_3.getOnCancel(),"onCancel",null);};this.dojoWidget=new dijit.Dialog(this._args,_1);this.dojoWidget.startup();if(this.isOpen){this.showDialog();}},"getOnCancel":function(){if(this.onCancel){return this.onCancel;}else{return (this.onCancel=[]);}},"getButtons":function(){return this.buttons;},"setButtons":function(_4){this.buttons=_4;},"copyStyle":function(_5){for(f in _5){if(_5[f]!=""){try{this.content.style[f]=_5[f];}catch(e){}}}if(this.width){egl.setWidth(this.dojoWidget.domNode,egl.toPX(this.width));}if(this.height){egl.setHeight(this.dojoWidget.domNode,egl.toPX(this.height));}},"setChildren":function(_6){this.children=_6;},"showDialog":function(){this.isOpen=true;if(this.dojoWidget){this.dojoWidget.show();}else{this.renderWhenDojoIsDoneLoading(this.requireList);}},"hideDialog":function(){this.isOpen=false;if(this.dojoWidget){this.dojoWidget.hide();}else{this.renderWhenDojoIsDoneLoading(this.requireList);}},"setVisible":function(_7){egl.dojo.widgets.DojoContainer.prototype.setVisible.call(this,_7);if(this.dojoWidget){if(_7){this.content.style.visibility="";}else{this.content.style.visibility="hidden";}this.dojoWidget.domNode.style.visibility="";}},"getVisible":function(){if(this.dojoWidget){return this.content.style.visibility=="hidden"?false:true;}else{return egl.dojo.widgets.DojoContainer.prototype.getVisible.call(this);}}});});