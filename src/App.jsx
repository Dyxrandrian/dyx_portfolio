import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <h1 className="text-4xl font-bold text-white mb-4">
        👋 Bienvenue sur mon Portfolio
      </h1>
      <p className="text-lg text-white/80">
        Fait avec <span className="font-semibold">React + TailwindCSS</span>
      </p>
      <button className="mt-6 px-6 py-3 bg-white text-indigo-600 font-medium rounded-2xl shadow-lg hover:scale-105 transition">
        Voir mes projets 🚀
      </button>
    </div>
  );
}