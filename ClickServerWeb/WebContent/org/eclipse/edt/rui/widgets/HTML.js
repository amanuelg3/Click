define(["org/eclipse/edt/rui/widgets/RestLib","eglx/ui/rui/eze$$Widget"],function(){egl.loadCSS("css/org.eclipse.edt.rui.css");egl.defineRUIWidget("org.eclipse.edt.rui.widgets","HTML",{"eze$$fileName":"org/eclipse/edt/rui/widgets/HTML.egl","eze$$runtimePropertiesFile":"org.eclipse.edt.rui.widgets.HTML","constructor":function(){new egl.org.eclipse.edt.rui.widgets.RestLib();this.start();},"eze$$setEmpty":function(){new egl.org.eclipse.edt.rui.widgets.RestLib();this.text="";this.src="";this.contextURL="";this.widgetOrientationThis="";},"eze$$setInitial":function(){this.eze$$setEmpty();this.widgetOrientationThis="";},"eze$$clone":function(){var _1=this;var _2=new egl.org.eclipse.edt.rui.widgets.HTML();_2.text=_1.text===null?null:_1.text;_2.src=_1.src===null?null:_1.src;_2.contextURL=_1.contextURL===null?null:_1.contextURL;_2.widgetOrientationThis=_1.widgetOrientationThis===null?null:_1.widgetOrientationThis;return _2;},"eze$$getAnnotations":function(){if(this.annotations===undefined){this.annotations={};this.annotations["XMLRootElement"]=new egl.eglx.xml.binding.annotation.XMLRootElement("HTML",null,false);}return this.annotations;},"eze$$getFieldInfos":function(){if(this.fieldInfos===undefined){var _3;this.fieldInfos=new Array();_3={};_3["XMLStyle"]=new egl.eglx.xml.binding.annotation.XMLElement("text",null,false,false);_3["JsonName"]=new egl.eglx.json.JsonName("text");this.fieldInfos[0]=new egl.eglx.services.FieldInfo(getText,setText,"S;",String,_3);_3={};_3["XMLStyle"]=new egl.eglx.xml.binding.annotation.XMLElement("src",null,false,false);_3["JsonName"]=new egl.eglx.json.JsonName("src");this.fieldInfos[1]=new egl.eglx.services.FieldInfo(getSrc,setSrc,"S;",String,_3);}return this.fieldInfos;},"start":function(){var _4;_4=egl.checkNull(egl.checkNull(this).document).getLocation();var _5;_5=egl.eglx.lang.EString.indexOf(_4,"//");_5=egl.eglx.lang.EString.indexOf(_4,"/",((_5+2)));var _6;_6=egl.eglx.lang.EString.indexOf(_4,"/",((_5+1)));if(((_6!=0))){_5=_6;}this.contextURL=egl.eglx.lang.EString.substring(_4,1,_5);},"setText":function(_7){this.text=_7;this.setInnerHTML(_7);},"getText":function(){return egl.checkNull(this).text;},"setSrc":function(_8){if(((((egl.eglx.lang.EString.textLen(_8)<4))||((egl.eglx.lang.EString.toLowerCase(egl.eglx.lang.EString.substring(_8,1,4)))!="http")))){egl.org.eclipse.edt.rui.widgets.RestLib["$inst"].eze_invokeGet_Proxy(((this.contextURL)+_8),new egl.egl.jsrt.Delegate(this,egl.org.eclipse.edt.rui.widgets.HTML.prototype.setText),null,egl.eglx.lang.EAny.ezeCast({eze$$value:new egl.eglx.http.HttpRest(),eze$$signature:"eglx.http.HttpRest"},egl.eglx.http.IHttp));}else{egl.org.eclipse.edt.rui.widgets.RestLib["$inst"].eze_invokeGet_Proxy(_8,new egl.egl.jsrt.Delegate(this,egl.org.eclipse.edt.rui.widgets.HTML.prototype.setText),null,egl.eglx.lang.EAny.ezeCast({eze$$value:new egl.eglx.http.HttpRest(),eze$$signature:"eglx.http.HttpRest"},egl.eglx.http.IHttp));}this.src=_8;},"getSrc":function(){return this.src;},"getWidgetOrientation":function(){return egl.checkNull(this).widgetOrientationThis;},"setWidgetOrientation":function(_9){egl.checkNull(this).widgetOrientationThis=_9;if(((_9)=="RTL")){this.setStyle("text-align: right;");if(((this.getTextLayout())!="Visual")){this.setAttribute("dir",egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny,["ltr","S;"]));}}else{this.setStyle("text-align: left;");}},"toString":function(){return "[HTML]";}},"div");});