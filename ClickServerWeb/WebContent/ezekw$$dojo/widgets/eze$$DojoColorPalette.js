define(["ezekw$$dojo/widgets/eze$$DojoBase","eglx/ui/rui/FilterKind"],function(){egl.defineWidget("dojo.widgets","DojoColorPalette","dojo.widgets","DojoBase","div",{"constructor":function(){this.renderWhenDojoIsDoneLoading(["dijit/ColorPalette"]);},"createDojoWidget":function(_1){var _2=this;this._mergeArgs({palette:this.small?"3x4":"7x10",onChange:function(_3){this.value=_3;_2.handleEvent(_2.getOnChange(),"onChange",null);}});if(this.value){this._args.value=this.value;}this.dojoWidget=new dijit.ColorPalette(this._args,_1);},"setValue":function(_4){this.value=_4;if(this.dojoWidget){this.dojoWidget.set("value",_4);}},"getValue":function(){if(this.dojoWidget){return this.dojoWidget.value;}else{return this.value||"";}}});});