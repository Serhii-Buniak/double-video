"use strict";
String.prototype.insert = function (index, value) {
    return this.substring(0, index) + value + this.substring(index);
};
