define([],function(){egl.defineClass("dojo.widgets","DojoGridColumn","egl.jsrt","Record",{"eze$$fileName":"dojo/widgets/DojoGrid.egl","constructor":function(){},"ezeCopy":function(_1){this.displayName=_1.displayName;this.name=_1.name;this.width=_1.width;},"eze$$setEmpty":function(){this.displayName="";this.name="";this.width=0;},"eze$$setInitial":function(){this.eze$$setEmpty();},"eze$$clone":function(){var _2=this;var _3=new egl.dojo.widgets.DojoGridColumn();_3.displayName=_2.displayName===null?null:_2.displayName;_3.name=_2.name===null?null:_2.name;_3.width=_2.width;return _3;},"eze$$getAnnotations":function(){if(this.annotations===undefined){this.annotations={};this.annotations["XMLRootElement"]=new egl.eglx.xml.binding.annotation.XMLRootElement("DojoGridColumn",null,false);}return this.annotations;},"eze$$getFieldInfos":function(){if(this.fieldInfos===undefined){var _4;this.fieldInfos=new Array();_4={};_4["XMLStyle"]=new egl.eglx.xml.binding.annotation.XMLElement("displayName",null,false,false);_4["JsonName"]=new egl.eglx.json.JsonName("displayName");this.fieldInfos[0]=new egl.eglx.services.FieldInfo("displayName","displayName","S;",String,_4);_4={};_4["XMLStyle"]=new egl.eglx.xml.binding.annotation.XMLElement("name",null,false,false);_4["JsonName"]=new egl.eglx.json.JsonName("name");this.fieldInfos[1]=new egl.eglx.services.FieldInfo("name","name","S;",String,_4);_4={};_4["XMLStyle"]=new egl.eglx.xml.binding.annotation.XMLElement("width",null,false,false);_4["JsonName"]=new egl.eglx.json.JsonName("width");this.fieldInfos[2]=new egl.eglx.services.FieldInfo("width","width","I;",Number,_4);}return this.fieldInfos;},"toString":function(){return "[DojoGridColumn]";}});});