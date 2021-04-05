import * as React from "react";
import AuthForm from "components/AuthForm";
import { useRegister } from "hooks/auth.hooks";

export default function RegisterScreen() {
  React.useEffect(() => {
    document.title = "Sign Up";
    return () => (document.title = "FEM Invoice");
  }, []);
  const mutation = useRegister();
  return <AuthForm type="register" mutation={mutation} />;
}
