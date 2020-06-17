const Constant = require("../constant/constant");
const dateFormat = require("dateformat");
const token = require("../controllers/token");
const pool = require("../config");
const Common = require("../controllers/common");
const utils = require("../utils");

//登录
function login(req, res) {
    //定义一个返回对象
    const resObj = Common.clone(Constant.DEFAULT_SUCCESS);
    //查询
    const sql = "SELECT * FROM admin  where username=" + JSON.stringify(req.query.username) + " limit 1";

    if (req.query.password) {
        pool.getConnection(function (err, connection) {
            if (err) {
                console.log("mysql链接失败")
                res.send(Constant.DEFAULT_ERROR)
            } else {
                console.log("mysql链接成功！")
                connection.query(sql, function (err, results) {
                    if (err) {
                        console.log(err)
                        res.send(Constant.DEFAULT_ERROR)
                    } else {
                        const result = JSON.parse(JSON.stringify(results));
                        //将admin的id保存在token
                        const adminInfo = {
                            id: result[0].id
                        };
                        //生成token
                        let tokens = token.encrypt(adminInfo);
                        resObj.data = {
                            id: result[0].id,
                            username: result[0].username,
                            name: result[0].name,
                            role: result[0].role,
                            token: tokens,
                            lastLoginAt: dateFormat(result[0].last_login_at, 'yyyy-mm-dd HH:MM:ss'),
                            createdAt: dateFormat(result[0].created_at, 'yyyy-mm-dd HH:MM:ss'),
                            updateAt: dateFormat(result[0].updated_at, 'yyyy-mm-dd HH:MM:ss'),
                        };
                        if (result[0].password != req.query.password) {
                            res.send(Constant.DEFAULT_PASSWORD_ERROR)
                        } else {
                            res.send(resObj)
                        }
                    }
                })
            }
        })
    } else {
        console.log(34)
        res.send(Constant.DEFAULT_PASSWORD_EMPTY_ERROR)

    }
}
/**
 * 用户列表
 * @param {*} req 
 * @param {*} res 
 */
function user(req, res) {
    //定义一个返回对象
    const resObj = Common.clone(Constant.DEFAULT_SUCCESS);
    //查询
    const sql = "SELECT * FROM admin  ";
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log("mysql链接失败");
            res.send(Constant.DEFAULT_ERROR)
        } else {
            console.log("mysql链接成功！")
            connection.query(sql, function (err, results) {
                if (err) {
                    res.send(Constant.DEFAULT_ERROR)
                } else {
                    const result = JSON.parse(JSON.stringify(results));
                    resObj.data = result;
                    res.send(resObj)
                }
            })
        }
    })
}
/**
 *  添加用户，向数据表插入数据
 */
function addUser(req, res) {
    const resObj = Common.clone(Constant.ADD_USER_SUCCESS);
    //mysql插入语句
    const sql = `insert  into admin(username,password,role,created_at,updated_at)  values(${req.query.username},${req.query.password},${req.query.role},${utils.NowTime},${utils.NowTime})`
    console.log(utils.NowTime());

    if (req.query.username && req.query.password && req.query.role) {

    } else {
        if (!req.query.username) {
            res.send(Constant.ADD_USER_ERROR_LACK_USERNAME)
        }
        if (!req.query.password) {
            res.send(Constant.ADD_USER_ERROR_LACK_PASSWORD)
        }
        if (!req.query.role) {
            res.send(Constant.ADD_USER_ERROR_LACK_ROLE);
        }

    }
}
module.exports = {
    user,
    login,
    addUser
}