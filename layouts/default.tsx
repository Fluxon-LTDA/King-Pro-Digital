import { Link } from "@nextui-org/link";
import { FaRegUserCircle } from "react-icons/fa";
import Image from "next/image";

import Logo from "../public/logo.png";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/config/site";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      {/* <Navbar /> */}
      <main className="container mx-auto flex-grow">{children}</main>
      <footer className="w-full flex flex-col sm:flex-row items-center justify-center sm:justify-around p-6">
        <div className="hidden sm:flex sm:flex-row">
          <p> King Pro Digital |</p>
          <p className="ps-1">Todos os direitos reservados</p>
        </div>

        <div className="flex flex-col sm:hidden items-center p-6 ">
          <Image priority alt="Logo" src={Logo} width={70} />
          <p>King Pro Digital</p>
          <p>Todos os direitos reservados.</p>
        </div>
        <Link
          className="flex justify-start items-center gap-1 text-white"
          href={siteConfig.links.fluxon_instagram}
          target="_blank"
          title="Instagram"
        >
          <div className="flex items-center gap-4">
            <p>Site desenvolvido por Fluxon Digital.</p>

            <FaRegUserCircle className="text-white text-xl" />
          </div>
        </Link>
      </footer>
    </div>
  );
}
