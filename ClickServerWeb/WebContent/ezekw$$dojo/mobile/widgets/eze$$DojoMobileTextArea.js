define(["ezekw$$dojo/mobile/widgets/eze$$DojoMobileBase","eglx/ui/rui/FilterKind"],function(){egl.defineWidget("dojo.mobile.widgets","DojoMobileTextArea","dojo.mobile.widgets","DojoMobileBase","textarea",{"constructor":function(){var _1=this;require(["dojo/mobile/utility/Synchronor","dojox/mobile/ExpandingTextArea"],function(_2){_1.synchronor=_2;_1.renderWhenDojoIsDoneLoading();});},"createDojoWidget":function(_3){var _4=this;_3.innerHTML=_4.value||"";_4.domNode=_3;_4._args={value:_4.value||"",readOnly:(_4.readOnly?_4.readOnly:false),maxLength:(_4.maxLength?_4.maxLength:-1),placeHolder:(_4.placeHolder?_4.placeHolder:"")};if(_4.expanding){_4.dojoWidget=new dojox.mobile.ExpandingTextArea(_4._args,_3);}else{_4.dojoWidget=new dojox.mobile.TextArea(_4._args,_3);}var _5=(_4.cols>0)?_4.cols:20;var _6=(_4.rows>0)?_4.rows:2;_4.dojoWidget.domNode.innerHTML=_4.value||"";_4.dojoWidget.domNode.cols=_5;_4.dojoWidget.domNode.rows=_6;_4.dojoWidget.onChange=function(e){_4.handleEvent(_4.getOnChange(),"onChange");};_4.synchronor.trigger(_4,"SYN_READY");},"setValue":function(_7){this.value=_7;if(this.dojoWidget){this.dojoWidget.domNode.innerHTML=_7;}},"getValue":function(){if(this.dojoWidget){return this.dojoWidget.value;}return this.value;},"setCols":function(_8){if(this.dojoWidget){this.domNode.cols=_8;}this.cols=_8;},"setRows":function(_9){this.rows=_9;if(this.dojoWidget){this.domNode.rows=_9;}},"setExpanding":function(_a){this.expanding=_a||true;},"getExpanding":function(){return this.expanding;},"setReadOnly":function(_b){this.readOnly=_b;if(this.dojoWidget){this.dojoWidget.readOnly=_b;}},"getReadOnly":function(){if(this.dojoWidget){return this.dojoWidget.readOnly;}else{return this.readOnly;}},"setMaxLength":function(_c){this.maxLength=_c;if(this.dojoWidget){this.dojoWidget.maxLength=_c;}},"getMaxLength":function(){if(this.dojoWidget){return this.dojoWidget.maxLength;}else{return this.maxLength;}},"setPlaceHolder":function(_d){this.placeHolder=_d;if(this.dojoWidget){this.dojoWidget.placeHolder=defaultvalue;}},"getPlaceHolder":function(){if(this.dojoWidget){return this.dojoWidget.placeHolder;}else{return this.placeHolder;}}});});