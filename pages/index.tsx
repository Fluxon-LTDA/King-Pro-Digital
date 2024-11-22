import Image from "next/image";
import { Button } from "@nextui-org/react";
import Link from "next/link";

import FotoDePerfil from "../public/foto_perfil.png";
import Logo from "../public/logo.png";

import DefaultLayout from "@/layouts/default";
import { siteConfig } from "@/config/site";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section
        className="flex flex-col items-center justify-center gap-4 sm:bg-top md:bg-center lg:bg-center xl:bg-center"
        style={{ minHeight: "100vh" }}
      >
        <div
          className="absolute w-full h-full bg-cover bg-center bg-fixed opacity-20"
          style={{ backgroundImage: 'url("images/fundo.webp")' }}
        />
        <div className="relative z-10 flex items-center justify-between w-full max-w-screen-xl px-4">
          <div className="flex flex-col items-center sm:items-start justify-center gap-2">
            <Image
              priority
              alt="Logo"
              className="translate-y-[-70px]"
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

      <section className="bg-white">
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

      <section className="bg-white">
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
