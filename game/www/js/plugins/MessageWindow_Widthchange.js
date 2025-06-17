//=============================================================================
// MessageWindow_Widthchange.js
//=============================================================================
/*:
 * @plugindesc メッセージウィンドウの横幅を変更します。
 * @author 黒の黒の巣
 *
 * @param Width
 * @desc メッセージウィンドウの横幅補正値
 * @default 0
 *
 * @help
 * メッセージウィンドウ横幅変更プラグイン ver 1.00
 *
 *＜使い方＞
 *パラメータのWidth に横幅補正値を記入します。
 *設定値分、デフォルト幅から補正をかけます。
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

    var parameters = PluginManager.parameters('MessageWindow_Widthchange');
    var width = Number(parameters['Width'] || 0);

    Window_Message.prototype.windowWidth = function() {
        return Graphics.boxWidth - width;
    };
    
})();
