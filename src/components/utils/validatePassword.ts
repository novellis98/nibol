export const validatePassword = (
  password: string
): { valid: boolean; message?: string } => {
  if (password.length < 8) {
    return {
      valid: false,
      message: "too easy my friend",
    };
  }

  if (!/[A-Z]/.test(password)) {
    return {
      valid: false,
      message: "a capital letter!",
    };
  }

  if (!/\d/.test(password)) {
    return {
      valid: false,
      message: "no numbers?",
    };
  }

  return { valid: true };
};
