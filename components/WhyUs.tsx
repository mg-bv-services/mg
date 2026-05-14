import Image from "next/image";

const benefits = [
  {
    title: "Betrouwbaar",
    description: "Wij komen onze afspraken na. Vakkundig, op tijd en met aandacht voor detail.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Eigen team & netwerk",
    description: "Eigen vakmensen aangevuld met een netwerk van geselecteerde partners — zo regelen we elke opdracht.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "Flexibel",
    description: "Elke opdracht is anders. Wij passen onze planning en aanpak aan uw situatie aan.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Transparant",
    description: "Geen verborgen kosten. Heldere offertes en eerlijke prijzen vanaf het begin.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section id="waarom-wij" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-4">
              Waarom M.G B.V.
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Uw betrouwbare partner — voor meerdere disciplines
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              M.G B.V. combineert eigen uitvoering met een uitgebreid netwerk
              van vakpartners. Daardoor kunnen we elke opdracht oppakken — van
              transport en verhuizing tot beveiliging en reiniging — met één
              aanspreekpunt en consistente kwaliteit.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1600"
                alt="Medewerkers van M.G B.V."
                width={600}
                height={700}
                className="object-cover w-full h-[500px] lg:h-[600px]"
              />
            </div>

            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary-100 rounded-full -z-10" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-50 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
