const services = [
  {
    title: "Koeriersdiensten",
    description:
      "Snelle en betrouwbare bezorging van pakketten en documenten. Spoedritten, vaste routes en zakelijke koerier-oplossingen door heel Nederland.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    features: ["Spoedlevering same-day", "Vaste & ad-hoc routes", "Heel Nederland"],
  },
  {
    title: "Goederenvervoer over de weg",
    description:
      "Professioneel goederentransport — van kleine zendingen tot volledige vrachten. Flexibele capaciteit en betrouwbare planning.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7h11v10H3z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4l3 3v4h-7" />
        <circle cx="7" cy="18" r="2" strokeWidth={1.5} />
        <circle cx="17" cy="18" r="2" strokeWidth={1.5} />
      </svg>
    ),
    features: ["Klein- tot grootvervoer", "Flexibele planning", "Op tijd geleverd"],
  },
  {
    title: "Verhuizingen",
    description:
      "Particuliere en zakelijke verhuizingen — van inpakken en demontage tot transport en plaatsing op de nieuwe locatie.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 11l9-6 9 6" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 10v10h14V10" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20v-6h6v6" />
      </svg>
    ),
    features: ["Particulier & zakelijk", "Inpakservice", "Volledig verzekerd"],
  },
  {
    title: "Transportdienstverlening",
    description:
      "Aanvullende dienstverlening voor vervoer over land: planning, coördinatie en logistieke ondersteuning op maat.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    features: ["Logistieke planning", "Route-optimalisatie", "Coördinatie op maat"],
  },
  {
    title: "Beveiligingsdiensten",
    description:
      "Statische bewaking, mobiele surveillance, evenementbeveiliging en opsporing ter plaatse — uitgevoerd door gecertificeerde beveiligers.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4" />
      </svg>
    ),
    features: ["Statische bewaking", "Mobiele surveillance", "Opsporing op locatie"],
  },
  {
    title: "Reinigingsdiensten",
    description:
      "Overige reiniging voor bedrijfspanden, bouwlocaties en specialistische projecten — met aandacht voor kwaliteit en veiligheid.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 20h16" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 20V8l6-4 6 4v12" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20v-6h6v6" />
      </svg>
    ),
    features: ["Bedrijfspanden", "Bouwopleveringen", "Specialistische reiniging"],
  },
];

export default function Services() {
  return (
    <section id="diensten" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Onze Diensten
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Eén partner voor transport, beveiliging en reiniging
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Van spoedlevering en verhuizing tot beveiligingspost en grondige
            reiniging — M.G B.V. regelt het. Wij voeren opdrachten zelf uit of
            bemiddelen via ons netwerk van geselecteerde vakpartners.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200"
            >
              <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
