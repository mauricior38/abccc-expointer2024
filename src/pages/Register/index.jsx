import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logo from "@/assets/lanceRural.svg";
import estadosECidades from "@/assets/estados-cidades.json";
import { toast } from "react-toastify";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAuth } from "@/hooks/useAuth";

const signInSchema = yup.object({
  nomeCompleto: yup.string().required("Informe um nome completo"),
  email: yup
    .string()
    .required("Informe o e-mail.")
    .email("É necessário um email válido."),
  telefone: yup.string().required("Digite um telefone"),

  password: yup.string().required("Informe uma senha."),
  // .matches(
  //   /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
  //   "Password precisa conter 8 caracteres, one uppercase, one number and one special case character"
  // ),
});

export default function Register() {
  const { signUp } = useAuth();

  const [paisSelecionado, setPaisSelecionado] = useState("Brasil");
  const [estadoSelecionado, setEstadoSelecionado] = useState(27);
  const [cidadeSelecionada, setCidadeSelecionada] = useState(null);
  const [termsCheck, setTermsCheck] = useState(false);

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchema),
  });

  async function handleRegister() {
    if ((estadoSelecionado === 27) | (cidadeSelecionada === null)) {
      toast.error("Escolha um estado e cidade");
    }

    const data = {
      nome: getValues("nomeCompleto"),
      email: getValues("email"),
      telefone: getValues("telefone"),
      password: getValues("password"),
      local: {
        paisEscolhido: paisSelecionado,
        estadoEscolhido: estadosECidades.estados[estadoSelecionado].nome,
        cidadeEscolhida: cidadeSelecionada,
      },
      interesses: {},
    };

    signUp(data);
  }

  useEffect(() => {
    console.log(estadosECidades);
  }, []);
  return (
    <section className="bg-white">
      <div className="grid lg:h-screen lg:grid-cols-2">
        <div className="flex justify-center items-center py-6 px-0 lg:py-0 sm:px-0">
          <form
            onSubmit={handleSubmit(handleRegister)}
            className="space-y-4 max-w-md md:space-y-6 xl:max-w-xl p-6"
            action="#"
          >
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Crie sua conta com
            </h2>
            <div className="items-center space-y-3 space-x-0 sm:flex sm:space-x-4 sm:space-y-0">
              <a
                href="#"
                className="w-full inline-flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                <svg
                  className="mr-2 w-5 h-5"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_13183_10121)">
                    <path
                      d="M20.3081 10.2303C20.3081 9.55056 20.253 8.86711 20.1354 8.19836H10.7031V12.0492H16.1046C15.8804 13.2911 15.1602 14.3898 14.1057 15.0879V17.5866H17.3282C19.2205 15.8449 20.3081 13.2728 20.3081 10.2303Z"
                      fill="#3F83F8"
                    />
                    <path
                      d="M10.7019 20.0006C13.3989 20.0006 15.6734 19.1151 17.3306 17.5865L14.1081 15.0879C13.2115 15.6979 12.0541 16.0433 10.7056 16.0433C8.09669 16.0433 5.88468 14.2832 5.091 11.9169H1.76562V14.4927C3.46322 17.8695 6.92087 20.0006 10.7019 20.0006V20.0006Z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.08857 11.9169C4.66969 10.6749 4.66969 9.33008 5.08857 8.08811V5.51233H1.76688C0.348541 8.33798 0.348541 11.667 1.76688 14.4927L5.08857 11.9169V11.9169Z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M10.7019 3.95805C12.1276 3.936 13.5055 4.47247 14.538 5.45722L17.393 2.60218C15.5852 0.904587 13.1858 -0.0287217 10.7019 0.000673888C6.92087 0.000673888 3.46322 2.13185 1.76562 5.51234L5.08732 8.08813C5.87733 5.71811 8.09302 3.95805 10.7019 3.95805V3.95805Z"
                      fill="#EA4335"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_13183_10121">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                Google
              </a>

              <a
                href="#"
                className="w-full gap-2 inline-flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#039be5"
                    d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                  ></path>
                </svg>
                Facebook
              </a>

              <a
                href="#"
                className="w-full inline-flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                <svg
                  className="mr-2 w-5 h-5 text-gray-900 dark:text-white"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_13183_29163)">
                    <path
                      d="M18.6574 15.5863C18.3549 16.2851 17.9969 16.9283 17.5821 17.5196C17.0167 18.3257 16.5537 18.8838 16.1969 19.1936C15.6439 19.7022 15.0513 19.9627 14.4168 19.9775C13.9612 19.9775 13.4119 19.8479 12.7724 19.585C12.1308 19.3232 11.5412 19.1936 11.0021 19.1936C10.4366 19.1936 9.83024 19.3232 9.18162 19.585C8.53201 19.8479 8.00869 19.985 7.60858 19.9985C7.00008 20.0245 6.39356 19.7566 5.78814 19.1936C5.40174 18.8566 4.91842 18.2788 4.33942 17.4603C3.71821 16.5863 3.20749 15.5727 2.80738 14.4172C2.37887 13.1691 2.16406 11.9605 2.16406 10.7904C2.16406 9.45009 2.45368 8.29407 3.03379 7.32534C3.4897 6.54721 4.09622 5.9334 4.85533 5.4828C5.61445 5.03219 6.43467 4.80257 7.31797 4.78788C7.80129 4.78788 8.4351 4.93738 9.22273 5.2312C10.0081 5.52601 10.5124 5.67551 10.7335 5.67551C10.8988 5.67551 11.4591 5.5007 12.4088 5.15219C13.3069 4.82899 14.0649 4.69517 14.6859 4.74788C16.3685 4.88368 17.6327 5.54699 18.4734 6.74202C16.9685 7.65384 16.2241 8.93097 16.2389 10.5693C16.2525 11.8454 16.7154 12.9074 17.6253 13.7506C18.0376 14.1419 18.4981 14.4444 19.0104 14.6592C18.8993 14.9814 18.7821 15.29 18.6574 15.5863V15.5863ZM14.7982 0.400358C14.7982 1.40059 14.4328 2.3345 13.7044 3.19892C12.8254 4.22654 11.7623 4.82035 10.6093 4.72665C10.5947 4.60665 10.5861 4.48036 10.5861 4.34765C10.5861 3.38743 11.0041 2.3598 11.7465 1.51958C12.1171 1.09416 12.5884 0.740434 13.16 0.458257C13.7304 0.18029 14.2698 0.0265683 14.7772 0.000244141C14.7921 0.133959 14.7982 0.267682 14.7982 0.400345V0.400358Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_13183_29163">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                Apple
              </a>
            </div>

            <div className="flex items-center">
              <div className="w-full h-0.5 bg-gray-200 "></div>
              <div className="px-5 text-center text-gray-800">ou</div>
              <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
            </div>
            <div>
              <label
                for="full-name"
                className="block mb-2 text-sm font-medium text-gray-900 text-left "
              >
                Nome Completo
              </label>
              <input
                type="text"
                name="nomeCompleto"
                id="nomeCompleto"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                placeholder="Ex: Ricardo da Silva Oliveira"
                {...register("nomeCompleto", { required: true })}
              />

              {errors.nomeCompleto && (
                <p className="text-xs leading-6 text-red-500 mt-2 text-left">
                  {errors.nomeCompleto.message}
                </p>
              )}
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 text-left">
                Digite seu email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                placeholder="name@lancerural.com.br"
                {...register("email", { required: true })}
              />

              {errors.email && (
                <p className="text-xs leading-6 text-red-500 mt-2 text-left">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left">
                Telefone
              </label>
              <input
                type="number"
                name="telefone"
                id="telefone"
                placeholder="(55) 9 9969-5560"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                required=""
                {...register("telefone", { required: true })}
              />

              {errors.telefone && (
                <p className="text-xs leading-6 text-red-500 mt-2 text-left">
                  {errors.telefone.message}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left">
                Digite sua senha
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                required=""
                {...register("password", { required: true })}
              />

              {errors.password && (
                <p className="text-xs leading-6 text-red-500 mt-2 text-left">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex flex-col justify-between gap-2">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left">
                  Pais
                </label>

                <select
                  type="pais"
                  name="pais"
                  id="pais"
                  value={paisSelecionado}
                  defaultValue="Brasil"
                  onChange={(e) => setPaisSelecionado(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full px-10 p-2.5"
                >
                  {estadosECidades.paises.map((pais) => (
                    <>
                      {pais.sigla === "BR" ? (
                        <option value={pais.nome_pais} selected>
                          {pais.nome_pais}
                        </option>
                      ) : (
                        <option value={pais.nome_pais}>{pais.nome_pais}</option>
                      )}
                    </>
                  ))}
                </select>
              </div>

              {paisSelecionado === "Brasil" ? (
                <>
                  {/* SELECT ESTADO E CIDADE */}
                  <div className="flex gap-2 flex-col justify-between sm:flex-row ">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left">
                        Estado
                      </label>

                      <select
                        type="estado"
                        name="estado"
                        id="estado"
                        value={estadoSelecionado}
                        onChange={(e) => setEstadoSelecionado(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full px-10 p-2.5"
                      >
                        {estadosECidades.estados.map((estado, index) => (
                          <>
                            <option value={index}>{estado.nome}</option>
                          </>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left">
                        Cidade
                      </label>

                      <select
                        type="cidade"
                        name="cidade"
                        id="cidade"
                        value={cidadeSelecionada}
                        disabled={estadoSelecionado === null}
                        onChange={(e) => setCidadeSelecionada(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full px-10 p-2.5 hover:cursor-not-allowed"
                      >
                        <option>Selecione uma cidade</option>
                        {estadosECidades.estados[estadoSelecionado].cidades.map(
                          (cidade) => (
                            <>
                              <option value={cidade.nome}>{cidade}</option>
                            </>
                          )
                        )}
                      </select>
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>

            <div className="space-y-3">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    value={termsCheck}
                    onChange={(e) => setTermsCheck(e.target.value)}
                    className="w-4 h-4 bg-gray-50 checked:bg-green-600 focus:bg-green-600 rounded border border-gray-300 "
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm text-left">
                  <label className="font-light text-gray-500">
                    Ao se cadastrar, você estará estará aceitando os{" "}
                    <a
                      className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
                      href="#"
                    >
                      Termos de uso
                    </a>{" "}
                    e{" "}
                    <a
                      className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
                      href="#"
                    >
                      Política de privacidade
                    </a>
                    .
                  </label>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={termsCheck === false}
              className="w-full text-white bg-[#0E4565] hover:bg-[#0c73ae] border-[#0E4565] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-700"
            >
              Criar conta
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-300">
              Já possuí uma conta?{" "}
              <Link
                to="/signIn"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Faça seu login
              </Link>
            </p>
          </form>
        </div>
        <div className="flex justify-center items-center py-6 px-4 lg:py-0 sm:px-0 bg-gradient-to-r from-[#23648a] via-[#0E4565] to-[#03354C]">
          <div className="max-w-md xl:max-w-xl">
            <Link
              to="/"
              className="inline items-center mb-4 text-2xl font-semibold text-white bg-red-500"
            >
              <img
                className="h-16 bg-gray-100 p-3 mb-5 rounded-lg"
                src={logo}
                alt="Lance Rural"
              />
              {/* Lance Rural */}
            </Link>
            <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-white xl:text-5xl text-left">
              A maior plataforma de negócios no agronegócio do Brasil.
            </h1>
            <p className="mb-4 font-light text-gray-200 lg:mb-8">
              Faça como os mais de 40 mil usuários e participe você também da
              plataforma mais completa no mundo dos agronegócios.
            </p>
            <div className="flex items-center divide-x divide-green-500">
              <div className="flex pr-3 -space-x-4 sm:pr-5">
                <img
                  className="w-10 h-10 border-2 border-white rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                  alt="bonnie avatar"
                />
                <img
                  className="w-10 h-10 border-2 border-white rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                  alt="jese avatar"
                />
                <img
                  className="w-10 h-10 border-2 border-white rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                  alt="roberta avatar"
                />
                <img
                  className="w-10 h-10 border-2 border-white rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png"
                  alt="thomas avatar"
                />
              </div>
              <a href="#" className="pl-3 text-white sm:pl-5 dark:text-white">
                <span className="text-sm text-primary-200">
                  Mais <span className="font-medium text-white">40 mil</span>{" "}
                  downloads
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
