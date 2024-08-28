import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import VideoPlayer from "@/components/video";

import { CalendarIcon } from "@heroicons/react/20/solid";

const tabs = [{ name: "Programação" }, { name: "Vídeos" }];

const calendarEvent = [
  {
    id: 1,
    title: "Terça Feira - 20/08/2024",
    content: `
      <p>08h30 às 20h – Início da entrada dos animais da Morfologia Expointer e Freio de Ouro - Portão 16 (Intervalo de troca de turno da equipe às 13h e 18h)</p>

    `,
  },

  {
    id: 2,
    title: "Quarta Feira – 21/08/2024",
    content: `
      <p>08h30 às 20h – Continuação da entrada dos animais do Freio de Ouro - Portão 16 (Intervalo de troca de turno da equipe às 13h e 18h)</p>
      <p>08h30 às 20h – Início da entrada dos animais do Leilão Algo Mais - Estância Liberdade - Portão 8</p>
      <p>08h às 20h – Início da entrada do Leilão Algo Mais - Estância Liberdade - Portão 8</p>
      <p>08h30 às 20h –Término da entrada dos animais da Morfologia Expointer - Portão 16 (Intervalo de troca de turno da equipe às 13h e 18h)</p>

    `,
  },

  {
    id: 3,
    title: "Quinta Feira – 22/08/2024",
    content: `
      <p>08h30 às 20h – Continuação da entrada dos animais do Freio de Ouro - Portão 16 (Intervalo de troca de turno da equipe às 13h e 18h)</p>
      <p>08h às 20h – Início da entrada do Remate Boa Vista e Santa Fé - Portão 8</p>
      <p>9h às 12h – Admissão dos animais da Morfologia Expointer – Machos (ordem do catálogo)</p>
      <p>14h às 18h – Admissão dos animais da Morfologia Expointer – Fêmeas (ordem do catálogo)</p>
      <p>20h – Leilão Algo Mais - Estância Liberdade</p>

    `,
  },

  {
    id: 4,
    title: "Sexta Feira – 23/08/2024",
    content: `
      <p>8h30 às 20h – Continuação da entrada dos animais do Freio de Ouro - Portão 16 (Intervalo de troca de turno da equipe às 13h e 18h)</p>
      <p>08h às 20h – Início da entrada dos animais Leilão II Hartwig Conecta - Portão 8</p>
      <p>08h às 12h – Saída dos animais Leilão Algo Mais - Estância Liberdade - Portão 8</p>
      <p>9h – Início do julgamento – Morfologia Expointer – Categorias Potranco Menor e Potranco Maior
      – Intervalo e Sequência – Cont. julgamento – Morfologia Expointer – Categorias Cavalo Menor e Cavalo Adulto</p>
      <p>20h – Remate Boa Vista e Santa Fé</p>

    `,
  },

  {
    id: 5,
    title: "Sábado – 24/08/2024",
    content: `
      <p>08h30 às 20h – Continuação da entrada dos animais da Freio de Ouro- Portão 16 (Intervalo de troca de turno da equipe às 13h e 18h)</p>
      <p>08h30 às 20h – Saída dos animais da Morfologia Expointer (Animais com 1 roseta) - Portão 16 (Intervalo de troca de turno da equipe às 13h e 18h)</p>
      <p>08h às 12h – Saída dos animais do Remate Boa Vista e Santa Fé - Portão 8</p>
      <p>9h - Cont. julgamento – Morfologia Expointer – Categorias Potranca Menor e Potranca Maior
– Intervalo e Sequência – Cont. julgamento – Morfologia Expointer – Categorias Égua Menor e Égua Adulta</p>
      <p>20h – II Hartwig Conecta</p>

    `,
  },

  {
    id: 6,
    title: "Domingo – 25/08/2024",
    content: `
      <p>08h30 às 20h – Continuação da entrada dos animais da Freio de Ouro - Portão 16 (Intervalo de troca de turno da equipe às 13h e 18h)</p>
      <p>08h às 20h – Início da entrada dos animais Leilão Rio Bonito & Convidados - Portão 8 08h30 às 20h – Saída dos animais da Morfologia Expointer (Animais com 1 roseta) - Portão 16 (Intervalo de troca de turno da equipe às 13h e 18h)</p>
      <p>08h às 12h – Saída dos animais do Leilão II Hartwig Conecta - Portão 8</p>
      <p>9h – Julgamento Morfológico dos Campeonatos – Morfologia Expointer</p>
      <p>14h – Abertura Oficial da Expointer</p>
      <p>Sequência – Julgamento Morfológico dos Grandes Campeonatos – Morfologia Expointer Sequência – Coquetel de entrega de prêmios da Morfologia Expointer</p>

    `,
  },

  {
    id: 7,
    title: "Segunda Feira – 26/08/2024",
    content: `
      <p>08h30 às 12h – Término da entrada dos animais da Freio de Ouro - Portão 16 (Intervalo de troca de turno da equipe às 13h e 18h)</p>
      <p>08h30 às 20h – Início da entrada dos animais da Supercopa Jovem - Portão 16 (Intervalo de troca de turno da equipe às 13h e 18h)</p>
      <p>08h30 às 20h – Saída dos animais da Morfologia Expointer (Animais com 1 roseta) - Portão 16 (Intervalo de troca de turno da equipe às 13h e 18h)</p>
      <p>08h às 20h – Início da entrada dos animais Leilão Fazenda Liscano & Convidados - Portão 8</p>
      <p>14h – Início do exame de admissão – Categoria Fêmeas– 43o Freio de Ouro Sequência – Exame de admissão – Categoria Machos – 43o Freio de Ouro 18h – Fim do exame de admissão – Categoria Machos – 43o Freio de Ouro 20h – Leilão Rio Bonito & Convidados</p>

    `,
  },

  {
    id: 8,
    title: "Terça Feira – 27/08/2024",
    content: `
      <p>08h30 às 12h – Término da entrada dos animais da Supercopa Jovem - Portão 16</p>
      <p>08h30 às 20h – Saída dos animais da Morfologia Expointer (Animais com 1 roseta) - Portão 16 (Intervalo de troca de turno da equipe às 13h e 18h)</p>
      <p>08h às 12h – Saída dos animais do Leilão Rio Bonito & Convidados - Portão 8</p>
      <p>9h – Etapa morfológica – Categoria Fêmeas – 43o Freio de Ouro</p>
      <p>14h – Espetáculo de Abertura – Freio de Ouro</p>
      <p>15h – Etapa morfológica – Categoria Machos – 43o Freio de Ouro Sequência – Revisão dos animais – 2a Supercopa Jovem</p>
      <p>20h – Leilão Fazenda Liscano & Convidados</p>

    `,
  },

  {
    id: 9,
    title: "Quarta Feira – 28/08/2024",
    content: `
      <p>08h30 às 20h – Saída dos animais da Morfologia Expointer (Animais com 1 roseta) - Portão 16 (Intervalo de troca de turno da equipe às 13h e 18h)</p>
      <p>08h às 20h – Início da entrada dos animais Leilão Firmeza & Cala Bassa - Portão 8 08h às 12h – Saída dos animais do Leilão Fazenda Liscano & Convidados - Portão 8</p>
      <p>9h – Andaduras/Figura/VSP/Esbarradas – Categoria Fêmeas (Box 01 ao 24) – 43o Freio de Ouro</p>
      <p>14h Sequência – Andaduras/Figura/VSP/Esbarradas – Categoria Fêmeas (Box 25 ao 48) – 43o Freio de Ouro</p>
      <p>18h Sequência – Andaduras/Figura/VSP/Esbarradas 2a Supercopa Jovem – Categorias Infantil A e B</p>

    `,
  },

  {
    id: 10,
    title: "Quinta Feira – 29/08/2024",
    content: `
      <p>08h30 às 20h – Saída dos animais da Morfologia Expointer (Animais com 1 roseta) - Portão 16 (Intervalo de troca de turno da equipe às 13h e 18h)</p>
      <p>08h às 20h – Início da entrada dos animais Leilão Ribeirão Bonito, Santa Larissa & Convidados - Portão 8</p>
      <p>9h – Andaduras/Figura/VSP/Esbarradas – Categoria Machos (Box 49 ao 72) – 43o Freio de Ouro - Sequência – Andaduras/Figura/VSP/Esbarradas – Categoria Machos (Box 73 ao 96) – 43o Freio de Ouro</p>
      <p>Sequência – Andaduras/Figura/VSP/Esbarradas – 2a Supercopa Jovem – Categorias Juvenil A e B</p>
      <p>20h – Leilão Firmeza & Cala Bassa</p>

    `,
  },

  {
    id: 11,
    title: "Sexta Feira – 30/08/2024",
    content: `
      <p>08h30 às 20h – Saída dos animais da Morfologia Expointer (Animais com 1 roseta) - Portão 16 (Intervalo de troca de turno da equipe às 13h e 18h)</p>
      <p>08h às 20h – Início da entrada dos animais Leilão Reconquista Agropecuária - Portão 8</p>
      <p>08h às 12h – Saída dos animais do Leilão Firmeza & Cala Bassa - Portão 8</p>
      <p>9h – Mangueira I – 43o Freio de Ouro</p>
      <p>15h – Espetáculo de Abertura- Freio de Ouro</p>
      <p>16h – Campo I – 43o Freio de Ouro</p>
      <p>16h – Campo I – 43o Freio de Ouro</p>
      <p>Sequência – Mangueira – 2a Supercopa Jovem</p>
      <p>20h - Leilão Ribeirão Bonito, Santa Larissa & Convidados</p>

    `,
  },

  {
    id: 12,
    title: "Sábado – 31/08/2024",
    content: `
      <p>08h30 às 20h – Saída dos animais da Morfologia Expointer (Animais com 1 roseta) - Portão 16 (Intervalo de troca de turno da equipe às 13h e 18h)</p>
      <p>08h às 12h – Saída dos animais do Leilão Ribeirão Bonito, Santa Larissa & Convidados sa - Portão 8</p>
      <p>9h – Bayard/Sarmento e Campo – 2a Supercopa Jovem</p>
      <p>14h – Espetáculo de Abertura – Freio de Ouro</p>
      <p>15h – Mangueira II – Fase Final – 43o Freio de Ouro</p>
      <p>Sequência – Abertura oficial do 43o Freio de Ouro</p>
      <p>Sequência – Bayard-Sarmento e Campo II – Fase Final – 43o Freio de Ouro 20h - Leilão Reconquista Agropecuária</p>

    `,
  },

  {
    id: 13,
    title: "Doming – 01/09/2024",
    content: `
      <p>Saída dos animais - Portão 16 (Após liberação oficial do parque) </p>

    `,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  return (
    <div>
      {/* SEÇÃO DE NOTICIAS */}

      <section className="bg-gradient-to-r from-[#03354C] via-[#0E4565] to-[#03354C] drop-shadow-2xl">
        <div
          id="areaPlayer"
          className=" w-full 
    "
        >
          {/* PLAYER */}
          <div className="aspect-video max-w-4xl mx-auto flex flex-col sm:pb-10 pb-2">
            <div className="mx-auto w-full text-start border-l-8 pl-5 border-[#f6ff00] my-3">
              <span className="rounded-xs font-sans text-xs font-medium uppercase text-red-900 ">
                <span className="inline-flex items-center gap-x-3 rounded-md bg-red-600/80 px-3 py-2 text-xs font-medium text-gray-200">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-100 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-gray-200"></span>
                  </span>
                  AO VIVO
                </span>
              </span>

              <p className="mt-2 text-left text-xs sm:text-lg sm:leading-8 text-gray-300">
                Acompanhe todos os detalhes do Cavalo Crioulo na expointer 2024.
              </p>
            </div>

            <iframe
              className="w-full h-full"
              src="https://vdo.alright.global:5443/alright/play.html?id=abccc&playOrder=hls"
              allowfullscreen
            ></iframe>

            {/* <VideoPlayer streamId={"abccc"} streamStatus="broadcasting" /> */}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto">
        <Tabs />
      </section>
    </div>
  );
}

export function Tabs() {
  const [tabSelected, setTabSelected] = useState("Programação");

  useEffect(() => {
    console.log(tabSelected);
  }, [tabSelected]);

  return (
    <div>
      <div className="sm:hidden px-2 mt-5">
        <label htmlFor="tabs" className="sr-only">
          Selecione uma opção
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          onChange={(e) => setTabSelected(e.target.value)}
          defaultValue="Programação"
          className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-[#0E4565] focus:outline-none focus:ring-[#0E4565] sm:text-sm"
        >
          {tabs.map((tab) => (
            <option key={tab.name} value={tab.name}>
              {tab.name}
            </option>
          ))}
        </select>
      </div>

      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav aria-label="Tabs" className="-mb-px flex space-x-8">
            <Link
              onClick={() => setTabSelected("Programação")}
              className={classNames(
                tabSelected === "Programação"
                  ? "border-[#0E4565] text-[#0E4565]"
                  : "border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-700",
                "flex whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium"
              )}
            >
              {" "}
              Programação
            </Link>
          </nav>
        </div>
      </div>

      <section className="w-4xl">
        {tabSelected === "Programação" ? (
          <>
            <div className="bg-white">
              <div className="mx-auto max-w-2xl px-4 sm:px-6  lg:max-w-7xl lg:px-8">
                <div className="mt-6 space-y-10 divide-y divide-gray-200 border-b border-gray-200 pb-10">
                  {calendarEvent.map((day) => (
                    <div
                      key={day.id}
                      className="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-6 "
                    >
                      <div className="xl:gap-x-8 col-span-12  ">
                        <div className="mt-4 lg:mt-6 xl:col-span-4 xl:mt-0 ">
                          <h3 className="text-xl font-medium text-gray-900 text-left flex items-center gap-2">
                            <CalendarIcon className="h-5 w-5" /> {day.title}
                          </h3>

                          <div
                            dangerouslySetInnerHTML={{ __html: day.content }}
                            className="mt-3 space-y-6 text-sm text-gray-500 text-left"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </section>
    </div>
  );
}
