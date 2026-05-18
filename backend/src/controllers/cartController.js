export const getCart = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "User cart"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const addToCart = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Product added to cart"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const updateCartItem = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Cart updated"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const removeFromCart = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Item removed"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const clearCart = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Cart cleared"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};