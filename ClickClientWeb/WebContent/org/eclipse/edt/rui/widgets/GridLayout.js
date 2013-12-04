define(["eglx/ui/rui/eze$$Widget","org/eclipse/edt/rui/widgets/GridLayoutData","eglx/ui/rui/PurposeKind","org/eclipse/edt/rui/widgets/GridLayoutLib","org/eclipse/edt/rui/widgets/UtilLib","eglx/ui/rui/MappingKind"],function(){egl.loadCSS("css/org.eclipse.edt.rui.css");egl.defineRUIWidget("org.eclipse.edt.rui.widgets","GridLayout",{"eze$$fileName":"org/eclipse/edt/rui/widgets/GridLayout.egl","eze$$runtimePropertiesFile":"org.eclipse.edt.rui.widgets.GridLayout","constructor":function(){new egl.org.eclipse.edt.rui.widgets.GridLayoutLib();new egl.org.eclipse.edt.rui.widgets.UtilLib();new egl.org.eclipse.edt.rui.widgets.GridLayoutLib();new egl.org.eclipse.edt.rui.widgets.UtilLib();},"eze$$setEmpty":function(){new egl.org.eclipse.edt.rui.widgets.GridLayoutLib();new egl.org.eclipse.edt.rui.widgets.UtilLib();new egl.org.eclipse.edt.rui.widgets.GridLayoutLib();new egl.org.eclipse.edt.rui.widgets.UtilLib();this.columns=0;this.rows=0;this.cellPadding=0;this.table=new egl.eglx.ui.rui.Widget();this.innerTable=new egl.eglx.ui.rui.Widget();this.widgetOrientationThis="";this.cells=[];this.defaultTDStyle="";this.loaded=false;this.internalID="";},"eze$$setInitial":function(){this.eze$$setEmpty();this.table.setTagName("span");this.widgetOrientationThis="";this.cells=[];this.loaded=false;this.internalID=(("GridLayout-")+egl.eglx.lang.convert(egl.eglx.lang.EString.fromEInt32,[egl.org.eclipse.edt.rui.widgets.UtilLib["$inst"].getSerial()]));egl.checkNull(this).targetWidget=this.table;},"eze$$clone":function(){var _1=this;var _2=new egl.org.eclipse.edt.rui.widgets.GridLayout();_2.columns=_1.columns;_2.rows=_1.rows;_2.cellPadding=_1.cellPadding;_2.table=_1.table===null?null:_1.table;_2.innerTable=_1.innerTable===null?null:_1.innerTable;_2.widgetOrientationThis=_1.widgetOrientationThis===null?null:_1.widgetOrientationThis;_2.cells=_1.cells===null?null:_1.cells;_2.defaultTDStyle=_1.defaultTDStyle===null?null:_1.defaultTDStyle;_2.loaded=_1.loaded;_2.internalID=_1.internalID===null?null:_1.internalID;return _2;},"eze$$getAnnotations":function(){if(this.annotations===undefined){this.annotations={};this.annotations["XMLRootElement"]=new egl.eglx.xml.binding.annotation.XMLRootElement("GridLayout",null,false);}return this.annotations;},"eze$$getFieldInfos":function(){if(this.fieldInfos===undefined){var _3;this.fieldInfos=new Array();_3={};_3["XMLStyle"]=new egl.eglx.xml.binding.annotation.XMLElement("columns",null,false,false);_3["JsonName"]=new egl.eglx.json.JsonName("columns");this.fieldInfos[0]=new egl.eglx.services.FieldInfo(getColumns,setColumns,"I;",Number,_3);_3={};_3["XMLStyle"]=new egl.eglx.xml.binding.annotation.XMLElement("rows",null,false,false);_3["JsonName"]=new egl.eglx.json.JsonName("rows");this.fieldInfos[1]=new egl.eglx.services.FieldInfo(getRows,setRows,"I;",Number,_3);_3={};_3["XMLStyle"]=new egl.eglx.xml.binding.annotation.XMLElement("cellPadding",null,false,false);_3["JsonName"]=new egl.eglx.json.JsonName("cellPadding");this.fieldInfos[2]=new egl.eglx.services.FieldInfo(getCellPadding,setCellPadding,"I;",Number,_3);}return this.fieldInfos;},"setWidth":function(_4){this.table.setWidth(egl.eglx.lang.convert(egl.eglx.lang.EString.fromEInt32,[_4]));if((((egl.eglx.lang.EAny.notEquals(egl.checkNull(this.table).getChildren(),null))&&((egl.checkNull(this.table).getChildren().getSize()>0))))){egl.checkNull(egl.checkNull(this.table).getChildren())[egl.checkNull(this.table).getChildren().checkIndex(egl.eglx.lang.EInt32.ezeCast({eze$$value:1,eze$$signature:"I;"},false)-1)].setWidth(egl.eglx.lang.convert(egl.eglx.lang.EString.fromEInt32,[_4]));}},"setHeight":function(_5){this.table.setHeight(egl.eglx.lang.convert(egl.eglx.lang.EString.fromEInt32,[_5]));if((((egl.eglx.lang.EAny.notEquals(egl.checkNull(this.table).getChildren(),null))&&((egl.checkNull(this.table).getChildren().getSize()>0))))){egl.checkNull(egl.checkNull(this.table).getChildren())[egl.checkNull(this.table).getChildren().checkIndex(egl.eglx.lang.EInt32.ezeCast({eze$$value:1,eze$$signature:"I;"},false)-1)].setHeight(egl.eglx.lang.convert(egl.eglx.lang.EString.fromEInt32,[_5]));}},"initTable":function(){if(((((this.getColumns()==0))||((this.getRows()==0))))){return;}if(((egl.checkNull(this.table).getChildren().getSize()>0))){this.innerTable=egl.checkNull(egl.checkNull(this.table).getChildren())[egl.checkNull(this.table).getChildren().checkIndex(egl.eglx.lang.EInt32.ezeCast({eze$$value:1,eze$$signature:"I;"},false)-1)];this.table.removeChildren();if(((this.cells.getSize()>0))){var _6;_6=this.innerTable.getElementsByTagName("td");var _7;_7=_6.getSize();var n=0;for(n=1;((n<=_7));n=((n+1))){if(((egl.checkNull(egl.checkNull(_6)[_6.checkIndex(egl.eglx.lang.EInt32.ezeCast({eze$$value:n,eze$$signature:"I;"},false)-1)]).getChildren().getSize()>0))){egl.checkNull(_6)[_6.checkIndex(egl.eglx.lang.EInt32.ezeCast({eze$$value:n,eze$$signature:"I;"},false)-1)].removeChildren();}}}egl.org.eclipse.edt.rui.widgets.UtilLib["$inst"].destroyWidget(this.innerTable);}this.defaultTDStyle="";var _8;_8=((((((this.defaultTDStyle)+"padding:"))+egl.eglx.lang.convert(egl.eglx.lang.EString.fromEInt32,[this.getCellPadding()])))+"px");egl.checkNull(egl.org.eclipse.edt.rui.widgets.UtilLib["$inst"]).utilNative.clearHTMLString();var _9;_9="";if(((egl.checkNull(this.table).getWidth())!="")){_9=(((("width:")+egl.checkNull(this.table).getWidth()))+";");}if(((egl.checkNull(this.table).getHeight())!="")){_9=((((((_9)+"height:"))+egl.checkNull(this.table).getHeight()))+";\"");}if(((_9)!="")){egl.checkNull(egl.org.eclipse.edt.rui.widgets.UtilLib["$inst"]).utilNative.appendHTMLString((((("<table style=\"")+_9))+"\"><tbody>"));}else{egl.checkNull(egl.org.eclipse.edt.rui.widgets.UtilLib["$inst"]).utilNative.appendHTMLString("<table><tbody>");}var _a=0;for(_a=1;((_a<=this.getRows()));_a=((_a+1))){egl.checkNull(egl.org.eclipse.edt.rui.widgets.UtilLib["$inst"]).utilNative.appendHTMLString((((((((("<tr id='")+this.internalID))+"-TR-"))+egl.eglx.lang.convert(egl.eglx.lang.EString.fromEInt32,[_a])))+"'>"));var _b=0;for(_b=1;((_b<=this.getColumns()));_b=((_b+1))){var _c;_c=((((((((this.internalID)+"-TD-"))+egl.eglx.lang.convert(egl.eglx.lang.EString.fromEInt32,[_a])))+"-"))+egl.eglx.lang.convert(egl.eglx.lang.EString.fromEInt32,[_b]));egl.checkNull(egl.org.eclipse.edt.rui.widgets.UtilLib["$inst"]).utilNative.appendHTMLString((((("<td id='")+_c))+"' class='EglRuiVAlignTop EglRuiBoxTd' "));egl.checkNull(egl.org.eclipse.edt.rui.widgets.UtilLib["$inst"]).utilNative.appendHTMLString((((((((((((("style='")+_8))+"' row='"))+egl.eglx.lang.convert(egl.eglx.lang.EString.fromEInt32,[_a])))+"' column='"))+egl.eglx.lang.convert(egl.eglx.lang.EString.fromEInt32,[_b])))+"'>&nbsp;</td>"));}egl.checkNull(egl.org.eclipse.edt.rui.widgets.UtilLib["$inst"]).utilNative.appendHTMLString("</tr>");}egl.checkNull(egl.org.eclipse.edt.rui.widgets.UtilLib["$inst"]).utilNative.appendHTMLString("</tbody></table>");this.table.setInnerHTML(egl.checkNull(egl.org.eclipse.edt.rui.widgets.UtilLib["$inst"]).utilNative.getHTMLString());},"setChildren":function(_d){if((egl.eglx.lang.EAny.equals(_d,null))){var _e=null;var _f;_f=new egl.eglx.lang.AnyException();egl.checkNull(_f).message="Children cannot be null";_e=_f;throw _e;}this.cells=[];if(((this.widgetOrientationThis)!="")){this.table.setWidgetOrientation(this.widgetOrientationThis);if(((this.widgetOrientationThis)=="RTL")){this.table.setAttribute("align",egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny,["right","S;"]));}else{this.table.setAttribute("align",egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny,["left","S;"]));}}if(((((this.getColumns()==0))||((this.getRows()==0))))){var _10=0;for(_10=1;((_10<=_d.getSize()));_10=((_10+1))){egl.checkNull(this).cells.appendElement(egl.checkNull(egl.checkNull(_d)[_d.checkIndex(egl.eglx.lang.EInt32.ezeCast({eze$$value:_10,eze$$signature:"I;"},false)-1)]));}return;}this.initTable();var _11;_11=egl.checkNull(this.table).getDisplayStyle();this.table.setDisplayStyle("none");egl.checkNull(egl.checkNull(this.table).getChildren())[egl.checkNull(this.table).getChildren().checkIndex(egl.eglx.lang.EInt32.ezeCast({eze$$value:1,eze$$signature:"I;"},false)-1)].setStyle("table-layout: fixed;");this.innerTable=egl.checkNull(egl.checkNull(this.table).getChildren())[egl.checkNull(this.table).getChildren().checkIndex(egl.eglx.lang.EInt32.ezeCast({eze$$value:1,eze$$signature:"I;"},false)-1)];if(!(this.loaded)){egl.checkNull(egl.checkNull(this).document).body.appendChild(this.innerTable);}var _10=0;for(_10=1;((_10<=_d.getSize()));_10=((_10+1))){this.appendChild(egl.checkNull(_d)[_d.checkIndex(egl.eglx.lang.EInt32.ezeCast({eze$$value:_10,eze$$signature:"I;"},false)-1)]);}if(!(this.loaded)){this.table.appendChild(this.innerTable);}this.table.setDisplayStyle(_11);},"getChildren":function(){return this.cells;},"appendChild":function(_12){if((egl.eglx.lang.EAny.equals(_12,null))){var _13=null;var _14;_14=new egl.eglx.lang.AnyException();egl.checkNull(_14).message="Child to add cannot be null";_13=_14;throw _13;}if(((this.widgetOrientationThis)!="")){if(((egl.checkNull(_12).getWidgetOrientation())=="")){_12.setWidgetOrientation(this.widgetOrientationThis);}}this.cells.appendElement(egl.checkNull(_12));_12.setLogicalParent(egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget,[this,"org.eclipse.edt.rui.widgets.GridLayout"]));var _15=new egl.org.eclipse.edt.rui.widgets.GridLayoutData();if((egl.eglx.lang.EAny.notEquals(egl.checkNull(_12).getLayoutData(),null))){_15=egl.eglx.lang.AnyValue.ezeCopyTo(egl.checkNull(egl.eglx.lang.EAny.ezeCast(egl.checkNull(_12).getLayoutData(),egl.org.eclipse.edt.rui.widgets.GridLayoutData)),_15);}else{return;}var _16=null;_16=egl.eglx.lang.AnyValue.ezeCopyTo(_15,_16);var _17;_17=!(this.isValidGridLayoutData(_16));if(_17){return;}var _18;_18=((((((((this.internalID)+"-TD-"))+egl.eglx.lang.convert(egl.eglx.lang.EString.fromEInt32,[_15.row])))+"-"))+egl.eglx.lang.convert(egl.eglx.lang.EString.fromEInt32,[_15.column]));var td;td=this.table.getElementById(_18);if((((egl.eglx.lang.EAny.notEquals(td,null))&&((egl.eglx.lang.EString.ezeCast(td.getAttribute("occupied"),false))!="true")))){var _19=[];var j=0;for(j=1;((j<=((_15.horizontalSpan-1))));j=((j+1))){_18=((((((((this.internalID)+"-TD-"))+egl.eglx.lang.convert(egl.eglx.lang.EString.fromEInt32,[_15.row])))+"-"))+egl.eglx.lang.convert(egl.eglx.lang.EString.fromEInt32,[((_15.column+j))]));var _1a;_1a=this.table.getElementById(_18);if((((egl.eglx.lang.EAny.notEquals(_1a,null))&&((egl.checkNull(_1a).getInnerHTML())=="&nbsp;")))){_19.appendElement(egl.checkNull(_1a));}else{_19.removeAll();return;}}var i=0;for(i=1;((i<=((_15.verticalSpan-1))));i=((i+1))){var j=0;for(j=0;((j<=((_15.horizontalSpan-1))));j=((j+1))){_18=((((((((this.internalID)+"-TD-"))+egl.eglx.lang.convert(egl.eglx.lang.EString.fromEInt32,[((_15.row+i))])))+"-"))+egl.eglx.lang.convert(egl.eglx.lang.EString.fromEInt32,[((_15.column+j))]));var _1a;_1a=this.table.getElementById(_18);if((((egl.eglx.lang.EAny.notEquals(_1a,null))&&((egl.checkNull(_1a).getInnerHTML())=="&nbsp;")))){_19.appendElement(egl.checkNull(_1a));}else{_19.removeAll();return;}}}var i=0;for(i=1;((i<=_19.getSize()));i=((i+1))){egl.checkNull(egl.checkNull(_19)[_19.checkIndex(egl.eglx.lang.EInt32.ezeCast({eze$$value:i,eze$$signature:"I;"},false)-1)]).getParent().removeChild(egl.checkNull(_19)[_19.checkIndex(egl.eglx.lang.EInt32.ezeCast({eze$$value:i,eze$$signature:"I;"},false)-1)]);egl.org.eclipse.edt.rui.widgets.UtilLib["$inst"].destroyWidget(egl.checkNull(_19)[_19.checkIndex(egl.eglx.lang.EInt32.ezeCast({eze$$value:i,eze$$signature:"I;"},false)-1)]);}_19.removeAll();if(((_15.horizontalAlignment>0))){EzeLabel_eze_CaseLabel_0:if(((_15.horizontalAlignment==egl.checkNull(egl.org.eclipse.edt.rui.widgets.GridLayoutLib["$inst"]).ALIGN_LEFT))){td.setAttribute("align",egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny,["left","S;"]));}else{if(((_15.horizontalAlignment==egl.checkNull(egl.org.eclipse.edt.rui.widgets.GridLayoutLib["$inst"]).ALIGN_CENTER))){td.setAttribute("align",egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny,["center","S;"]));}else{if(((_15.horizontalAlignment==egl.checkNull(egl.org.eclipse.edt.rui.widgets.GridLayoutLib["$inst"]).ALIGN_RIGHT))){td.setAttribute("align",egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny,["right","S;"]));}}}}if(((_15.verticalAlignment>0))){EzeLabel_eze_CaseLabel_1:if(((_15.verticalAlignment==egl.checkNull(egl.org.eclipse.edt.rui.widgets.GridLayoutLib["$inst"]).VALIGN_TOP))){td.setClass("EglRuiVAlignTop EglRuiBoxTd");}else{if(((_15.verticalAlignment==egl.checkNull(egl.org.eclipse.edt.rui.widgets.GridLayoutLib["$inst"]).VALIGN_MIDDLE))){td.setClass("EglRuiVAlignMiddle EglRuiBoxTd");}else{if(((_15.verticalAlignment==egl.checkNull(egl.org.eclipse.edt.rui.widgets.GridLayoutLib["$inst"]).VALIGN_BOTTOM))){td.setClass("EglRuiVAlignBottom EglRuiBoxTd");}}}}td.removeChildren();td.setAttribute("rowSpan",egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny,[_15.verticalSpan,"I;"]));td.setAttribute("colSpan",egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny,[_15.horizontalSpan,"I;"]));if((egl.eglx.lang.EAny.notEquals(_15.widthHint,null))){td.setAttribute("width",egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny,[_15.widthHint,"S;"]));}if((egl.eglx.lang.EAny.notEquals(_15.heightHint,null))){td.setAttribute("height",egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny,[_15.heightHint,"S;"]));}td.appendChild(_12);td.setAttribute("occupied",egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny,["true","S;"]));if(((_15.cellPadding>0))){td.setStyle(((((((this.defaultTDStyle)+"padding:"))+egl.eglx.lang.convert(egl.eglx.lang.EString.fromEInt32,[_15.cellPadding])))+"px"));}}},"removeChild":function(_1b){var _1c=0;for(_1c=1;((_1c<=this.cells.getSize()));_1c=((_1c+1))){if((egl.eglx.ui.rui.Widget.equals(egl.checkNull(this.cells)[this.cells.checkIndex(egl.eglx.lang.EInt32.ezeCast({eze$$value:_1c,eze$$signature:"I;"},false)-1)],_1b))){this.cells.removeElement(_1c);this.setChildren(this.cells);return;}}},"removeChildren":function(){this.cells=[];this.layout();},"layout":function(){this.setChildren(this.cells);},"getColumns":function(){return egl.checkNull(this).columns;},"setColumns":function(_1d){this.columns=_1d;this.layout();},"getRows":function(){return egl.checkNull(this).rows;},"setRows":function(_1e){this.rows=_1e;this.layout();},"getCellPadding":function(){return egl.checkNull(this).cellPadding;},"setCellPadding":function(_1f){this.cellPadding=_1f;if(((egl.checkNull(this.table).getChildren().getSize()<=0))){return;}var _20;_20=egl.checkNull(this.table).getDisplayStyle();this.table.setDisplayStyle("none");var tds;tds=this.table.getElementsByTagName("td");var _21;_21=tds.getSize();var n=0;for(n=1;((n<=_21));n=((n+1))){egl.checkNull(tds)[tds.checkIndex(egl.eglx.lang.EInt32.ezeCast({eze$$value:n,eze$$signature:"I;"},false)-1)].setStyle(((((((this.defaultTDStyle)+"padding:"))+egl.eglx.lang.convert(egl.eglx.lang.EString.fromEInt32,[_1f])))+"px"));}this.table.setDisplayStyle(_20);},"getWidgetOrientation":function(){return egl.checkNull(this).widgetOrientationThis;},"setWidgetOrientation":function(_22){egl.checkNull(this).widgetOrientationThis=_22;if(((((this.widgetOrientationThis)!="")&&((this.cells.getSize()>0))))){this.table.setWidgetOrientation(this.widgetOrientationThis);if(((this.widgetOrientationThis)=="RTL")){this.table.setAttribute("align",egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny,["right","S;"]));}else{this.table.setAttribute("align",egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny,["left","S;"]));}var _23=0;for(_23=1;((_23<=this.cells.getSize()));_23=((_23+1))){if(((egl.checkNull(egl.checkNull(this.cells)[this.cells.checkIndex(egl.eglx.lang.EInt32.ezeCast({eze$$value:_23,eze$$signature:"I;"},false)-1)]).getWidgetOrientation())=="")){egl.checkNull(this.cells)[this.cells.checkIndex(egl.eglx.lang.EInt32.ezeCast({eze$$value:_23,eze$$signature:"I;"},false)-1)].setWidgetOrientation(this.widgetOrientationThis);}}}},"isValidGridLayoutData":function(_24){if(((((((((((((((((_24.row<=0))||((_24.row>egl.checkNull(this).rows))))||((_24.column<=0))))||((_24.column>egl.checkNull(this).columns))))||((_24.verticalSpan<=0))))||((((_24.verticalSpan+_24.row))>((egl.checkNull(this).getRows()+1))))))||((_24.horizontalSpan<=0))))||((((_24.horizontalSpan+_24.column))>((egl.checkNull(this).getColumns()+1))))))){return false;}else{return true;}},"toString":function(){return "[GridLayout]";}});});