"use strict";
// as 断言
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// img
var el = document.getElementById("why");
el.src = "";
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.studying = function () { };
    return Student;
}(Person));
function sayHello(p) {
    p.studying();
}
var stu = new Student();
sayHello(stu);
var msg = "hello";
var num = msg;
var num1 = msg;
// 非空断言
function printMessageLength(message) {
    console.log(message.length);
}
printMessageLength("wadawd");
printMessageLength("123456897132");
printMessageLength();
