//=============================================================================
// CustomWindowStatus.js
// Copyright (c) 2017 Jiro
// http://ashelter.blog.fc2.com
// ///=============================================================================

/*:
 * @plugindesc アクターのステータス画面の位置調整プラグイン ver1.0
 * @author 次郎
 *
 * @param Block 1 Position
 * @desc Block1を描画する行位置
 * @default 0
 *
 * @param Horizon 1 Position
 * @desc Horizon1を描画する行位置
 * @default 1
 *
 * @param Block 2 Position
 * @desc Block2を描画する行位置
 * @default 2
 *
 * @param Horizon 2 Position
 * @desc Horizon2を描画する行位置
 * @default 6
 *
 * @param Block 3 Position
 * @desc Block3を描画する行位置
 * @default 7
 *
 * @param Horizon 3 Position
 * @desc Horizon3を描画する行位置
 * @default 13
 *
 * @param Block 4 Position
 * @desc Block4を描画する行位置
 * @default 14
 *
 * @help
 * このプラグインは、アクターステータスのコンテンツの表示位置を任意に調整する機能を提供します。
 * 別のプラグインなどでゲーム画面の解像度を変更した場合に、
 * アクターステータス画面の表示が正常に行われないのを改善するために作成しました。
 */

(function(){
	var parameters = PluginManager.parameters('CustomWindowStatus');
	var block1PositionNumber = Number(parameters['Block 1 Position']);
	var horizon1PositionNumber = Number(parameters['Horizon 1 Position']);
	var block2PositionNumber = Number(parameters['Block 2 Position']);
	var horizon2PositionNumber = Number(parameters['Horizon 2 Position']);
	var block3PositionNumber = Number(parameters['Block 3 Position']);
	var horizon3PositionNumber = Number(parameters['Horizon 3 Position']);
	var block4PositionNumber = Number(parameters['Block 4 Position']);

	// --------------------------------------------------
	// Window_Status
	var _Window_Status_initialize = Window_Status.prototype.initialize;
	Window_Status.prototype.initialize = function() {
		_Window_Status_initialize.call(this);
	};

	var _Window_Status_refresh = Window_Status.prototype.refresh;
	Window_Status.prototype.refresh = function(){
		this.contents.clear();
		if (this._actor) {
			var lineHeight = this.lineHeight();
			this.drawBlock1(lineHeight * block1PositionNumber);
			this.drawHorzLine(lineHeight * horizon1PositionNumber);
			this.drawBlock2(lineHeight * block2PositionNumber);
			this.drawHorzLine(lineHeight * horizon2PositionNumber);
			this.drawBlock3(lineHeight * block3PositionNumber);
			this.drawHorzLine(lineHeight * horizon3PositionNumber);
			this.drawBlock4(lineHeight * block4PositionNumber);
		}
	};

	var _Window_Status_drawBlock1 = Window_Status.prototype.drawBlock1;
	Window_Status.prototype.drawBlock1 = function(y) {
		_Window_Status_drawBlock1.call(this, y);
	};

	var _Window_Status_drawBlock2 = Window_Status.prototype.drawBlock2;
	Window_Status.prototype.drawBlock2 = function(y) {
		_Window_Status_drawBlock2.call(this, y);
	};

	var _Window_Status_drawBlock3 = Window_Status.prototype.drawBlock3;
	Window_Status.prototype.drawBlock3 = function(y) {
		_Window_Status_drawBlock3.call(this, y);
	};

	var _Window_Status_drawHorzLine = Window_Status.prototype.drawHorzLine;
	Window_Status.prototype.drawHorzLine = function(y) {
		_Window_Status_drawHorzLine.call(this, y);
	};
})();
