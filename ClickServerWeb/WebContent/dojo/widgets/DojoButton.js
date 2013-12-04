egl.defineWidget("dojo.widgets","DojoButton","dojo.widgets","DojoBase","div",{"constructor":function(){this.setData("Button",["dijit/form/Button"]);},"createDojoWidget":function(_1){this.runEventHandlers=function(){};var _2=this;this._mergeArgs({label:this.text||""});this._args._onClick=function(e){_2.handleEvent(_2.getOnClick(),"onClick",e);if(this.valueNode){egl.stopEventPropagation(e);}};this.dojoWidget=new dijit.form.Button(this._args,_1);this.dojoWidget.setDisabled(this.disabled?true:false);if(this.width){this.setWidth(this.width);}if(this.height){this.setHeight(this.height);}},"setID":function(id){if(id){this._setProperty("id","id",id);this.eze$$DOMElement.id="widget_"+id;}},"getID":function(){return this._getProperty("id","id");},"setText":function(_3){this.text=_3;this.setBiDiMarkers();if(this.dojoWidget){this.dojoWidget.setLabel(_3);}},"getDisabled":function(){return Boolean(this.disabled);},"setDisabled":function(_4){this.disabled=_4;if(this.dojoWidget){this.dojoWidget.setDisabled(this.disabled?true:false);}},"getText":function(){if(this.text.charAt(0)>=egl.LRE&&this.text.charAt(0)<=egl.RLO){return this.text.substring(1);}return this.text;},"setData":function(_5,_6){egl.dojo.widgets.DojoBase.prototype.setData.call(this,_5,_6);this.setBiDiMarkers();},"setWidth":function(_7){egl.dojo.widgets.DojoBase.prototype.setWidth.call(this,_7);if(this.dojoWidget){this.dojoWidget.domNode.firstChild.style.width=(parseInt(_7)-8)+"px";}},"setHeight":function(_8){egl.dojo.widgets.DojoBase.prototype.setHeight.call(this,_8);if(this.dojoWidget){this.dojoWidget.domNode.firstChild.style.height=(parseInt(_8)-8)+"px";}},"setBiDiMarkers":function(){this.applyBiDiMarkersToWidgetText();if(this.data){this.data=this.text;}}});