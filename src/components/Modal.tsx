import {Dialog} from '@headlessui/react';
import {useAppStore} from "../stores/useAppStore.ts";

type Ingredients = {
  ingredient: string,
  measure: string
}

export default function Modal() {
  const modal = useAppStore(state => state.modal)
  const closeModal = useAppStore(state => state.closeModal)
  const selectedRecipe = useAppStore(state => state.selectedRecipe)

  // Función para obtener los ingredientes y cantidades
  const getIngredients = () => {
    if (!selectedRecipe) return [];

    const ingredients: Ingredients[] = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = selectedRecipe[`strIngredient${i}` as keyof typeof selectedRecipe] as string;
      const measure = selectedRecipe[`strMeasure${i}` as keyof typeof selectedRecipe] as string;

      if (ingredient && ingredient.trim()) {
        ingredients.push({
          ingredient: ingredient.trim(),
          measure: measure && measure.trim() ? measure.trim() : 'Al gusto'
        });
      }
    }
    return ingredients;
  };


  return (
    <Dialog
      open={modal}
      onClose={closeModal}
      className="relative z-10"
      transition
    >
      {/* Overlay semitransparente con animación */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ease-in-out data-[closed]:opacity-0"
        aria-hidden="true"
      />

      {/* Contenedor del diálogo */}
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Dialog.Panel
            className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl sm:my-8 sm:w-full sm:max-w-2xl sm:p-6 transition-all duration-500 ease-in-out data-[closed]:opacity-0 data-[closed]:scale-90 data-[closed]:translate-y-4"
            transition
          >
            {selectedRecipe ? (
              <>
                <Dialog.Title as="h3" className="text-gray-900 text-4xl font-extrabold my-5 text-center">
                  {selectedRecipe.strDrink}
                </Dialog.Title>
                <img src={selectedRecipe.strDrinkThumb}
                     alt={selectedRecipe.strDrink}
                     className={'mx-auto w-96'}
                />
                <Dialog.Title as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                  Ingredientes y Cantidades
                </Dialog.Title>
                <Dialog.Description>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                      <thead className="bg-gray-50">
                      <tr>
                        <th
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                          Ingrediente
                        </th>
                        <th
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                          Cantidad
                        </th>
                      </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                      {getIngredients().map((item, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {item.ingredient}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {item.measure}
                          </td>
                        </tr>
                      ))}
                      </tbody>
                    </table>
                  </div>
                </Dialog.Description>
                <Dialog.Title as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                  Instrucciones
                </Dialog.Title>
                <Dialog.Description>
                  <p className="text-gray-700 leading-relaxed">{selectedRecipe.strInstructionsES}</p>
                </Dialog.Description>
              </>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500 text-2xl">Bebida no tiene receta!</p>
              </div>
            )}
            <div className={' mt-5 flex justify-between gap-4'}>
              <button type={'button'}
                      onClick={closeModal}
                      className={'block w-full bg-gray-600 text-white uppercase font-extrabold text-lg rounded-md py-3 px-4 cursor-pointer hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-102'}>
                Cerrar
              </button>
              <button type={'button'}
                      onClick={()=> {}}
                      className={'block w-full bg-orange-600 text-white uppercase font-extrabold text-lg rounded-md py-3 px-4 cursor-pointer hover:bg-orange-700 transition-all duration-300 ease-in-out transform hover:scale-102'}>
                Agregar a Favoritos
              </button>

            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  )
}