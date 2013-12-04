egl.defineWidget("dojo.widgets","DojoTooltipDialog","dojo.widgets","DojoContainer","div",{"constructor":function(){this.created=false;this.content=egl.createElement("div");var _1=["dijit/form/DropDownButton","dijit/TooltipDialog"];this.setRequireWidgetList(_1);this.renderWhenDojoIsDoneLoading(_1);},"createDojoWidget":function(_2){if(this.children){for(var n=0;n<this.children.length;n++){this.content.appendChild(this.children[n].eze$$DOMElement);}}this.dojoID="egl.DojoTooltipDialog_"+(++egl._dojoSerial);this.dojoDialogWidget=new dijit.TooltipDialog({content:this.content});this._mergeArgs({id:this.id||this.dojoID,label:this.text,disabled:this.disabled||false,dropDown:this.dojoDialogWidget});this.dojoWidget=new dijit.form.DropDownButton(this._args,_2);this.dojoWidget.domNode.firstChild.style.display="block";if(this.width){this.setWidth(this.width);}if(this.height){this.setHeight(this.height);}if(this._args.onMouseDown){var _3=this;require(["dojo/_base/connect"],function(_4){_4.connect(_3.dojoWidget._buttonNode,"onmousedown",this._args.onMouseDown);});}},"_setEvent":function(_5,_6,_7){if(_5=="mousedown"||_5=="focus"||_5=="blur"){var _8=this;this._args=this._args||{};func=function(e){_8.handleEvent(_8["getOn"+_6](),"on"+_6,e);};if(this.dojoWidget){if(_5=="mousedown"){require(["dojo/_base/connect"],function(_9){_9.connect(_8.dojoWidget._buttonNode,"on"+_5,func);});}else{this.dojoWidget.set("on"+_7,func);}}else{this._args["on"+_7]=func;}}else{egl.dojo.widgets.DojoBase.prototype._setEvent.call(this,_5,_6,_7);}},"destroyAtRender":function(){this.destroy();},"setID":function(id){egl.dojo.widgets.DojoBase.prototype.setID.call(this,id);},"getID":function(){return egl.eglx.ui.rui.Widget.prototype.getID.call(this);},"setWidth":function(_a){egl.dojo.widgets.DojoBase.prototype.setWidth.call(this,_a);if(this.dojoWidget){this.dojoWidget.domNode.firstChild.style.width=(parseInt(_a)-10)+"px";}},"setHeight":function(_b){egl.dojo.widgets.DojoBase.prototype.setHeight.call(this,_b);if(this.dojoWidget){this.dojoWidget.domNode.firstChild.style.height=(parseInt(_b)-8)+"px";}},"setText":function(_c){this.text=_c;this.setBiDiMarkers();if(this.dojoWidget){this.dojoWidget.setLabel(_c);}},"setChildren":function(_d){this.removeChildren();this.children=_d;if(this.dojoWidget){this.render();}},"setDisabled":function(_e){this._setProperty("disabled","disabled",_e);},"getDisabled":function(){return this._getProperty("disabled","disabled");},"hide":function(){if(this.dojoDialogWidget){dijit.popup.close(this.dojoDialogWidget);}},"destroy":function(){this.created=false;if(this.dojoWidget){this.dojoWidget.destroy();}if(this.dojoDialogWidget){this.dojoDialogWidget.destroyRecursive();}},"setBiDiMarkers":function(){if(this.text){var _f=this.getTextLayout()=="Visual";var _10=this.getReverseTextDirection()=="Yes";this.text=this.setBiDiMarkersStr(this.text,_f,_10);if(this.dojoWidget){this.dojoWidget.setLabel(this.text);}}egl.dojo.widgets.DojoContainer.prototype.setBiDiMarkers.call(this);}});