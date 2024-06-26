import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src="/logo.svg"
        className="dark:hidden"
        height={30}
        width={30}
        alt="Logo"
      />
      <Image
        src="/logo-dark.svg"
        className="hidden dark:block"
        height={30}
        width={30}
        alt="Logo"
      />
      <p className={cn("font-semibold", font.className)}>NoteIt</p>
    </div>
  );
};
