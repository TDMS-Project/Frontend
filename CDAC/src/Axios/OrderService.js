import axios from "axios";

const API_URL = "http://localhost:8080/api/admin/orders"; // Replace with actual API endpoint

export const fetchOrders = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    return [];
  }
};

export const updateOrderStatus = async (orderId, newStatus) => {
  try {
    await axios.put(`${API_URL}/${orderId}`, { status: newStatus });
  } catch (error) {
    console.error("Error updating order status:", error);
  }
};
