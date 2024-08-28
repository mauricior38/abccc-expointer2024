const features = [
  { name: "Origin", description: "Designed by Good Goods, Inc." },
  {
    name: "Material",
    description:
      "Solid walnut base with rare earth magnets and polycarbonate add-ons.",
  },
  { name: "Dimensions", description: '15" x 3.75" x .75"' },
  { name: "Finish", description: "Hand sanded and finished with natural oil" },
  {
    name: "Includes",
    description:
      "Pen Tray, Phone Tray, Small Tray, Large Tray, Sticky Note Holder",
  },
  {
    name: "Considerations",
    description:
      "Made from natural materials. Grain and color vary with each item.",
  },
];

import { Link } from "react-router-dom";

export default function Cotacoes() {
  return (
    <>
      <div className="bg-[#03354C]">
        <div aria-hidden="true" className="relative">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="h-96 w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#03354C]" />
        </div>

        <div className="w-full -mt-80">
          <section className="bg-gradient-to-b from-[#03354c28] via-[#0E4565] to-[#03354C] drop-shadow-2xl">
            <div className="mx-auto max-w-6xl px-6 lg:px-8 py-4 pt-2 sm:pt-10">
              <div className="mx-auto w-full text-center border-l-4 sm:border-l-7 pl-5 border-[#50b106]">
                <h2 className="text-3xl text-center sm:text-left font-bold tracking-tight text-gray-100 sm:text-4xl">
                  Mercado Agroeconômico
                </h2>
              </div>
            </div>

            <div className=" mx-auto max-w-6xl sm:py-10 lg:px-6 px-4">
              <iframe
                loading="lazy"
                title="Report Section"
                src="https://app.powerbi.com/view?r=eyJrIjoiZmM1ZWNlNjYtY2M1My00YmM1LWIxMmUtMDE0MmZjNDczZTI5IiwidCI6ImYzNzYyNThjLWMxNjUtNDQ5Yy1iYWI4LWViN2RkNzQ4MGE1NCJ9"
                // frameborder="0"
                allowfullscreen="true"
                data-rocket-lazyload="fitvidscompatible"
                data-lazy-src="https://app.powerbi.com/view?r=eyJrIjoiZmM1ZWNlNjYtY2M1My00YmM1LWIxMmUtMDE0MmZjNDczZTI5IiwidCI6ImYzNzYyNThjLWMxNjUtNDQ5Yy1iYWI4LWViN2RkNzQ4MGE1NCJ9"
                data-ll-status="loaded"
                className="entered lazyloaded w-full h-[600px] rounded-lg mb-10"
              ></iframe>

              <p className="mb-4 font-light text-lg text-gray-300 text-left px-8">
                Fonte: Indicador Sapiens.Agro – A Sapiens Agro é uma empresa de
                ciência de dados para o agronegócio que desenvolve algoritmos de
                inteligência artificial para realizar pesquisa e curadoria na
                coleta e tratamento de dados. As informações são compiladas de
                diversas fontes, entre as quais Broadcast e Cepea. Os modelos
                são referenciais e apresentam uma cotação média diária entre as
                praças pesquisadas.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
