egl.defineClass("eglx.lang","InvalidPatternException","eglx.lang","AnyException",{"eze$$fileName":"eglx/lang/Exceptions.egl","constructor":function(){this.eze$$setInitial();},"ezeCopy":function(_1){this.pattern=_1.pattern;},"eze$$setEmpty":function(){this.pattern="";},"eze$$setInitial":function(){this.eze$$setEmpty();},"eze$$clone":function(){var _2=this;var _3=new egl.eglx.lang.InvalidPatternException();_3.pattern=_2.pattern;return _3;},"eze$$getAnnotations":function(){if(this.annotations===undefined){this.annotations={};this.annotations["XMLRootElement"]=new egl.eglx.xml.binding.annotation.XMLRootElement("InvalidPatternException",null,false);}return this.annotations;},"eze$$getFieldInfos":function(){if(this.fieldInfos===undefined){var _4;this.fieldInfos=new Array();_4={};_4["XMLStyle"]=new egl.eglx.xml.binding.annotation.XMLElement("pattern",null,false,false);_4["JsonName"]=new egl.eglx.json.JsonName("pattern");this.fieldInfos[0]=new egl.eglx.services.FieldInfo("pattern","pattern","S;",String,_4);}return this.fieldInfos;},"toString":function(){return "[InvalidPatternException]";},"eze$$getName":function(){return "eglx.lang.InvalidPatternException";},"eze$$getChildVariables":function(){var _5=this;var _6=this.eze$$superClass.prototype.eze$$getChildVariables.call(this);_6.push({name:"pattern",value:_5.pattern,type:"eglx.lang.EString",jsName:"pattern"});return _6;}});