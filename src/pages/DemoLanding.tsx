import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const WA_NUMBER = "6281392340102";

function waLink(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

const demos = {
  "kedai-kopi": {
    badge: "Demo UMKM Makanan & Minuman",
    name: "Kedai Kopi Senja",
    tagline: "Kopi lokal segar, tempat nongkrong santai, dan menu harian yang gampang dipesan.",
    desc: "Contoh landing page untuk coffee shop kecil, kedai makanan, atau usaha kuliner rumahan yang butuh tampilan rapi dan tombol order WhatsApp.",
    accent: "#B45309",
    accentLight: "#FEF3C7",
    bg: "from-amber-50 via-white to-orange-50",
    dark: "#431407",
    cta: "Order via WhatsApp",
    heroImg: "/demo-assets/kedai-kopi-hero.jpg",
    gallery: [
      { src: "/demo-assets/kedai-kopi-1.jpg", alt: "Suasana kedai kopi" },
      { src: "/demo-assets/kedai-kopi-2.jpg", alt: "Menu kopi dan snack" },
    ],
    features: [
      { title: "Menu unggulan", desc: "Tampilkan best seller dengan foto dan harga jelas." },
      { title: "Jam buka & lokasi", desc: "Langsung terhubung ke Google Maps, tidak perlu tanya-tanya lagi." },
      { title: "Promo harian", desc: "Highlight promo spesial biar calon pelanggan tertarik." },
      { title: "Tombol order cepat", desc: "Satu klik langsung ke WhatsApp, tanpa ribet." },
    ],
    menuItems: [
      { name: "Es Kopi Susu Senja", price: "Rp18K", tag: "Best Seller" },
      { name: "Americano Panas", price: "Rp15K", tag: "" },
      { name: "Roti Bakar Cokelat", price: "Rp12K", tag: "Favorit" },
      { name: "Paket Nongkrong 2 Orang", price: "Rp45K", tag: "Hemat" },
    ],
    sections: ["Hero + foto suasana", "Menu best seller", "Promo hari ini", "Lokasi + maps", "Jam buka", "Testimoni singkat", "FAQ", "CTA WhatsApp"],
    proof: "Cocok buat kedai yang ingin link bio lebih niat daripada sekadar feed Instagram. Calon pelanggan langsung bisa lihat menu, lokasi, dan order dalam satu halaman.",
  },
  "barbershop": {
    badge: "Demo Jasa Lokal",
    name: "Rapiin Barbershop",
    tagline: "Potong rambut rapi, booking gampang, harga jelas dari awal.",
    desc: "Contoh landing page untuk barbershop, laundry, bengkel, servis AC, tutor, atau jasa lokal yang butuh halaman info + booking WhatsApp.",
    accent: "#0F766E",
    accentLight: "#CCFBF1",
    bg: "from-teal-50 via-white to-slate-50",
    dark: "#042F2E",
    cta: "Booking Jadwal",
    heroImg: "/demo-assets/barbershop-hero.jpg",
    gallery: [
      { src: "/demo-assets/barbershop-1.jpg", alt: "Interior barbershop" },
      { src: "/demo-assets/barbershop-2.jpg", alt: "Proses potong rambut" },
    ],
    features: [
      { title: "Daftar layanan", desc: "Semua jasa terdaftar rapi beserta harganya." },
      { title: "Harga mulai dari", desc: "Transparan, calon client tidak perlu tanya-tanya." },
      { title: "Lokasi usaha", desc: "Maps embed + alamat, gampang ditemukan." },
      { title: "Booking WhatsApp", desc: "Langsung chat admin, konfirmasi jadwal cepat." },
    ],
    menuItems: [
      { name: "Haircut Reguler", price: "Rp35K", tag: "Populer" },
      { name: "Haircut + Hair Wash", price: "Rp50K", tag: "" },
      { name: "Kids Cut", price: "Rp25K", tag: "" },
      { name: "Paket Grooming Lengkap", price: "Rp85K", tag: "Best Value" },
    ],
    sections: ["Hero + foto tempat", "Daftar layanan + harga", "Keunggulan", "Galeri suasana", "Lokasi + maps", "FAQ", "CTA booking WhatsApp"],
    proof: "Cocok buat jasa lokal yang sering ditanya harga, alamat, dan jadwal kosong. Satu link bisa dipasang di Google Business, Instagram, dan WhatsApp status.",
  },
  "event-komunitas": {
    badge: "Demo Event & Komunitas",
    name: "Creative Youth Meetup",
    tagline: "Halaman event simpel untuk daftar peserta dan jelasin acaranya.",
    desc: "Contoh landing page untuk event sekolah/kampus, komunitas, webinar kecil, workshop, atau project baru yang perlu halaman informasi rapi.",
    accent: "#2563EB",
    accentLight: "#DBEAFE",
    bg: "from-blue-50 via-white to-cyan-50",
    dark: "#172554",
    cta: "Daftar Sekarang",
    heroImg: "/demo-assets/event-hero.jpg",
    gallery: [
      { src: "/demo-assets/event-1.jpg", alt: "Suasana event" },
      { src: "/demo-assets/event-2.jpg", alt: "Peserta workshop" },
    ],
    features: [
      { title: "Info acara", desc: "Tanggal, waktu, tema, dan venue — semua di satu tempat." },
      { title: "Benefit ikut", desc: "Kenapa orang harus hadir, dijelaskan dengan jelas." },
      { title: "Jadwal rundown", desc: "Susunan acara yang bisa di-scroll." },
      { title: "CTA daftar", desc: "Tombol daftar langsung ke form atau WhatsApp." },
    ],
    menuItems: [
      { name: "Sharing Session", price: "Gratis", tag: "" },
      { name: "Mini Workshop", price: "Rp25K", tag: "Sertifikat" },
      { name: "Networking Circle", price: "Gratis", tag: "Populer" },
      { name: "Community Booth", price: "Rp50K", tag: "Brand Exposure" },
    ],
    sections: ["Hero + foto venue", "Tema event", "Benefit ikut", "Rundown acara", "Speaker / host", "Sponsor", "FAQ", "CTA daftar"],
    proof: "Cocok buat promosi acara tanpa harus bikin sistem pendaftaran yang ribet dulu. Satu halaman cukup untuk jelasin acara dan kumpulin pendaftar via WhatsApp atau Google Form.",
  },
} as const;

type DemoKey = keyof typeof demos;

function getDemoKey(): DemoKey {
  const slug = window.location.pathname.split("/").filter(Boolean).pop() as DemoKey | undefined;
  return slug && slug in demos ? slug : "kedai-kopi";
}

export default function DemoLanding() {
  const demo = demos[getDemoKey()];

  return (
    <div className={`min-h-screen bg-gradient-to-br ${demo.bg} text-slate-900`}>
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-white/70 bg-white/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <a href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-slate-950">
            <ArrowLeft className="h-4 w-4" /> Kembali ke Khaa Digital
          </a>
          <span className="rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white" style={{ backgroundColor: demo.accent }}>Demo Preview</span>
        </div>
      </header>

      {/* HERO IMAGE */}
      <section className="relative h-[50vh] min-h-[340px] overflow-hidden sm:h-[60vh]">
        <img
          src={demo.heroImg}
          alt={`Suasana ${demo.name}`}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${demo.dark}ee, ${demo.dark}55 55%, transparent)` }} />
        <div className="container relative mx-auto flex h-full flex-col justify-end px-4 pb-10 sm:pb-14">
          <span className="mb-3 inline-block w-fit rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white/90" style={{ backgroundColor: `${demo.accent}cc` }}>{demo.badge}</span>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">{demo.name}</h1>
          <p className="mt-4 max-w-2xl text-lg font-semibold leading-relaxed text-white/90">{demo.tagline}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="h-12 rounded-full px-7 text-base text-white shadow-lg" style={{ backgroundColor: demo.accent }} asChild>
              <a href={waLink(`Halo Khaa Digital, saya tertarik bikin landing page seperti demo ${demo.name}.`)} target="_blank" rel="noopener noreferrer">
                {demo.cta} <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-12 rounded-full border-white/40 bg-white/15 px-7 text-base text-white backdrop-blur hover:bg-white/25" asChild>
              <a href="#detail">Lihat Detail</a>
            </Button>
          </div>
        </div>
      </section>

      <main>
        {/* DESKRIPSI */}
        <section className="py-14 lg:py-18">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-base leading-relaxed text-slate-600">{demo.desc}</p>
            </div>
          </div>
        </section>

        {/* FITUR */}
        <section id="detail" className="bg-white/80 py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-widest" style={{ color: demo.accent }}>Fitur utama</p>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl" style={{ color: demo.dark }}>Yang bikin landing page ini berguna</h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {demo.features.map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-slate-100 bg-white p-6 shadow-sm">
                  <CheckCircle2 className="mb-4 h-6 w-6" style={{ color: demo.accent }} />
                  <h3 className="mb-2 text-lg font-bold" style={{ color: demo.dark }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MENU / HARGA */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-widest" style={{ color: demo.accent }}>Contoh konten</p>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl" style={{ color: demo.dark }}>Menu / Layanan yang ditampilkan</h2>
            </div>
            <div className="mx-auto grid max-w-3xl gap-4">
              {demo.menuItems.map((item) => (
                <div key={item.name} className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white px-6 py-4 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-bold" style={{ color: demo.dark }}>{item.name}</span>
                        {item.tag && (
                          <span className="rounded-full px-3 py-1 text-xs font-bold" style={{ backgroundColor: demo.accentLight, color: demo.accent }}>{item.tag}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <span className="text-lg font-black" style={{ color: demo.accent }}>{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GALERI */}
        <section className="bg-white/80 py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-widest" style={{ color: demo.accent }}>Suasana</p>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl" style={{ color: demo.dark }}>Galeri foto</h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {demo.gallery.map((img) => (
                <div key={img.src} className="overflow-hidden rounded-[1.5rem] shadow-lg">
                  <img src={img.src} alt={img.alt} className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-80" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION LIST */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-widest" style={{ color: demo.accent }}>Struktur halaman</p>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl" style={{ color: demo.dark }}>Section yang disiapkan</h2>
            </div>
            <div className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {demo.sections.map((section, i) => (
                <div key={section} className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-sm">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white" style={{ backgroundColor: demo.accent }}>{i + 1}</span>
                  <span className="text-sm font-semibold text-slate-700">{section}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SUITABLE FOR */}
        <section className="bg-white/80 py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl rounded-[2rem] p-8 text-center text-white sm:p-12" style={{ background: `linear-gradient(135deg, ${demo.dark}, ${demo.accent})` }}>
              <Star className="mx-auto mb-4 h-8 w-8" />
              <p className="text-xl font-black leading-relaxed sm:text-2xl">{demo.proof}</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl" style={{ color: demo.dark }}>Tertarik bikin landing page seperti ini?</h2>
              <p className="mb-8 text-base leading-relaxed text-slate-600">
                Hubungi Khaa Digital via WhatsApp untuk konsultasi gratis. Ceritain usaha kamu, nanti kami bantu susun konsep dan copywriting-nya.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" className="h-14 rounded-full px-8 text-base text-white shadow-lg" style={{ backgroundColor: demo.accent }} asChild>
                  <a href={waLink(`Halo Khaa Digital, saya mau tanya soal landing page seperti demo ${demo.name}.`)} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" /> Chat via WhatsApp
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="h-14 rounded-full bg-white/80 px-8 text-base" asChild>
                  <a href="/">Lihat Paket Harga</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200/70 bg-white/60 py-8">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:flex-row">
          <p className="text-sm text-slate-500">Demo oleh <span className="font-bold" style={{ color: demo.dark }}>Khaa Digital Service</span></p>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <a href="/" className="underline hover:text-slate-900">khaa.web.id</a>
            <span>•</span>
            <a href={waLink("Halo Khaa Digital, saya mau tanya soal jasa landing page.")} className="underline hover:text-slate-900" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
