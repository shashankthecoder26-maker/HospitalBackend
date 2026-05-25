module.exports = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      console.log(`Access denied for role: ${req.user.role}`);
      return res.status(403).json({
        success: false,
        message: "Access denied",
      });
    }

    next();
  };
};