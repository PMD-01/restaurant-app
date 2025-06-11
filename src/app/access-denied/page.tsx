export default function AccessDenied() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Accès refusé</h1>
        <p className="text-gray-700 mb-4">Vous n'avez pas les droits nécessaires pour accéder à cette page.</p>
        <a href="/" className="text-indigo-600 hover:underline">Retour à l'accueil</a>
      </div>
    </div>
  );
} 