import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden",
  description:
    "Lees de algemene voorwaarden van M.G B.V. voor onze transport-, beveiligings- en reinigingsdiensten.",
};

export default function VoorwaardenPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-primary-800 to-primary-900">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Algemene Voorwaarden
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Onze voorwaarden voor een transparante en eerlijke samenwerking.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-12">
            <p className="text-gray-500 mb-10 text-sm">Laatst bijgewerkt: 2026</p>

            <div className="space-y-10">
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Artikel 1 - Definities
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  In deze voorwaarden wordt verstaan onder:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><strong>M.G B.V.:</strong> de besloten vennootschap M.G B.V., gevestigd in Nederland</li>
                  <li><strong>Opdrachtgever:</strong> de natuurlijke of rechtspersoon die een overeenkomst aangaat met M.G B.V.</li>
                  <li><strong>Diensten:</strong> de transport-, beveiligings- en reinigingsdiensten geleverd door M.G B.V.</li>
                  <li><strong>Overeenkomst:</strong> de afspraak tussen M.G B.V. en Opdrachtgever</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Artikel 2 - Toepasselijkheid
                </h2>
                <ol className="list-decimal pl-6 text-gray-600 space-y-2">
                  <li>Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes en overeenkomsten tussen M.G B.V. en Opdrachtgever.</li>
                  <li>Afwijkingen van deze voorwaarden zijn alleen geldig indien schriftelijk overeengekomen.</li>
                  <li>De toepasselijkheid van eventuele inkoop- of andere voorwaarden van Opdrachtgever wordt uitdrukkelijk van de hand gewezen.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Artikel 3 - Offertes en overeenkomsten
                </h2>
                <ol className="list-decimal pl-6 text-gray-600 space-y-2">
                  <li>Alle offertes zijn vrijblijvend, tenzij uitdrukkelijk anders vermeld.</li>
                  <li>Een overeenkomst komt tot stand op het moment dat de Opdrachtgever de offerte accepteert of wanneer M.G B.V. een opdracht bevestigt.</li>
                  <li>Mondelinge afspraken binden M.G B.V. pas na schriftelijke bevestiging.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Artikel 4 - Uitvoering van de diensten
                </h2>
                <ol className="list-decimal pl-6 text-gray-600 space-y-2">
                  <li>M.G B.V. zal de opdracht naar beste inzicht en vermogen uitvoeren.</li>
                  <li>Opgegeven levertijden zijn indicatief en gelden nooit als fatale termijn, tenzij uitdrukkelijk schriftelijk anders overeengekomen.</li>
                  <li>M.G B.V. is gerechtigd derden in te schakelen voor de uitvoering van de opdracht.</li>
                  <li>De Opdrachtgever zorgt voor toegang tot de locatie waar de dienst wordt uitgevoerd.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Artikel 5 - Verplichtingen Opdrachtgever
                </h2>
                <ol className="list-decimal pl-6 text-gray-600 space-y-2">
                  <li>De Opdrachtgever verstrekt tijdig en correct alle informatie die nodig is voor uitvoering van de opdracht.</li>
                  <li>Bij transport- en verhuisdiensten zorgt de Opdrachtgever voor deugdelijke verpakking en juiste adresgegevens.</li>
                  <li>De Opdrachtgever garandeert dat geen verboden, gevaarlijke of illegale goederen worden aangeboden.</li>
                  <li>De Opdrachtgever is verantwoordelijk voor de juistheid van de verstrekte informatie.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Artikel 6 - Prijzen en betaling
                </h2>
                <ol className="list-decimal pl-6 text-gray-600 space-y-2">
                  <li>Alle prijzen zijn in euro&apos;s en exclusief BTW, tenzij anders vermeld.</li>
                  <li>Betaling dient te geschieden binnen 14 dagen na factuurdatum op IBAN NL59ADYB1000062973 ten name van M.G B.V., tenzij anders overeengekomen.</li>
                  <li>Bij niet-tijdige betaling is M.G B.V. gerechtigd wettelijke rente en incassokosten in rekening te brengen.</li>
                  <li>M.G B.V. behoudt zich het recht voor prijzen te wijzigen, met vooraankondiging.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Artikel 7 - Aansprakelijkheid
                </h2>
                <ol className="list-decimal pl-6 text-gray-600 space-y-2">
                  <li>De aansprakelijkheid van M.G B.V. is beperkt tot het bedrag dat door de aansprakelijkheidsverzekering wordt uitgekeerd, met een maximum van de factuurwaarde van de opdracht.</li>
                  <li>M.G B.V. is niet aansprakelijk voor indirecte schade, gevolgschade of gederfde winst.</li>
                  <li>M.G B.V. is niet aansprakelijk voor schade veroorzaakt door ondeugdelijke verpakking of onjuiste informatie van Opdrachtgever.</li>
                  <li>Schade dient binnen 24 uur na uitvoering schriftelijk te worden gemeld.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Artikel 8 - Overmacht
                </h2>
                <ol className="list-decimal pl-6 text-gray-600 space-y-2">
                  <li>In geval van overmacht is M.G B.V. gerechtigd de uitvoering op te schorten of te annuleren zonder schadeplichtig te zijn.</li>
                  <li>Onder overmacht wordt verstaan: extreme weersomstandigheden, stakingen, verkeersopstoppingen, pandemieën, overheidsmaatregelen en andere omstandigheden buiten de macht van M.G B.V.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Artikel 9 - Annulering
                </h2>
                <ol className="list-decimal pl-6 text-gray-600 space-y-2">
                  <li>Annulering door de Opdrachtgever dient schriftelijk te geschieden.</li>
                  <li>Bij annulering minder dan 24 uur voor uitvoering kunnen annuleringskosten in rekening worden gebracht.</li>
                  <li>Indien M.G B.V. reeds werkzaamheden heeft verricht, worden deze in rekening gebracht.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Artikel 10 - Klachten
                </h2>
                <ol className="list-decimal pl-6 text-gray-600 space-y-2">
                  <li>Klachten dienen binnen 48 uur na uitvoering schriftelijk te worden ingediend.</li>
                  <li>Het indienen van een klacht schort de betalingsverplichting niet op.</li>
                  <li>M.G B.V. zal klachten binnen 14 dagen in behandeling nemen.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Artikel 11 - Toepasselijk recht
                </h2>
                <ol className="list-decimal pl-6 text-gray-600 space-y-2">
                  <li>Op alle overeenkomsten is Nederlands recht van toepassing.</li>
                  <li>Geschillen worden voorgelegd aan de bevoegde rechter in het arrondissement waar M.G B.V. is gevestigd.</li>
                </ol>
              </section>

              <section className="pt-6 border-t border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Contact</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Voor vragen over deze algemene voorwaarden:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>E-mail: info@mg-services.nl</li>
                  <li>Telefoon: 06-84780008</li>
                  <li>KvK: 94346887</li>
                  <li>BTW: NL866743522B01</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
