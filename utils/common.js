/**
 * Created by gao on 2015/4/16.
 */
define(function (require, exports, module) {
    var $ = require("sys.jquery");

    //万分位格式化
    exports.formatNum = function (num, bit) {
        //非正常值
        if (num === "" || num === null || num === NaN || num === undefined) {
            return "";
        }
        //非数字
        if (!/^\-?\d+(\.\d+)?$/.test(num)) {
            return num;
        }
        //不传bit参数
        if (bit === undefined) {
            bit = 0;
        }
        num = (+num).toFixed(bit).split(".");
        var re = new RegExp("\\d(?=(\\d{4})+$)", "g");
        return num[0].replace(re, "$&,") + (num[1] ? "." + num[1] : "");
    };

    //获取表单的值
    exports.getForm = function (form) {
        var o = {};
        form.find("select,input").each(function(i, obj){
            o[obj.name] = +obj.value;
        });
        return o;
    };

    //解析事件 
    exports.parseEvent = function (ui, scope) {
        var context = {};
        context.ui = $(ui);
        [].forEach.call(ui.querySelectorAll("[data-event]"), function (ele) {
            //var ema = ele.dataset.event.split(">");
            var ema = ele.getAttribute("data-event").split(">");  //为兼容IE10
            if (ema.length == 1) {
                ema = ["click", ema[0]];
            }
            var ma = ema[1].split(":");
            var e = ema[0];
            var m = ma[0];
            var a = ma[1] && ma[1].split(",") || [];
            $(ele).unbind(e).bind(e, function () {
                context.element = ele;
                context.$element = $(ele);
                scope[m].apply(scope, [context].concat(a));
            });
        });
    };
});
