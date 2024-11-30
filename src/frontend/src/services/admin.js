const BASE_URL = "http://localhost:3000/admin";

const adminAPI = {
    getProfile: async (adminId) => {
        try {
            const response = await fetch(`${BASE_URL}/${adminId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch admin profile');
            }
            return await response.json();
        } catch (error) {
            console.error("Error during fetching profile:", error);
            return { success: false, message: "An error occurred" };
        }
    },

   

};
export default adminAPI;