const jwt = require('jsonwebtoken');

const genToken = user => {
    const payload = {
        subject: user.id,
        email: user.email
    }

    const options = {
        expiresIn: '1h'
    }

    const secret = process.env.SECRET;

    return jwt.sign(payload, secret, options);
}

module.exports = {
    genToken
}