define(["org/eclipse/edt/rui/history/eze$$HistoryHelper","eglx/ui/rui/eze$$Widget","org/eclipse/edt/rui/widgets/UtilLib","eglx/javascript/eze$$Job"],function(){egl.defineRUIWidget("org.eclipse.edt.rui.history","History",{"eze$$fileName":"org/eclipse/edt/rui/history/History.egl","eze$$runtimePropertiesFile":"org.eclipse.edt.rui.history.History","constructor":function(){new egl.org.eclipse.edt.rui.widgets.UtilLib();this.BASE="";this.BASE="org/eclipse/edt/rui/history/history.html?history=";this.start();},"eze$$setEmpty":function(){new egl.org.eclipse.edt.rui.widgets.UtilLib();this.BASE="";this.BASE="org/eclipse/edt/rui/history/history.html?history=";this.frame=new egl.eglx.ui.rui.Widget();this.listeners=[];this.checkURLJob=new egl.eglx.javascript.Job();this.currentLocation="";this.browser=new egl.org.eclipse.edt.rui.history.HistoryHelper();},"eze$$setInitial":function(){this.eze$$setEmpty();this.listeners=[];this.checkURLJob.setRunFunction(new egl.egl.jsrt.Delegate(this,egl.org.eclipse.edt.rui.history.History.prototype.checkURL));},"eze$$clone":function(){var _1=this;var _2=new egl.org.eclipse.edt.rui.history.History();_2.frame=_1.frame===null?null:_1.frame;_2.listeners=_1.listeners===null?null:_1.listeners;_2.checkURLJob=_1.checkURLJob===null?null:_1.checkURLJob;_2.currentLocation=_1.currentLocation===null?null:_1.currentLocation;_2.browser=_1.browser===null?null:_1.browser;_2.BASE=_1.BASE===null?null:_1.BASE;return _2;},"eze$$getAnnotations":function(){if(this.annotations===undefined){this.annotations={};this.annotations["XMLRootElement"]=new egl.eglx.xml.binding.annotation.XMLRootElement("History",null,false);}return this.annotations;},"eze$$getFieldInfos":function(){if(this.fieldInfos===undefined){var _3;this.fieldInfos=new Array();}return this.fieldInfos;},"start":function(){if(!(this.browser.inVisualEditorDesignMode())){if(this.browser.isIE()){var _4=null;var _5;_5=(function(){var _6=new egl.eglx.ui.rui.Widget();return _6;}).call(this);_5.setTagName("iframe");_5.setVisibility("hidden");_5.setPosition("absolute");_5.setWidth(egl.eglx.lang.convert(egl.eglx.lang.EString.fromEInt32,[0]));_5.setHeight(egl.eglx.lang.convert(egl.eglx.lang.EString.fromEInt32,[0]));_4=_5;this.frame=egl.checkNull(_4);egl.checkNull(egl.checkNull(this).document).body.appendChild(this.frame);this.frame.setAttribute("src",egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny,[((this.BASE)+"empty"),"S;"]));}this.checkURLJob.repeat(100);}},"goBack":function(){this.browser.goBack();},"goForward":function(){this.browser.goForward();},"addListener":function(_7){if(!(this.browser.inVisualEditorDesignMode())){this.listeners=this.listeners.appendElement(egl.checkNull(_7));}},"addToHistory":function(_8){if(!(this.browser.inVisualEditorDesignMode())){if(((_8)=="")){var _9;_9=egl.org.eclipse.edt.rui.widgets.UtilLib["$inst"].getMessage("CRRUI2004E",[_8].setType("[S;"));var _a=null;var _b;_b=new egl.eglx.lang.AnyException();egl.checkNull(_b).message=_9;egl.checkNull(_b).messageID="CRRUI2004E";_a=_b;throw _a;}this.browser.setLocationHash(_8);this.checkURL();if(this.browser.isIE()){this.frame.setAttribute("src",egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny,[((this.BASE)+_8),"S;"]));}}},"tellListeners":function(){var n=0;for(n=1;((n<=this.listeners.getSize()));n=((n+1))){egl.checkNull(this.listeners)[this.listeners.checkIndex(egl.eglx.lang.EInt32.ezeCast({eze$$value:n,eze$$signature:"I;"},false)-1)](egl.eglx.http.HttpLib.convertFromURLEncoded(this.currentLocation));}},"checkURL":function(){if(this.browser.isIE()){var _c;_c=this.browser.getFrameSrc(this.frame);var _d;_d=egl.eglx.lang.EString.indexOf(_c,"=");_c=egl.eglx.lang.EString.substring(_c,((_d+1)),egl.eglx.lang.EString.textLen(_c));if((((egl.eglx.lang.EAny.notEquals(_c,null))&&((_c)!=this.currentLocation)))){this.currentLocation=_c;this.browser.setLocationHash(_c);this.tellListeners();}}else{var _e;_e=this.browser.getLocationHash();if(((_e)!=this.currentLocation)){this.currentLocation=_e;this.tellListeners();}}},"keepUserOnPage":function(_f){if(!(this.browser.inVisualEditorDesignMode())){this.browser.setOnbeforeUnload(_f);}},"toString":function(){return "[History]";}});});