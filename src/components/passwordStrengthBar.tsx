import React from "react";

interface PasswordStrengthBarProps {
  password: string;
  error: string;
}

const PasswordStrengthBar: React.FC<PasswordStrengthBarProps> = ({
  password,
  error,
}) => {
  const passwordStrength = (pwd: string) => {
    let score = 0;
    if (pwd.length >= 8) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/\d/.test(pwd)) score++;

    let message = "";
    if (score < 3) message = error;
    else message = "strong password!";

    return { score, message };
  };

  const { score, message } = passwordStrength(password);

  // Calcolo percentuale larghezza barra in base a score

  const widthPercent = score === 3 ? 100 : +(score * 33.333).toFixed(3);

  // Colori della barra
  const colors = ["#dc2626", "#f97316", "#22c55e"];

  return (
    <div className="flex items-center space-x-3 w-full max-w-md">
      <div className=" w-3/4 h-2 rounded bg-gray-300 overflow-hidden">
        <div
          className="h-2 rounded transition-all duration-300"
          style={{
            width: `${widthPercent}%`,
            backgroundColor: colors[score - 1] || "transparent",
          }}
        />
      </div>
      {password.length > 0 && (
        <p className="text-xs text-right text-gray-700 min-w-[120px]">
          {message}
        </p>
      )}
    </div>
  );
};

export default PasswordStrengthBar;
