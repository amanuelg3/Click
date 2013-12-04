if(!dojo._hasResource["bidi.DojoTextBoxBidi"]){dojo._hasResource["bidi.DojoTextBoxBidi"]=true;var LRO=String.fromCharCode(8237);var RLO=String.fromCharCode(8238);var TYPINGORIENT="  Typing Orientation: ";var AUTOPUSH="  Autopush: ";var statusBLOCKED="";var CONVERT_TO_HEBREW_LAYER1=[1513,1504,1489,1490,1511,1499,1506,1497,1503,1495,1500,1498,1510,1502,1501,1508,47,1512,1491,1488,1493,1492,39,1505,1496,1494,1507];var CONVERT_TO_HEBREW_LAYER1_H=[1507,61,1514,45,1509,46,59];var CONVERT_TO_HEBREW_LAYER1_SHIFT_H=[58,43,62,95,60,63,126];var CONVERT_TO_HEBREW_LAYER2_H=[93,null,91,44];var CONVERT_TO_HEBREW_LAYER2_SHIFT_H=[125,null,123,34];var CONVERT_TO_LOWER_CASE1=[59,61,44,45,46,47,96];var CONVERT_TO_LOWER_CASE1_SHIFT=[58,43,60,95,62,63,126];var CONVERT_TO_LOWER_CASE2=[91,null,93,39];var CONVERT_TO_LOWER_CASE2_SHIFT=[123,null,125,34];var CONVERT_TO_ARABIC_LAYER1=[1588,1575,1572,1610,1579,1576,1604,1575,1607,1578,1606,1605,1577,1609,1582,1581,1590,1602,1587,1601,1593,1585,1589,1569,1594,1574];var CONVERT_TO_ARABIC_LAYER1_SHIFT=[1616,1570,125,93,1615,91,1571,1571,247,1600,1548,47,8217,1570,215,1563,1614,1612,1613,1573,8216,123,1611,1618,1573,126];var CONVERT_TO_ARABIC_LAYER2=[1603,61,1608,45,1586,1592,1584];var CONVERT_TO_ARABIC_LAYER2_SHIFT=[58,43,44,95,46,1567,1617];var CONVERT_TO_ARABIC_LAYER3=[1580,92,1583,1591];var CONVERT_TO_ARABIC_LAYER3_SHIFT=[60,124,62,34];var CODE_A=65;var CODE_Z=90;var isFldreversed=false;var curPos=0;var selectionStart=0;var pushMode=false;var mousePressed=false;var rightPushBound=0;var leftPushBound=0;var layerGuess=false;var preventAltNumpad=false;var preventKeyPressProcessing=false;var ctrlHasBeenPressed=false;var prevCharClass=false;var gKeyCode;var layerSwitched;var destroyNextKeyEvent=false;var isLinux=(navigator.platform.indexOf("Linux")!=-1)?true:false;var isOverwriteMozilla=false;var jr=null;require(["dojo/_base/declare","dijit/form/TextBox","dijit/_WidgetBase"],function(_1,_2){_1("bidi/DojoTextBoxBidi",[_2],{isVisualMode:false,dir:"ltr",autoPush:true,autoKeyboardLayerSwitch:false,isArabic:false,postCreate:function(){this.textbox.setAttribute("value",this.textbox.value);if(this.isVisualMode){this.connect(this.textbox,"onkeyup",this._onKeyUpBidi);this.connect(this.textbox,"onkeydown",this._onKeyDownBidi);this.connect(this.textbox,"onkeypress",this._onKeyPressBidi);this.connect(this.textbox,"onmouseup",this._onMouseUp);this.connect(this.textbox,"onmousedown",this._onMouseDown);if(this.focusNode.maxLength==-1){this.focusNode.maxLength=100000;}if(dojo.isIE){if(this.dir=="rtl"){this.focusNode.value=RLO+this.reverseText(this.focusNode.value);}else{this.focusNode.value=LRO+this.focusNode.value;}this.connect(this.textbox,"onselect",this._onSelect);this.connect(this.textbox,"onmouseout",this._onMouseOut);this.connect(this.textbox,"oncopy",this._onCopy);this.connect(this.textbox,"oncut",this._onCut);this.connect(this.textbox,"onpaste",this._onPaste);this.connect(this.textbox,"oncontextmenu",this._onContextMenu);}else{if(this.dir=="rtl"){this.focusNode.value=this.reverseText(this.focusNode.value);}}this.focusNode.style.unicodeBidi="bidi-override";this.focusNode.style.direction=this.dir;this.focusNode.style.textAlign=(this.dir=="rtl")?"right":"left";}this.inherited(arguments);},_onContextMenu:function(_3){if(this.isVisualMode){var _4=this.focusNode;var _5=this.getCaretPos(_3,_4);if(_5){selectionStart=Math.min(_5[0],_5[1]);curPos=Math.max(_5[0],_5[1]);}}},_onKeyUpBidi:function(_6){if(!this.isVisualMode){return;}var _7=_6.keyCode;var _8=this.focusNode;fieldDirection=(_8.style.direction=="ltr")?false:true;preventAltNumpad=false;preventKeyPressProcessing=false;if(dojo.isIE&&selectionStart==0){this.preventEraseMarker();}if(((_7==dojo.keys.LEFT_ARROW)&&(fieldDirection==false))||((_7==dojo.keys.RIGHT_ARROW)&(fieldDirection==true))){if(pushMode&(curPos<rightPushBound)){this.toggleFieldOrient(_8,true,false);}}else{if(((_7==dojo.keys.RIGHT_ARROW)&&(fieldDirection==false))||((_7==dojo.keys.LEFT_ARROW)&(fieldDirection==true))){if(pushMode&(curPos>leftPushBound)){this.toggleFieldOrient(_8,true,false);}}else{if(dojo.isIE&&(_6.ctrlKey||ctrlHasBeenPressed)&&(_7==CODE_Z)){this._onContextMenu(_6);ctrlHasBeenPressed=false;}}}},setCaretPositions:function(_9,_a){selectionStart=_9;curPos=_a;},_onKeyDownBidi:function(_b){if(!this.isVisualMode){return;}var _c=gKeyCode=_b.keyCode;var _d=this.focusNode;if(!dojo.isIE){curPos=_d.selectionEnd;selectionStart=_d.selectionStart;}else{var _e=this.getCaretPos(_b,_d);if(_e){selectionStart=Math.min(_e[0],_e[1]);curPos=Math.max(_e[0],_e[1]);this.setCaretPositions(selectionStart,curPos);}}fieldDirection=(_d.style.direction=="ltr")?false:true;if(_b.shiftKey){this.processPush(_d,_c);}if(!isLinux&&_b.shiftKey&&_b.altKey){layerGuess=!layerGuess;this.showStatusBar(_d);if(this.autoKeyboardLayerSwitch){layerSwitched=!layerSwitched;}}if((_b.altKey&&!isLinux)||(_b.shiftKey&&isLinux)){if(((_c==111)&&!isLinux)||((_c==102)&&isLinux)){this.autoPush=!this.autoPush;if(pushMode){this.toggleFieldOrient(_d,true,false);}this.showStatusBar(_d);preventAltNumpad=true;}else{if(((_c==144)&&!isLinux)||((_c==100)&&isLinux)){this.processFieldReverse(_d,true);preventAltNumpad=true;}}}else{if(dojo.isIE){if(_b.ctrlKey&&(_c==CODE_A)){this._onDblClick(_b);}else{if(_c==dojo.keys.ENTER){if(pushMode||isFldreversed){this.toggleFieldOrient(_d,false,false);}}else{if(_b.ctrlKey&&(_c==CODE_Z)){ctrlHasBeenPressed=true;}}}}}if(_c==dojo.keys.HOME){this.processHome(_d);preventKeyPressProcessing=true;}else{if(_c==dojo.keys.END){this.processEnd(_d);preventKeyPressProcessing=true;}else{if(_c==dojo.keys.BACKSPACE){this.processBackspace(_d,_b);preventKeyPressProcessing=true;}else{if(_c==dojo.keys.DELETE){this.processDelete(_d);preventKeyPressProcessing=true;}else{if(((_c==dojo.keys.LEFT_ARROW)&&(fieldDirection==0))||((_c==dojo.keys.RIGHT_ARROW)&&(fieldDirection==1))){this.processLeftarrow(_b);preventKeyPressProcessing=true;}else{if(((_c==dojo.keys.RIGHT_ARROW)&&(fieldDirection==0))||((_c==dojo.keys.LEFT_ARROW)&&(fieldDirection==1))){this.processRightarrow(_b);preventKeyPressProcessing=true;}else{if(_c==dojo.keys.PAGE_UP||_c==dojo.keys.PAGE_DOWN||_c==dojo.keys.UP_ARROW||_c==dojo.keys.DOWN_ARROW){this.preventDefault(_b);}}}}}}}},_onKeyPressBidi:function(_f){if(!this.isVisualMode){return;}if(destroyNextKeyEvent||preventAltNumpad||(_f.returnValue==false)){this.preventDefault(_f);preventAltNumpad=false;destroyNextKeyEvent=false;return;}else{if(preventKeyPressProcessing){preventKeyPressProcessing=false;return;}}var _10=null;var obj=this.focusNode;charClass=fieldDirection=(obj.style.direction=="rtl");if(dojo.isIE){if(_f.keyCode!=_f.charCode){return;}ieKey=this.changeKey(_f.keyCode,fieldDirection,_f,obj);if(this.isArabic&&layerGuess&&(ieKey>47)&&(ieKey<58)){ieKey=_f.keyCode=ieKey+1584;}}else{ieKey=_f.charCode;if(_f.keyCode==dojo.keys.ENTER){if(pushMode||isFldreversed){this.toggleFieldOrient(obj,false,false);}}else{if(_f.keyCode==dojo.keys.INSERT){isOverwriteMozilla=!isOverwriteMozilla;}else{if((ieKey>31)&&!_f.altKey&&!_f.ctrlKey){charCode=ieKey;ieKey=this.changeKey(ieKey,fieldDirection,_f,obj);if(charCode!=ieKey){_10=ieKey;}if(this.isArabic&&layerGuess&&(ieKey>47)&&(ieKey<58)){_10=ieKey+1584;}}}}}if(((ieKey>64)&&(ieKey<91))||((ieKey>96)&&(ieKey<123))){layerGuess=charClass=false;}else{if((ieKey>1487)&&!((ieKey>1631)&&(ieKey<1642))){layerGuess=charClass=true;}else{if(ieKey==32){charClass=layerGuess;}else{if(fieldDirection&&(((ieKey>47)&&(ieKey<58))||((ieKey>1631)&&(ieKey<1642)))){charClass=false;}}}}if(prevCharClass!=charClass&&ieKey!=0){prevCharClass=charClass;this.showStatusBar(obj);}if(this.autoPush){fieldDirection=(obj.style.direction=="rtl");if(fieldDirection!=charClass){curPos=(dojo.isIE)?curPos:obj.selectionEnd;this.toggleFieldOrient(obj,true,pushMode&&(curPos==leftPushBound));if(this.autoKeyboardLayerSwitch&&(((ieKey>47)&&(ieKey<58))||((ieKey>1631)&&(ieKey<1642)))){layerSwitched=true;}}}if((ieKey>31)&&!_f.altKey&&!_f.ctrlKey){var _11=(dojo.isIE)?Math.abs(selectionStart-curPos):obj.selectionEnd-obj.selectionStart;if(!dojo.isIE){curPos=obj.selectionEnd;selectionStart=obj.selectionStart;}if(!this.isOverWriteMode()||(_11>0)){var _12=obj.value;if(_12.length-_11>=obj.maxLength){var _13=(pushMode^isFldreversed)?_12.charAt(0):_12.charAt(_12.length-1);if(_13==" "){if(pushMode^isFldreversed){obj.value=_12.substring(1);if(curPos>0){selectionStart--;curPos--;leftPushBound--;rightPushBound--;}}else{obj.value=_12.substring(0,_12.length-1);}if(dojo.isIE){this.setSelectedRange(obj,selectionStart,selectionStart);}else{_10=ieKey;}}else{this.preventDefault(_f);statusBLOCKED="X";this.showStatusBar(obj);return;}}}else{if(curPos>=obj.maxLength){this.preventDefault(_f);statusBLOCKED="X";this.showStatusBar(obj);return;}}if(pushMode){if(!this.isOverWriteMode()||(leftPushBound==curPos)||(_11>0)){leftPushBound+=1-_11;}}if(dojo.isIE){if(_11>0){_f.returnValue=false;var _14=document.selection.createRange();_14.text=String.fromCharCode(ieKey);_14.select();}selectionStart=curPos=Math.min(selectionStart,curPos)+1;}else{_10=(_10!=null)?_10:ieKey;if(isLinux&&fieldDirection&&this.isArabic&&(ieKey>1487)){_f.preventDefault();if(this.isOverWriteMode()&&(selectionStart==curPos)){_12=obj.value.substring(0,selectionStart)+String.fromCharCode(_10)+obj.value.substring(curPos+1);}else{_12=obj.value.substring(0,selectionStart)+String.fromCharCode(_10)+obj.value.substring(curPos);}obj.value=ara_type(selectionStart,_12,fieldDirection);obj.setSelectionRange(selectionStart+1,selectionStart+1);}else{if((_10!=null)||this.isOverWriteMode()){_f.preventDefault();this.replaceFieldText(obj,_10);}}}}},_onMouseOut:function(_15){if(!this.isVisualMode){return;}if(dojo.isIE){if(mousePressed&&(_15.x<0)){var obj=this.focusNode;curPos=1;if(obj.style.direction=="rtl"){curPos=obj.value.length-curPos;}}}var _16=document.getElementById("hint");if(_16!=null){if(_16.length>0){_16[0].style.visibility="hidden";}else{_16.style.visibility="hidden";}}},_onMouseUp:function(_17){if(!this.isVisualMode){return;}var obj=this.focusNode;var _18=document.getElementById("hint");if(_18!=null){if(_18.length>0){_18[0].style.visibility="hidden";}else{_18.style.visibility="hidden";}}mousePressed=false;var _19=this.getCaretPos(_17,obj);if(_19&&(!dojo.isIE||_17.button!=2)){selectionStart=Math.min(_19[0],_19[1]);curPos=Math.max(_19[0],_19[1]);if(dojo.isIE&&selectionStart==0){this.preventEraseMarker();}}if(pushMode&&((curPos>leftPushBound)||(selectionStart<rightPushBound))){this.toggleFieldOrient(obj,true,false);}},_onMouseDown:function(_1a){if(!this.isVisualMode){return;}if(_1a.button==2){var _1b=document.getElementById("hint");if(_1b!=null){var _1c=(_1b.length>0)?_1b[0]:_1b;_1c.style.left=(_1a.clientX-_1b.scrollWidth>0)?(_1a.clientX-_1b.scrollWidth):0;_1c.style.top=_1a.clientY;_1c.style.visibility="visible";}}if(dojo.isIE){mousePressed=true;}},reorderText:function(_1d,_1e,_1f){var _20="";var len=_1d.length;if(_1f&&_1e){_20=this.reverseText(_1d);}else{_20=_1d;}if(jr==null){jr=new JSReorder();}_20=jr.doReorder(_20);if(!_1f&&_1e){_20=this.reverseText(_20);}return _20;},_onCopy:function(_21){if(!this.isVisualMode){return;}document.body.oncopy=null;range=document.selection.createRange();text=range.text;if((text.charAt(0)==LRO)||(text.charAt(0)==RLO)){text=text.substring(1);}try{var _22=this.reorderText(text,this.focusNode.style.direction=="rtl",true);window.clipboardData.setData("Text",_22);_21.returnValue=false;}catch(e){}},_onCut:function(_23){if(!this.isVisualMode){return;}var obj=this.focusNode;if(pushMode){leftPushBound-=Math.abs(selectionStart-curPos);}var ret=this._onCopy(_23);curPos=Math.min(selectionStart,curPos);selectionStart=curPos;_23.returnValue=false;range=document.selection.clear();},_onPaste:function(_24){if(!this.isVisualMode){return;}if(selectionStart==0){this.preventEraseMarker();}var obj=this.focusNode;_24.returnValue=false;var _25=document.selection.createRange();var _26="";try{var _27="";if(window.clipboardData){_27=window.clipboardData.getData("Text");}if(_27){_26=_27;}}catch(e){}var _28=_26.length;selectionStart=Math.min(selectionStart,curPos);_28=Math.min(_28,obj.maxLength-selectionStart);delta=_28-(_25.text).length;if(delta>0){if(obj.value.length<selectionStart+_28){delta=obj.value.length-(selectionStart+(_25.text).length);}_25.moveEnd("character",delta);}var _29=_26.substring(0,_28);if(_25.parentElement()!=obj){obj.value=this.reorderText(_29,obj.style.direction=="rtl",false);}else{_25.text=this.reorderText(_29,obj.style.direction=="rtl",false);}selectionStart=curPos=selectionStart+_28;if(pushMode){this.toggleFieldOrient(obj,true,false);}},_onDblClick:function(_2a){if(this.isVisualMode){var obj=this.focusNode;selectionStart=(dojo.isIE)?1:0;curPos=obj.value.length;if(pushMode){this.toggleFieldOrient(obj,false,false);pushMode=false;}this.setSelectedRange(obj,selectionStart,curPos);}},_onBlur:function(_2b){if(this.isVisualMode){var obj=this.focusNode;if(!isLinux||!preventAltNumpad){if(pushMode){this.toggleFieldOrient(obj,false,false);pushMode=false;}if(isFldreversed){this.processFieldReverse(obj,false);}}}this.inherited(arguments);},_onFocus:function(_2c){if(this.isVisualMode){isFldreversed=false;var obj=this.focusNode;var _2d=obj.value;if(dojo.isIE){var _2e=this.getCaretPos(_2c,obj);if(_2e){selectionStart=Math.min(_2e[0],_2e[1]);curPos=Math.max(_2e[0],_2e[1]);if(selectionStart==0){this.preventEraseMarker();}}}if(this.autoKeyboardLayerSwitch){layerSwitched=false;layerGuess=(obj.style.direction=="rtl")^layerSwitched;}if(_2d.length==0){obj.style.textAlign=(obj.style.direction=="rtl")?"right":"left";}if(!dojo.isIE&&isLinux&&(curPos>0)){obj.setSelectionRange(obj.selectionStart,obj.selectionEnd);}this.showStatusBar(obj);}this.inherited(arguments);},_onSelect:function(_2f){if(this.isVisualMode){var obj=this.focusNode;if(obj.value.length<2){selectionStart=curPos=0;return;}if(document.selection.createRange().text.length==obj.value.length){this._onDblClick(_2f);_2f.returnValue=false;}}},setSelectedRange:function(obj,_30,_31){if(dojo.isIE){var _32=obj.createTextRange();if(_32){_32.collapse();_32.moveEnd("character",_31);_32.moveStart("character",_30);_32.select();}}else{obj.setSelectionRange(_30,_31);}},getCaretPos:function(_33,obj){if(!dojo.isIE){return new Array(_33.target.selectionStart,_33.target.selectionEnd);}else{try{var _34=document.selection.createRange().duplicate();var _35=_34.duplicate();var _36=_34.text.length;_35.expand("textedit");while(_34.compareEndPoints("StartToStart",_35)>0){_34.moveStart("character",-1);}var _37=_34.text.length;}catch(e){return new Array(0,0);}return new Array(_37-_36,_37);}},isOverWriteMode:function(){if(dojo.isIE){return document.queryCommandValue("OverWrite");}else{return isOverwriteMozilla;}},preventEraseMarker:function(){var rng=this.focusNode.createTextRange();rng.moveStart("character",1);selectionStart=1;if(curPos==0){curPos=selectionStart;}rng.select();},swapBrackets:function(_38,_39,_3a){swapChar=gKeyCode;if(isLinux){if(_39^(layerGuess&&!this.isArabic)){if(_3a==40){_3a=41;}else{if(_3a==41){_3a=40;}else{if(_3a==60){_3a=62;}else{if(_3a==62){_3a=60;}else{if(_3a==91){_3a=93;}else{if(_3a==93){_3a=91;}else{if(_3a==123){_3a=125;}else{if(_3a==125){_3a=123;}}}}}}}}}return _3a;}else{if(_39){if(swapChar==219){if(!this.isArabic){_3a=(_38.shiftKey)?125:93;}}else{if(swapChar==221){if(!this.isArabic){_3a=(_38.shiftKey)?123:91;}}else{if(_38.shiftKey&&(swapChar==48)){_3a=40;}else{if(_38.shiftKey&&(swapChar==57)){_3a=41;}else{if(!this.isArabic&&_38.shiftKey&&(swapChar==188)){_3a=62;}else{if(!this.isArabic&&_38.shiftKey&&(swapChar==190)){_3a=60;}}}}}}}else{if(swapChar==219){if(this.isArabic){if(_38.shiftKey&&layerGuess){_3a=62;}}else{_3a=(_38.shiftKey)?123:91;}}else{if(swapChar==221){if(this.isArabic){if(_38.shiftKey&&layerGuess){_3a=60;}}else{_3a=(_38.shiftKey)?125:93;}}else{if(_38.shiftKey&&(swapChar==48)){_3a=41;}else{if(_38.shiftKey&&(swapChar==57)){_3a=40;}else{if(!this.isArabic&&_38.shiftKey&&(swapChar==188)){_3a=60;}else{if(!this.isArabic&&_38.shiftKey&&(swapChar==190)){_3a=62;}}}}}}}}return _3a;},processLamAlef:function(_3b,_3c,_3d,obj){if((_3b==1604)&&((gKeyCode!=71)||(_3d.shiftKey&&gKeyCode==71))){destroyNextKeyEvent=true;}var _3e=null;if(gKeyCode==71){_3e=1571;}else{if(gKeyCode==84){_3e=1573;}else{if(gKeyCode==66){_3e=(_3d.shiftKey)?1570:1575;}}}if((obj.type!="password")&&!_3c&&this.autoPush){toggleFieldOrient(obj,true,pushMode&&(curPos==leftPushBound));_3c=!_3c;}if(pushMode){var _3f=(dojo.isIE)?curPos:obj.selectionStart;if(!this.isOverWriteMode()||(leftPushBound==_3f)){leftPushBound+=1;}}if(dojo.isIE){var _40=(_3c)?String.fromCharCode(1604)+String.fromCharCode(_3e):String.fromCharCode(_3e)+String.fromCharCode(1604);_3d.returnValue=false;tmp=Math.min(selectionStart,curPos);curPos=Math.max(selectionStart,curPos);selectionStart=tmp;_3b=1604;if(this.isOverWriteMode()&&(curPos==selectionStart)){obj.value=obj.value.substring(0,selectionStart)+_40+obj.value.substring(curPos+1);}else{obj.value=obj.value.substring(0,selectionStart)+_40+obj.value.substring(curPos);}curPos=selectionStart=selectionStart+1;this.setSelectedRange(obj,selectionStart+1,selectionStart+1);}else{_3d.preventDefault();if(_3c){replaceFieldText(obj,1604);_3b=_3e;}else{replaceFieldText(obj,_3e);_3b=1604;}}return _3b;},changeKey:function(_41,_42,_43,obj){if(this.autoKeyboardLayerSwitch&&!((gKeyCode<62&&gKeyCode>47)||(gKeyCode<112&&gKeyCode>95)||gKeyCode==220||gKeyCode==32)){if(this.isArabic){_41=this.processAutoKeyboardLayerSwitchArabic(_41,_42,_43,obj);}else{_41=this.processAutoKeyboardLayerSwitchHebrew(_41,_42,_43,obj);}}else{if(this.autoKeyboardLayerSwitch&&!dojo.isIE&&gKeyCode==59){if(_42^layerSwitched){if(_43.shiftKey){_41=58;}else{_41=(this.isArabic)?1603:1507;}}else{_41=(_43.shiftKey)?gKeyCode-1:gKeyCode;}}else{_41=this.swapBrackets(_43,_42,_41);}}if(dojo.isIE){_43.keyCode=_41;}return _41;},processAutoKeyboardLayerSwitchHebrew:function(_44,_45,_46,obj){if(gKeyCode!=_44){if(_45^layerSwitched){if(gKeyCode<186){_44=CONVERT_TO_HEBREW_LAYER1[gKeyCode-65];}else{if(gKeyCode<219){_44=(_46.shiftKey)?CONVERT_TO_HEBREW_LAYER1_SHIFT_H[gKeyCode-186]:CONVERT_TO_HEBREW_LAYER1_H[gKeyCode-186];}else{if(gKeyCode<223){_44=(_46.shiftKey)?CONVERT_TO_HEBREW_LAYER2_SHIFT_H[gKeyCode-219]:CONVERT_TO_HEBREW_LAYER2_H[gKeyCode-219];}}}}else{if(gKeyCode>=65&&gKeyCode<=90){_44=gKeyCode+32;}else{_44=forceToEnglishLayer(_44,_46);}}}return _44;},processAutoKeyboardLayerSwitchArabic:function(_47,_48,_49,obj){if((gKeyCode==66)||(_49.shiftKey&&((gKeyCode==71)||(gKeyCode==84)))){if(_48^layerSwitched){return processLamAlef(_47,_48,_49,obj);}else{if(_47==1604){destroyNextKeyEvent=true;}}}if(_48^layerSwitched){if(gKeyCode<186){_47=(_49.shiftKey)?CONVERT_TO_ARABIC_LAYER1_SHIFT[gKeyCode-65]:CONVERT_TO_ARABIC_LAYER1[gKeyCode-65];}else{if(gKeyCode<219){_47=(_49.shiftKey)?CONVERT_TO_ARABIC_LAYER2_SHIFT[gKeyCode-186]:CONVERT_TO_ARABIC_LAYER2[gKeyCode-186];}else{if(gKeyCode<223){_47=(_49.shiftKey)?CONVERT_TO_ARABIC_LAYER3_SHIFT[gKeyCode-219]:CONVERT_TO_ARABIC_LAYER3[gKeyCode-219];}}}}else{if((gKeyCode!=_47)&&(gKeyCode!=_47-32)){_47=forceToEnglishLayer(_47,_49);}}return _47;},forceToEnglishLayer:function(_4a,_4b){if(gKeyCode<186){_4a=(_4b.shiftKey)?gKeyCode:gKeyCode+32;}else{if(gKeyCode<219){_4a=(_4b.shiftKey)?CONVERT_TO_LOWER_CASE1_SHIFT[gKeyCode-186]:CONVERT_TO_LOWER_CASE1[gKeyCode-186];}else{if(gKeyCode<223){_4a=(_4b.shiftKey)?CONVERT_TO_LOWER_CASE2_SHIFT[gKeyCode-219]:CONVERT_TO_LOWER_CASE2[gKeyCode-219];}}}return _4a;},replaceFieldText:function(obj,_4c){if(this.isOverWriteMode()&&(selectionStart==curPos)){obj.value=obj.value.substring(0,selectionStart)+String.fromCharCode(_4c)+obj.value.substring(curPos+1);}else{obj.value=obj.value.substring(0,selectionStart)+String.fromCharCode(_4c)+obj.value.substring(curPos);}obj.setSelectionRange(selectionStart+1,selectionStart+1);},doSymSwap:function(_4d){switch(_4d){case "(":_4d=")";break;case ")":_4d="(";break;case "{":_4d="}";break;case "}":_4d="{";break;case "[":_4d="]";break;case "]":_4d="[";break;case "<":_4d=">";break;case ">":_4d="<";break;}return _4d;},processHome:function(obj){if(pushMode){selectionStart=curPos=obj.value.length;}else{selectionStart=curPos=(dojo.isIE)?1:0;}if(dojo.isIE){event.returnValue=false;this.setSelectedRange(obj,curPos,curPos);}if(pushMode&(curPos>leftPushBound)){this.toggleFieldOrient(obj,true,false);}},processEnd:function(obj){if(pushMode){selectionStart=curPos=(dojo.isIE)?1:0;}else{selectionStart=curPos=obj.value.length;}if(dojo.isIE){event.returnValue=false;this.setSelectedRange(obj,curPos,curPos);}if(pushMode&(curPos<rightPushBound)){this.toggleFieldOrient(obj,true,false);}},toggleFieldOrient:function(obj,_4e,_4f){var len=obj.value.length;var _50=0;if(!dojo.isIE){selectionStart=obj.selectionStart;curPos=obj.selectionEnd;}obj.style.direction=(obj.style.direction=="rtl")?"ltr":"rtl";if(dojo.isIE){if(obj.value.charAt(0)==LRO){obj.value=RLO+obj.value.substring(1);}else{if(obj.value.charAt(0)==RLO){obj.value=LRO+obj.value.substring(1);}}}obj.value=this.reverseText(obj.value);if(this.autoKeyboardLayerSwitch){layerSwitched=false;}if(_4e){pushMode=!pushMode;var _51=(dojo.isIE)?1:0;if(pushMode){_50=Math.abs(selectionStart-curPos);leftPushBound=rightPushBound=selectionStart=len-Math.max(selectionStart,curPos)+_51;curPos=selectionStart+_50;}else{if(_4f){curPos=rightPushBound;}selectionStart=curPos=len-curPos+_51;}this.setSelectedRange(obj,selectionStart,curPos);}this.showStatusBar(obj);},processPush:function(obj,_52){if(((_52==144)&&!isLinux)||((_52==103)&&isLinux)){preventAltNumpad=true;if(!pushMode){this.toggleFieldOrient(obj,true,true);}}else{if(((_52==111)&&!isLinux)||((_52==104)&&isLinux)){preventAltNumpad=true;if(pushMode){this.toggleFieldOrient(obj,true,true);}}}},reverseText:function(_53){var _54="";if(_53.charAt(0)==LRO||_53.charAt(0)==RLO){_54+=_53.charAt(0);_53=_53.substring(1);}var len=_53.length;for(var i=0;i<len;i++){symbol=_53.charAt(len-i-1);symbol=this.doSymSwap(symbol);_54+=symbol;}if(isLinux&&this.isArabic){_54.value=ara_type(0,_54,(_54.charAt(0)==RLO));}return _54;},processFieldReverse:function(obj,_55){isFldreversed=!isFldreversed;var len=obj.value.length;var _56=(dojo.isIE)?1:0;if(len==_56){obj.style.textAlign=(obj.style.direction=="rtl")?"left":"right";_55=false;}this.toggleFieldOrient(obj,false,false);if(_55){selectionStart=curPos=len-curPos+_56;this.setSelectedRange(obj,curPos,curPos);}},preventDefault:function(_57){if(dojo.isIE){_57.returnValue=false;}else{_57.preventDefault();}},processDelete:function(obj){if(!dojo.isIE){selectionStart=obj.selectionStart;curPos=obj.selectionEnd;}if(pushMode&&(selectionStart<leftPushBound)){if(selectionStart==curPos){leftPushBound--;}else{leftPushBound-=Math.abs(selectionStart-curPos);}}if(dojo.isIE){curPos=Math.min(selectionStart,curPos);selectionStart=curPos;if(selectionStart==0){this.preventEraseMarker();}}},processBackspace:function(obj,_58){if(dojo.isIE){var _59=document.selection.createRange();noSelection=((_59.text).length==0);}else{selectionStart=obj.selectionStart;curPos=obj.selectionEnd;noSelection=(selectionStart==curPos);}if(noSelection){var _5a=(dojo.isIE)?1:0;if(curPos>_5a){if(pushMode&&(curPos<=rightPushBound)){this.preventDefault(_58);preventKeyPressProcessing=true;return;}curPos--;if(pushMode){leftPushBound--;}}else{this.preventDefault(_58);return;}}else{if(pushMode){leftPushBound-=Math.abs(selectionStart-curPos);}curPos=Math.min(selectionStart,curPos);if(dojo.isIE&&curPos==0){this.preventEraseMarker();}}selectionStart=curPos;},processLeftarrow:function(_5b){if(curPos>1){if(_5b.shiftKey){if(selectionStart==curPos){selectionStart=curPos;}curPos--;}else{if(selectionStart!=curPos){selectionStart=curPos=Math.min(selectionStart,curPos);}else{selectionStart=curPos=curPos-1;}}}else{_5b.returnValue=false;}},processRightarrow:function(_5c){if(curPos<this.focusNode.value.length){if(_5c.shiftKey){if(selectionStart==curPos){selectionStart=curPos;}curPos++;}else{if(selectionStart!=curPos){selectionStart=curPos=Math.max(selectionStart,curPos);}else{selectionStart=curPos=curPos+1;}}}else{_5c.returnValue=false;}},showStatusBar:function(obj){if(dojo.isIE){var _5d=TYPINGORIENT;_5d+=(obj.style.direction=="rtl")?"<=":"=>";_5d+=AUTOPUSH;_5d+=(this.autoPush)?"on":"off";_5d+="  Keyboard:";if(this.isArabic){_5d+=(layerGuess)?" A":" E";}else{_5d+=(layerGuess)?" H":" E";}window.status=_5d;}},setValue:function(_5e){if(this.isVisualMode){if(this.focusNode.style.direction=="rtl"){_5e=this.reverseText(_5e);if(dojo.isIE){_5e=RLO+_5e;}}else{if(dojo.isIE){_5e=LRO+_5e;}}}this.attr("value",_5e);},getValue:function(){var _5f=this.attr("value");if(this.isVisualMode){if(dojo.isIE&&((_5f.charAt(0)==LRO)||(_5f.charAt(0)==RLO))){_5f=_5f.substring(1);}if(this.focusNode.style.direction=="rtl"){_5f=this.reverseText(_5f);}}return _5f;},getDisplayedValue:function(){var _60=this.attr("displayedValue");if(this.isVisualMode){if(dojo.isIE&&((_60.charAt(0)==LRO)||(_60.charAt(0)==RLO))){_60=_60.substring(1);}if(this.focusNode.style.direction=="rtl"){_60=this.reverseText(_60);}}return _60;},setDisplayedValue:function(_61){if(this.isVisualMode){if(this.focusNode.style.direction=="rtl"){_61=this.reverseText(_61);if(dojo.isIE){_61=RLO+_61;}}else{if(dojo.isIE){_61=LRO+_61;}}}this.attr("displayedValue",_61);}});});}