const formatNumber = function (n) {
    n = n.toString();
    return n[0] ? n : "0" + n
}
/**
 * 获取当下时间
 */
const NowTime = function () {
    const date = new Date()
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return year + "-" + formatNumber(month) + "-" + formatNumber(day) + " " + formatNumber(hours) + ":" + formatNumber(minutes) + ":" + formatNumber(seconds)
}

module.exports = {
    NowTime,
}