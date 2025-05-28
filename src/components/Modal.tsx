import { Dialog } from '@headlessui/react';
import {useAppStore} from "../stores/useAppStore.ts";

export default function Modal() {
  const modal = useAppStore(state => state.modal)
  const closeModal = useAppStore(state => state.closeModal)

  return (
    <Dialog 
      open={modal}
      onClose={closeModal}
      className="relative z-10"
      transition
    >
      {/* Overlay semitransparente con animación */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-all duration-300 ease-in-out"
        aria-hidden="true"
        data-enter="opacity-0"
        data-entered="opacity-100"
        data-leave="opacity-100"
        data-leaving="opacity-0"
      />

      {/* Contenedor del diálogo */}
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Dialog.Panel 
            className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl sm:my-8 sm:w-full sm:max-w-2xl sm:p-6 transition-all duration-500 ease-in-out"
            transition
            data-enter="opacity-0 scale-90 translate-y-4"
            data-entered="opacity-100 scale-100 translate-y-0"
            data-leave="opacity-100 scale-100 translate-y-0"
            data-leaving="opacity-0 scale-90 translate-y-4"
          >
            <Dialog.Title as="h3" className="text-gray-900 text-4xl font-extrabold my-5 text-center">
              Titulo Aquí
            </Dialog.Title>
            <Dialog.Title as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
              Ingredientes y Cantidades
            </Dialog.Title>
            <Dialog.Title as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
              Instrucciones
            </Dialog.Title>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  )
}