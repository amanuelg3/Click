define([],function(){egl.defineClass("dojo.widgets","BubbleChartData","egl.jsrt","Record",{"eze$$fileName":"dojo/widgets/DojoBubbleChart.egl","constructor":function(){},"ezeCopy":function(_1){this.size=_1.size;this.x=_1.x;this.y=_1.y;this.color=_1.color;this.tooltip=_1.tooltip;},"eze$$setEmpty":function(){this.size=0;this.x=0;this.y=0;this.color="";this.tooltip=null;},"eze$$setInitial":function(){this.eze$$setEmpty();},"eze$$clone":function(){var _2=this;var _3=new egl.dojo.widgets.BubbleChartData();_3.size=_2.size;_3.x=_2.x;_3.y=_2.y;_3.color=_2.color===null?null:_2.color;_3.tooltip=_2.tooltip===null?null:_2.tooltip;return _3;},"eze$$getAnnotations":function(){if(this.annotations===undefined){this.annotations={};this.annotations["XMLRootElement"]=new egl.eglx.xml.binding.annotation.XMLRootElement("BubbleChartData",null,false);}return this.annotations;},"eze$$getFieldInfos":function(){if(this.fieldInfos===undefined){var _4;this.fieldInfos=new Array();_4={};_4["XMLStyle"]=new egl.eglx.xml.binding.annotation.XMLElement("size",null,false,false);_4["JsonName"]=new egl.eglx.json.JsonName("size");this.fieldInfos[0]=new egl.eglx.services.FieldInfo("size","size","F;",Number,_4);_4={};_4["XMLStyle"]=new egl.eglx.xml.binding.annotation.XMLElement("x",null,false,false);_4["JsonName"]=new egl.eglx.json.JsonName("x");this.fieldInfos[1]=new egl.eglx.services.FieldInfo("x","x","F;",Number,_4);_4={};_4["XMLStyle"]=new egl.eglx.xml.binding.annotation.XMLElement("y",null,false,false);_4["JsonName"]=new egl.eglx.json.JsonName("y");this.fieldInfos[2]=new egl.eglx.services.FieldInfo("y","y","F;",Number,_4);_4={};_4["XMLStyle"]=new egl.eglx.xml.binding.annotation.XMLElement("color",null,false,false);_4["JsonName"]=new egl.eglx.json.JsonName("color");this.fieldInfos[3]=new egl.eglx.services.FieldInfo("color","color","S;",String,_4);_4={};_4["XMLStyle"]=new egl.eglx.xml.binding.annotation.XMLElement("tooltip",null,false,false);_4["JsonName"]=new egl.eglx.json.JsonName("tooltip");this.fieldInfos[4]=new egl.eglx.services.FieldInfo("tooltip","tooltip","S;",String,_4);}return this.fieldInfos;},"toString":function(){return "[BubbleChartData]";}});});