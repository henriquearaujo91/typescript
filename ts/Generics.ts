function reverseList<T>(list: Array<T>): Array<T> {
    let reverseList: T[] = [];
    for (let i = list.length - 1; i >= 0; i--) {
        reverseList.push(list[i]);
    }
    return reverseList;
}
let pessoas = ["henrique", "araujo", "valenca", "santos"];
const numeros = [1, 2, 3, 4];

console.log(reverseList(pessoas));
console.log(reverseList(numeros));

let reverseListArrow = <T>(list: Array<T>): Array<T> => {
    let reverseList: T[] = [];
    for (let i = list.length - 1; i >= 0; i--) {
        reverseList.push(list[i]);
    }
    return reverseList;
}

console.log(reverseListArrow(pessoas));
console.log(reverseListArrow(numeros));

