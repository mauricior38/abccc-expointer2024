import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  PaperClipIcon,
  CheckIcon,
} from "@heroicons/react/20/solid";
import {
  RiWhatsappFill as RiWhatsappLine,
  RiBookOpenFill,
} from "@remixicon/react";

import VideoPlayer from "../../components/Video";

import { Link } from "react-router-dom";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Divider,
  TabPanels,
  Card,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
} from "@tremor/react";

const eventDetail = {
  status: "aovivo",
  name: "NOME DA TRANSMISSAO VAI VIR AQUI",
  idPlayer: "idDoEvento",
  slug: "Slug-vem-aqui-na-url-tambem",
  Description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo unde a, aliquam cupiditate earum, ut consectetur fugit corrupti maxime, temporibus sunt deserunt voluptatem pariatur facilis. Necessitatibus saepe optio cum obcaecati.",
  contatos: [
    {
      name: "Central de lances",
      telefone: "+5555991605214",
      whatsApp: false,
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },

    {
      name: "Arthur de Almeida",
      telefone: "+5555991605214",
      whatsApp: true,
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },

    {
      name: "Francisco de Assis",
      telefone: "+5555991605214",
      whatsApp: true,
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
  ],
};

export default function EventDetail() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-stone-900">
      <div id="areaPlayer" className=" w-full bg-stone-950">
        {/* PLAYER */}
        <div className="aspect-video max-w-4xl mx-auto">
          <VideoPlayer streamId={"canalrural"} streamStatus="broadcasting" />
        </div>
      </div>

      <div>
        <div className="flex gap-3 w-full items-center justify-start max-w-4xl mx-auto py-8 px-2">
          <span className="rounded-xs font-sans text-xs font-medium uppercase text-red-900 ">
            <span className="inline-flex items-center gap-x-3 rounded-md bg-red-600/80 px-3 py-2 text-xs font-medium text-gray-200">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-100 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-gray-200"></span>
              </span>
              AO VIVO
            </span>
          </span>

          <h2 className="text-2xl font-bold tracking-tight text-gray-200 sm:text-2xl">
            NOME DO EVENTO VEM AQUI
          </h2>
        </div>
        <section>
          <div className="flex gap-3  w-full items-center justify-start max-w-4xl mx-auto">
            <div className="max-w-90 px-2 grid grid-cols-3 gap-x-6 gap-y-2 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 md:gap-8 xl:gap-8 md:space-y-0">
              <div className="flex justify-between items-center gap-4 rounded shadow bg-gray-200/90 p-2 px-4">
                <div className="flex justify-center items-center w-10 h-10 rounded bg-gray-200 lg:h-10 lg:w-10 p-2">
                  <RiBookOpenFill />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-sm font-bold items-center justify-center">
                    Catálogo
                  </h3>
                  <Link
                    className="font-light text-gray-800"
                    target="_blank"
                    to="https://www.lancerural.com.br/wp-content/uploads/2024/06/catalogo-lemgruber-1.pdf"
                    // onClick={() => setOpen(true)}
                  >
                    acessar
                  </Link>
                </div>
              </div>

              <div className="flex justify-between items-center w-22 gap-4 rounded shadow bg-gray-200/90 p-2 px-6">
                <div className="flex justify-center items-center w-10 h-10 rounded bg-gray-200 lg:h-10 lg:w-10">
                  <svg
                    className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"></path>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-sm font-bold items-center justify-center">
                    Horario
                  </h3>
                  <p className="font-light text-gray-800 dark:text-gray-400">
                    12:00
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center rounded shadow bg-gray-200/90 p-2 px-6">
                <div className="flex justify-center items-center w-10 h-10 rounded bg-gray-200 lg:h-10 lg:w-10">
                  <svg
                    className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"></path>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-sm font-bold items-center justify-center">
                    Horario
                  </h3>
                  <p className="font-light text-gray-800 dark:text-gray-400">
                    12:00
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center gap-4 rounded shadow bg-gray-200/90 p-2 px-6">
                <div className="flex justify-center items-center w-10 h-10 rounded bg-gray-200 lg:h-10 lg:w-10">
                  <svg
                    className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"></path>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-sm font-bold items-center justify-center">
                    Horario
                  </h3>
                  <p className="font-light text-gray-800 dark:text-gray-400">
                    12:00
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center gap-4 rounded shadow bg-gray-200/90 p-2 px-6">
                <div className="flex justify-center items-center w-10 h-10 rounded bg-gray-200 lg:h-10 lg:w-10">
                  <svg
                    className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"></path>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-sm font-bold items-center justify-center">
                    Horario
                  </h3>
                  <p className="font-light text-gray-800 dark:text-gray-400">
                    12:00
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center gap-4 rounded shadow bg-gray-200/90 p-2 px-6">
                <div className="flex justify-center items-center w-10 h-10 rounded bg-gray-200 lg:h-10 lg:w-10">
                  <svg
                    className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"></path>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-sm font-bold items-center justify-center">
                    Horario
                  </h3>
                  <p className="font-light text-gray-800 dark:text-gray-400">
                    12:00
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center gap-4 rounded shadow bg-gray-200/90 p-2 px-6">
                <div className="flex justify-center items-center w-10 h-10 rounded bg-gray-200 lg:h-10 lg:w-10">
                  <svg
                    className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"></path>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-sm font-bold items-center justify-center">
                    Horario
                  </h3>
                  <p className="font-light text-gray-800 dark:text-gray-400">
                    12:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex max-w-4xl mx-auto p-10 sm:px-2 pb-10 ">
          <div className="mx-auto w-full text-left ">
            <ul
              role="list"
              className="grid w-full grid-cols-2 gap-x-8 gap-y-12 text-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
            >
              {eventDetail.contatos.map((person) => (
                <li
                  key={person.name}
                  className="flex flex-col justify-between max-w-40"
                >
                  <div className="relative">
                    <img
                      alt=""
                      src={person.imageUrl}
                      className="mx-auto h-24 w-24 rounded-full"
                    />
                    {person.whatsApp ? (
                      <RiWhatsappLine className="w-7 h-7 text-green-500 absolute top-20 right-12 bg-white/80 p-1 rounded-full" />
                    ) : (
                      <PhoneIcon className="w-7 h-7 text-gray-900 absolute top-20 right-12 bg-white/80 p-1 rounded-full" />
                    )}
                  </div>
                  <h3 className="mt-6 text-sm font-semibold leading-2 text-gray-200">
                    {person.name}
                  </h3>
                  {person.whatsApp ? (
                    <Link
                      to={`https://wa.me/${person.telefone}`}
                      target="_blank"
                      className="text-gray-200 "
                    >
                      <span className="flex px-4 py-1  mt-2 rounded-lg justify-center items-center bg-green-700 hover:bg-green-800">
                        Whatsapp
                      </span>
                    </Link>
                  ) : (
                    <Link
                      to={`tel:${person.telefone}`}
                      // target="_blank"
                      className="text-gray-200 "
                    >
                      <span className="flex px-4 py-1  mt-2 rounded-lg justify-center items-center bg-green-700 hover:bg-green-800">
                        Ligar
                      </span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <>
        <Dialog open={open} onClose={setOpen} className="relative z-10">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
          />

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <DialogPanel
                transition
                className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
              >
                <h1>TESTE</h1>
                <iframe
                  className="w-[450px] h-500px]"
                  src="https://www.lancerural.com.br/wp-content/uploads/2024/07/08.08-Leilao-Especial-Cia-10.png"
                ></iframe>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </>
    </section>

    // MODAL
  );
}
