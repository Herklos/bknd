import Image from "next/image";
import { Footer } from "@/components/Footer";

export default async function Layout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
         <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <div className="flex flex-row items-center ">
               <Image
                  className="dark:invert"
                  src="/next.svg"
                  alt="Next.js logo"
                  width={180}
                  height={38}
                  priority
               />
               <div className="ml-3.5 mr-2 font-mono opacity-70">&amp;</div>
               <Image
                  className="dark:invert"
                  src="/bknd.svg"
                  alt="bknd logo"
                  width={183}
                  height={59}
                  priority
               />
            </div>

            {children}
         </main>
         <Footer />
      </div>
   );
}
