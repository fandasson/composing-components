import "./index.css";

import { Layout } from "@/components/Layout.jsx";
import { Login } from "@/pages/Login.jsx";
import { UserDetails } from "@/samples/low-cohesion/UserDetails.jsx";
import { AuthProvider } from "@/state/AuthContext.jsx";

function App() {
    return (
        <AuthProvider>
            <Layout>
                <Login />
            </Layout>
        </AuthProvider>
    );
}

export default App;
