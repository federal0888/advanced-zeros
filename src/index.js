module.exports = function getZerosCount(number, base) {
    const length = Math.round(Math.sqrt(base));
    var dataArr = [],
        i = 2,
        j = 0;
    while (i <= length && i < base) {
        var exp = 1;
        if (base % i === 0) {
            dataArr[j] = [];
            while (base % i === 0) {
                dataArr[j][0] = i;
                dataArr[j][1] = exp;
                base = base / i;
                exp++;
            }
            j++;
        }
        i++;
    }
    if (base >= i) {
        dataArr[j] = [];
        dataArr[j][0] = base;
        dataArr[j][1] = 1;
    }
    for (var i = 0, l = dataArr.length; i < l; i++) {
        dataArr[i][2] = 0;
        for (var j = number; j >= dataArr[i][0];) {
            if ((j % dataArr[i][0]) !== 0) {
                j--;
                continue;
            }
            j = j / dataArr[i][0];
            dataArr[i][2] += j;
        }
    }
    var zerosCount = dataArr[0][2] / dataArr[0][1];
    for (var i = 0, l = dataArr.length; i < l; i++) {
        var compare = dataArr[i][2] / dataArr[i][1];
        if (compare < zerosCount) {
            zerosCount = compare;
        }
    }
    return Math.floor(zerosCount);
}