import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Transmissão de baixa latência",
    description:
      "Contamos com o menor delay do mercado, aproximando assim o tempo de tramsissão mais próximo do real.",
    href: "#",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Tecnologia própria",
    description:
      "Possuímos tecnologia de transmissão própria, assim não sofremos com oscilações das plataformas de graça, trazendo assim mais segurança para a sua transmissão.",
    href: "#",
    icon: LockClosedIcon,
  },
];

const stats = [
  { id: 1, name: "Usuários ativos no app", value: "+ 50.000" },
  { id: 2, name: "Youtube", value: "20.000" },
  { id: 3, name: "Instagram", value: "20.000" },
  { id: 4, name: "Facebook", value: "10.000" },
];

export default function SobreEmpresa() {
  return (
    <>
      <section className="isolate" id="historia">
        {/* Hero section */}
        <div className="relative isolate -z-10">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
          <div
            aria-hidden="true"
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          >
            <div
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#90CC42] to-[#0E4565] opacity-30"
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl text-left font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Nossa história
                  </h1>

                  <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 text-left">
                    <p className="my-10">
                      O Lance Rural é uma ferramenta que permite facilidade
                      tanto para quem compra, quanto para quem quer vender seus
                      animais online, além de transmitir grandes eventos,
                      leilões e provas. Desenvolvido à partir de toda a
                      experiência do Canal Rural em quase 25 anos de operação,
                      sendo a principal plataforma multimídia de comunicação
                      especializada em agronegócio no Brasil, o Lance Rural se
                      torna o carro chefe para transmissões online, sem
                      limitação de espaço físico ou de tempo, como é no modelo
                      de televisão.
                    </p>

                    <p className="my-10">
                      Com grande alcance de produtores rurais em todo país,
                      sendo acessível a qualquer hora e em qualquer lugar, o
                      Lance Rural em 2019, confirma a tendência ao se tornar
                      fonte de aquisição de genética animal país afora, além de
                      conquistar a comunidade Nelorista com notícias,
                      transmissões e retransmissões e cobertura das grandes
                      exposições nacionais, como Expozebu e Expogenética. Também
                      a comunidade Crioulista com transmissões de grandes
                      competições como Bocal de Ouro, Freio de Ouro, Prova Don
                      Arturo e as Provas da ABCCC na Expointer.
                    </p>

                    <p className="my-10">
                      Um dos maiores cases de sucesso do portal foi a
                      transmissão da Nacional do Mangalarga Marchador em 2019,
                      com números de audiência que ultrapassaram meio milhão de
                      pessoas acompanhando as provas. Não perca a oportunidade
                      de ter visibilidade, alcance e audiência, além da
                      confiabilidade e padrão de qualidade Canal Rural!
                    </p>
                  </div>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ferramentas">
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Tudo que você precisa para o seu negócio
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Aqui você encontra as melhores ferramentas, desenvolvidas para
                gerar mais resultado ao seu negócio.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {features.map((feature) => (
                  <div key={feature.name} className="flex flex-col">
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                      <feature.icon
                        aria-hidden="true"
                        className="h-5 w-5 flex-none text-green-600"
                      />
                      {feature.name}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <p className="flex-auto text-left">
                        {feature.description}
                      </p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-white" id="numeros">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80"
          className="h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2"
        />
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Nossos números não mentem
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                A mais de XX anos no mercado, com mais de 500 mil horas de
                transmissão, somos a maior plataformas do agronegócio do Brasil.
                Nossos números falam por sí, confira.
              </p>
              <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
                {stats.map((stat) => (
                  <div
                    key={stat.id}
                    className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6"
                  >
                    <dt className="text-sm leading-6 text-gray-600">
                      {stat.name}
                    </dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
