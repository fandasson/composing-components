import { useEffect, useState } from "react";

const fetchUser = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: "John Doe", email: "john@example.com" });
        }, 2000);
    });
};

export const useAuthUser = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (!user) {
            fetchUser().then((user) => {
                setUser(user);
            });
        }
    }, [user]);

    return {
        user,
    };
};
