import { ArrowLeft, ArrowRight, CheckCircle2, MapPin, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const WA_NUMBER = "6281392340102";

function waLink(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

const demos = {
  "kedai-kopi": {
    badge: "Demo UMKM Makanan & Minuman",
    name: "Kedai Kopi Senja",
    tagline: "Kopi lokal, tempat santai, dan menu harian yang gampang dipesan.",
    desc: "Contoh landing page untuk coffee shop kecil, kedai makanan, atau usaha kuliner rumahan yang butuh tampilan rapi dan tombol order WhatsApp.",
    accent: "#B45309",
    bg: "from-amber-50 via-white to-orange-50",
    dark: "#431407",
    cta: "Order via WhatsApp",
    features: ["Menu unggulan", "Jam buka & lokasi", "Promo harian", "Tombol order cepat"],
    services: ["Es Kopi Susu Senja", "Americano", "Roti Bakar", "Paket Nongkrong"],
    proof: "Cocok buat kedai yang ingin link bio lebih niat daripada cuma feed Instagram.",
  },
  "barbershop": {
    badge: "Demo Jasa Lokal",
    name: "Rapiin Barbershop",
    tagline: "Potong rambut rapi, booking gampang, harga jelas dari awal.",
    desc: "Contoh landing page untuk barbershop, laundry, bengkel, servis AC, tutor, atau jasa lokal yang butuh halaman info + booking WhatsApp.",
    accent: "#0F766E",
    bg: "from-teal-50 via-white to-slate-50",
    dark: "#042F2E",
    cta: "Booking Jadwal",
    features: ["Daftar layanan", "Harga mulai", "Lokasi usaha", "Booking WhatsApp"],
    services: ["Haircut", "Hair Wash", "Kids Cut", "Paket Grooming"],
    proof: "Cocok buat jasa lokal yang sering ditanya harga, alamat, dan jadwal kosong.",
  },
  "event-komunitas": {
    badge: "Demo Event & Komunitas",
    name: "Creative Youth Meetup",
    tagline: "Halaman event simpel untuk daftar peserta dan jelasin acaranya.",
    desc: "Contoh landing page untuk event sekolah/kampus, komunitas, webinar kecil, workshop, atau project baru yang perlu halaman informasi rapi.",
    accent: "#2563EB",
    bg: "from-blue-50 via-white to-cyan-50",
    dark: "#172554",
    cta: "Daftar Sekarang",
    features: ["Info acara", "Benefit ikut", "Jadwal", "CTA daftar/kontak"],
    services: ["Sharing Session", "Mini Workshop", "Networking", "Community Booth"],
    proof: "Cocok buat promosi acara tanpa harus bikin sistem pendaftaran yang ribet dulu.",
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
      <header className="border-b border-white/70 bg-white/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <a href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-slate-950">
            <ArrowLeft className="h-4 w-4" /> Kembali ke Khaa Digital
          </a>
          <span className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500 shadow-sm">Demo Preview</span>
        </div>
      </header>

      <main>
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
              <div className="space-y-7">
                <div className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold shadow-sm" style={{ color: demo.accent }}>
                  {demo.badge}
                </div>
                <div>
                  <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl" style={{ color: demo.dark }}>
                    {demo.name}
                  </h1>
                  <p className="mt-5 max-w-2xl text-xl font-semibold leading-relaxed text-slate-700">{demo.tagline}</p>
                </div>
                <p className="max-w-2xl leading-relaxed text-slate-600">{demo.desc}</p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button size="lg" className="h-12 rounded-full px-7 text-base text-white" style={{ backgroundColor: demo.accent }} asChild>
                    <a href={waLink(`Halo Khaa Digital, saya tertarik bikin landing page seperti demo ${demo.name}.`)} target="_blank" rel="noopener noreferrer">
                      {demo.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="h-12 rounded-full bg-white/80 px-7 text-base" asChild>
                    <a href="#detail">Lihat Detail</a>
                  </Button>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-2xl backdrop-blur-xl">
                <div className="rounded-[1.5rem] p-6 text-white" style={{ background: `linear-gradient(135deg, ${demo.dark}, ${demo.accent})` }}>
                  <div className="mb-16 flex items-center justify-between">
                    <span className="font-black">{demo.name}</span>
                    <Star className="h-5 w-5" />
                  </div>
                  <p className="text-2xl font-black leading-tight">{demo.tagline}</p>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <MapPin className="mb-3 h-5 w-5" style={{ color: demo.accent }} />
                    <div className="font-bold">Info jelas</div>
                    <p className="text-sm text-slate-500">alamat, harga, layanan</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <Phone className="mb-3 h-5 w-5" style={{ color: demo.accent }} />
                    <div className="font-bold">CTA cepat</div>
                    <p className="text-sm text-slate-500">langsung ke WhatsApp</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="detail" className="bg-white/80 py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-sm lg:col-span-1">
                <h2 className="mb-4 text-2xl font-black">Yang ditonjolkan</h2>
                <div className="space-y-3">
                  {demo.features.map((item) => (
                    <div key={item} className="flex gap-3 text-sm text-slate-600">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: demo.accent }} /> {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-sm lg:col-span-2">
                <h2 className="mb-4 text-2xl font-black">Contoh isi halaman</h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {demo.services.map((item) => (
                    <div key={item} className="rounded-2xl bg-slate-50 p-4 font-semibold text-slate-700">{item}</div>
                  ))}
                </div>
                <div className="mt-5 rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-5 text-sm leading-relaxed text-slate-600">
                  {demo.proof}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
