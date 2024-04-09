import Image from "next/image";
import CalendarioTable from "@/components/calendario";

export default function Home() {
  return (
    <main className="p-24">
 
      <div className="p-30 flex place-items-center">
        <Image
          src="/logo.svg"
          alt="Vitoria Restaurante Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  );
}
