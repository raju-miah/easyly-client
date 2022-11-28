import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/AuthProvider";
import LoadingSpinner from "../Pages/Shared/LoadingSpinner/LoadingSpinner";


const useAdmin = email => {
    const { loading } = useContext(AuthContext);
    const [isAdmin, setIsAdmin] = useState(false);

    const [isAdminLoading, setIsAdminLoading] = useState(true);

    useEffect(() => {
        if (email) {
            fetch(`https://easyly-server.vercel.app/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setIsAdmin(data?.isAdmin);
                    setIsAdminLoading(false);
                })
        }

    }, [email])

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }


    return [isAdmin, isAdminLoading]
}

export default useAdmin;