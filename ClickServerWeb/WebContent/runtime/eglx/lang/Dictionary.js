egl.createDictionary=function(c,o){return new egl.eglx.lang.EDictionary(c,o);};egl.defineClass("eglx.lang","EDictionary",{"constructor":function(){this.eze$$caseSensitive=arguments[0]||false;this.eze$$byKeyOrdering=arguments[1]||egl.eglx.lang.OrderingKind.none;this.eze$$typename="EDictionary";this.eze$$signature="y;";this.toString=function(){return this.$text||"[EDictionary]";};},"containsKey":function(_1){return egl.containsKey(this,_1);},"getKeys":function(){return egl.getKeys(this);},"getValues":function(){return egl.getValues(this);},"insertAll":function(_2){egl.insertAll(this,_2);},"removeAll":function(){egl.removeAll(this);},"removeElement":function(_3){egl.removeElement(this,_3);},"size":function(){return egl.size(this);},"getCaseSensitive":function(){return this.eze$$caseSensitive;},"getOrdering":function(){return this.eze$$byKeyOrdering;},"clone":function(){return egl.clone(this);},"eze$$clone":function(){return egl.clone(this);}});egl.eglx.lang.EDictionary.lookup=function(_4,_5){return egl.valueByKey(egl.checkNull(_4),_5);};egl.eglx.lang.EDictionary.set=function(_6,_7,_8){_8=egl.boxAny(_8);return egl.valueByKey(egl.checkNull(_6),_7,_8.eze$$value,_8.eze$$signature);};egl.eglx.lang.EDictionary.get=function(_9,_a){return egl.valueByKey(egl.checkNull(_9),_a);};