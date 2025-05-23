"use client";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Benvenuto!</h1>

      <button
        onClick={handleLogout}
        className="px-6 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition"
      >
        Logout
      </button>
    </div>
  );
}
