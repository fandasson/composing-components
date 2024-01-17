import { Input } from "@/components/form/Input/Input.jsx";

export const PasswordInput = (props) => {
    return <Input {...props} type={"password"} autoComplete={"current-password"} />;
};
