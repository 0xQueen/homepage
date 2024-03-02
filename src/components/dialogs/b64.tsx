import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { IoIosInformationCircle } from "react-icons/io";

export default function TipDialog() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div
        className="flex items-center justify-center"
        style={{ marginLeft: "37px" }}
      >
        <div>
          <h1 className="font-bold text-3xl mb-4 sm:mb-2">Base64</h1>
        </div>
        <div className="ml-2" style={{ marginBottom: "13px" }}>
          <button
            type="button"
            onClick={openModal}
            className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
          >
            <IoIosInformationCircle style={{ fontSize: "1.2em" }} />
          </button>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0"
              style={{ backgroundColor: "#160d1480" }}
            />
          </Transition.Child>

          <div className="fixed inset-0 flex items-center justify-center">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-white align-middle shadow-xl transition-all"
                  style={{ backgroundColor: "#351e30" }}
                >
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-bold leading-8 text-pink-500 mb-4"
                  >
                    What is Base64?
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-300">
                      Base64 is an encryptor and decryptor of text, making it
                      harder for people to read. To use it, simply write text.
                      whether its encrypted or non-decrypted, and press the
                      button, and it'll show an output.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-pink-600 px-4 py-2 text-sm font-medium text-white hover:bg-pink-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
