define(["ezekw$$dojo/widgets/eze$$DojoContainer","eglx/ui/rui/FilterKind"],function(){egl.defineWidget("dojo.widgets","DojoAccordionContainer","dojo.widgets","DojoContainer","div",{"constructor":function(){this.setRequireWidgetList(["dijit/layout/StackContainer","dijit/layout/AccordionContainer","dijit/layout/ContentPane"]);this.setChildType("dojo.widgets.DojoContentPane");this.selection=1;this.duration=250;this.width=800;this.height=450;this.selection=-1;},"createDojoWidget":function(_1){this.dojoID="egl.DojoAccordianContainer"+(++egl._dojoSerial);this._mergeArgs({duration:this.duration,doLayout:true,id:this.id||this.dojoID,style:"width:"+egl.toPX(this.width)+";height:"+egl.toPX(this.height)});this.dojoWidget=new dijit.layout.AccordionContainer(this._args,_1);this.dojoWidget.startup();this.addEventHandlers();if(this.selection!=-1){this.setSelection(this.selection);}},"copyStyle":function(_2){if(egl.IE&&egl.IEVersion<9){cssText=this.dojoWidget.domNode.style.cssText;var _3=cssText.split(";");for(var i=_3.length-1;i>=0;i--){var _4=_3[i].replace(/^\s+|\s+$/g,"").substring(0,6).toLowerCase();if(_4=="border"){_3[i]=_3[i]+" !important";}}cssText=_3.join(";");this.dojoWidget.domNode.style.cssText=cssText;}},"resize":function(_5,_6){if(this.dojoWidget){if(_5){this.setHeight(_5);}if(_6){this.setWidth(_6);}this.dojoWidget.resize();}},"addChild":function(_7,_8){egl.dojo.widgets.DojoContainer.prototype.addChild.call(this,_7);},"addEventHandlers":function(){var _9=this;require(["dojo/_base/connect"],function(_a){_a.subscribe(_9.getID()+"-selectChild",function(_b){if(_9.eze$$ready){_9.selection=_9.getChildIndex(_b)+1;_9.notifyListeners(_b.eglWidget,_9.getOnTabSelected(),"onTabSelected");}});});},"notifyListeners":function(_c,_d,_e){for(var n=0;n<_d.length;n++){try{_d[n]({widget:_c});}catch(e){egl.printError("DojoAccordionContainer: event handler for "+_e+" failed.",e);}}},"setBorderColor":function(_f){this._setImportantStyle("border-color",egl.toPX(_f));},"setBorderWidth":function(_10){this._setImportantStyle("border-width",egl.toPX(_10));},"setBorderTopWidth":function(_11){this._setImportantStyle("border-top-width",egl.toPX(_11));},"setBorderRightWidth":function(_12){this._setImportantStyle("border-right-width",egl.toPX(_12));},"setBorderLeftWidth":function(_13){this._setImportantStyle("border-left-width",egl.toPX(_13));},"setBorderBottomWidth":function(_14){this._setImportantStyle("border-bottom-width",egl.toPX(_14));},"setBorderStyle":function(_15){this._setImportantStyle("border-style",_15);},"setBorderTopStyle":function(_16){this._setImportantStyle("border-top-style",_16);},"setBorderRightStyle":function(_17){this._setImportantStyle("border-right-style",_17);},"setBorderLeftStyle":function(_18){this._setImportantStyle("border-left-style",_18);},"setBorderBottomStyle":function(_19){this._setImportantStyle("border-bottom-style",_19);},"_setImportantStyle":function(_1a,_1b){this.eze$$DOMElement.style.cssText=this.eze$$DOMElement.style.cssText+";"+_1a+":"+_1b+" !important";},"getSelection":function(){return this.selection;},"setSelection":function(_1c){var _1d=this;this.selection=_1c;setTimeout(function(){if(_1d.dojoWidget){var _1e=_1d.dojoWidget.getChildren();if(_1c>0&&_1c<=_1e.length){_1d.selection=_1c;_1d.dojoWidget.selectChild(_1e[_1c-1]);}}},1);},"getOnTabSelected":function(){return this.onTabSelected||(this.onTabSelected=[]);},"setOnTabSelected":function(){throw egl.eglx.ui.rui.Widget.ErrorMessageForEventHandlers;}});});