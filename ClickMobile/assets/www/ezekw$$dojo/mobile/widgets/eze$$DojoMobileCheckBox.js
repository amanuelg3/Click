define(["ezekw$$dojo/mobile/widgets/eze$$DojoMobileBase","eglx/ui/rui/FilterKind"],function(){egl.defineWidget("dojo.mobile.widgets","DojoMobileCheckBox","dojo.mobile.widgets","DojoMobileBase","span",{"constructor":function(){var _1=this;require(["dojo/mobile/utility/Synchronor","dojox/mobile/CheckBox"],function(_2){_1.synchronor=_2;_1.renderWhenDojoIsDoneLoading();});},"createDojoWidget":function(_3){var _4=this;var _5=document.createElement("input");_4.containerNode=_3;_4.dojoWidget=new dojox.mobile.CheckBox({checked:(_4.selected?_4.selected:false),onChange:function(){_4.handleEvent(_4.getOnChange(),"onChange");}},_5);_3.appendChild(_5);var _6=(_4.text)?_4.text:"";_3.appendChild(document.createTextNode(_6));_4.synchronor.trigger(_4,"SYN_READY");_4.dojoWidget.domNode.style["-webkit-transform"]="none";_4.dojoWidget.domNode.style["marginTop"]="0";_4.dojoWidget.domNode.style["vertical-align"]="middle";var _7=_4.copyAttribute;_4.copyAttribute=function(){_7.apply(_4,arguments);_4.eze$$DOMElement=_4.containerNode;};require(["dojo/on"],function(on){on(_3,"click",function(_8){if(_4.dojoWidget){if(_8.target==_4.dojoWidget.domNode){return;}var _9=_4.dojoWidget.checked;_4.dojoWidget.set("checked",!_9);}});});},"setSelected":function(_a){this.selected=_a;if(this.dojoWidget){this.dojoWidget.set("checked",_a);}if(this.eze$$DOMElement){this.eze$$DOMElement.checked=_a;}},"getSelected":function(){if(this.dojoWidget){return this.dojoWidget.get("checked");}else{return this.selected||false;}},"setText":function(_b){this.text=_b;if(this.dojoWidget){this.dojoWidget.domNode.nextSibling.textContent=_b;}},"getText":function(){return this.text;}});});