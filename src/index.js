exports.min = function min(array) {
    if (array === undefined || array == false) {
        return 0;
    } else {
        let arr = Math.min(...array);
        return arr;
    }
};

exports.max = function max(array) {
    if (array === undefined || array == false) {
        return 0;
    } else {
        let arr = Math.max(...array);
        return arr;
    }
};

exports.avg = function avg(array) {
    if (array === undefined || array == false) {
        return 0;
    } else {
        let sum = 0;
        let average = 0;
        for (i = 0; i < array.length; i++) {
            sum += array[i];
            average = sum / array.length;
        }
        return average;
    }
};
