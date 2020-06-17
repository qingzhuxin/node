const obj = {
    DEFAULT_SUCCESS: {
        code: 200,
        msg: 'success'
    },
    DEFAULT_ERROR: {
        code: 188,
        msg: "系统错误"
    },
    DEFAULT_PASSWORD_ERROR: {
        code: 189,
        msg: "密码错误！请输入正确密码"
    },
    DEFAULT_PASSWORD_EMPTY_ERROR: {
        code: 190,
        msg: "密码不能为空，请输入密码"
    },
    LACK: {
        code: 199,
        msg: '缺少必要的参数'
    },
    TOKEN_ERROR: {
        code: 401,
        msg: "token验证失败"
    },
    LOGIN_ERROR: {
        code: 101,
        msg: "用户名或者密码错误"
    },
    ADMIN_NOT_EXSIT: {
        code: 102,
        msg: "管理员信息不存在"
    }
};

module.exports = obj;