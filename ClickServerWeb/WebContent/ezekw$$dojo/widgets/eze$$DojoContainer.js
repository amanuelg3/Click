define(["ezekw$$dojo/widgets/eze$$DojoBase"],function(){egl.defineWidget("dojo.widgets","DojoContainer","dojo.widgets","DojoBase","div",{"setChildren":function(_1){this.removeChildren();this.children=_1;var _2=this;setTimeout(function(){_2.renderWhenDojoIsDoneLoading(_2.requireWidgetList);},1);this.setBiDiMarkers();},"setRequireWidgetList":function(_3){this.requireWidgetList=_3;},"destroyAtRender":function(){if(this.dojoWidget){dojo.forEach(this.dojoWidget.getChildren(),function(_4){if(_4._wrapperWidget){_4._wrapperWidget.destroy();}});dijit.registry.remove(this.dojoWidget.id);this.dojoWidget=null;}try{for(var n=0;n<this.children.length;n++){var _5=this.children[n];this.checkChildType(_5,n);this.eze$$DOMElement.appendChild(_5.eze$$DOMElement);}}catch(e){}},"destroy":function(){if(this.dojoWidget){if(this.dojoWidget.domNode){dojo.removeAttr(this.dojoWidget.domNode,"widgetId");}dijit.registry.remove(this.dojoWidget.id);this.dojoWidget=null;}},"setChildType":function(_6){this.childType=_6;},"checkChildType":function(_7,_8){if(this.childType&&_7.eze$$package+"."+_7.eze$$typename!=this.childType){throw this.eze$$typename+".addChild(child="+_7.eze$$typename+",index="+(_8+1)+"): Invalid child type, expected "+this.childType;}},"getID":function(){return this._getProperty("id","id");},"setID":function(id){if(id){this._setProperty("id","id",id);}},"getChildren":function(){return this.children;},"getChildIndex":function(_9){for(var n=0;n<this.children.length;n++){if(this.children[n].dojoWidget==_9){return n;}}return 0;},"showError":function(_a,_b,_c,_d,_e){try{var _f=_c.eze$$package+"."+_c.eze$$typename;var div=this.eze$$DOMElement;div.style.border="4px red solid";div.style.background="yellow";div.style.color="red";div.style.padding="10px";div.style.overflow="hidden";div.style.width="190px";if(_f==_a){var s="";if(_c.dojoWidget){s+=_c.dojoWidget.errorMessage+"<p>Here are all the fields defined in the child's dojoWidget:<br>"+"<table style='width:500px' border='1' cellpadding='3'>";for(f in _c.dojoWidget){s+="<tr><td>"+f+"</td><td>"+_c.dojoWidget[f]+"</td></tr>";}s+="</table>";}else{s+="<b>child.dojoWidget is null</b>. Here are all the fields defined in the child:<br>"+"<table style='width:500px' border='1' cellpadding='3'>";for(f in _c){s+="<tr><td>"+f+"</td><td>"+_c[f]+"</td></tr>";}s+="</table>";}div.innerHTML="<h1>"+_b+"."+_d+": Internal Error</h1><p>Cannot add child "+_c+".<p>Error: "+_e?_e.message:"???"+"<p>"+s;}else{div.innerHTML="<h1>Usage Error</h1><p>Cannot add a <b>"+_c.eze$$typename+"</b> to a "+_b+". Expected type is: <b>"+_a+"</b><p>";}}catch(e){}},"appendChild":function(){throw "DojoContainer.js: appendChild is not implemented on this dojo widget";},"removeChild":function(){throw "DojoContainer.js: removeChild is not implemented on this dojo widget";},"setTextLayout":function(_10){this.textLayoutThis=_10;if(!this.children){this.setBiDiMarkers();return;}this.setBiDiMarkers();},"setReverseTextDirection":function(_11){this.reverseTextDirectionThis=_11;if(!this.children){this.setBiDiMarkers();return;}this.setBiDiMarkers();},"setBiDiMarkers":function(){if(!this.children){return;}if(this.childType=="dojo.widgets.DojoContentPane"||this.childType=="dojo.widgets.DojoMenuItem"||this.childType=="dojo.widgets.DojoTreeNode"){if(this.children.length>0){for(var n=0;n<this.children.length;n++){var _12;var _13;if(!this.children[n].reverseTextDirectionThis){_12=this.reverseTextDirectionThis;}else{_12=this.children[n].reverseTextDirectionThis;}if(!this.children[n].textLayoutThis){_13=this.textLayoutThis;}else{_13=this.children[n].textLayoutThis;}this.children[n].setBiDiMarkers(_13,_12);}}}}});});