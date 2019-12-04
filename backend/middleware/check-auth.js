const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = 1;
    const decoded = jwt.verify(
      req.headers.authorization.split(' ')[1],
      'secret'
    );
    req.userData = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Auth failed'
    });
  }
};
