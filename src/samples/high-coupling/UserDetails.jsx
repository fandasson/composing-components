import React, { useState, useEffect } from "react";
import axios from "axios";

export const UserDetails = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("https://api.example.com/user/1")
            .then((response) => {
                setUser(response.data);
                setLoading(false);
            })
            .catch((error) => console.error("Error fetching user data:", error));
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>User Details</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            {/* More user details here */}
        </div>
    );
};
