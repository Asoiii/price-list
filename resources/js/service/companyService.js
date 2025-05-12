import axios from "axios";

// Base URL for API - Deteksi apakah menggunakan Create React App atau Vite
const API_URL = import.meta.env?.VITE_API_URL || "http://localhost:8000";

/**
 * Get company data
 * @returns {Promise}
 */
export const getCompany = async () => {
    try {
        console.log("Fetching company data from:", `${API_URL}/company`);
        const response = await axios.get(`${API_URL}/company`);
        return response.data;
    } catch (error) {
        console.error("Error fetching company data:", error);
        throw error;
    }
};

/**
 * Update company data
 * @param {Object} companyData
 * @returns {Promise}
 */
export const updateCompany = async (companyData) => {
    try {
        // Jika memiliki file upload, gunakan FormData
        const formData = new FormData();

        // Tambahkan semua field ke FormData
        Object.keys(companyData).forEach((key) => {
            if (key === "logo" && companyData[key] instanceof File) {
                formData.append(key, companyData[key]);
            } else if (
                key === "social_media_links" &&
                Array.isArray(companyData[key])
            ) {
                formData.append(key, JSON.stringify(companyData[key]));
            } else {
                formData.append(key, companyData[key]);
            }
        });

        console.log("Updating company data at:", `${API_URL}/company`);
        const response = await axios.post(`${API_URL}/company`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        return response.data;
    } catch (error) {
        console.error("Error updating company data:", error);
        throw error;
    }
};
