import { useEffect, useState } from 'react';

interface GeneratingIndicatorProps {
  isGenerating: boolean;
}

export default function GeneratingIndicator({ isGenerating }: GeneratingIndicatorProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (isGenerating) {
      setShow(true);
    } else {
      // Retrasar la eliminación del componente para permitir la animación de salida
      timer = setTimeout(() => setShow(false), 500);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isGenerating]);

  if (!show && !isGenerating) return null;

  return (
    <div 
      className={`transition-all duration-500 ease-in-out transform ${isGenerating ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'} flex flex-col justify-center items-center py-8 gap-4`}
    >
      <div className="text-2xl md:text-3xl font-black text-orange-600 animate-pulse bg-white px-4 py-2 rounded-lg shadow-lg z-10">
        Generando...
      </div>
    </div>
  );
}
