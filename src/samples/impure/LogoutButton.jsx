import { useEffect, useState } from "react";

export const LogoutButton = () => {
    const [user, setUser] = useState(null);

    const fetchUser = async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ name: "John Doe", email: "john@example.com" });
            }, 2000);
        });
    };

    useEffect(() => {
        if (!user) {
            fetchUser().then((data) => setUser(data));
        }
    }, [user]);

    return (
        <button
            onClick={() => console.log("Logout user")}
            className={`flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${className}`}
        >
            Goodbye, {user.name}
        </button>
    );
};
