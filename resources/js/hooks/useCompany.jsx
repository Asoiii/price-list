import { useState, useEffect } from "react";
import { getCompany, updateCompany } from "@/service/companyService";

export const useCompany = () => {
    const [company, setCompany] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchCompany = async () => {
        setLoading(true);
        try {
            const response = await getCompany();
            setCompany(response.data);
            setError(null);
        } catch (err) {
            setError("Failed to fetch company data");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const saveCompany = async (companyData) => {
        setLoading(true);
        try {
            const response = await updateCompany(companyData);
            setCompany(response.data);
            setError(null);
            return { success: true, message: response.message };
        } catch (err) {
            setError("Failed to update company data");
            console.error(err);
            return {
                success: false,
                message: err.response?.data?.message || "Unknown error",
            };
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCompany();
    }, []);

    return {
        company,
        loading,
        error,
        fetchCompany,
        saveCompany,
    };
};
