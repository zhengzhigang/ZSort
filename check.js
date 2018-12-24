// 查找最小值
// for循环
function min(arr) {
    var len = arr.length;
    var min = arr[0];
    for (var i = 1; i < len; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return arr;
}
// Math
var max = Math.min.apply(null, arr);

// 查找最大值
function max(arr) {
    var len = arr.length;
    var max = arr[0];
    for (var i = 1; i < len; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return arr;
}
// Marh
var max = Math.max.apply(null, arr);