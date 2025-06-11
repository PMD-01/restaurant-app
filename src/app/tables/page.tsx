"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Plus } from 'lucide-react';
import { useEffect } from "react";

export default function TablesPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const user = session?.user;

  useEffect(() => {
    if (status === "loading") return;
    if (!user || (user.role !== "ADMIN" && user.role !== "WAITER")) {
      router.replace("/access-denied");
    }
  }, [user, status, router]);

  if (!user || (user.role !== "ADMIN" && user.role !== "WAITER")) {
    return null;
  }

  const tables = [
    { id: 1, number: 1, capacity: 4, status: 'AVAILABLE' },
    { id: 2, number: 2, capacity: 2, status: 'OCCUPIED' },
    { id: 3, number: 3, capacity: 6, status: 'RESERVED' },
    { id: 4, number: 4, capacity: 4, status: 'AVAILABLE' },
    { id: 5, number: 5, capacity: 8, status: 'MAINTENANCE' },
    { id: 6, number: 6, capacity: 4, status: 'AVAILABLE' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'AVAILABLE':
        return 'bg-green-100 text-green-800';
      case 'OCCUPIED':
        return 'bg-red-100 text-red-800';
      case 'RESERVED':
        return 'bg-yellow-100 text-yellow-800';
      case 'MAINTENANCE':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'AVAILABLE':
        return 'Disponible';
      case 'OCCUPIED':
        return 'Occupée';
      case 'RESERVED':
        return 'Réservée';
      case 'MAINTENANCE':
        return 'Maintenance';
      default:
        return status;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Gestion des Tables</h1>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
          <Plus className="h-5 w-5 mr-2" />
          Nouvelle Table
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tables.map((table) => (
          <div
            key={table.id}
            className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow duration-200"
          >
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">
                  Table {table.number}
                </h3>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                    table.status
                  )}`}
                >
                  {getStatusText(table.status)}
                </span>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-500">
                  Capacité: {table.capacity} personnes
                </p>
              </div>
              <div className="mt-6 flex space-x-3">
                <button className="flex-1 inline-flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  Détails
                </button>
                <button className="flex-1 inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  Commander
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 