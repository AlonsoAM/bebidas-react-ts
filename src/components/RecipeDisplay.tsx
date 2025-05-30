import { useState } from 'react';

interface RecipeDisplayProps {
  recipe: string;
  isGenerating: boolean;
}

export default function RecipeDisplay({ recipe, isGenerating }: RecipeDisplayProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!recipe) return;

    navigator.clipboard.writeText(recipe)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        console.error('Error al copiar:', err);
      });
  };

  // Si no hay receta y no está generando, no mostrar nada
  if (!recipe && !isGenerating) return null;

  return (
    <div className="transition-all duration-500 ease-in-out">
      <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 md:p-8 my-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-orange-100 rounded-bl-full opacity-50 transform -translate-y-6 translate-x-6"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-100 rounded-tr-full opacity-50 transform translate-y-6 -translate-x-6"></div>

        <h3 className="text-2xl font-bold text-orange-600 mb-4 relative z-10">
          {isGenerating ? 'Preparando tu receta...' : 'Tu Receta'}
        </h3>

        <div className="relative z-10 prose prose-orange lg:prose-lg max-w-none">
          <div className={`whitespace-pre-wrap bg-white p-4 rounded-md border border-gray-100 shadow-sm min-h-[150px] ${isGenerating && !recipe ? 'animate-pulse bg-gray-50' : ''}`}>
            {recipe}
          </div>
        </div>

        {recipe && (
          <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
            <button 
              className={`px-4 py-2 ${copied ? 'bg-green-500 hover:bg-green-600' : 'bg-orange-500 hover:bg-orange-600'} text-white rounded-md transition-all duration-300 text-sm font-bold flex items-center gap-2`}
              onClick={handleCopy}
            >
              {copied ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 animate-pulse">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <span className="animate-pulse">¡Copiado!</span>
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                    </svg>
                  Copiar
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
