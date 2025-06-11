"use client";
import Link from 'next/link';
import { Home, Utensils, Users, Settings, LogOut } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';

export function Navbar() {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-800">
                Restaurant Manager
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
              >
                <Home className="h-5 w-5 mr-2" />
                Accueil
              </Link>
              <Link
                href="/tables"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                <Users className="h-5 w-5 mr-2" />
                Tables
              </Link>
              <Link
                href="/menu"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                <Utensils className="h-5 w-5 mr-2" />
                Menu
              </Link>
              <Link
                href="/settings"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                <Settings className="h-5 w-5 mr-2" />
                Paramètres
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {user && (
              <div className="flex flex-col items-end text-right">
                <span className="text-sm font-semibold text-gray-700">{user.name}</span>
                <span className="text-xs text-gray-500 capitalize">{user.role?.toLowerCase()}</span>
              </div>
            )}
            <button
              onClick={() => signOut({ callbackUrl: '/login' })}
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
            >
              <LogOut className="h-5 w-5 mr-2" />
              Déconnexion
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 