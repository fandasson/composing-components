import React, { useState, useEffect } from "react";

export const UserDetails = () => {
    const [timer, setTimer] = useState(0);
    const [userData, setUserData] = useState({});
    const [inputValue, setInputValue] = useState("");

    // Timer logic
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prevTimer) => prevTimer + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // User data fetch (mocked)
    useEffect(() => {
        fetchUserData().then((data) => setUserData(data));
    }, []);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    // ... imagine more unrelated logic here ...

    return (
        <div>
            <h1>Mixed Responsibilities</h1>
            <p>Elapsed time: {timer}s</p>
            <p>User name: {userData.name}</p>
            <input type="text" value={inputValue} onChange={handleInputChange} />
        </div>
    );
};

// Mock fetch function
function fetchUserData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: "John Doe", email: "john@example.com" });
        }, 2000);
    });
}
