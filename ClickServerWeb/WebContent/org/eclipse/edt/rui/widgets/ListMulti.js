define(["eglx/javascript/eze$$Job","eglx/ui/rui/eze$$Widget"],function(){egl.loadCSS("css/org.eclipse.edt.rui.css");egl.defineRUIWidget("org.eclipse.edt.rui.widgets","ListMulti",{"eze$$fileName":"org/eclipse/edt/rui/widgets/ListMulti.egl","eze$$runtimePropertiesFile":"org.eclipse.edt.rui.widgets.ListMulti","constructor":function(){},"eze$$setEmpty":function(){this.values=[];this.selection=[];this.size=0;this.options=[];this.sizeSet=false;this.reverseTextDirectionThis="";this.textLayoutThis="";this.savedSelection=null;},"eze$$setInitial":function(){this.eze$$setEmpty();this.sizeSet=false;this.reverseTextDirectionThis="No";this.textLayoutThis="Logical";},"eze$$clone":function(){var _1=this;var _2=new egl.org.eclipse.edt.rui.widgets.ListMulti();_2.values=_1.values===null?null:_1.values;_2.selection=_1.selection===null?null:_1.selection;_2.size=_1.size;_2.options=_1.options===null?null:_1.options;_2.sizeSet=_1.sizeSet;_2.reverseTextDirectionThis=_1.reverseTextDirectionThis===null?null:_1.reverseTextDirectionThis;_2.textLayoutThis=_1.textLayoutThis===null?null:_1.textLayoutThis;_2.savedSelection=_1.savedSelection===null?null:_1.savedSelection;return _2;},"eze$$getAnnotations":function(){if(this.annotations===undefined){this.annotations={};this.annotations["XMLRootElement"]=new egl.eglx.xml.binding.annotation.XMLRootElement("ListMulti",null,false);}return this.annotations;},"eze$$getFieldInfos":function(){if(this.fieldInfos===undefined){var _3;this.fieldInfos=new Array();_3={};_3["XMLStyle"]=new egl.eglx.xml.binding.annotation.XMLElement("values",null,false,false);_3["JsonName"]=new egl.eglx.json.JsonName("values");this.fieldInfos[0]=new egl.eglx.services.FieldInfo(getValues,setValues,"[S;",String,_3);_3={};_3["XMLStyle"]=new egl.eglx.xml.binding.annotation.XMLElement("selection",null,false,false);_3["JsonName"]=new egl.eglx.json.JsonName("selection");this.fieldInfos[1]=new egl.eglx.services.FieldInfo(getSelection,setSelection,"[I;",Number,_3);_3={};_3["XMLStyle"]=new egl.eglx.xml.binding.annotation.XMLElement("size",null,false,false);_3["JsonName"]=new egl.eglx.json.JsonName("size");this.fieldInfos[2]=new egl.eglx.services.FieldInfo(getSize,setSize,"I;",Number,_3);}return this.fieldInfos;},"setValues":function(_4){this.values=_4;this.removeChildren();this.options.removeAll();this.setAttribute("multiple",egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny,["true","S;"]));var _5=0;for(_5=1;((_5<=_4.getSize()));_5=((_5+1))){var _6=null;var _7;_7=(function(){var _8=new egl.eglx.ui.rui.Widget();return _8;}).call(this);_7.setTagName("option");_6=_7;var _9;_9=egl.checkNull(_6);_9.setInnerHTML(egl.checkNull(_4)[_4.checkIndex(egl.eglx.lang.EInt32.ezeCast({eze$$value:_5,eze$$signature:"I;"},false)-1)]);this.options.appendElement(egl.checkNull(_9));this.appendChild(_9);}if(!(this.sizeSet)){this.setSize(this.values.getSize());}if(((((egl.checkNull(this).textLayoutThis)=="Visual")||((egl.checkNull(this).reverseTextDirectionThis)=="Yes")))){this.setBiDiMarkers();}},"getValues":function(){return this.values;},"setSelection":function(_a){this.savedSelection=(function(){var _b=[];_b.setType("[I;");for(var i=0;i<0;i++){_b[i]=0;}return _b;})();egl.checkNull(this.savedSelection).appendAll(_a);var _c=null;var _d;_d=new egl.eglx.javascript.Job();_d.setRunFunction(new egl.egl.jsrt.Delegate(this,egl.org.eclipse.edt.rui.widgets.ListMulti.prototype.selectionSetter));_c=_d;egl.checkNull(_c).schedule(1);},"selectionSetter":function(){if((egl.eglx.lang.EAny.notEquals(this.savedSelection,null))){this.setSelectionInternal(egl.checkNull(this.savedSelection));this.savedSelection=null;}},"setSelectionInternal":function(_e){var _f=0;for(_f=1;((_f<=this.options.getSize()));_f=((_f+1))){egl.checkNull(this.options)[this.options.checkIndex(egl.eglx.lang.EInt32.ezeCast({eze$$value:_f,eze$$signature:"I;"},false)-1)].setAttribute("selected",egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny,["","S;"]));egl.checkNull(this.options)[this.options.checkIndex(egl.eglx.lang.EInt32.ezeCast({eze$$value:_f,eze$$signature:"I;"},false)-1)].removeAttribute("selected");}var _f=0;for(_f=1;((_f<=_e.getSize()));_f=((_f+1))){if(((((egl.checkNull(_e)[_e.checkIndex(egl.eglx.lang.EInt32.ezeCast({eze$$value:_f,eze$$signature:"I;"},false)-1)]>0))&&((egl.checkNull(_e)[_e.checkIndex(egl.eglx.lang.EInt32.ezeCast({eze$$value:_f,eze$$signature:"I;"},false)-1)]<=this.options.getSize()))))){egl.checkNull(this.options)[this.options.checkIndex(egl.eglx.lang.EInt32.ezeCast({eze$$value:egl.checkNull(_e)[_e.checkIndex(egl.eglx.lang.EInt32.ezeCast({eze$$value:_f,eze$$signature:"I;"},false)-1)],eze$$signature:"I;"},false)-1)].setAttribute("selected",egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny,["true","S;"]));}}if(((((egl.checkNull(this).textLayoutThis)=="Visual")||((egl.checkNull(this).reverseTextDirectionThis)=="Yes")))){this.setBiDiMarkers();}},"getSelection":function(){var _10=[];var _11=0;for(_11=1;((_11<=this.options.getSize()));_11=((_11+1))){if(((egl.eglx.lang.EString.ezeCast(egl.checkNull(this.options)[this.options.checkIndex(egl.eglx.lang.EInt32.ezeCast({eze$$value:_11,eze$$signature:"I;"},false)-1)].getAttribute("selected"),false))=="true")){_10.appendElement(egl.checkNull(_11));}}return _10;},"setSize":function(_12){if(((_12>1))){this.size=_12;this.sizeSet=true;this.setAttribute("size",egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny,[_12,"I;"]));}},"getSize":function(){return this.size;},"setTextLayout":function(_13){egl.checkNull(this).textLayoutThis=_13;this.setBiDiMarkers();},"getTextLayout":function(){return egl.checkNull(this).textLayoutThis;},"setReverseTextDirection":function(_14){egl.checkNull(this).reverseTextDirectionThis=_14;this.setBiDiMarkers();},"getReverseTextDirection":function(){return egl.checkNull(this).reverseTextDirectionThis;},"setBiDiMarkers":function(){var _15;_15=((egl.checkNull(this).textLayoutThis)=="Visual");var _16;_16=((egl.checkNull(this).reverseTextDirectionThis)=="Yes");var _17=0;for(_17=1;((_17<=this.options.getSize()));_17=((_17+1))){egl.checkNull(this.options)[this.options.checkIndex(egl.eglx.lang.EInt32.ezeCast({eze$$value:_17,eze$$signature:"I;"},false)-1)].setBiDiMarkers(_15,_16);}},"toString":function(){return "[ListMulti]";}},"select");});