const jwt = require('jsonwebtoken')


const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;

    if (!authHeader?.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(
        token,
        process.env.JWT_SECRET,
        (err, decodedToken) => {
            if (err) return res.status(401).json({ error: 'Authentication Failed!' });
            req.user = decodedToken;
            next();
        }
    );
};


module.exports = verifyJWT