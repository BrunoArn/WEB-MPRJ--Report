import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-8 py-8">
      <section className="space-y-6">
        <Image src="/Logo.png"
          alt="DEDIT logo"
          width={760} height={160}
          priority 
          />
          <div className="space-y-4 text-sm leading-relaxed text-foreground">
            <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
            </p>

          </div>

      </section>

    </main>
  );
}
