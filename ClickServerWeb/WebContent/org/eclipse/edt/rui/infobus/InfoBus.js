define(["org/eclipse/edt/rui/infobus/eze$$OpenAjaxHubBridge"],function(){egl.defineRUILibrary("org.eclipse.edt.rui.infobus","InfoBus",{"eze$$fileName":"org/eclipse/edt/rui/infobus/InfoBus.egl","eze$$runtimePropertiesFile":"org.eclipse.edt.rui.infobus.InfoBus","constructor":function(){if(egl.org.eclipse.edt.rui.infobus.InfoBus["$inst"]){return egl.org.eclipse.edt.rui.infobus.InfoBus["$inst"];}egl.org.eclipse.edt.rui.infobus.InfoBus["$inst"]=this;},"eze$$setEmpty":function(){this.bridge=new egl.org.eclipse.edt.rui.infobus.OpenAjaxHubBridge();},"eze$$setInitial":function(){if(egl.org.eclipse.edt.rui.infobus.InfoBus["$inst"]){return egl.org.eclipse.edt.rui.infobus.InfoBus["$inst"];}egl.org.eclipse.edt.rui.infobus.InfoBus["$inst"]=this;this.eze$$setEmpty();},"eze$$getAnnotations":function(){if(this.annotations===undefined){this.annotations={};this.annotations["XMLRootElement"]=new egl.eglx.xml.binding.annotation.XMLRootElement("InfoBus",null,false);}return this.annotations;},"eze$$getFieldInfos":function(){if(this.fieldInfos===undefined){var _1;this.fieldInfos=new Array();}return this.fieldInfos;},"subscribe":function(_2,_3){return this.bridge.subscribe(_2,egl.eglx.lang.EAny.ezeCast({eze$$value:_3,eze$$signature:egl.inferSignature(_3)},egl.eglx.lang.AnyDelegate));},"unsubscribe":function(_4){this.bridge.unsubscribe(_4);},"publish":function(_5,_6){this.bridge.publish(_5,_6);},"getBridge":function(){return bridge;},"setBridge":function(_7){this.bridge=_7;},"toString":function(){return "[InfoBus]";}});});