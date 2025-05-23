import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 py-10 gap-10">
      <header className="text-center space-y-2">
        <h1 className="text-3xl font-bold sm:text-4xl">Concorso Nibol</h1>
        <p className=" text-sm sm:text-base">
          Questo progetto partecipa al concorso per entrare in{" "}
          <strong>Nibol</strong>.
        </p>
        <p className="text-sm sm:text-base">
          Spero davvero di essere selezionato 🤞
        </p>
      </header>

      <div className="flex gap-4 flex-wrap justify-center">
        <Link
          href="/login"
          className="border border-border hover:bg-muted transition-colors px-5 py-2 rounded-full text-sm font-medium"
        >
          Sign In
        </Link>
        <Link
          href="/signup"
          className="bg-orange-600 text-background hover:bg-orange-700 transition-colors px-5 py-2 rounded-full text-sm font-medium"
        >
          Sign Up
        </Link>
      </div>

      <footer className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
        <a
          href="https://www.umbertonovellis.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Portfolio
        </a>
        <a
          href="https://github.com/novellis98"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/umberto-novellis/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          LinkedIn
        </a>
        <a href="mailto:umberto.novellis@gmail.com" className="hover:underline">
          Email
        </a>
      </footer>
    </div>
  );
}
