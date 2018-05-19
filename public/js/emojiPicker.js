(function (f) {
    if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = f()
    } else if (typeof define === "function" && define.amd) {
        define([], f)
    } else {
        var g;
        if (typeof window !== "undefined") {
            g = window
        } else if (typeof global !== "undefined") {
            g = global
        } else if (typeof self !== "undefined") {
            g = self
        } else {
            g = this
        }
        g.EmojiPicker = f()
    }
})(function () {
    var define, module, exports;
    return (function e(t, n, r) {
        function s(o, u) {
            if (!n[o]) {
                if (!t[o]) {
                    var a = typeof require == "function" && require;
                    if (!u && a) return a(o, !0);
                    if (i) return i(o, !0);
                    var f = new Error("Cannot find module '" + o + "'");
                    throw f.code = "MODULE_NOT_FOUND", f
                }
                var l = n[o] = {
                    exports: {}
                };
                t[o][0].call(l.exports, function (e) {
                    var n = t[o][1][e];
                    return s(n ? n : e)
                }, l, l.exports, e, t, n, r)
            }
            return n[o].exports
        }
        var i = typeof require == "function" && require;
        for (var o = 0; o < r.length; o++) s(r[o]);
        return s
    })({
        1: [function (require, module, exports) {
            (function (global, factory) {
                if (typeof define === "function" && define.amd) {
                    define(["module"], factory);
                } else if (typeof exports !== "undefined") {
                    factory(module);
                } else {
                    var mod = {
                        exports: {}
                    };
                    factory(mod);
                    global.emojiPicker = mod.exports;
                }
            })(this, function (module) {
                "use strict";

                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) {
                        throw new TypeError("Cannot call a class as a function");
                    }
                }

                var _createClass = function () {
                    function defineProperties(target, props) {
                        for (var i = 0; i < props.length; i++) {
                            var descriptor = props[i];
                            descriptor.enumerable = descriptor.enumerable || false;
                            descriptor.configurable = true;
                            if ("value" in descriptor) descriptor.writable = true;
                            Object.defineProperty(target, descriptor.key, descriptor);
                        }
                    }

                    return function (Constructor, protoProps, staticProps) {
                        if (protoProps) defineProperties(Constructor.prototype, protoProps);
                        if (staticProps) defineProperties(Constructor, staticProps);
                        return Constructor;
                    };
                }();

                var EmojiPicker = function () {
                    function EmojiPicker() {
                        _classCallCheck(this, EmojiPicker);

                        this.initiate();
                    }

                    _createClass(EmojiPicker, [{
                        key: "initiate",
                        value: function initiate() {
                            var _this = this;

                            var emojiInputs = document.querySelectorAll('[data-emoji-picker="true"]');

                            emojiInputs.forEach(function (element) {
                                _this.generateElements(element);
                            });
                        }
                    }, {
                        key: "generateElements",
                        value: function generateElements(emojiInput) {
                            var clickLink = function clickLink(event) {
                                event.preventDefault();
                                var caretPos = emojiInput.selectionStart;
                                emojiInput.value = emojiInput.value.substring(0, caretPos) + " " + event.target.innerHTML + emojiInput.value.substring(caretPos);
                                emojiPicker.style.display = "none";
                                emojiInput.focus();

                                //trigger ng-change for angular
                                if (typeof angular !== "undefined") {
                                    angular.element(emojiInput).triggerHandler("change");
                                }
                            };

                            emojiInput.style.width = "100%";

                            var emojiContainer = document.createElement("div");
                            emojiContainer.style.position = "relative";

                            var parent = emojiInput.parentNode;
                            parent.replaceChild(emojiContainer, emojiInput);
                            emojiContainer.appendChild(emojiInput);

                            var emojiPicker = document.createElement("div");
                            emojiPicker.tabIndex = 0;

                            emojiPicker.addEventListener("blur", function (event) {
                                emojiPicker.style.display = "none";
                            }, false);

                            emojiPicker.style.position = "absolute";
                            emojiPicker.style.right = "2px";
                            emojiPicker.style.outline = "none";
                            emojiPicker.style.top = "-210px";
                            emojiPicker.style.zIndex = "999";
                            emojiPicker.style.display = "none";
                            emojiPicker.style.width = "280px";
                            emojiPicker.style.height = "200px";
                            emojiPicker.style.padding = "7px 7px 7px 7px";
                            emojiPicker.style.marginTop = "5px";
                            emojiPicker.style.overflowY = "auto";
                            emojiPicker.style.background = "#fff";
                            emojiPicker.style.boxShadow = "0px 0px 5px 0px rgba(0,0,0,0.75)";
                            emojiPicker.style.border = "solid thin rgba(0,0,0,0.25)";
                            emojiPicker.style.borderRadius = "5px";

                            var emojiTrigger = document.createElement("a");
                            emojiTrigger.style.position = "absolute";
                            emojiTrigger.style.top = "8px";
                            emojiTrigger.style.right = "10px";
                            emojiTrigger.style.textDecoration = "none";
                            emojiTrigger.setAttribute("href", "javascript:void(0)");
                            emojiTrigger.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 14"><path d="M8.9 8.4q-0.3 0.9-1.1 1.5t-1.8 0.6-1.8-0.6-1.1-1.5q-0.1-0.2 0-0.4t0.3-0.2q0.2-0.1 0.4 0t0.2 0.3q0.2 0.6 0.7 1t1.2 0.4 1.2-0.4 0.7-1q0.1-0.2 0.3-0.3t0.4 0 0.3 0.2 0 0.4zM5 5q0 0.4-0.3 0.7t-0.7 0.3-0.7-0.3-0.3-0.7 0.3-0.7 0.7-0.3 0.7 0.3 0.3 0.7zM9 5q0 0.4-0.3 0.7t-0.7 0.3-0.7-0.3-0.3-0.7 0.3-0.7 0.7-0.3 0.7 0.3 0.3 0.7zM11 7q0-1-0.4-1.9t-1.1-1.6-1.6-1.1-1.9-0.4-1.9 0.4-1.6 1.1-1.1 1.6-0.4 1.9 0.4 1.9 1.1 1.6 1.6 1.1 1.9 0.4 1.9-0.4 1.6-1.1 1.1-1.6 0.4-1.9zM12 7q0 1.6-0.8 3t-2.2 2.2-3 0.8-3-0.8-2.2-2.2-0.8-3 0.8-3 2.2-2.2 3-0.8 3 0.8 2.2 2.2 0.8 3z"/></svg>';
                            emojiTrigger.onclick = function () {
                                if (emojiPicker.style.display === "none") {
                                    emojiPicker.style.display = "block";
                                }
                                emojiPicker.focus();
                            };

                            emojiContainer.appendChild(emojiTrigger);

                            var emojiList = document.createElement("ul");
                            emojiList.style.padding = "0";
                            emojiList.style.margin = "0";
                            emojiList.style.listStyle = "none";

                            var emojis = [
                                0x1F600, 0x1F601, 0x1F602, 0x1F923, 0x1F603, 0x1F604, 0x1F605, 0x1F606, 0x1F609, 0x1F60A,
                                0x1F60B, 0x1F60E, 0x1F60D, 0x1F618, 0x1F617, 0x1F619, 0x1F61A, 0x1F642,
                                0x1F917, 0x1F929, 0x1F914, 0x1F928, 0x1F610, 0x1F611, 0x1F636, 0x1F644, 0x1F60F, 0x1F623,
                                0x1F625, 0x1F62E, 0x1F910, 0x1F62F, 0x1F62A, 0x1F62B, 0x1F634, 0x1F60C, 0x1F61B, 0x1F61C,
                                0x1F61D, 0x1F924, 0x1F612, 0x1F613, 0x1F614, 0x1F615, 0x1F643, 0x1F911, 0x1F632, 0x2639,
                                0x1F641, 0x1F616, 0x1F61E, 0x1F61F, 0x1F624, 0x1F622, 0x1F62D, 0x1F626, 0x1F627, 0x1F628,
                                0x1F629, 0x1F92F, 0x1F62C, 0x1F630, 0x1F631, 0x1F633, 0x1F92A, 0x1F635,
                                0x1F621, 0x1F620, 0x1F92C, 0x1F637, 0x1F912, 0x1F915, 0x1F922, 0x1F92E, 0x1F927, 0x1F607,
                                0x1F920, 0x1F925, 0x1F92B, 0x1F92D, 0x1F9D0, 0x1F913, 0x1F608,
                                0x1F47F, 0x1F921, 0x1F479, 0x1F47A, 0x1F480, 0x2620, 0x1F47B, 0x1F47D, 0x1F47E, 0x1F916,
                                0x1F4A9, 0x1F63A, 0x1F638, 0x1F639, 0x1F63B, 0x1F63C, 0x1F63D, 0x1F640, 0x1F63F, 0x1F63E,
                                0x1F648, 0x1F649, 0x1F64A, 0x1F476, 0x1F9D2,
                                0x1F466, 0x1F467, 0x1F9D1, 0x1F468, 0x1F469, 0x1F9D3, 0x1F474, 0x1F475, 0x1F46E, 0x1F575,
                                0x1F482, 0x1F477, 0x1F934, 0x1F478, 0x1F473, 0x1F472, 0x1F9D5, 0x1F9D4, 0x1F471, 0x1F935,
                                0x1F470, 0x1F930, 0x1F931, 0x1F47C, 0x1F385, 0x1F936, 0x1F9D9, 0x1F9DA,
                                0x1F9DB, 0x1F9DC, 0x1F9DD, 0x1F9DE, 0x1F9DF, 0x1F64D, 0x1F64E, 0x1F645, 0x1F646, 0x1F481,
                                0x1F64B, 0x1F647, 0x1F926, 0x1F937, 0x1F486, 0x1F487, 0x1F6B6, 0x1F3C3, 0x1F483, 0x1F57A,
                                0x1F46F, 0x1F9D6, 0x1F9D7, 0x1F9D8, 0x1F6C0, 0x1F6CC, 0x1F574, 0x1F5E3, 0x1F464, 0x1F465,
                                0x1F93A, 0x1F3C7, 0x26F7, 0x1F3C2, 0x1F3CC, 0x1F3C4, 0x1F6A3, 0x1F3CA, 0x26F9, 0x1F3CB,
                                0x1F6B4, 0x1F6B5, 0x1F3CE, 0x1F3CD, 0x1F938, 0x1F93C, 0x1F93D, 0x1F93E, 0x1F939, 0x1F46B,
                                0x1F46C, 0x1F46D, 0x1F48F, 0x1F491, 0x1F46A, 0x1F933, 0x1F4AA, 0x1F448,
                                0x1F449, 0x261D, 0x1F446, 0x1F595, 0x1F447, 0x270C, 0x1F91E, 0x1F596, 0x1F918, 0x1F919,
                                0x1F590, 0x270B, 0x1F44C, 0x1F44D, 0x1F44E, 0x270A, 0x1F44A, 0x1F91B, 0x1F91C, 0x1F91A,
                                0x1F44B, 0x1F91F, 0x270D, 0x1F44F, 0x1F450, 0x1F64C, 0x1F932, 0x1F64F, 0x1F91D, 0x1F485,
                                0x1F442, 0x1F443, 0x1F463, 0x1F440, 0x1F441, 0x1F9E0,
                                0x1F445, 0x1F444, 0x1F48B, 0x1F498, 0x2764, 0x1F493, 0x1F494, 0x1F495,
                                0x1F496, 0x1F497, 0x1F499, 0x1F49A, 0x1F49B, 0x1F9E1, 0x1F49C, 0x1F5A4, 0x1F49D, 0x1F49E,
                                0x1F49F, 0x2763, 0x1F48C, 0x1F4A4, 0x1F4A2, 0x1F4A3, 0x1F4A5, 0x1F4A6, 0x1F4A8, 0x1F4AB,
                                0x1F4AC, 0x1F5E8, 0x1F5EF, 0x1F4AD, 0x1F573, 0x1F453, 0x1F576, 0x1F454,
                                0x1F455, 0x1F456, 0x1F9E3, 0x1F9E4, 0x1F9E5, 0x1F9E6, 0x1F457, 0x1F458, 0x1F459, 0x1F45A,
                                0x1F45B, 0x1F45C, 0x1F45D, 0x1F6CD, 0x1F392, 0x1F45E, 0x1F45F, 0x1F460,
                                0x1F461, 0x1F462, 0x1F451, 0x1F452, 0x1F3A9, 0x1F393, 0x1F9E2, 0x26D1, 0x1F4FF, 0x1F484,
                                0x1F48D, 0x1F48E, 0x1F435, 0x1F412, 0x1F98D, 0x1F436, 0x1F415, 0x1F429, 0x1F43A, 0x1F98A,
                                0x1F431, 0x1F408, 0x1F981, 0x1F42F, 0x1F405, 0x1F406, 0x1F434, 0x1F40E, 0x1F984,
                                0x1F993, 0x1F98C, 0x1F42E, 0x1F402, 0x1F403, 0x1F404, 0x1F437, 0x1F416, 0x1F417, 0x1F43D,
                                0x1F40F, 0x1F411, 0x1F410, 0x1F42A, 0x1F42B, 0x1F992, 0x1F418, 0x1F98F,
                                0x1F42D, 0x1F401, 0x1F400, 0x1F439, 0x1F430, 0x1F407, 0x1F43F, 0x1F994, 0x1F987, 0x1F43B,
                                0x1F428, 0x1F43C, 0x1F43E, 0x1F983, 0x1F414, 0x1F413, 0x1F423, 0x1F424,
                                0x1F425, 0x1F426, 0x1F427, 0x1F54A, 0x1F985, 0x1F986, 0x1F989,
                                0x1F438, 0x1F40A, 0x1F422, 0x1F98E, 0x1F40D, 0x1F432, 0x1F409, 0x1F995, 0x1F996, 0x1F433,
                                0x1F40B, 0x1F42C, 0x1F41F, 0x1F420, 0x1F421, 0x1F988, 0x1F419, 0x1F41A, 0x1F980,
                                0x1F990, 0x1F991, 0x1F40C, 0x1F98B, 0x1F41B, 0x1F41C, 0x1F41D, 0x1F41E, 0x1F997, 0x1F577,
                                0x1F578, 0x1F982, 0x1F490, 0x1F338, 0x1F4AE, 0x1F3F5, 0x1F339, 0x1F940,
                                0x1F33A, 0x1F33B, 0x1F33C, 0x1F337, 0x1F331, 0x1F332, 0x1F333, 0x1F334, 0x1F335, 0x1F33E,
                                0x1F33F, 0x2618, 0x1F340, 0x1F341, 0x1F342, 0x1F343, 0x1F347, 0x1F348, 0x1F349, 0x1F34A,
                                0x1F34B, 0x1F34C, 0x1F34D, 0x1F34E, 0x1F34F, 0x1F350, 0x1F351, 0x1F352, 0x1F353,
                                0x1F95D, 0x1F345, 0x1F965, 0x1F951, 0x1F346, 0x1F954, 0x1F955, 0x1F33D, 0x1F336, 0x1F952,
                                0x1F966, 0x1F344, 0x1F95C, 0x1F330, 0x1F35E, 0x1F950, 0x1F956, 0x1F968,
                                0x1F95E, 0x1F9C0, 0x1F356, 0x1F357, 0x1F969, 0x1F953, 0x1F354, 0x1F35F, 0x1F355, 0x1F32D,
                                0x1F96A, 0x1F32E, 0x1F32F, 0x1F959, 0x1F95A, 0x1F373, 0x1F958, 0x1F372, 0x1F963, 0x1F957,
                                0x1F37F, 0x1F96B, 0x1F371, 0x1F358, 0x1F359, 0x1F35A, 0x1F35B, 0x1F35C, 0x1F35D,
                                0x1F360, 0x1F362, 0x1F363, 0x1F364, 0x1F365, 0x1F361, 0x1F95F, 0x1F960, 0x1F961,
                                0x1F366, 0x1F367, 0x1F368, 0x1F369, 0x1F36A, 0x1F382, 0x1F370, 0x1F967, 0x1F36B,
                                0x1F36C, 0x1F36D, 0x1F36E, 0x1F36F, 0x1F37C, 0x1F95B, 0x2615, 0x1F375, 0x1F376, 0x1F37E,
                                0x1F377, 0x1F378, 0x1F379, 0x1F37A, 0x1F37B, 0x1F942, 0x1F943, 0x1F964, 0x1F962, 0x1F37D,
                                0x1F374, 0x1F944, 0x1F52A, 0x1F3FA, 0x1F30D, 0x1F30E, 0x1F30F, 0x1F310, 0x1F5FA, 0x1F5FE,
                                0x1F3D4, 0x26F0, 0x1F30B, 0x1F5FB, 0x1F3D5, 0x1F3D6, 0x1F3DC, 0x1F3DD, 0x1F3DE,
                                0x1F3DF, 0x1F3DB, 0x1F3D7, 0x1F3D8, 0x1F3DA, 0x1F3E0, 0x1F3E1, 0x1F3E2, 0x1F3E3,
                                0x1F3E4, 0x1F3E5, 0x1F3E6, 0x1F3E8, 0x1F3E9, 0x1F3EA, 0x1F3EB, 0x1F3EC, 0x1F3ED, 0x1F3EF,
                                0x1F3F0, 0x1F492, 0x1F5FC, 0x1F5FD, 0x26EA, 0x1F54C, 0x1F54D, 0x26E9, 0x1F54B, 0x26F2,
                                0x26FA, 0x1F301, 0x1F303, 0x1F3D9, 0x1F304, 0x1F305, 0x1F306, 0x1F307, 0x1F309, 0x2668,
                                0x1F30C, 0x1F3A0, 0x1F3A1, 0x1F3A2, 0x1F488, 0x1F3AA, 0x1F682, 0x1F683, 0x1F684, 0x1F685,
                                0x1F686, 0x1F687, 0x1F688, 0x1F689, 0x1F68A, 0x1F69D, 0x1F69E, 0x1F68B, 0x1F68C, 0x1F68D,
                                0x1F68E, 0x1F690, 0x1F691, 0x1F692, 0x1F693, 0x1F694, 0x1F695, 0x1F696, 0x1F697, 0x1F698,
                                0x1F699, 0x1F69A, 0x1F69B, 0x1F69C, 0x1F6B2, 0x1F6F4, 0x1F6F5, 0x1F68F, 0x1F6E3,
                                0x1F6E4, 0x1F6E2, 0x26FD, 0x1F6A8, 0x1F6A5, 0x1F6A6, 0x1F6D1, 0x1F6A7, 0x2693, 0x26F5,
                                0x1F6F6, 0x1F6A4, 0x1F6F3, 0x26F4, 0x1F6E5, 0x1F6A2, 0x2708, 0x1F6E9, 0x1F6EB, 0x1F6EC,
                                0x1F4BA, 0x1F681, 0x1F69F, 0x1F6A0, 0x1F6A1, 0x1F6F0, 0x1F680, 0x1F6F8, 0x1F6CE,
                                0x231B, 0x23F3, 0x231A, 0x23F0, 0x23F1, 0x23F2, 0x1F570, 0x1F55B, 0x1F567, 0x1F550,
                                0x1F55C, 0x1F551, 0x1F55D, 0x1F552, 0x1F55E, 0x1F553, 0x1F55F, 0x1F554, 0x1F560, 0x1F555,
                                0x1F561, 0x1F556, 0x1F562, 0x1F557, 0x1F563, 0x1F558, 0x1F564, 0x1F559, 0x1F565, 0x1F55A,
                                0x1F566, 0x1F311, 0x1F312, 0x1F313, 0x1F314, 0x1F315, 0x1F316, 0x1F317, 0x1F318, 0x1F319,
                                0x1F31A, 0x1F31B, 0x1F31C, 0x1F321, 0x2600, 0x1F31D, 0x1F31E, 0x2B50, 0x1F31F, 0x1F320,
                                0x2601, 0x26C5, 0x26C8, 0x1F324, 0x1F325, 0x1F326, 0x1F327, 0x1F328, 0x1F329, 0x1F32A,
                                0x1F32B, 0x1F32C, 0x1F300, 0x1F308, 0x1F302, 0x2602, 0x2614, 0x26F1, 0x26A1, 0x2744,
                                0x2603, 0x26C4, 0x2604, 0x1F525, 0x1F4A7, 0x1F30A, 0x1F383, 0x1F384, 0x1F386, 0x1F387,
                                0x2728, 0x1F388, 0x1F389, 0x1F38A, 0x1F38B, 0x1F38D, 0x1F38E, 0x1F38F, 0x1F390,
                                0x1F391, 0x1F380, 0x1F381, 0x1F397, 0x1F39F, 0x1F3AB, 0x1F396, 0x1F3C6, 0x1F3C5,
                                0x1F947, 0x1F948, 0x1F949, 0x26BD, 0x26BE, 0x1F94E, 0x1F3C0, 0x1F3D0, 0x1F3C8, 0x1F3C9,
                                0x1F3BE, 0x1F3B3, 0x1F3CF, 0x1F3D1, 0x1F3D2, 0x1F3D3, 0x1F3F8, 0x1F94A,
                                0x1F945, 0x26F3, 0x26F8, 0x1F3A3, 0x1F3BD, 0x1F3BF, 0x1F6F7, 0x1F94C, 0x1F3AF,
                                0x1F3B1, 0x1F52E, 0x1F3AE, 0x1F579, 0x1F3B0, 0x1F3B2, 0x2660,
                                0x2665, 0x2666, 0x2663, 0x265F, 0x1F0CF, 0x1F004, 0x1F3B4, 0x1F3AD, 0x1F5BC, 0x1F3A8,
                                0x1F507, 0x1F508, 0x1F509, 0x1F50A, 0x1F4E2, 0x1F4E3, 0x1F4EF, 0x1F514,
                                0x1F515, 0x1F3BC, 0x1F3B5, 0x1F3B6, 0x1F399, 0x1F39A, 0x1F39B, 0x1F3A4, 0x1F3A7, 0x1F4FB,
                                0x1F3B7, 0x1F3B8, 0x1F3B9, 0x1F3BA, 0x1F3BB, 0x1F941, 0x1F4F1, 0x1F4F2, 0x260E, 0x1F4DE,
                                0x1F4DF, 0x1F4E0, 0x1F50B, 0x1F50C, 0x1F4BB, 0x1F5A5, 0x1F5A8, 0x2328, 0x1F5B1, 0x1F5B2,
                                0x1F4BD, 0x1F4BE, 0x1F4BF, 0x1F4C0, 0x1F3A5, 0x1F39E, 0x1F4FD, 0x1F3AC, 0x1F4FA,
                                0x1F4F7, 0x1F4F8, 0x1F4F9, 0x1F4FC, 0x1F50D, 0x1F50E, 0x1F56F, 0x1F4A1, 0x1F526, 0x1F3EE,
                                0x1F4D4, 0x1F4D5, 0x1F4D6, 0x1F4D7, 0x1F4D8, 0x1F4D9, 0x1F4DA, 0x1F4D3, 0x1F4D2, 0x1F4C3,
                                0x1F4DC, 0x1F4C4, 0x1F4F0, 0x1F5DE, 0x1F4D1, 0x1F516, 0x1F3F7, 0x1F4B0, 0x1F4B4, 0x1F4B5,
                                0x1F4B6, 0x1F4B7, 0x1F4B8, 0x1F4B3, 0x1F4B9, 0x1F4B1, 0x1F4B2, 0x2709, 0x1F4E7,
                                0x1F4E8, 0x1F4E9, 0x1F4E4, 0x1F4E5, 0x1F4E6, 0x1F4EB, 0x1F4EA, 0x1F4EC, 0x1F4ED, 0x1F4EE,
                                0x1F5F3, 0x270F, 0x2712, 0x1F58B, 0x1F58A, 0x1F58C, 0x1F58D, 0x1F4DD, 0x1F4BC, 0x1F4C1,
                                0x1F4C2, 0x1F5C2, 0x1F4C5, 0x1F4C6, 0x1F5D2, 0x1F5D3, 0x1F4C7, 0x1F4C8, 0x1F4C9, 0x1F4CA,
                                0x1F4CB, 0x1F4CC, 0x1F4CD, 0x1F4CE, 0x1F587, 0x1F4CF, 0x1F4D0, 0x2702, 0x1F5C3, 0x1F5C4,
                                0x1F5D1, 0x1F512, 0x1F513, 0x1F50F, 0x1F510, 0x1F511, 0x1F5DD, 0x1F528, 0x26CF, 0x2692,
                                0x1F6E0, 0x1F5E1, 0x2694, 0x1F52B, 0x1F3F9, 0x1F6E1, 0x1F527, 0x1F529, 0x2699, 0x1F5DC,
                                0x2696, 0x1F517, 0x26D3, 0x2697, 0x1F52C,
                                0x1F52D, 0x1F4E1, 0x1F489, 0x1F48A, 0x1F6AA, 0x1F6CF, 0x1F6CB, 0x1F6BD, 0x1F6BF, 0x1F6C1,
                                0x1F6D2, 0x1F6AC,
                                0x26B0, 0x26B1, 0x1F5FF, 0x1F3E7, 0x1F6AE, 0x1F6B0, 0x267F, 0x1F6B9, 0x1F6BA, 0x1F6BB,
                                0x1F6BC, 0x1F6BE, 0x1F6C2, 0x1F6C3, 0x1F6C4, 0x1F6C5, 0x26A0, 0x1F6B8, 0x26D4, 0x1F6AB,
                                0x1F6B3, 0x1F6AD, 0x1F6AF, 0x1F6B1, 0x1F6B7, 0x1F4F5, 0x1F51E, 0x2622, 0x2623, 0x2B06,
                                0x2197, 0x27A1, 0x2198, 0x2B07, 0x2199, 0x2B05, 0x2196, 0x2195, 0x2194, 0x21A9,
                                0x21AA, 0x2934, 0x2935, 0x1F503, 0x1F504, 0x1F519, 0x1F51A, 0x1F51B, 0x1F51C, 0x1F51D
                            ];

                            emojis.map(function (item) {
                                var emojiLi = document.createElement("li");
                                emojiLi.style.display = "inline-block";
                                emojiLi.style.margin = "5px";

                                var emojiLink = document.createElement("a");
                                emojiLink.style.textDecoration = "none";
                                emojiLink.style.margin = "5px";
                                emojiLink.style.position = "initial";
                                emojiLink.style.fontSize = "20px";
                                emojiLink.setAttribute("href", "javascript:void(0)");
                                emojiLink.innerHTML = String.fromCodePoint(item);
                                emojiLink.onmousedown = clickLink;

                                emojiList.appendChild(emojiLink);
                            });

                            emojiPicker.appendChild(emojiList);
                            emojiContainer.appendChild(emojiPicker);
                        }
                    }]);

                    return EmojiPicker;
                }();

                module.exports = EmojiPicker;
            });

        }, {}]
    }, {}, [1])(1)
});