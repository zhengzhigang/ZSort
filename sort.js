// 1.冒泡排序
function bubbleSort(arr) {
    var i = arr.length - 1;  // 初始时，最后位置保持不变
    while ( i> 0) {
        var pos = 0; //每趟开始时,无记录交换
        for (var j = 0; j < i; j++) {
            if (arr[j] > arr[j+1]) {
                pos = j; //记录交换的位置
                var tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
        i = pos; //为下一趟排序作准备
     }
     return arr;
}