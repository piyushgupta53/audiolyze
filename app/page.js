"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  const handleSignIn = () => {
    // Redirect user to a specific URL after successful Spotify authentication
    signIn("spotify", { callbackUrl: "/dashboard" });
  };

  return (
    <div className="flex flex-col items-center text-center h-screen w-full bg-gradient-radial from-fuchsia-300 to-lime-300">
      <div className=" mt-56 ">
        <div className="text-6xl text-black font-mono">
          <h1>Audiolyze</h1>
        </div>
        <div className="text-3xl text-black font-mono mt-8">
          <p>See what your music says about you</p>
        </div>
      </div>
      <button
        onClick={handleSignIn}
        className="mt-16 bg-gradient-to-r from-indigo-300 to-purple-300 text-clip px-3 py-3 rounded-lg text-black"
      >
        Connect Spotify
      </button>
      <div className="mt-8">
        <p className=" text-sm font-mono text-gray-500 ">
          We don't store your personal data
        </p>
      </div>
      <footer className="text-black text-sm absolute bottom-8">
        Made by{" "}
        <a className="text-indigo-400 " href="https://twitter.com/pleasepushh">
          @pleasepushh
        </a>
      </footer>
    </div>
  );
}
