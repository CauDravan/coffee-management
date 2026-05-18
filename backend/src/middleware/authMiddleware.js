export const protect = async (req, res, next) => {
  try {
    // fake auth for now
    req.user = {
      id: "123",
      role: "user"
    };

    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Unauthorized"
    });
  }
};