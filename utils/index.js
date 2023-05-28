const jwt = require('jsonwebtoken')

const decodeJWT = (token) => {
  
    const user = jwt.decode(token , process.env.JWT_STRING)

    return user;

}


module.exports = {
    decodeJWT
}