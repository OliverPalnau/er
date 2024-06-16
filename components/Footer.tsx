import logo from "@/public/images/regulen-logo-white.svg";
import Image from "next/image";
import { FadeIn } from "./FadeIn";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <FadeIn>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4 mt-4">
            <a href="#" className="-m-1.5 p-1.5 flex items-center">
              <span className="sr-only">Regulen</span>
              <Image
                className="h-16 w-auto"
                src={logo}
                alt="Regulen"
                width={200}
                height={200}
              />
            </a>
          </div>
          <div className="mb-10 mt-10">
            <a
              href="mailto:info@regulen.com"
              className="text-md underline hover:text-blue-500"
            >
              info@Regulen.com
            </a>
          </div>
          <div className="mb-10">
            <a
              href="/"
              className="text-white text-md hover:underline hover:text-blue-500"
            >
              Home
            </a>
          </div>
          <p className="text-xs">&copy; 2024 Regulen. All rights reserved.</p>
        </div>
      </FadeIn>
    </footer>
  );
}
