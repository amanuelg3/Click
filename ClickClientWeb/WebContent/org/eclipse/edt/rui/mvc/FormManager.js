define(["eglx/ui/rui/eze$$Widget","org/eclipse/edt/rui/mvc/FormField"],function(){egl.defineClass("org.eclipse.edt.rui.mvc","FormManager",{"eze$$fileName":"org/eclipse/edt/rui/mvc/FormManager.egl","eze$$runtimePropertiesFile":"org.eclipse.edt.rui.mvc.FormManager","constructor":function(){},"eze$$setEmpty":function(){this.entries=[];},"eze$$setInitial":function(){this.eze$$setEmpty();},"eze$$clone":function(){var _1=this;var _2=new egl.org.eclipse.edt.rui.mvc.FormManager();_2.entries=_1.entries===null?null:_1.entries;return _2;},"eze$$getAnnotations":function(){if(this.annotations===undefined){this.annotations={};this.annotations["XMLRootElement"]=new egl.eglx.xml.binding.annotation.XMLRootElement("FormManager",null,false);}return this.annotations;},"eze$$getFieldInfos":function(){if(this.fieldInfos===undefined){var _3;this.fieldInfos=new Array();_3={};_3["XMLStyle"]=new egl.eglx.xml.binding.annotation.XMLElement("entries",null,false,false);_3["JsonName"]=new egl.eglx.json.JsonName("entries");this.fieldInfos[0]=new egl.eglx.services.FieldInfo(getEntries,setEntries,"[Torg/eclipse/edt/rui/mvc/formfield;",egl.org.eclipse.edt.rui.mvc.FormField,_3);}return this.fieldInfos;},"setEntries":function(_4){this.entries=_4;var n=0;for(n=1;((n<=_4.getSize()));n=((n+1))){egl.checkNull(egl.checkNull(this).entries)[egl.checkNull(this).getEntries().checkIndex(egl.eglx.lang.EInt32.ezeCast({eze$$value:n,eze$$signature:"I;"},false)-1)].labelClass=egl.checkNull(egl.checkNull(_4)[_4.checkIndex(egl.eglx.lang.EInt32.ezeCast({eze$$value:n,eze$$signature:"I;"},false)-1)].nameLabel).getClass();if((egl.eglx.lang.EAny.equals(egl.checkNull(egl.checkNull(egl.checkNull(this).getEntries())[egl.checkNull(this).getEntries().checkIndex(egl.eglx.lang.EInt32.ezeCast({eze$$value:n,eze$$signature:"I;"},false)-1)].controller).validStateSetter,null))){egl.checkNull(egl.checkNull(egl.checkNull(this).getEntries())[egl.checkNull(this).getEntries().checkIndex(egl.eglx.lang.EInt32.ezeCast({eze$$value:n,eze$$signature:"I;"},false)-1)].controller).validStateSetter=new egl.egl.jsrt.Delegate(this,egl.org.eclipse.edt.rui.mvc.FormManager.prototype.validStateSetter);}}},"getEntries":function(){return this.entries;},"commit":function(){var n=0;for(n=this.getEntries().getSize();((n>=1));n=((n-1))){egl.checkNull(this.getEntries())[this.getEntries().checkIndex(egl.eglx.lang.EInt32.ezeCast({eze$$value:n,eze$$signature:"I;"},false)-1)].controller.commit();var _5;_5=egl.checkNull(this.getEntries())[this.getEntries().checkIndex(egl.eglx.lang.EInt32.ezeCast({eze$$value:n,eze$$signature:"I;"},false)-1)].controller.getErrorMessage();if(((!((((egl.eglx.lang.EAny.equals(_5,null))||(egl.eglx.lang.EString.equals(_5,"")))))&&(egl.eglx.lang.EAny.notEquals(egl.checkNull(this.getEntries())[this.getEntries().checkIndex(egl.eglx.lang.EInt32.ezeCast({eze$$value:n,eze$$signature:"I;"},false)-1)].errorLabel,null))))){egl.checkNull(this.getEntries())[this.getEntries().checkIndex(egl.eglx.lang.EInt32.ezeCast({eze$$value:n,eze$$signature:"I;"},false)-1)].errorLabel.setText(_5);}}},"publish":function(){var n=0;for(n=this.getEntries().getSize();((n>=1));n=((n-1))){egl.checkNull(this.getEntries())[this.getEntries().checkIndex(egl.eglx.lang.EInt32.ezeCast({eze$$value:n,eze$$signature:"I;"},false)-1)].controller.publish();}},"isValid":function(){var _6;_6=true;var n=0;for(n=this.getEntries().getSize();((n>=1));n=((n-1))){if(!(egl.checkNull(this.getEntries())[this.getEntries().checkIndex(egl.eglx.lang.EInt32.ezeCast({eze$$value:n,eze$$signature:"I;"},false)-1)].controller.isValid())){_6=false;}}return _6;},"validStateSetter":function(_7,_8){var n=0;EzeLabel_8:for(n=this.getEntries().getSize();((n>=1));n=((n-1))){var _9=null;_9=egl.eglx.lang.AnyValue.ezeCopyTo(egl.checkNull(this.getEntries())[this.getEntries().checkIndex(egl.eglx.lang.EInt32.ezeCast({eze$$value:n,eze$$signature:"I;"},false)-1)],_9);if((egl.checkNull(_9.controller).getView()==_7)){var _a;_a=_9.controller.getErrorMessage();if((egl.eglx.lang.EAny.notEquals(_9.errorLabel,null))){if((egl.eglx.lang.EAny.equals(_a,null))){_a="";}_9.errorLabel.setText(_a);}if((egl.eglx.lang.EAny.notEquals(_9.nameLabel,null))){if(_8){_9.nameLabel.setClass(_9.labelClass);}else{_9.nameLabel.setClass((egl.eglx.lang.EString.plus(_9.labelClass," FormErrorLabel")));}}break EzeLabel_8;}}},"validate":function(){var n=0;for(n=this.getEntries().getSize();((n>=1));n=((n-1))){if(!(egl.checkNull(this.getEntries())[this.getEntries().checkIndex(egl.eglx.lang.EInt32.ezeCast({eze$$value:n,eze$$signature:"I;"},false)-1)].controller.validate())){return false;}}return true;},"toString":function(){return "[FormManager]";}});});