define(["org/eclipse/edt/rui/mvc/Controller"],function(){egl.defineRUILibrary("org.eclipse.edt.rui.mvc","MVCLib",{"eze$$fileName":"org/eclipse/edt/rui/mvc/MVCLib.egl","eze$$runtimePropertiesFile":"org.eclipse.edt.rui.mvc.MVCLib","constructor":function(){if(egl.org.eclipse.edt.rui.mvc.MVCLib["$inst"]){return egl.org.eclipse.edt.rui.mvc.MVCLib["$inst"];}egl.org.eclipse.edt.rui.mvc.MVCLib["$inst"]=this;},"eze$$setEmpty":function(){this.currentController=null;},"eze$$setInitial":function(){if(egl.org.eclipse.edt.rui.mvc.MVCLib["$inst"]){return egl.org.eclipse.edt.rui.mvc.MVCLib["$inst"];}egl.org.eclipse.edt.rui.mvc.MVCLib["$inst"]=this;this.eze$$setEmpty();this.currentController=null;},"eze$$getAnnotations":function(){if(this.annotations===undefined){this.annotations={};this.annotations["XMLRootElement"]=new egl.eglx.xml.binding.annotation.XMLRootElement("MVCLib",null,false);}return this.annotations;},"eze$$getFieldInfos":function(){if(this.fieldInfos===undefined){var _1;this.fieldInfos=new Array();}return this.fieldInfos;},"getCurrentContext":function(){return this.currentController;},"setCurrentContext":function(_2){egl.checkNull(this).currentController=_2;},"getCurrentController":function(){return currentController;},"setCurrentController":function(_3){this.currentController=_3;},"toString":function(){return "[MVCLib]";}});});