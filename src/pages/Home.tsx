import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  CheckCircle2,
  Copy,
  Phone,
  Instagram,
  ArrowRight,
  Sparkles,
  MonitorSmartphone,
  MessageCircle,
  Palette,
  Globe,
  Clock,
  Shield,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

const WA_NUMBER = "6281392340102";
const WA_BASE = `https://wa.me/${WA_NUMBER}`;
const IG_LINK = "https://instagram.com/itsmaulacc";

function waLink(message: string) {
  return `${WA_BASE}?text=${encodeURIComponent(message)}`;
}

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const stagger = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

function Home() {
  const { toast } = useToast();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const briefText = `Halo Khaa Digital, saya mau mulai branding dari awal.

Nama usaha/project:
Jenis usaha:
Target pelanggan:
Produk/jasa utama:
Masalah yang ingin dibantu:
Gaya brand yang disukai:
Referensi jika ada:
Deadline:
Kontak:`;

  const copyBrief = () => {
    navigator.clipboard.writeText(briefText).then(() => {
      toast({ title: "Brief berhasil disalin", description: "Tinggal paste ke WhatsApp lalu isi pelan-pelan." });
    });
  };

  const closeMenu = () => setMobileMenuOpen(false);

  const navItems = [
    ["Arah Brand", "#arah"],
    ["Langkah Awal", "#mulai"],
    ["Paket", "#paket"],
    ["Alur", "#alur"],
    ["Kontak", "#kontak"],
  ];

  const essentials = [
    {
      icon: Palette,
      title: "Identitas brand sederhana",
      desc: "Nama, tagline, warna, gaya bahasa, dan arah visual biar brand punya karakter yang jelas.",
    },
    {
      icon: MessageCircle,
      title: "Copy yang gampang dipahami",
      desc: "Kalimat promosi, deskripsi layanan, CTA, dan pesan WhatsApp dibuat natural buat target lokal.",
    },
    {
      icon: Globe,
      title: "1 halaman promosi utama",
      desc: "Landing page simple untuk jelasin siapa kamu, bantu apa, harga awal, dan cara calon pelanggan menghubungi.",
    },
  ];

  const removeItems = [
    "Terlalu banyak layanan yang belum siap dikerjakan",
    "Testimoni palsu atau contoh feedback yang bikin kurang trust",
    "Section ramai seperti partner ticker, banyak kartu contoh, dan copy berulang",
    "Bahasa yang terlalu agensi padahal brand masih tahap awal",
  ];

  const startSteps = [
    {
      step: "01",
      title: "Tentukan posisi brand",
      desc: "Khaa Digital diposisikan sebagai partner digital simple untuk UMKM, jasa lokal, dan project kecil yang baru mulai.",
    },
    {
      step: "02",
      title: "Bikin starter kit",
      desc: "Susun tagline, bio, warna, gaya tulisan, template brief, dan cara jelasin layanan dengan mudah.",
    },
    {
      step: "03",
      title: "Buat 1 demo nyata",
      desc: "Mulai dari satu contoh landing page, misalnya laundry, coffee shop, barbershop, atau jasa rumahan.",
    },
    {
      step: "04",
      title: "Cari client pertama",
      desc: "Pakai promo awal yang jelas, kumpulkan bukti hasil asli, lalu baru tambah layanan pelan-pelan.",
    },
  ];

  return (
    <div className="khaa-site min-h-screen bg-background font-sans text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/50 bg-white/90 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <a href="#" className="flex items-center gap-2" aria-label="Khaa Digital Creative">
            <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="font-bold tracking-tight">Khaa Digital</span>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                {label}
              </a>
            ))}
          </nav>

          <Button className="hidden rounded-full md:inline-flex" asChild>
            <a href={waLink("Halo Khaa Digital, saya mau mulai branding dari awal.")} target="_blank" rel="noopener noreferrer">
              Mulai Konsultasi
            </a>
          </Button>

          <button className="rounded-xl p-2 md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Buka menu">
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-border bg-white md:hidden"
            >
              <nav className="flex flex-col gap-4 p-4">
                {navItems.map(([label, href]) => (
                  <a key={label} href={href} onClick={closeMenu} className="text-sm font-semibold">
                    {label}
                  </a>
                ))}
                <Button className="w-full rounded-full" onClick={closeMenu} asChild>
                  <a href={waLink("Halo Khaa Digital, saya mau mulai branding dari awal.")} target="_blank" rel="noopener noreferrer">
                    Mulai Konsultasi
                  </a>
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section className="khaa-hero relative overflow-hidden py-20 sm:py-24 lg:py-32">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(109,80,219,0.18),transparent_34%),radial-gradient(circle_at_left,rgba(244,201,107,0.18),transparent_32%)]" />
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-7">
                <motion.div variants={fadeUp} className="mx-auto inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
                  <Sparkles className="mr-2 h-4 w-4" /> Mulai branding dari nol, pelan-pelan tapi rapi
                </motion.div>

                <motion.h1 variants={fadeUp} className="text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl">
                  Khaa Digital bantu brand kecil tampil <span className="text-primary">jelas, rapi, dan siap dicari client.</span>
                </motion.h1>

                <motion.p variants={fadeUp} className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Untuk langkah awal, kita nggak perlu kelihatan seperti agensi besar dulu. Yang penting: posisi brand jelas, layanan mudah dipahami, punya 1 halaman promosi, dan siap dipakai buat cari client pertama.
                </motion.p>

                <motion.div variants={fadeUp} className="flex flex-col justify-center gap-3 sm:flex-row">
                  <Button size="lg" className="h-12 rounded-full px-7 text-base" asChild>
                    <a href={waLink("Halo Khaa Digital, saya mau mulai branding dari awal.")} target="_blank" rel="noopener noreferrer">
                      Mulai dari Brief <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="h-12 rounded-full px-7 text-base" asChild>
                    <a href="#mulai">Lihat Langkah Awal</a>
                  </Button>
                </motion.div>

                <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-2 pt-2 text-sm text-muted-foreground">
                  {[
                    "Branding basic",
                    "Copywriting simple",
                    "Landing page 1 halaman",
                    "WhatsApp-ready",
                  ].map((item) => (
                    <span key={item} className="inline-flex items-center gap-1 rounded-full border border-border bg-white/80 px-3 py-1.5 shadow-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary" /> {item}
                    </span>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="arah" className="bg-white py-20 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-5">
                <motion.p variants={fadeUp} className="text-sm font-bold uppercase tracking-widest text-primary">Arah brand</motion.p>
                <motion.h2 variants={fadeUp} className="text-3xl font-black tracking-tight sm:text-4xl">
                  Kita fokus dulu ke satu pesan utama.
                </motion.h2>
                <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed">
                  Khaa Digital bukan perlu terlihat punya semua layanan. Untuk awal, brand ini cukup dikenal sebagai tempat bantu usaha kecil punya tampilan digital yang lebih rapi dan gampang dijual.
                </motion.p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid gap-4 sm:grid-cols-3">
                {essentials.map((item) => (
                  <motion.div key={item.title} variants={fadeUp} className="rounded-3xl border border-border bg-background p-6 shadow-sm">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-2 font-bold">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section id="mulai" className="py-20 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">Langkah awal</p>
              <h2 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl">Yang perlu ada sekarang</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Website ini dibuat lebih ramping: cukup jelasin brand, tawaran awal, cara kerja, dan tombol kontak. Sisanya nanti ditambah setelah ada hasil/client nyata.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {startSteps.map((item) => (
                <div key={item.step} className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                  <div className="mb-5 text-3xl font-black text-primary">{item.step}</div>
                  <h3 className="mb-2 font-bold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#15112B] py-20 text-white lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#F4C96B]">Yang dihapus</p>
                <h2 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl">Biar brand nggak kelihatan maksa besar.</h2>
                <p className="text-white/70 leading-relaxed">
                  Untuk fase awal, trust lebih penting daripada kelihatan ramai. Jadi isi website dipangkas ke hal yang benar-benar kepakai buat mulai jualan.
                </p>
              </div>

              <div className="space-y-3">
                {removeItems.map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#F4C96B]" />
                    <p className="text-sm leading-relaxed text-white/80">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="paket" className="bg-white py-20 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">Paket awal</p>
              <h2 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl">Mulai dari Brand Starter</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Satu paket dulu biar gampang dijual dan gampang dikerjakan. Nanti setelah ada bukti hasil dari client pertama, baru tambah paket lain.
              </p>
            </div>

            <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-stretch">
              <div className="rounded-[2rem] border border-primary/20 bg-primary/5 p-7 shadow-xl shadow-primary/5">
                <div className="mb-6 flex flex-col gap-4 border-b border-primary/15 pb-6 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="mb-3 inline-flex rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">Rekomendasi awal</div>
                    <h3 className="text-2xl font-black">Brand Starter Page</h3>
                    <p className="mt-2 text-sm text-muted-foreground">Untuk UMKM/jasa lokal/project kecil yang belum punya arah brand jelas.</p>
                  </div>
                  <div className="shrink-0 rounded-2xl bg-white p-5 text-center shadow-sm">
                    <div className="text-sm font-semibold text-primary">Mulai dari</div>
                    <div className="text-4xl font-black text-primary">Rp299K</div>
                    <div className="text-xs text-muted-foreground">promo client awal</div>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Mini brand direction: tagline, tone, warna dasar",
                    "Copywriting singkat untuk jelasin produk/jasa",
                    "Landing page 1 halaman yang mobile-friendly",
                    "Tombol WhatsApp dengan pesan order otomatis",
                    "Section layanan, harga awal, alur, dan kontak",
                    "Revisi ringan 1x setelah draft pertama",
                  ].map((feature) => (
                    <div key={feature} className="flex gap-2 rounded-2xl bg-white p-4 text-sm shadow-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button size="lg" className="mt-7 h-12 w-full rounded-full text-base" asChild>
                  <a href={waLink("Halo Khaa Digital, saya tertarik dengan Brand Starter Page Rp299K.")} target="_blank" rel="noopener noreferrer">
                    Ambil Paket Starter <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              <div className="rounded-[2rem] border border-border bg-background p-7">
                <h3 className="mb-5 text-xl font-black">Belum perlu dulu</h3>
                <div className="space-y-4">
                  {[
                    "Paket terlalu banyak",
                    "Portfolio palsu",
                    "Klaim agensi besar",
                    "Fitur ribet kayak login/dashboard",
                    "Terlalu banyak animasi yang ganggu baca",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-border bg-white p-4 text-sm font-medium text-muted-foreground">
                      <Shield className="h-4 w-4 text-primary" /> {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="alur" className="py-20 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">Alur kerja</p>
              <h2 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl">Simpel, biar client nggak bingung</h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {[
                { icon: MessageCircle, title: "Brief singkat", desc: "Client cerita usaha, target, layanan, dan gaya yang disukai." },
                { icon: Clock, title: "Draft 3–5 hari", desc: "Kita susun copy, layout, dan halaman promosi awal." },
                { icon: MonitorSmartphone, title: "Revisi & publish", desc: "Cek dari HP, revisi ringan, lalu halaman siap dibagikan." },
              ].map((item) => (
                <div key={item.title} className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 font-bold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="kontak" className="bg-[#F8F6FF] py-20 lg:py-24">
          <div className="container mx-auto max-w-3xl px-4">
            <div className="rounded-[2rem] border border-primary/10 bg-white p-7 shadow-xl shadow-primary/5 sm:p-10">
              <div className="mb-7 text-center">
                <h2 className="mb-3 text-3xl font-black tracking-tight">Mau mulai dari awal?</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Salin brief ini, isi seadanya, lalu kirim via WhatsApp. Nggak harus sempurna — yang penting mulai dulu.
                </p>
              </div>

              <div className="mb-6 overflow-x-auto rounded-2xl bg-[#15112B] p-5 text-sm leading-loose text-green-400 shadow-inner">
                <pre><code>{briefText}</code></pre>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <Button size="lg" variant="outline" className="h-12 rounded-full" onClick={copyBrief}>
                  <Copy className="mr-2 h-4 w-4" /> Salin Brief
                </Button>
                <Button size="lg" className="h-12 rounded-full" asChild>
                  <a href={waLink(briefText)} target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 h-4 w-4" /> Kirim ke WhatsApp
                  </a>
                </Button>
              </div>

              <p className="mt-5 text-center text-xs text-muted-foreground">
                Bisa juga DM Instagram <a href={IG_LINK} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">@itsmaulacc</a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-white py-10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:text-left">
          <div>
            <div className="mb-1 font-bold">Khaa Digital</div>
            <p className="text-sm text-muted-foreground">Branding simple, copywriting, dan landing page untuk langkah awal.</p>
          </div>
          <div className="flex gap-3">
            <a href={WA_BASE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">
              <Phone className="h-4 w-4" /> WhatsApp
            </a>
            <a href={IG_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">
              <Instagram className="h-4 w-4" /> Instagram
            </a>
          </div>
        </div>
      </footer>

      <a
        href={waLink("Halo Khaa Digital, saya mau mulai branding dari awal.")}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-sm font-bold text-white shadow-xl shadow-green-500/30 transition-all hover:-translate-y-1 hover:bg-green-600"
        aria-label="Chat WhatsApp"
      >
        <Phone className="h-4 w-4" /> WhatsApp
      </a>
    </div>
  );
}

export default Home;
