define(["eglx/ui/rui/eze$$Widget"],function(){egl.defineClass("org.eclipse.edt.rui.widgets","UtilLibNative",{"getWidgetVariableName":function(_1){if(_1!=null&&_1.eze$$variableName!=undefined){return _1.eze$$variableName;}return "";},"destroyWidget":function(_2){egl.destroyWidget(_2);},"destroyWidgetChildren":function(_3){egl.destroyWidgetChildren(_3);},"clearHTMLString":function(){this.HTMLBuffer=[];this.htmlStringCount=0;},"appendHTMLString":function(_4){this.HTMLBuffer[this.htmlStringCount++]=_4;},"getHTMLString":function(){return this.HTMLBuffer.join("");},"getMessage":function(_5,_6){return egl.getRuntimeMessage(_5,_6);}});});