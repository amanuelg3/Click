(function(){egl={};egl.initParams=function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b){egl__contextRoot=_1;egl__defaultRuntimeMessagesLocale=_3;egl__defaultDeploymentDescriptor=_2;egl__htmlLocale=_3;egl__runtimeLocale=_4;egl__href=document.location.protocol+"//"+document.location.host+"/"+_1;egl__contextKey=(function(){var _c=location.search.substring(1).split("&");for(var i in _c){var _d=null;if(typeof (_c[i])=="string"){_d=_c[i].split("=");}if(_d!=null&&_d instanceof Array&&_d.length==2&&_d[0]=="contextKey"){return _d[1];}}return "";})();egl.localeInfo={locale:_3,nlsCode:_5,shortMask:_6,mediumMask:_7,longMask:_8};if(_9!=null&&_a!=null&&_b!=null){egl.localeInfo.currencySymbol=_9;egl.localeInfo.decimalSeparator=_a;egl.localeInfo.groupingSeparator=_b;}};dojoConfig={async:true};})();