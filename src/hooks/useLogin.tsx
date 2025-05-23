import { useCallback } from "react";
import { toast } from "sonner";

function useLogin(login: (email: string, password: string) => boolean) {
  // useCallback per evitare di ricreare la funzione ad ogni render
  const handleSubmit = useCallback(
    (e: React.FormEvent, email: string, password: string) => {
      e.preventDefault();

      if (email && password) {
        const success = login(email, password);

        if (success) {
          toast("Login successful", {
            duration: 1500,
            style: {
              backgroundColor: "#22c55e",
              color: "#ffffff",
              border: "1px solid #4ade80",
            },
          });
        } else {
          toast("Login failed", {
            duration: 1500,
            style: {
              backgroundColor: "#ef4444",
              color: "#ffffff",
              border: "1px solid #f87171",
            },
          });
        }
      }
    },
    [login]
  );

  return { handleSubmit };
}

export default useLogin;
