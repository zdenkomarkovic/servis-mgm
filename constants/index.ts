import { IconType } from "react-icons";
import { GiWeightLiftingUp } from "react-icons/gi";
import { GiWeight } from "react-icons/gi";
import { IoFitnessOutline } from "react-icons/io5";
import { FaPeopleCarry } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { PiRocketLaunchBold } from "react-icons/pi";
import { LuTimerReset } from "react-icons/lu";

export const navList = [
  {
    title: "Početna",
    link: "/",
  },
  {
    title: "Usluge",
    list: [
      {
        title: "Servis laptop računara",
        link: "/servis-laptop-racunara",
      },
      {
        title: "Servis desktop računara",
        link: "/servis-desktop-racunara",
      },
      {
        title: "Servis elektronike",
        link: "servis-elektronike",
      },
      {
        title: "Servis i popravka konzola",
        link: "servis-i-popravka-konzola",
      },
      {
        title: "Prodaja i sklapanje konfiguracija",
        link: "prodaja-i-sklapanje-konfiguracija",
      },
    ],
  },
  {
    title: "Kontakt",
    link: "/kontakt",
  },
];

type Page = {
  title: string;
  text: string;
  description: string;
  lines: string[];
  workflow: string;
  image: string;
  alt: string;
  whyus: string[];
  cta: string;
};

// Glavni objekat može imati bilo koji broj stranica
type Pages = Record<string, Page>;

export const pages: Pages = {
  laptop: {
    title: "Servis i popravka laptop računara – Servis MGM",
    text: "Vaš laptop je postao spor, ne uključuje se ili ima oštećen ekran? Servis MGM nudi stručnu i brzu popravku svih vrsta laptop računara, bez obzira na brend i starost uređaja.",
    description: "Naš tim dijagnostikuje i otklanja sve vrste kvarova:",
    lines: [
      "Zamena oštećenog ekrana",
      "Popravka matične ploče",
      "Zamena tastature ili touchpada",
      "Čišćenje sistema hlađenja i zamena termalne paste",
      "Popravka punjača i konektora za napajanje",
      "Instalacija operativnog sistema i softvera",
    ],
    workflow:
      "Prilikom prijema uređaja radimo detaljnu dijagnostiku i informišemo vas o kvaru i ceni popravke. Nakon vaše potvrde, vršimo servis i testiranje pre nego što vam vratimo laptop.",
    image: "/laptop.jpg",
    alt: "servis laptop",
    whyus: [
      "Više godina iskustva u popravci laptopova",
      "Korišćenje originalnih i kvalitetnih delova",
      "Brz rok isporuke",
      "Garancija na izvršene radove",
    ],
    cta: "Pozovite nas odmah i osposobite svoj laptop – Servis MGM je vaš pouzdan partner!",
  },
  desctop: {
    title: "Servis i popravka desktop računara – Servis MGM",
    text: "Vaš desktop računar se ne pokreće, iznenada se gasi ili radi usporeno? Servis MGM pruža pouzdanu i brzu uslugu popravke i nadogradnje desktop računara svih tipova.",
    description: "Naš tim dijagnostikuje i otklanja sve vrste kvarova:",
    lines: [
      "Popravka matične ploče i napajanja",
      "Zamena grafičke ili zvučne kartice",
      "Nadogradnja memorije i procesora",
      "Zamena hard diska ili prelazak na SSD",
      "Čišćenje prašine i optimizacija rada",
      "Instalacija operativnog sistema i programa",
    ],
    workflow:
      "Dijagnostikujemo problem, predlažemo rešenje i po dogovoru vršimo servis. Po završetku, računar testiramo kako bi bio potpuno spreman za rad.",
    image: "/laptop.jpg",
    alt: "servis desctop",
    whyus: [
      "Stručno osoblje sa iskustvom u hardveru i softveru",
      "Korišćenje pouzdanih komponenti",
      "Mogućnost nadogradnje sistema prema vašim potrebama",
      "Garancija na sve popravke",
    ],
    cta: " Donesite svoj računar u Servis MGM i vratite ga u savršenu formu!",
  },
  electronics: {
    title: "Servis elektronike – Servis MGM",
    text: "Pored računara, bavimo se i popravkom razne elektronike. Od kućnih uređaja do specijalizovane opreme, pružamo stručnu i pouzdanu uslugu.",
    description: "Naš tim dijagnostikuje i otklanja sve vrste kvarova:",
    lines: [
      "Popravka audio i video opreme",
      "Servis monitora i televizora",
      "Popravka štampača i skenera",
      "Popravka i zamena elektronskih komponenti",
      "Detaljna dijagnostika i optimizacija rada uređaja",
    ],
    workflow:
      "Vaš uređaj prolazi kroz detaljnu dijagnostiku, nakon čega vas obaveštavamo o mogućnostima popravke i troškovima",
    image: "/laptop.jpg",
    alt: "servis elektronike",
    whyus: [
      "Iskustvo u radu sa raznovrsnom elektronikom",
      "Korišćenje kvalitetnih delova",
      "Pažljiv pristup svakom uređaju",
    ],
    cta: "Servis MGM – vaš partner za profesionalnu popravku elektronike!",
  },
  console: {
    title: "Servis i popravka gejming konzola – Servis MGM",
    text: "Kompletna popravka elektronike matičnih ploča, reparacija iščupanih vodova, detekcija i otklanjanje svih kvarova , popravka napajanja, zamena svih čipova, zamena hdmi konektora, hdmi cipa, čišćenje i zamena paste, nabavka delova itd Soni 4, Soni 5, Xbox One S, X , Serije S i X modela, Nintendo Switch ( kompletna popravka + čipovanje).",
    description: "Naš tim dijagnostikuje i otklanja sve vrste kvarova:",
    lines: [
      "Popravka matičnih ploča nintendo",
      "Popravka simptoma plavi ekran",
      "narandzasti ekran",
      "joycon nema konekciju sa konzolom",
      "tač skrin ne radi",
      "zamena ekrana",
      "konzola se ne pali",
      "nece da puni itd...",
      "čipovanje kvalitetno radjeno modchip rp2040 zero",
      "hwfly rp2040 metodama ubacivanje igrica po želji",
    ],
    workflow:
      "Prvo radimo dijagnostiku kako bismo otkrili uzrok kvara, zatim vas kontaktiramo sa predlogom rešenja i cenom.",
    image: "/laptop.jpg",
    alt: "servis konzola",
    whyus: [
      "Brz i kvalitetan servis konzola",
      "Iskustvo u radu sa svim generacijama uređaja",
      "Garancija na rad i ugrađene delove",
    ],
    cta: "Servis MGM – igrajte bez brige, mi brinemo o vašoj konzoli!",
  },
  prodaja: {
    title: "Prodaja i sklapanje računarskih konfiguracija – Servis MGM",
    text: "Želite računar koji je tačno prilagođen vašim potrebama? Servis MGM nudi prodaju i sklapanje konfiguracija po meri – od kancelarijskih računara do moćnih gejming mašina.",
    description: "Naš tim dijagnostikuje i otklanja sve vrste kvarova:",
    lines: [
      "Pomoć pri izboru komponenti",
      "Sklapanje računara po narudžbini",
      "Instalacija sistema i optimizacija rada",
      "Testiranje stabilnosti",
      "Garancija na sve komponente",
    ],
    workflow:
      "Saslušamo vaše potrebe i budžet, predložimo optimalne komponente i sklopimo računar spreman za upotrebu.",
    image: "/laptop.jpg",
    alt: "prodaja komponenti",
    whyus: [
      "Višegodišnje iskustvo u sklapanju računara",
      "Samo proverene i kvalitetne komponente",
      "Prilagođeno rešenje za svakog korisnika",
    ],
    cta: "Naručite svoju konfiguraciju kod Servisa MGM i uživajte u savršenom radu!",
  },
};

export interface WorkList {
  id: number;
  title: string;
  text: string;
}

export const workList = [
  {
    id: 1,
    title: "Donesite uređaj",
    text: "ili nas kontaktirajte za savet",
    icon: FaPeopleCarry,
  },
  {
    id: 2,
    title: "Dijagnostika",
    text: "otkrivamo uzrok problema",
    icon: IoFitnessOutline,
  },
  {
    id: 3,
    title: "Ponuda",
    text: "dogovaramo cenu i rok",
    icon: IoIosPeople,
  },
  {
    id: 4,
    title: "Servis i testiranje",
    text: "Nakon servisa radimo detaljnu proveru",
    icon: GiWeightLiftingUp,
  },
  {
    id: 5,
    title: "Preuzimanje uređaja",
    text: "Dobijate uredjaj koji je spreman za dalji rad",
    icon: PiRocketLaunchBold,
  },
];

export interface TestimonialData {
  id: number;
  title: string;
  image: string;
  description: string;
}

export const testimonialData: TestimonialData[] = [
  {
    id: 1,
    title: "Jelena R.",
    image: "/hero1.jpg",
    description:
      "Treninzi su odlični, atmosfera motivišuća, a instruktori puni znanja i energije! Već nakon nekoliko nedelja osećam ogromnu promenu u kondiciji i snazi. Preporučujem svima!",
  },
  {
    id: 2,
    title: "Ivana S.",
    image: "/hero1.jpg",
    description:
      "Fitnes klub je za mene više od mesta za vežbanje – ovde sam pronašla ekipu koja me inspiriše i podržava! Vežbamo zajedno, bodrimo se i družimo i van treninga. Ne bih ovo menjala ni za šta!",
  },
  {
    id: 3,
    title: "Ana M.",
    image: "/hero2.jpg",
    description:
      "Posle svakog treninga osećam se snažnije i zdravije! Programi su prilagođeni svim nivoima, a podrška trenera me stalno gura ka boljoj verziji sebe.",
  },
  {
    id: 4,
    title: "Katarina N.",
    image: "/hero3.jpg",
    description:
      "Od kada treniram ovde, imam više energije, manje stresa i bolju kondiciju! Ambijent je fantastičan, a treninzi su uvek dinamični i zanimljivi.",
  },
  {
    id: 5,
    title: "Milica P.",
    image: "/hero1.jpg",
    description:
      "Treniram ovde već nekoliko godina i mogu reći da mi je ovo druga porodica! Pored sjajnih treninga, upoznala sam divne ljude koji su mi postali bliski prijatelji. Motivacija i podrška su neverovatni!",
  },
];

export interface Cards1Data {
  id: number;
  link: string;
  image: string;
  alt: string;
  title: string;
  text: string;
}

export const cards1Data: Cards1Data[] = [
  {
    id: 1,
    link: "/servis-laptop-racunara",
    image: "/laptop.jpg",
    alt: "laptop servis",
    title: "Popravka i servis laptop računara",
    text: "zamena ekrana, tastature, popravka matične ploče, čišćenje i optimizacija rada..",
  },
  {
    id: 2,
    link: "/servis-desktop-racunara",
    image: "/laptop.jpg",
    alt: "laptop servis",
    title: "Popravka i servis desktop računara",
    text: "otklanjanje hardverskih kvarova, nadogradnja komponenti, instalacija softvera.",
  },
  {
    id: 3,
    link: "/servis-elektronike",
    image: "/laptop.jpg",
    alt: "laptop servis",
    title: "Servis elektronike",
    text: "popravka monitora, televizora, audio/video opreme, štampača i drugih uređaja.",
  },
  {
    id: 4,
    link: "/servis-i-popravka-konzola",
    image: "/laptop.jpg",
    alt: "laptop servis",
    title: "Popravka gejming konzola",
    text: "PlayStation 4 i 5, Xbox i Nintendo – od HDMI porta do čišćenja i softverskih problema.",
  },
  {
    id: 5,
    link: "/prodaja-i-sklapanje-konfiguracija",
    image: "/laptop.jpg",
    alt: "laptop servis",
    title: "Prodaja i sklapanje konfiguracija",
    text: "računar sklopljen po vašim potrebama, spreman za rad od prvog dana.",
  },
];

export interface ServisCardsData {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export const servisCardsData = [
  {
    id: 1,
    icon: LuTimerReset,
    title: "Šlep automobila",
    text: "Vršimo šlep svih vrsta automobila, bez obzira na stanje vozila – havarisana, poluvozna ili ispravna.",
  },
  {
    id: 2,
    icon: GiWeight,
    title: "Šlep motora",
    text: "Šlepamo motore, skutere, četvorotočkaše, motorne sanke i druga vozila brzo i sigurno.",
  },
  {
    id: 3,
    icon: GiWeight,
    title: "Šlep kombija i kamiona",
    text: "Pružamo uslugu transporta kombija, kamiona i radnih mašina širom Srbije, uz sigurnost i brzinu.",
  },
  {
    id: 4,
    icon: GiWeight,
    title: "Šlep vozila iz inostranstva",
    text: "Vršimo prevoz automobila iz inostranstva po najpovoljnijim cenama u Srbiji.",
  },
  {
    id: 5,
    icon: GiWeight,
    title: "Pomoc na putu 0-24h",
    text: "Svakom može zatrebati u nekom trenutku, naročito u hitnim slučajevima. Kada je potrebna šlep služba u Čačku i na teritoriji Zlatibora.",
  },
  {
    id: 6,
    icon: GiWeight,
    title: "Šlep lakog i teškog tereta",
    text: "Za vas prevozimo i laki i teški teret, kako u Čačku, tako i u drugim gradovima Srbije.",
  },
  {
    id: 7,
    icon: GiWeight,
    title: "Šlep havarisanog vozila",
    text: "Ukoliko ste imali havariju na putu, tu smo da pokupimo vaše vozilo i bezbedno ga odšlepamo do servisa.",
  },
  {
    id: 8,
    icon: GiWeight,
    title: "Šlep radnih mašina",
    text: "Šlep radnih mašina do lokacije na kojoj mogu nastaviti s poslom, brzo i sigurno.",
  },
  {
    id: 9,
    icon: GiWeight,
    title: "Izvlačenje sajlom vozila van puta",
    text: "Izvlačenje vozila sa puta sajlom, pažljivo izvedeno kako bi se izbegla dodatna oštećenja vozila.",
  },
  {
    id: 10,
    icon: GiWeight,
    title: "Prevoz poljoprivrednih mašina",
    text: "Prevoz poljoprivrednih mašina, priključaka i opreme – idealno rešenje za one koje je lakše transportovati nego voziti, kao i za neispravne mašine.",
  },
];

export interface Cards2Data {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export const cards2Data: Cards2Data[] = [
  {
    id: 1,
    icon: GiWeight,
    title: "Iskustvo i stručnost",
    text: "godine rada sa različitim vrstama tehnike",
  },
  {
    id: 2,
    icon: GiWeight,
    title: "Kvalitetni delovi",
    text: "samo originalne i proverenih proizvođača",
  },
  {
    id: 3,
    icon: GiWeight,
    title: "Brza dijagnostika",
    text: "kvar otkrivamo i rešavamo u najkraćem roku",
  },
  {
    id: 4,
    icon: GiWeight,
    title: "Garancija na rad",
    text: "sigurnost i poverenje u našu uslugu",
  },
  {
    id: 5,
    icon: GiWeight,
    title: "Pristupačne cene",
    text: "odličan odnos kvaliteta i cene",
  },
];

export interface Cards2DataText {
  text: string;
}
export const cards2DataText: Cards2DataText = {
  text: "Pružamo usluge izrade, montaže i održavanja elektro ormana za domaćinstva, poslovne prostore i industrijska postrojenja. Naš tim vodi računa o kvalitetu instalacija i bezbednosti sistema, uz poštovanje svih standarda i propisa.",
};

export interface Tim {
  name: string;
  title: string;
  image: string;
}

export const tim: Tim[] = [
  {
    name: "Marina Mitrovic",
    title: "Diplomirani inženjer zaštite na radu",
    image: "/slep puric.jpg",
  },
  {
    name: "Marina Mitrovic",
    title: "Diplomirani inženjer zaštite na radu",
    image: "/slep puric.jpg",
  },
  {
    name: "Marina Mitrovic",
    title: "Diplomirani inženjer zaštite na radu",
    image: "/slep puric.jpg",
  },
  {
    name: "Marina Mitrovic",
    title: "Diplomirani inženjer zaštite na radu",
    image: "/slep puric.jpg",
  },
  {
    name: "Marina Mitrovic",
    title: "Diplomirani inženjer zaštite na radu",
    image: "/slep puric.jpg",
  },
];
