'use client';

import { useState } from 'react';

export default function SignInSignUpPage() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-700 to-white text-white">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
        <div className="flex justify-around mb-6">
          <button
            onClick={() => setIsSignIn(true)}
            className={`px-4 py-2 rounded-lg font-semibold ${
              isSignIn ? 'bg-purple-600 text-white' : 'bg-white text-black'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsSignIn(false)}
            className={`px-4 py-2 rounded-lg font-semibold ${
              !isSignIn ? 'bg-purple-600 text-white' : 'bg-white text-black'
            }`}
          >
            Sign Up
          </button>
        </div>

        <form className="space-y-4">
          {!isSignIn && (
            <div>
              <label className="block text-sm">Full Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 rounded bg-white/80 text-black focus:outline-none"
              />
            </div>
          )}

          <div>
            <label className="block text-sm">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded bg-white/80 text-black focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded bg-white/80 text-black focus:outline-none"
            />
          </div>

          {!isSignIn && (
            <div>
              <label className="block text-sm">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full px-4 py-2 rounded bg-white/80 text-black focus:outline-none"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full py-2 rounded bg-purple-700 hover:bg-purple-800 transition duration-200 font-bold"
          >
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        {isSignIn ? (
          <p className="text-sm mt-4 text-center text-gray-300">
            Don’t have an account?{' '}
            <span
              className="text-purple-400 cursor-pointer hover:underline"
              onClick={() => setIsSignIn(false)}
            >
              Sign up here
            </span>
          </p>
        ) : (
          <p className="text-sm mt-4 text-center text-gray-300">
            Already have an account?{' '}
            <span
              className="text-purple-400 cursor-pointer hover:underline"
              onClick={() => setIsSignIn(true)}
            >
              Sign in here
            </span>
          </p>
        )}
      </div>
    </div>
  );
}
