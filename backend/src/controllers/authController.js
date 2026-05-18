exports.register = async (req, res) => {
  try {
    res.status(201).json({
      success: true,
      message: "Register successful"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.login = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Login successful"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.getProfile = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "User profile"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};