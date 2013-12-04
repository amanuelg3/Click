egl.defineWidget("dojo.widgets","DojoContentPane","dojo.widgets","DojoContainer","div",{"createDojoWidget":function(_1){this.renderingStep=4.1;this.assert(dijit.layout.ContentPane,"dijit.layout.ContentPane is undefined");this._mergeArgs({region:this.region||"",title:this.title||"",refreshOnShow:true,closable:this.closable||"",splitter:this.splitter||false});if(this.id){this._args.id=this.id;}this.dojoWidget=new dijit.layout.ContentPane(this._args,_1);this.renderingStep=4.2;try{this.setChildren(this.children);}catch(e){throw "Could not set DojoContentPane children: "+e.message;}},"setChildren":function(_2){this.children=_2;if(this.dojoWidget){this.assert(this.dojoWidget.domNode,"dijit.layout.ContentPane has no domNode");this.renderingStep=4.3;for(var n=0;n<_2.length;n++){this.dojoWidget.domNode.appendChild(_2[n].eze$$DOMElement);}try{this.dojoWidget.startup();}catch(e){throw "dijit.layout.ContentPane could not be started: "+e.message;}}else{this.renderWhenDojoIsDoneLoading(["dijit/layout/ContentPane"]);}},"appendChild":function(_3){this.dojoWidget.domNode.appendChild(_3.eze$$DOMElement);},"addChild":function(_4,_5){},"removeAllChildren":function(){while(this.dojoWidget.domNode.firstChild){this.dojoWidget.domNode.removeChild(this.dojoWidget.domNode.firstChild);}},"copyStyle":function(_6){},"setTitle":function(_7){this.title=_7;if(this.dojoWidget){this.dojoWidget.attr("title",_7);}},"getTitle":function(){return (this.title||"");},"setRegion":function(_8){this.region=_8;},"setSplitter":function(_9){this.splitter=_9;},"setClosable":function(_a){this._setProperty("closable","closable",_a);},"getClosable":function(){return (this._getProperty("closable","closable"));},"setTextLayout":function(_b){this.textLayoutThis=_b;},"setReverseTextDirection":function(_c){this.reverseTextDirectionThis=_c;},"setBiDiMarkers":function(_d,_e){var _f=_d=="Visual";var _10=_e=="Yes";this.title=this.title||"";this.title=this.setBiDiMarkersStr(this.title,_f,_10);this.setTitle(this.title);}});