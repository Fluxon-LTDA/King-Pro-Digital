/* eslint-disable prettier/prettier */
import Image from "next/image";
import { Button } from "@nextui-org/react";
import Link from "next/link";

import FotoDePerfil from "../public/images/foto_perfil.png";
import Logo from "../public/images/logo.png";

import DefaultLayout from "@/layouts/default";
import { siteConfig } from "@/config/site";
import FeedbackCarousel from "@/components/feedbacks";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section
        className="flex flex-col items-center justify-center gap-4 sm:bg-top md:bg-center lg:bg-center xl:bg-center"
        style={{ minHeight: "100vh" }}
      >
        <div
          className="absolute w-full max-w-[1500px] h-full bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url("images/fundo.webp")',
            backgroundAttachment: "scroll",
          }}
        />
        <div className="relative z-10 flex items-center justify-between w-full max-w-screen-xl px-4">
          <div className="flex flex-col items-center sm:items-start justify-center gap-2">
            <Image
              priority
              alt="Logo"
              className="translate-y-[-60px] sm:translate-y-[-70px]"
              height={120}
              src={Logo}
              width={120}
            />
            <h1>Estratégias de Tráfego Pago</h1>
            <h2 className="text-secondary">e Anúncios Online</h2>
            <Link href={siteConfig.links.whatsapp} target="_blank">
              <Button
                className="bg-gradient-to-tr from-secondary to-primary text-white shadow-lg max-w-80 h-16 sm:h-14 uppercase font-semibold mt-4 px-6"
                radius="full"
              >
                Obtenha Resultados Agora
              </Button>
            </Link>
          </div>
          <div className="absolute -right-28 -top-68 transform hidden sm:block">
            <Image
              alt="Foto de Perfil"
              height={742}
              loading="lazy"
              priority={false}
              sizes="(max-width: 768px) 50vw, 418px"
              src={FotoDePerfil}
              width={418}
            />
          </div>
        </div>
      </section>

      {/* Quem somos? */}
      <section className="w-full p-4 sm:py-12">
        <div className="pb-4">
          <h1>Quem somos?</h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-full sm:w-[40%]">
            <p>
              Somos uma empresa especializada na criação e gestão de anúncios estratégicos para empresas, serviços e produtos, com foco no ambiente digital. Com uma equipe altamente capacitada, utilizamos as mais avançadas ferramentas de marketing para criar campanhas direcionadas, garantindo o máximo de visibilidade e engajamento com o público-alvo.
            </p>
            <br />
            <p>
              Nossos princípios e valores são fundamentais para o nosso sucesso e para a relação que estabelecemos com nossos clientes. Trabalhamos com confiança, honestidade, integridade, transparência e respeito em todas as etapas do processo, assegurando uma comunicação clara e um trabalho colaborativo.
            </p>
            <br />
            <p>
              Nossa missão é proporcionar soluções de marketing digital eficientes, ajudando empresas de todos os portes a crescer, expandir sua presença online e alcançar seus objetivos de negócios. Acreditamos no potencial de cada empresa e buscamos sempre personalizar nossas estratégias, de modo a maximizar os resultados e garantir que sua marca se conecte de forma assertiva com o público certo.
            </p>
          </div>
        </div>
      </section>

      {/* Como funciona? */}
      <section className="bg-primary p-4 sm:py-12">
        <div className="pb-4">
          <h1>Como funciona?</h1>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-full sm:w-[40%]">
            <p>
              Fazendo uma analise da sua empresa, nas
              redes sociais e anúncios, identificando como
              podemos atrair melhor o publico. E buscando
              melhor os resultados que nosso você deseja.
            </p>
            <br />
            <p>
              Com base nos dados repassados por você,
              estaremos criando um anúncio de forma
              estratégica, no Facebook ads ou no Google
              ads, onde você escolher.
            </p>
            <br />
            <p>
              Caso necessário podemos auxiliar os cliente
              nas edições dos criativos, mesmo sendo de
              responsabilidade do cliente, entregar os
              vídeos ou imagens que serão inseridos no
              anúncio.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full p-4 sm:py-12">
        <div className="pb-8">
          <h1>Feedbacks</h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-full sm:w-[40%]">
            <FeedbackCarousel />
          </div>
        </div>
      </section>


      <section className="bg-red-500">
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
          cum facere, fuga reprehenderit quibusdam cumque laudantium quisquam
          rem autem at, repellendus illum soluta ipsum ab enim ipsam adipisci
          labore necessitatibus.lore Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ab quos laboriosam ratione excepturi quis, deleniti
          molestiae voluptates, quam dignissimos tempore dolorum corrupti
          explicabo tenetur, nihil impedit quas quia officiis qui! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Ratione quasi sed velit
          ipsa alias possimus quibusdam a, aperiam deleniti dolores excepturi,
          necessitatibus assumenda totam molestias voluptas inventore numquam
          non expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eos quisquam minima fuga a, provident deleniti repudiandae, vitae cum
          fugit officia odio sit! Ullam necessitatibus repellat magnam
          praesentium soluta officia eaque.
        </div>
      </section>
    </DefaultLayout>
  );
}
