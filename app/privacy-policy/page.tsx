import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Servis MGM",
  description: "Privacy Policy i uslovi korišćenja Servis MGM sajta",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto pt-28 pb-16 px-6 md:px-8 md:py-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-8 ">
          Privacy Policy
        </h1>
        
        <div className="prose prose-lg max-w-none space-y-6">
          <p className="text-sm mb-8">
            Poslednje ažuriranje: {new Date().toLocaleDateString('sr-RS')}
          </p>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">1. Uvod</h2>
            <p>
              Servis MGM ("mi", "naš", "nas") poštuje vašu privatnost i obavezuje se da zaštiti vaše lične podatke. 
              Ova Privacy Policy objašnjava kako prikupljamo, koristimo i štitimo vaše informacije kada koristite naš sajt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">2. Podaci koje prikupljamo</h2>
            <h3 className="text-xl font-medium mb-3">2.1 Lični podaci</h3>
            <p>Prikupljamo sledeće lične podatke:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ime i prezime</li>
              <li>Email adresa</li>
              <li>Broj telefona</li>
              <li>Poruke koje nam šaljete</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6">2.2 Automatski prikupljeni podaci</h3>
            <p>Kada posetite naš sajt, automatski prikupljamo:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP adresu</li>
              <li>Tip browser-a i operativnog sistema</li>
              <li>Stranice koje ste posetili</li>
              <li>Vreme i datum posete</li>
              <li>Referrer URL</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">3. Kako koristimo vaše podatke</h2>
            <p>Vaše podatke koristimo za:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Obradu vaših zahteva za servis</li>
              <li>Komunikaciju sa vama</li>
              <li>Poboljšanje naših usluga</li>
              <li>Analizu korišćenja sajta</li>
              <li>Marketing i reklamiranje (uz vašu saglasnost)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">4. Google Ads i Analytics</h2>
            <p>
              Naš sajt koristi Google Ads i Google Analytics za praćenje posetilaca i prikazivanje oglasa. 
              Google može koristiti kolačiće i slične tehnologije za prikupljanje informacija o vašem korišćenju sajta.
            </p>
            <p className="mt-4">
              Možete se odjaviti od Google Ads personalizacije posetom{" "}
              <a 
                href="https://www.google.com/settings/ads" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Google Ads Settings
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">5. Kolačići (Cookies)</h2>
            <p>
              Naš sajt koristi kolačiće za poboljšanje korisničkog iskustva, analizu sajta i marketing. 
              Možete kontrolisati kolačiće kroz postavke vašeg browser-a.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">6. Deljenje podataka</h2>
            <p>
              Ne prodajemo, ne iznajmljujemo niti delimo vaše lične podatke sa trećim stranama, 
              osim u sledećim slučajevima:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Sa vašom eksplicitnom saglasnošću</li>
              <li>Kada je potrebno za pružanje usluga</li>
              <li>Kada zahtevaju zakoni</li>
              <li>Sa pouzdanim partnerima koji nam pomažu u poslovanju</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">7. Sigurnost podataka</h2>
            <p>
              Implementiramo odgovarajuće tehničke i organizacione mere za zaštitu vaših ličnih podataka 
              od neovlašćenog pristupa, izmene, otkrivanja ili uništenja.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">8. Vaša prava</h2>
            <p>Imate pravo da:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Pristupite svojim ličnim podacima</li>
              <li>Ispravite netačne podatke</li>
              <li>Obrišete svoje podatke</li>
              <li>Ograničite obradu vaših podataka</li>
              <li>Prenesete svoje podatke</li>
              <li>Prigovorite na obradu</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">9. Čuvanje podataka</h2>
            <p>
              Čuvamo vaše lične podatke samo onoliko dugo koliko je potrebno za ispunjavanje svrhe 
              za koju su prikupljeni ili koliko zahtevaju zakoni.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">10. Promene Privacy Policy</h2>
            <p>
              Možemo ažurirati ovu Privacy Policy povremeno. Obavestićemo vas o značajnim promenama 
              objavljivanjem nove verzije na našem sajtu.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">11. Kontakt</h2>
            <p>
              Ako imate pitanja o ovoj Privacy Policy ili želite da koristite svoja prava, 
              kontaktirajte nas:
            </p>
            <div className="mt-4 p-4 bg-gray-50 text-gray-700 rounded-lg">
              <p><strong>Servis MGM</strong></p>
              <p>Email: servismgm@gmail.com</p>
              <p>Telefon: +38164 552 3333</p>
              <p>Adresa: Zdravka Čelara 12, Beograd</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
