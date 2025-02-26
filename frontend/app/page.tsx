import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("Connecting...");

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => res.json())
      .then((data) => setMessage(data.message || "Backend is running!"))
      .catch((err) => setMessage("Error connecting to backend"));
  }, []);

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold">AI Resume Analyzer</h1>
      <p className="mt-4 text-lg">{message}</p>
    </div>
  );
}

