import axios from 'axios'

const API_URL = "http://localhost:4000/waitlist"; 

// Add a new waitlist entry
export const addToWaitlist = async (email) => {
    try {
        const response = await axios.post(API_URL, { email })
        return response.data
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to add to waitlist')
    }
};

// Get all waitlist entries
export const getWaitlist = async () => {
    try {
        const response = await axios.get(API_URL)
        return response.data
    } catch (error) {
        throw new Error(
          error.response?.data?.message || "Failed to fetch waitlists"
        );
    }
}

//  Get a specific waitlist entry by ID
export const getWaitlistEntry = async (id) => {
      try {
            const response = await axios.get(`${API_URL}/${id}`);
            return response.data;
      } catch (error) {
            throw new Error(
            error.response?.data?.message || "Failed to fetch waitlist"
        );
      }
}


//  Remove a specific waitlist entry by ID
export const removeWaitlistEntry = async (id) => {
      try {
            const response = await axios.delete(`${API_URL}/${id}`);
            return response.data;
      } catch (error) {
            throw new Error(
            error.response?.data?.message || "Failed to delete waitlist"
        );
      }
}