"use client";
import Spinner from "@/components/ui/spinner";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Welcome() {
  const router = useRouter();
  const { logout } = useAuth();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.replace("/login");
    } else {
      setLoading(false);
    }
  }, [router]);

  const handleLogout = () => {
    logout();
  };

  if (loading) {
    <Spinner />;
    return null;
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white text-gray-800 px-4">
      <h1 className="text-3xl font-bold mb-4">Benvenuto!</h1>

      <p className="mb-6 max-w-md text-center text-gray-600">
        Ciao sono Umberto Novellis, appassionato di programmazione, in
        particolare di React e Java. Sono molto curioso e desidero imparare ogni
        dettaglio per diventare un programmatore esperto. Qui sotto puoi vedere
        il mio portfolio con i miei progetti migliori.
      </p>

      <a
        href="https://www.umbertonovellis.dev/"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-8 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Vai al mio portfolio
      </a>

      <button
        onClick={handleLogout}
        className="px-6 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition"
      >
        Logout
      </button>
    </div>
  );
}
