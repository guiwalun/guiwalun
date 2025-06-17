//=============================================================================
// MessageWindow_Opacitychange.js
//=============================================================================
/*:
 * @plugindesc 半透明メッセージウィンドウの透明度を変更します。
 * @author 黒の黒の巣
 *
 * @param Opacity
 * @desc メッセージウィンドウの背景透明度(アルファ値)
 * @default 0.6
 *
 * @help
 * 半透明メッセージウィンドウ透明度変更プラグイン ver 1.00
 *
 *＜使い方＞
 *パラメータのOpacity に透明度を記入します。
 *この設定は「背景を暗くする」の場合にのみ反映されます。
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
    var parameters = PluginManager.parameters('MessageWindow_Opacitychange');
    var opacity = Number(parameters['Opacity'] || 1);
    Window_Base.prototype.dimColor1 = function() {
        return 'rgba(0, 0, 0, '+opacity+')';
    };
})();
