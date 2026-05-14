import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacybeleid",
  description:
    "Lees ons privacybeleid en ontdek hoe M.G B.V. omgaat met uw persoonsgegevens conform de AVG.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-primary-800 to-primary-900">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Privacybeleid
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Wij respecteren uw privacy en beschermen uw persoonsgegevens conform de AVG.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-12">
            <p className="text-gray-500 mb-10 text-sm">
              Laatst bijgewerkt: 2026
            </p>

            <div className="space-y-10">
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">1. Inleiding</h2>
                <p className="text-gray-600 leading-relaxed">
                  M.G B.V. respecteert uw privacy en zet zich in voor de
                  bescherming van uw persoonsgegevens. Dit privacybeleid informeert
                  u over hoe wij omgaan met uw persoonsgegevens wanneer u onze
                  website bezoekt en vertelt u over uw privacyrechten.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  2. Verwerkingsverantwoordelijke
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  M.G B.V. is de verwerkingsverantwoordelijke voor de
                  persoonsgegevens die via deze website worden verzameld. Voor
                  vragen kunt u contact met ons opnemen via:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>E-mail: info@mg-services.nl</li>
                  <li>Telefoon: 06-84780008</li>
                  <li>KvK: 94346887</li>
                  <li>BTW: NL866743522B01</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  3. Welke gegevens verzamelen wij?
                </h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><strong>Identiteitsgegevens:</strong> naam, bedrijfsnaam</li>
                  <li><strong>Contactgegevens:</strong> e-mailadres, telefoonnummer</li>
                  <li><strong>Communicatiegegevens:</strong> berichten via het contactformulier</li>
                  <li><strong>Technische gegevens:</strong> IP-adres, browsertype (anoniem)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  4. Doeleinden van verwerking
                </h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Beantwoorden van vragen via het contactformulier</li>
                  <li>Opstellen en versturen van offertes</li>
                  <li>Uitvoering van transport-, beveiligings- en reinigingsdiensten</li>
                  <li>Facturering en administratie</li>
                  <li>Verbetering van onze dienstverlening</li>
                  <li>Nakomen van wettelijke verplichtingen</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">5. Rechtsgrond</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><strong>Toestemming:</strong> bij invullen contactformulier</li>
                  <li><strong>Uitvoering overeenkomst:</strong> voor het leveren van onze diensten</li>
                  <li><strong>Wettelijke verplichting:</strong> fiscale en administratieve doeleinden</li>
                  <li><strong>Gerechtvaardigd belang:</strong> verbetering dienstverlening</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">6. Bewaartermijn</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Contactformulier-gegevens: maximaal 1 jaar na laatste contact</li>
                  <li>Klantgegevens: 7 jaar na beëindiging dienstverlening</li>
                  <li>Factuurgegevens: 7 jaar (fiscale bewaarplicht)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">7. Uw rechten</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Onder de AVG heeft u recht op inzage, rectificatie, vergetelheid,
                  beperking, overdraagbaarheid en bezwaar. Neem hiervoor contact op
                  via info@mg-services.nl.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">8. Beveiliging</h2>
                <p className="text-gray-600 leading-relaxed">
                  Wij nemen passende technische en organisatorische maatregelen om
                  uw persoonsgegevens te beschermen. Onze website maakt gebruik van
                  SSL-encryptie voor veilige gegevensoverdracht.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">9. Cookies</h2>
                <p className="text-gray-600 leading-relaxed">
                  Onze website maakt alleen gebruik van strikt noodzakelijke cookies.
                  Wij gebruiken geen tracking- of marketingcookies.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">10. Klachten</h2>
                <p className="text-gray-600 leading-relaxed">
                  Indien u een klacht heeft over de verwerking van uw
                  persoonsgegevens, neem dan contact met ons op. U kunt ook een
                  klacht indienen bij de Autoriteit Persoonsgegevens
                  (www.autoriteitpersoonsgegevens.nl).
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
