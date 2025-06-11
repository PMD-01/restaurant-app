"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Plus, Edit, Trash2 } from 'lucide-react';
import { useEffect } from "react";

export default function MenuPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const user = session?.user;

  useEffect(() => {
    if (status === "loading") return;
    if (!user || (user.role !== "ADMIN" && user.role !== "MANAGER")) {
      router.replace("/access-denied");
    }
  }, [user, status, router]);

  if (!user || (user.role !== "ADMIN" && user.role !== "MANAGER")) {
    return null;
  }

  const categories = [
    {
      id: 1,
      name: 'Entrées',
      items: [
        { id: 1, name: 'Salade César', price: 8.50, description: 'Laitue, poulet grillé, parmesan' },
        { id: 2, name: 'Soupe du jour', price: 6.50, description: 'Soupe maison' },
      ],
    },
    {
      id: 2,
      name: 'Plats principaux',
      items: [
        { id: 3, name: 'Steak frites', price: 24.50, description: 'Steak de bœuf, frites maison' },
        { id: 4, name: 'Poisson du jour', price: 22.50, description: 'Poisson frais, légumes de saison' },
      ],
    },
    {
      id: 3,
      name: 'Desserts',
      items: [
        { id: 5, name: 'Crème brûlée', price: 7.50, description: 'Crème brûlée maison' },
        { id: 6, name: 'Tarte Tatin', price: 8.50, description: 'Tarte Tatin traditionnelle' },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Gestion du Menu</h1>
        <div className="flex space-x-3">
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            <Plus className="h-5 w-5 mr-2" />
            Nouvelle Catégorie
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            <Plus className="h-5 w-5 mr-2" />
            Nouveau Plat
          </button>
        </div>
      </div>

      <div className="space-y-8">
        {categories.map((category) => (
          <div key={category.id} className="bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-medium text-gray-900">{category.name}</h2>
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-400 hover:text-gray-500">
                    <Edit className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-red-500">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
            <div className="px-6 py-4">
              <div className="space-y-4">
                {category.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                  >
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm font-medium text-gray-900">
                        {item.price.toFixed(2)} €
                      </span>
                      <div className="flex space-x-2">
                        <button className="p-1 text-gray-400 hover:text-gray-500">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-red-500">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 