const async = require("async");
const Constant = require("../constant/constant");
const exportObj = {
    clone,
    checkParams,
    autoFn
}

/**
 *  克隆方法、对象
 * @param {*} obj 
 */
function clone(obj) {
    return JSON.parse(JSON.stringify(obj))
}
/**
 *  校验参数全局方法
 * @param {*} params   请求参数
 * @param {*} checkArr   需要验证的参数
 * @param {*} cb   回调
 */
function checkParams(params, checkArr, cb) {
    let flag = true;
    checkArr.forEach(key => {
        if (!params[key]) {
            flag = false;
        }
    });

    if (flag) {
        cb(null);
    } else {
        cb(Constant.LACK)
    }
}
/**
 *   返回JSON格式数据
 * @param {*} tasks    执行当前的controller
 * @param {*} res   当前controller  response
 * @param {*} resobj    当前controller返回json对象
 */
function autoFn(tasks, res, resobj) {
    async.auto(tasks, function (err) {
        if (!!err) {
            res.json({
                code: err.code || Constant.DEFAULT_ERROR.code,
                msg: err.msg || JSON.stringify(err)
            });
        } else {
            res.json(resobj)
        }
    })
}


module.exports = exportObj;