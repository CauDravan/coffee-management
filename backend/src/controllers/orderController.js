export const createOrder = async (req, res) => {
  try {
    res.status(201).json({
      success: true,
      message: "Order created"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const getMyOrders = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "My orders"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const getOrderById = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Order detail"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};