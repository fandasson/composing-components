import { FormControl } from "@/components/form/FormControl";
import { Input, PasswordInput } from "@/components/form/Input";
import { Button } from "@/components/Button/Button.jsx";
import { Dialog } from "@/components/Dialog";
import { useState } from "react";
import { Logo } from "@/components/ui/Logo.jsx";

export const Login = () => {
    const [resetPasswordDialogOpen, setResetPasswordDialogOpen] = useState(false);
    const [authUser, setAuthUser] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async (email, password) => {
        console.log(`Calling API using email and password: ${email}, ${password}`);
        const response = await new Promise((resolve) => {
            setTimeout(() => {
                resolve({ name: "John Doe", email: "john@example.com" });
            }, 2000);
        });
        setAuthUser(response);
    };

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 w-72">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <Logo />
            </div>

            <Dialog
                open={resetPasswordDialogOpen}
                onCancel={() => setResetPasswordDialogOpen(false)}
                onConfirm={() => {
                    setResetPasswordDialogOpen(false);
                    alert("Password reset");
                }}
                confirmLabel={"Reset password"}
            >
                <Dialog.Title>Reset your password</Dialog.Title>
                <p className="text-sm text-gray-500">
                    Do not worry, it happens to everyone. Just fill your e-mail to reset your password.
                </p>
                <FormControl.Root className={"mt-3"}>
                    <FormControl.Label htmlFor="email">Email address</FormControl.Label>
                    <FormControl.Input>
                        <Input name="email" type="email" value={email} required />
                    </FormControl.Input>
                </FormControl.Root>
            </Dialog>

            {authUser && (
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Welcome {authUser.name}
                </h2>
            )}

            {!authUser && (
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <FormControl.Root>
                            <FormControl.Label htmlFor="email">Email address</FormControl.Label>
                            <FormControl.Input>
                                <Input
                                    name="email"
                                    type="email"
                                    value={email}
                                    autoComplete={"username"}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </FormControl.Input>
                        </FormControl.Root>

                        <FormControl.Root>
                            <div className="flex items-center justify-between">
                                <FormControl.Label htmlFor="password">Password</FormControl.Label>
                                <button
                                    onClick={() => setResetPasswordDialogOpen(true)}
                                    className="font-semibold text-indigo-600 hover:text-indigo-500 text-sm"
                                >
                                    Forgot password?
                                </button>
                            </div>
                            <FormControl.Input>
                                <PasswordInput
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </FormControl.Input>
                        </FormControl.Root>

                        <Button
                            className={"w-full text-white"}
                            onClick={(e) => {
                                e.preventDefault();
                                onSubmit(email, password);
                            }}
                        >
                            Sign in
                        </Button>
                    </form>
                </div>
            )}
        </div>
    );
};
