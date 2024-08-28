import {
  InformationCircleIcon,
} from "@heroicons/react/20/solid";

export default function Noticia() {
  return (
    <>
      <main className="pb-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
        <header className="bg-[url('https://imagens-cdn.canalrural.com.br/2024/03/IMG_0612_Vinicius-Ramos-CRBA-768x433.jpg')] w-full h-[460px] xl:h-[450px] bg-no-repeat bg-cover bg-center bg-blend-darken relative">
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
          <div className="absolute top-20 left-1/2 px-4 mx-auto w-full max-w-screen-xl -translate-x-1/2 xl:top-1/2 xl:-translate-y-1/2 xl:px-0 text-left">
            <h1 className="mb-4 max-w-4xl text-2xl font-extrabold leading-none text-white sm:text-3xl lg:text-4xl">
              PIB do agro recua 2,2% no 1º trimestre, aponta Cepea
            </h1>
            <p className="text-lg font-normal text-gray-300">
              Com base no desempenho do primeiro trimestre, projeta-se que o PIB
              do agronegócio brasileiro poderá atingir R$ 2,45 trilhões em 2024
            </p>
          </div>
        </header>

        <div className="flex relative z-20 justify-between p-6 -m-36 mx-4 max-w-screen-xl bg-white rounded xl:-m-32 xl:p-9 xl:mx-auto">
          <article className="xl:w-[828px] w-full max-w-none format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <div className="flex flex-col lg:flex-row justify-between lg:items-center mb-5">
              <div className="flex items-center space-x-3 text-gray-500 text-base mb-2 lg:mb-0 hidden sm:contents">
                <span>
                  Por{" "}
                  <a
                    href="#"
                    className="text-gray-900 dark:text-white hover:underline no-underline font-semibold"
                  >
                    Nome do jornalista
                  </a>
                </span>
                <span className="bg-gray-300 dark:bg-gray-400 w-2 h-2 rounded-full"></span>
                <span>
                  <time
                    className="font-normal text-gray-500"
                    title="25 de Agosto, 2024"
                  >
                    25 de Agosto, 2024, 2:20pm
                  </time>
                </span>
              </div>

              {/* COMPARTILHAMENTO */}
              <aside aria-label="Share social media" className="my-10 hidden lg:contents">
                <div className="not-format">
                  <button
                    data-tooltip-target="tooltip-facebook"
                    className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    type="button"
                  >
                    <svg
                      className="w-5 h-5 text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 8 19"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                  <div
                    id="tooltip-facebook"
                    role="tooltip"
                    className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
                  >
                    Share on Facebook
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>

                  <button
                    data-tooltip-target="tooltip-twitter"
                    className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    type="button"
                  >
                    <svg
                      className="w-5 h-5 text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="currentColor"
                        d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z"
                      />
                    </svg>
                  </button>
                  <div
                    id="tooltip-twitter"
                    role="tooltip"
                    className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
                  >
                    Share on Twitter
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>

                  <button
                    data-tooltip-target="tooltip-reddit"
                    className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    type="button"
                  >
                    <svg
                      className="w-5 h-5 text-gray-500"
                      aria-hidden="true"
                      viewBox="0 0 18 18"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_13676_82300)">
                        <path d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z" />
                        <path
                          d="M15.0004 8.99997C15.0004 8.27365 14.411 7.68418 13.6846 7.68418C13.3267 7.68418 13.011 7.82102 12.7794 8.0526C11.8846 7.41049 10.6425 6.98944 9.27412 6.93681L9.87412 4.12628L11.8215 4.53681C11.8425 5.03155 12.2531 5.43155 12.7583 5.43155C13.2741 5.43155 13.6952 5.01049 13.6952 4.4947C13.6952 3.97891 13.2741 3.55786 12.7583 3.55786C12.3899 3.55786 12.0741 3.76839 11.9267 4.08418L9.7478 3.62102C9.68464 3.61049 9.62148 3.62102 9.56885 3.6526C9.51622 3.68418 9.48464 3.73681 9.46359 3.79997L8.80043 6.93681C7.40043 6.97891 6.1478 7.38944 5.24254 8.0526C5.01096 7.83155 4.68464 7.68418 4.33727 7.68418C3.61096 7.68418 3.02148 8.27365 3.02148 8.99997C3.02148 9.53681 3.33727 9.98944 3.80043 10.2C3.77938 10.3263 3.76885 10.4631 3.76885 10.6C3.76885 12.621 6.11622 14.2526 9.02149 14.2526C11.9267 14.2526 14.2741 12.621 14.2741 10.6C14.2741 10.4631 14.2636 10.3368 14.2425 10.2105C14.6741 9.99997 15.0004 9.53681 15.0004 8.99997ZM6.00043 9.93681C6.00043 9.42102 6.42148 8.99997 6.93727 8.99997C7.45306 8.99997 7.87412 9.42102 7.87412 9.93681C7.87412 10.4526 7.45306 10.8737 6.93727 10.8737C6.42148 10.8737 6.00043 10.4526 6.00043 9.93681ZM11.232 12.4105C10.5899 13.0526 9.36885 13.0947 9.01096 13.0947C8.65306 13.0947 7.42148 13.0421 6.7899 12.4105C6.69517 12.3158 6.69517 12.1579 6.7899 12.0631C6.88464 11.9684 7.04254 11.9684 7.13727 12.0631C7.53727 12.4631 8.40043 12.6105 9.02149 12.6105C9.64254 12.6105 10.4952 12.4631 10.9057 12.0631C11.0004 11.9684 11.1583 11.9684 11.2531 12.0631C11.3267 12.1684 11.3267 12.3158 11.232 12.4105ZM11.0636 10.8737C10.5478 10.8737 10.1267 10.4526 10.1267 9.93681C10.1267 9.42102 10.5478 8.99997 11.0636 8.99997C11.5794 8.99997 12.0004 9.42102 12.0004 9.93681C12.0004 10.4526 11.5794 10.8737 11.0636 10.8737Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_13676_82300">
                          <rect width="18" height="18" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <div
                    id="tooltip-reddit"
                    role="tooltip"
                    className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
                  >
                    Post on Reddit
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>

                  <button
                    data-tooltip-target="tooltip-link"
                    className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    type="button"
                  >
                    <svg
                      className="w-5 h-5 text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 19 19"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M11.013 7.962a3.519 3.519 0 0 0-4.975 0l-3.554 3.554a3.518 3.518 0 0 0 4.975 4.975l.461-.46m-.461-4.515a3.518 3.518 0 0 0 4.975 0l3.553-3.554a3.518 3.518 0 0 0-4.974-4.975L10.3 3.7"
                      />
                    </svg>
                  </button>
                  <div
                    id="tooltip-link"
                    role="tooltip"
                    className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
                  >
                    Share link
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>

                  <button
                    data-tooltip-target="tooltip-save"
                    className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    type="button"
                  >
                    <svg
                      className="w-5 h-5 text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m13 19-6-5-6 5V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17Z"
                      />
                    </svg>
                  </button>
                  <div
                    id="tooltip-save"
                    role="tooltip"
                    className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
                  >
                    Save this article
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                  <button
                    id="dropdownMenuIconHorizontalButton"
                    data-dropdown-toggle="dropdownDotsHorizontal"
                    className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    type="button"
                  >
                    <svg
                      className="w-5 h-5 text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 3"
                    >
                      <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                    </svg>
                  </button>
                  {/* <!-- Dropdown menu --> */}
                  <div
                    id="dropdownDotsHorizontal"
                    className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul
                      className="py-1 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownMenuIconHorizontalButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Add to collection
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Report
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>

            {/* IMAGEM DENTRO DO POST */}
            <figure className="">
              <img
                alt=""
                src="https://imagens-cdn.canalrural.com.br/2024/03/IMG_0612_Vinicius-Ramos-CRBA-768x433.jpg"
                className="aspect-video rounded-xl bg-gray-50 object-cover"
              />
              <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
                <InformationCircleIcon
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 flex-none text-gray-300"
                />
                Metadado da foto vem aqui
              </figcaption>
            </figure>

            <div className="bg-white px-6 py-12 lg:px-8 text-left">
              <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                <p className="mt-6 text-xl leading-8">
                  Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
                  sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque
                  id at vitae feugiat egestas ac. Diam nulla orci at in viverra
                  scelerisque eget. Eleifend egestas fringilla sapien.
                </p>
                <div className="mt-10 max-w-2xl">
                  <p>
                    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                    risus enim. Mattis mauris semper sed amet vitae sed turpis
                    id. Id dolor praesent donec est. Odio penatibus risus
                    viverra tellus varius sit neque erat velit. Faucibus commodo
                    massa rhoncus, volutpat. Dignissim sed eget risus enim.
                    Mattis mauris semper sed amet vitae sed turpis id.
                  </p>

                  <p className="mt-8">
                    A agroindústria teve uma queda de 1,31% no trimestre, com um
                    desempenho negativo nas indústrias de base agrícola,
                    contrabalançado pelo crescimento nas de base pecuária.
                    Apesar do aumento na produção industrial e da redução nos
                    custos com insumos, os preços mais baixos impactaram o PIB,
                    enquanto na indústria pecuária, a ampliação da produção e a
                    redução de custos impulsionaram o crescimento. Os
                    agrosserviços refletiram os resultados dos segmentos a
                    montante em cada ramo. No ramo agrícola, os agrosserviços
                    caíram 3,98%, enquanto no ramo pecuário houve um aumento de
                    3,91%.
                  </p>
                  <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                    Agroindústria
                  </h2>
                  <p className="mt-6">
                    Com base no desempenho do primeiro trimestre, projeta-se que
                    o PIB do agronegócio brasileiro poderá atingir R$ 2,45
                    trilhões em 2024, com R$ 1,65 trilhão provenientes do ramo
                    agrícola e R$ 800,61 bilhões do ramo pecuário. Essa projeção
                    indica uma participação do setor na economia nacional em
                    torno de 21,5%, abaixo dos 24% registrados em 2023.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* ASIDE COMPONENT */}
          <aside className="hidden xl:block" aria-labelledby="sidebar-label">
            <div className="xl:w-[336px] sticky top-6">
              <h3 id="sidebar-label" className="sr-only">
                Sidebar
              </h3>

              <div>
                <a
                  href="#"
                  className="flex justify-center items-center mb-3 w-full h-48 bg-gray-100 rounded-lg dark:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <p className="mb-2 text-sm text-gray-500">
                  ADS DISPLAY
                </p>
              </div>

              <div className="mt-12">
                <h4 className="mb-4 text-lg font-bold text-gray-900 dark:text-white uppercase text-left">
                  Ultimas noticias
                </h4>
                <div className="mb-6 flex items-center">
                  <a href="#" className="shrink-0">
                    <img
                      src="https://www.lancerural.com.br/wp-content/uploads/2024/07/IMAGEM-SITE.png"
                      className="mr-4 max-w-full w-24 h-24 rounded-lg"
                      alt="Image 1"
                    />
                  </a>

                  <div>
                    <h5 className="mb-2 text-lg font-bold leading-tight dark:text-white text-gray-900 text-left">
                      Instituto Desenvolve Pecuária.
                    </h5>
                    <p className="mb-2 text-gray-500 text-left">
                      Objetivo é fomentar palestras, lives e dias de campo com
                      cases.
                    </p>
                  </div>
                </div>

                <div className="mb-6 flex items-center">
                  <a href="#" className="shrink-0">
                    <img
                      src="https://www.lancerural.com.br/wp-content/uploads/2024/07/IMAGEM-SITE.png"
                      className="mr-4 max-w-full w-24 h-24 rounded-lg"
                      alt="Image 1"
                    />
                  </a>

                  <div>
                    <h5 className="mb-2 text-lg font-bold leading-tight dark:text-white text-gray-900 text-left">
                      Instituto Desenvolve Pecuária.
                    </h5>
                    <p className="mb-2 text-gray-500 text-left">
                      Objetivo é fomentar palestras, lives e dias de campo com
                      cases.
                    </p>
                  </div>
                </div>

                <div className="mb-6 flex items-center">
                  <a href="#" className="shrink-0">
                    <img
                      src="https://www.lancerural.com.br/wp-content/uploads/2024/07/IMAGEM-SITE.png"
                      className="mr-4 max-w-full w-24 h-24 rounded-lg"
                      alt="Image 1"
                    />
                  </a>

                  <div>
                    <h5 className="mb-2 text-lg font-bold leading-tight dark:text-white text-gray-900 text-left">
                      Instituto Desenvolve Pecuária.
                    </h5>
                    <p className="mb-2 text-gray-500 text-left">
                      Objetivo é fomentar palestras, lives e dias de campo com
                      cases.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
