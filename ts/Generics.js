function reverseList(list) {
    var reverseList = [];
    for (var i = list.length - 1; i >= 0; i--) {
        reverseList.push(list[i]);
    }
    return reverseList;
}
var pessoas = ["henrique", "araujo", "valenca", "santos"];
var numeros = [1, 2, 3, 4];
console.log(reverseList(pessoas));
console.log(reverseList(numeros));
var reverseListArrow = function (list) {
    var reverseList = [];
    for (var i = list.length - 1; i >= 0; i--) {
        reverseList.push(list[i]);
    }
    return reverseList;
};
console.log(reverseListArrow(pessoas));
console.log(reverseListArrow(numeros));
//# sourceMappingURL=Generics.js.map