const jwt = require("jsonwebtoken");
const tokenKey = "DFJdjfbjw356weg324erbgjsdhfdhdfbSAJHIHihIOHIUHLIJIOOIoihuiHIOHKJKIFFVnjkhuU";

const Token = {
    /**
     *   Token加密方法
     * @param {*} data  加密在token上的数据
     * @param {*} time   Token的过期时间，单位ms
     */
    encrypt: function (data) {
        return jwt.sign(data, tokenKey, { expiresIn: 3600 })
    },
    /**
     *  解密方法
     * @param {*} token  加密之后的Token
     *  reurns返回对象 {{
     *       token：boolean  （true表示Token合法）
     *       data：解密出来的数据或者是错误信息
     * }}
     */
    decrypt: function (token) {
        try {
            let data = jwt.verify(token, tokenKey);
            return {
                token: true,
                data: data
            }
        } catch (error) {
            return {
                token: false,
                data: error
            }
        }
    }
}

module.exports = Token;