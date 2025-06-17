//=============================================================================
// MessageWindow_Notclose.js
//=============================================================================
/*:
 * @plugindesc メッセージウィンドウを特定スイッチがONの間表示し続けます。
 * @author 黒の黒の巣
 *
 * @param Switch
 * @desc メッセージウィンドウを固定表示し続けるスイッチ
 * @default 1
 *
 * @help
 * メッセージウィンドウ固定表示プラグイン ver 1.00
 *
 *＜使い方＞
 *パラメータのSwitch に固定表示用スイッチIDを記入します。
 *そのスイッチIDがONの間、メッセージウィンドウを消さずに固定表示します。
 *ウェイトをはさむ時にいちいち消えなくします。
 *
 * ＜規約＞
 * 有償無償問わず使用可、特に改変もご自由にして頂いて問題ございません。使用報告も不要です。
 *
 * ＜作者情報＞
 *作者：黒の黒の巣 
 *HP：
 *URL：https://ci-en.dlsite.com/creator/4031
 */

(function() {
    var parameters = PluginManager.parameters('MessageWindow_Notclose');
    var setswitch = Number(parameters['Switch'] || 1);
    Window_Message.prototype.checkToNotClose = function() {
      if (this.isClosing() && this.isOpen()) {
        if (this.doesContinue() || $gameSwitches.value(setswitch)) {
          this.open();
        }
      }
    };
})();
