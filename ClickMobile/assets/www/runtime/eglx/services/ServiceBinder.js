egl.defineClass("eglx.services","ServiceBinder",{"constructor":function(){if(egl.eglx.services.$ServiceBinder){return egl.eglx.services.$ServiceBinder;}egl.eglx.services.$ServiceBinder=this;this.bindFiles=[];},"addBindFile":function(_1){if(!this.bindFileExists(_1)){this.loadBindFile(_1);}},"bindFileExists":function(_2){var rc=false;for(var n=0;n<this.bindFiles&&rc==false;n++){if(this.bindFiles.name==_2){rc=true;}}return rc;},"loadBindFile":function(_3){try{var _4="eze$$BindFile_"+_3;var _5=egl[_4]();this.bindFiles.push(_5);}catch(e){throw egl.eglx.services.createServiceInvocationException("CRRUI3650E",[_3]);}},"getBinding":function(_6,_7){this.addBindFile(_6);var _8=null;for(var n=0;n<this.bindFiles.length&&_8==null;n++){if(this.bindFiles[n].name==_6){_8=this.bindFiles[n];}}if(_8==null){throw egl.eglx.services.createServiceInvocationException("CRRUI3650E",[_6]);return null;}_7=_7.toLowerCase();var _9=null;for(var n=0;n<_8.bindings.length&&_9==null;n++){if(_7==_8.bindings[n].name.toLowerCase()){_9=_8.bindings[n];break;}}if(_9==null){for(var n=0;n<_8.includes.length;n++){_9=this.getBinding(_8.includes[n],_7);if(_9!=null){break;}}if(_9==null){throw egl.eglx.services.createServiceInvocationException("CRRUI3651E",[_7,_6]);}}return _9;}});egl.defineClass("eglx.services","BindFile",{"constructor":function(_a){this.name=_a;this.bindings=[];this.includes=[];}});egl.defineClass("eglx.services","WebBinding",{"constructor":function(_b,_c,_d,_e,_f,_10){this.type="web";this.name=_b;this._interface=_c;this.wsdlLocation=_d;this.wsdlService=_e;this.wsdlPort=_f;this.uri=_10;}});egl.defineClass("eglx.services","RestBinding",{"constructor":function(_11,_12,_13){this.type="rest";this.name=_11;this.baseURI=_12;this.sessionCookieId=_13;}});egl.defineClass("eglx.services","DedicatedBinding",{"constructor":function(_14){this.type="dedicated";this.name=_14;}});new egl.eglx.services.ServiceBinder();