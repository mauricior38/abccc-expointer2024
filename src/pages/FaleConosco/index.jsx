import { Link } from "react-router-dom";

// import logo from "@/assets/lanceRural.svg";

import { RiWhatsappLine, RiMailLine as RiMailAddLine } from "@remixicon/react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

const ContatoSchema = yup.object({
  nomeCompleto: yup
    .string("Campo obrigatório, digite um nome")
    .required(
      "Este é um campo obrigatório, por favor, digite seu nome completo."
    ),
  email: yup
    .string()
    .required("Informe o e-mail.")
    .email("É necessário um email válido."),
  telefone: yup
    .string("É necessário digitar um número válido")
    .required("Este é um campo obrigatóri, por favor, digite um telefone."),
  mensagem: yup
    .string("Digite uma mensagem")
    .required("Por favor, digite uma mensagem de no mínimo 10 caracteres.")
    .min(10),
});

export default function FaleConosco() {
  const {
    handleSubmit,
    register,
    // getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ContatoSchema),
  });

  async function handleSendMessage() {
    toast.success("Mensagem enviada com sucesso");
  }

  return (
    <>
      <section className="bg-white">
        <div className="bg-[url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/contact/laptop-human.jpg')] bg-no-repeat bg-cover bg-center bg-gray-700 bg-blend-multiply">
          <div className="px-4 lg:pt-24 pt-8 pb-72 lg:pb-80 mx-auto max-w-screen-sm text-center lg:px-6 ">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
              Entre em contato
            </h2>
            <p className="mb-16 font-light text-gray-400 sm:text-xl text-left">
              Entre em contato com a equipe do Lance Rural e conecte-se às
              transmissões do mundo rural dentro do maior portal do agronegócio:
              o Canal Rural!
            </p>
          </div>
        </div>

        <div className="py-16 px-4 mx-auto -mt-96 max-w-screen-xl sm:py-24 lg:px-6 ">
          <form
            onSubmit={handleSubmit(handleSendMessage)}
            className="grid grid-cols-1 gap-8 p-6 mx-auto mb-16 max-w-screen-md bg-white rounded-lg border border-gray-200 shadow-sm lg:mb-28 "
          >
            <div className="sm:px-12">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Nome Completo<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="first-name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                placeholder="Ex: Lancelote da Silva"
                {...register("nomeCompleto", { required: true })}
              />
              {errors.nomeCompleto && (
                <p className="text-xs leading-6 text-red-500 mt-2 text-left">
                  {errors.nomeCompleto.message}
                </p>
              )}
            </div>

            <div className="sm:px-12">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                placeholder="Ex: contato@lancerural.com.br"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-xs leading-6 text-red-500 mt-2 text-left">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="sm:px-12">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Telefone <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="phone-number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                placeholder="+11 9 9999 0000"
                {...register("telefone", { required: true })}
              />
              {errors.telefone && (
                <p className="text-xs leading-6 text-red-500 mt-2 text-left">
                  {errors.telefone.message}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Em que podemos ajudar-lo?
              </label>
              <textarea
                id="message"
                rows="6"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                placeholder="Digite sua mensagem..."
                {...register("mensagem", { required: true })}
              ></textarea>

              {errors.mensagem && (
                <p className="text-xs leading-6 text-red-500 mt-2 text-left">
                  {errors.mensagem.message}
                </p>
              )}
              <p className="mt-4 text-sm text-gray-500 text-left">
                * Ao enviar este email, você estará de acordo com
                <Link
                  to="/termos-de-uso"
                  className="text-primary-600 font-bold hover:underline"
                >
                  os termos de uso
                </Link>{" "}
                e nossas{" "}
                <Link
                  to="https://www.lancerural.com.br/wp-content/uploads/2021/07/Pol%C3%ADtica-de-Privacidade-Canal-Rural.docx.pdf"
                  target="_blank"
                  className="text-primary-600 font-bold hover:underline"
                >
                  políticas de privacidade
                </Link>{" "}
                onde explicamos como coletamos e usamos os dados por você
                fornecido.
              </p>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#0E4565] sm:w-fit hover:bg-[#33769d] focus:ring-4"
            >
              Enviar
            </button>
          </form>

          <div className="space-y-8 text-center md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-12 md:space-y-0 sm:px-24">
            <div>
              <div className="flex bg-[#90CC42] bg-opacity-60 justify-center items-center mx-auto mb-4 w-16 h-16 bg-gray-100 rounded-lg lg:h-16 lg:w-16">
                <svg
                  className="w-8 h-8 text-white lg:w-8 lg:h-8 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <p className="mb-2 text-xl font-bold ">Nosso email:</p>
              <p className="mb-3 text-gray-500 text-left">
                Envie um email direto para nós, logo um de nossos representantes
                entrará em contato.
              </p>
              <Link
                to="mailto:mercadoleilao@canalrural.com.br"
                className="font-semibold text-gray-800 hover:underline bg-[#90CC42] bg-opacity-60 px-4 sm:mx-10 py-2 rounded-lg flex gap-x-2 items-center justify-center "
              >
                <RiMailAddLine className="h-5" />{" "}
                mercadoleilao@canalrural.com.br
              </Link>
            </div>
            <div>
              <div className="flex bg-[#90CC42] bg-opacity-60 justify-center items-center mx-auto mb-4 w-16 h-16 bg-gray-100 rounded-lg lg:h-16 lg:w-16">
                <svg
                  className="w-8 h-8 text-white lg:w-8 lg:h-8 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
              </div>
              <p className="mb-2 text-xl font-bold ">Ligue para nós:</p>
              <p className="mb-3 text-gray-500 text-left">
                Entre em contato conosco através de uma ligação ou whatsapp para
                que assim melhor atendê-lo.
              </p>
              <span className="font-semibold text-primary-600">
                <Link
                  to="https://wa.me/+5551998081164"
                  target="_blank"
                  className="font-semibold text-gray-800 hover:underline bg-[#90CC42] bg-opacity-60 px-4 sm:mx-20 py-2 rounded-lg flex gap-x-2 items-center justify-center "
                >
                  <RiWhatsappLine className="h-5" /> (51) 9 9808-1164
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
