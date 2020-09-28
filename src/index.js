
exports.min = function min(array) {
    if (!Array.isArray(array)) return 0;
    if (array.length > 0 || array === []) {
        let resultMin = array[0];
        for (let i = 0; i < array.length; i++) {
            if (array[i] < resultMin) {
                resultMin = array[i];
            }
        }
        return resultMin;
    }
    return 0;
}

exports.max = function max(array) {
    if (!Array.isArray(array)) return 0;
    if (array.length > 0 || array === []) {
        let resultMin = array[0];
        for (let i = 0; i < array.length; i++) {
            if (array[i] > resultMin) {
                resultMin = array[i];
            }
        }
        return resultMin;
    }
    return 0;
}

exports.avg = function avg(array) {
    if (!Array.isArray(array)) return 0;
    if (array.length > 0 || array === []) {
        let resultSum = 0;
        for (let i = 0; i < array.length; i++) {
            resultSum += array[i];
        }
        let resultAvg = resultSum / array.length;
        return resultAvg;
    }
    return 0;
}
