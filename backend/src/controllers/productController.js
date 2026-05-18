export const getAllProducts = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "All products"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const getProductById = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Product detail"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};