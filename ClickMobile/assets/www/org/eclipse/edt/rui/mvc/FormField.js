define(["org/eclipse/edt/rui/mvc/Controller","org/eclipse/edt/rui/widgets/TextLabel"],function(){egl.defineClass("org.eclipse.edt.rui.mvc","FormField","egl.jsrt","Record",{"eze$$fileName":"org/eclipse/edt/rui/mvc/ValidatingForm.egl","constructor":function(){},"ezeCopy":function(_1){this.displayName=_1.displayName;this.controller=_1.controller;this.nameLabel=_1.nameLabel;this.errorLabel=_1.errorLabel;this.labelClass=_1.labelClass;},"eze$$setEmpty":function(){this.displayName=null;this.controller=new egl.org.eclipse.edt.rui.mvc.Controller();this.nameLabel=new egl.org.eclipse.edt.rui.widgets.TextLabel();this.errorLabel=new egl.org.eclipse.edt.rui.widgets.TextLabel();this.labelClass=null;},"eze$$setInitial":function(){this.eze$$setEmpty();},"eze$$clone":function(){var _2=this;var _3=new egl.org.eclipse.edt.rui.mvc.FormField();_3.displayName=_2.displayName===null?null:_2.displayName;_3.controller=_2.controller===null?null:_2.controller.eze$$clone();_3.nameLabel=_2.nameLabel===null?null:_2.nameLabel.eze$$clone();_3.errorLabel=_2.errorLabel===null?null:_2.errorLabel.eze$$clone();_3.labelClass=_2.labelClass===null?null:_2.labelClass;return _3;},"eze$$getAnnotations":function(){if(this.annotations===undefined){this.annotations={};this.annotations["XMLRootElement"]=new egl.eglx.xml.binding.annotation.XMLRootElement("FormField",null,false);}return this.annotations;},"eze$$getFieldInfos":function(){if(this.fieldInfos===undefined){var _4;this.fieldInfos=new Array();_4={};_4["XMLStyle"]=new egl.eglx.xml.binding.annotation.XMLElement("displayName",null,false,false);_4["JsonName"]=new egl.eglx.json.JsonName("displayName");this.fieldInfos[0]=new egl.eglx.services.FieldInfo("displayName","displayName","S;",String,_4);_4={};_4["XMLStyle"]=new egl.eglx.xml.binding.annotation.XMLElement("controller",null,false,false);_4["JsonName"]=new egl.eglx.json.JsonName("controller");this.fieldInfos[1]=new egl.eglx.services.FieldInfo("controller","controller","org.eclipse.edt.rui.mvc.Controller",egl.org.eclipse.edt.rui.mvc.Controller,_4);_4={};_4["XMLStyle"]=new egl.eglx.xml.binding.annotation.XMLElement("nameLabel",null,false,false);_4["JsonName"]=new egl.eglx.json.JsonName("nameLabel");this.fieldInfos[2]=new egl.eglx.services.FieldInfo("nameLabel","nameLabel","org.eclipse.edt.rui.widgets.TextLabel",egl.org.eclipse.edt.rui.widgets.TextLabel,_4);_4={};_4["XMLStyle"]=new egl.eglx.xml.binding.annotation.XMLElement("errorLabel",null,false,false);_4["JsonName"]=new egl.eglx.json.JsonName("errorLabel");this.fieldInfos[3]=new egl.eglx.services.FieldInfo("errorLabel","errorLabel","org.eclipse.edt.rui.widgets.TextLabel",egl.org.eclipse.edt.rui.widgets.TextLabel,_4);_4={};_4["XMLStyle"]=new egl.eglx.xml.binding.annotation.XMLElement("labelClass",null,false,false);_4["JsonName"]=new egl.eglx.json.JsonName("labelClass");this.fieldInfos[4]=new egl.eglx.services.FieldInfo("labelClass","labelClass","S;",String,_4);}return this.fieldInfos;},"toString":function(){return "[FormField]";}});});