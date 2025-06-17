//=============================================================================
// InfoWindow.js
//=============================================================================

/*:
 * @plugindesc 情報表示ウィンドウをメニュー画面に追加するプラグイン
 * @author Me mod by 黒の黒の巣
 *
 * @param Setx
 * @desc メッセージウィンドウの横座標
 * @default 0
 *
 * @param Sety
 * @desc メッセージウィンドウの縦座標
 * @default 0
 *
 * @param Width
 * @desc メッセージウィンドウの横幅
 * @default 0
 *
 * @param Height
 * @desc メッセージウィンドウの縦幅
 * @default 0
 *
 * @help 情報表示ウィンドウをメニュー画面上に追加します。
 *
 *設定値分、ウィンドウ位置を移動させます。
 *
 */

(function() {

    var parameters = PluginManager.parameters('InfoWindow');
    var setX = Number(parameters['Setx'] || 0);
    var setY = Number(parameters['Sety'] || 0);
    var setWidth = Number(parameters['Width'] || 0);
    var setHeight = Number(parameters['Height'] || 0);

/*
	// マップ上にウィンドウ表示するよ宣言
	var Scene_map_start = Scene_Map.prototype.start;
	Scene_Map.prototype.start = function() {
		Scene_map_start.call(this);
	    this._InfoWindow = new Window_Info();
	    this.addWindow(this._InfoWindow);
	};
    var _Scene_Map_update = Scene_Map.prototype.update;
    Scene_Map.prototype.update = function() {
        _Scene_Map_update.call(this);
        this._InfoWindow.setText();
    };
*/

	// メニュー上にウィンドウ表示するよ宣言
    var _Scene_Menu_create = Scene_Menu.prototype.create; 
    Scene_Menu.prototype.create = function() { 
        _Scene_Menu_create.call(this); 
        this.createInfoWindow(); 
        this._InfoWindow.width = this._commandWindow.width;
        this._InfoWindow.y = 140 + this._commandWindow.height;
/*        this._InfoWindow.y = this._commandWindow.height; */
    } 

    Scene_Menu.prototype.createInfoWindow = function() { 
        this._InfoWindow = new Window_Info(); 
        this.addWindow(this._InfoWindow); 
    }; 
     
    var _Scene_Menu_update = Scene_Menu.prototype.update; 
    Scene_Menu.prototype.update = function() { 
        _Scene_Menu_update.call(this); 
        this._InfoWindow.setText(); 
    }; 
	
	// ここからメニューウィンドウ作り始まります。
	function Window_Info() {
	    this.initialize.apply(this, arguments);
	}

	Window_Info.prototype = Object.create(Window_Base.prototype);
	Window_Info.prototype.constructor = Window_Info;
	Window_Info.prototype.initialize = function() {
	    Window_Base.prototype.initialize.call(this, setX, setY, setWidth, setHeight);
	};

	Window_Info.prototype.setText = function(str) {
		this._text = str;
		this.refresh();
	};
	
	// ウィンドウに載せる内容
	Window_Info.prototype.refresh = function() {
	    this.contents.clear();
/*
		this.changeTextColor(this.textColor(16));
        this.drawIcon(210, 1, 1);
		this.drawText($gameVariables.value(2),40, 1);
		this.resetTextColor();
		this.drawText($gameVariables.value(3) + " 日",0,this.lineHeight());
 */
/*
		this.changeTextColor(this.textColor(16));
		this.drawText($gameVariables.value(2),20, 10);
		this.resetTextColor();
		this.drawText($gameVariables.value(3) + " 日",70,this.lineHeight());
*/
		this.changeTextColor(this.textColor(2));
		this.drawText($gameVariables.value(2),0, 5);
		this.resetTextColor();
		this.drawText($gameVariables.value(3),160,5);
		this.changeTextColor(this.textColor(27));
		this.drawText($gameVariables.value(4),0, 45);
		this.resetTextColor();
		this.drawText($gameVariables.value(5),160,45);
	};
	
	// フォントサイズ
	Window_Info.prototype.standardFontSize = function() {
    	return 22;
    };
	// ウィンドウの透明度
	Window_Info.prototype.standardBackOpacity = function() {
/*    	return 255; */
    	return 192;
	};
    // ウィンドウの余白
	Window_Info.prototype.standardPadding = function() {
    	return 18;
	};
	// ウィンドウの色調
/*
	Window_Info.prototype.updateTone = function() {
    	this.setTone(64, 0, 128);
	};
*/
	
})();