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
  Store,
  BadgeCheck,
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
  hidden: { opacity: 1, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const stagger = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

function Home() {
  const { toast } = useToast();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const briefText = `Halo Khaa Digital, saya mau konsultasi jasa branding/landing page.

Nama usaha/project:
Jenis usaha:
Produk/jasa utama:
Target pelanggan:
Link Instagram/TikTok jika ada:
Butuh dibantu bagian apa:
Gaya tampilan yang disukai:
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
    ["Layanan", "#layanan"],
    ["Cocok Untuk", "#cocok"],
    ["Paket", "#paket"],
    ["Alur", "#alur"],
    ["Kontak", "#kontak"],
  ];

  const services = [
    {
      icon: Palette,
      title: "Branding dasar",
      desc: "Bantu susun arah brand: tagline, gaya bahasa, warna dasar, dan cara menjelaskan usaha kamu.",
    },
    {
      icon: MessageCircle,
      title: "Copy promosi",
      desc: "Teks dibuat lebih jelas dan natural: headline, deskripsi layanan, CTA, FAQ, dan pesan WhatsApp.",
    },
    {
      icon: Globe,
      title: "Landing page simple",
      desc: "Satu halaman promosi yang enak dibuka dari HP dan bisa dipakai sebagai link bio.",
    },
  ];

  const problems = [
    "Usaha sudah ada, tapi belum kelihatan rapi di online",
    "Bingung nulis deskripsi produk/jasa yang gampang dipahami",
    "Belum punya satu link yang bisa dikirim ke calon pelanggan",
    "Instagram/WhatsApp ada, tapi tampilannya masih seadanya",
  ];

  const suitable = [
    { icon: Store, title: "UMKM & toko kecil", desc: "Makanan, laundry, barbershop, coffee shop, toko online, dan usaha rumahan." },
    { icon: Shield, title: "Jasa lokal", desc: "Fotografer, bengkel, desain, tutor, servis, konsultasi, atau jasa personal." },
    { icon: BadgeCheck, title: "Project baru", desc: "Komunitas, event kecil, personal brand, atau project digital yang baru mulai." },
  ];

  const workflow = [
    { icon: MessageCircle, title: "Kirim brief", desc: "Ceritakan usaha kamu, target pelanggan, dan kebutuhan utama." },
    { icon: Palette, title: "Susun konsep", desc: "Kita rapikan arah brand, copy, struktur halaman, dan CTA." },
    { icon: Clock, title: "Draft 3–5 hari", desc: "Halaman dibuat responsive dan siap dicek dari HP maupun desktop." },
    { icon: MonitorSmartphone, title: "Revisi & publish", desc: "Revisi ringan, lalu halaman siap dibagikan ke calon pelanggan." },
  ];

  return (
    <div className="khaa-site min-h-screen bg-background font-sans text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/50 bg-white/90 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <a href="#" className="flex items-center gap-3" aria-label="Khaa Digital Service">
            <img
              src="/khaa-digital-service-logo.png"
              alt="Khaa Digital Service"
              className="h-11 w-11 rounded-2xl bg-white object-contain p-1 shadow-sm ring-1 ring-sky-100 sm:h-12 sm:w-12"
            />
            <span className="leading-tight">
              <span className="block font-black tracking-tight text-[#062B63]">Khaa Digital</span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.25em] text-sky-500">Service</span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                {label}
              </a>
            ))}
          </nav>

          <Button className="hidden rounded-full md:inline-flex" asChild>
            <a href={waLink("Halo Khaa Digital, saya mau konsultasi jasa branding/landing page.")} target="_blank" rel="noopener noreferrer">
              Konsultasi Gratis
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
                  <a href={waLink("Halo Khaa Digital, saya mau konsultasi jasa branding/landing page.")} target="_blank" rel="noopener noreferrer">
                    Konsultasi Gratis
                  </a>
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section className="khaa-hero relative overflow-hidden py-16 sm:py-20 lg:py-28">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(16,174,239,0.22),transparent_34%),radial-gradient(circle_at_left,rgba(6,43,99,0.12),transparent_32%)]" />
          <div className="container mx-auto px-4">
            <div className="grid items-center gap-10 lg:grid-cols-[1.06fr_0.94fr]">
              <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-7 text-center lg:text-left">
                <motion.div variants={fadeUp} className="inline-flex items-center rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-semibold text-[#062B63] shadow-sm">
                  <Sparkles className="mr-2 h-4 w-4 text-sky-500" /> Khaa Digital Service • branding & landing page
                </motion.div>

                <motion.h1 variants={fadeUp} className="text-4xl font-black tracking-tight text-[#021B45] sm:text-5xl lg:text-7xl">
                  Bikin usaha kamu terlihat <span className="khaa-gradient-text">lebih rapi, jelas, dan gampang dihubungi.</span>
                </motion.h1>

                <motion.p variants={fadeUp} className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
                  Khaa Digital bantu UMKM, jasa lokal, dan project kecil punya tampilan online yang lebih meyakinkan — mulai dari arah brand, copy promosi, sampai landing page 1 halaman yang connect ke WhatsApp.
                </motion.p>

                <motion.div variants={fadeUp} className="flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                  <Button size="lg" className="h-12 rounded-full bg-[#10AEEF] px-7 text-base shadow-lg shadow-sky-500/20 hover:bg-[#008FE3]" asChild>
                    <a href={waLink("Halo Khaa Digital, saya mau konsultasi jasa branding/landing page.")} target="_blank" rel="noopener noreferrer">
                      Konsultasi via WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="h-12 rounded-full border-sky-200 bg-white/80 px-7 text-base text-[#062B63] hover:bg-sky-50" asChild>
                    <a href="#paket">Lihat Paket Starter</a>
                  </Button>
                </motion.div>

                <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-2 pt-2 text-sm text-muted-foreground lg:justify-start">
                  {[
                    "Branding dasar",
                    "Copy promosi",
                    "Landing page HP-friendly",
                    "Tombol WhatsApp",
                  ].map((item) => (
                    <span key={item} className="inline-flex items-center gap-1 rounded-full border border-sky-100 bg-white/85 px-3 py-1.5 shadow-sm">
                      <CheckCircle2 className="h-4 w-4 text-sky-500" /> {item}
                    </span>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div initial={{ opacity: 1, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="relative mx-auto w-full max-w-md">
                <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-sky-300/35 via-white to-blue-900/10 blur-2xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-sky-100 bg-white/90 p-6 shadow-2xl backdrop-blur-xl">
                  <div className="rounded-[1.5rem] bg-gradient-to-br from-[#DFF6FF] via-white to-[#F7FCFF] p-6">
                    <img src="/khaa-digital-service-logo.png" alt="Logo Khaa Digital Service" className="khaa-logo-img mx-auto w-full max-w-[260px] rounded-3xl bg-white object-contain p-4" />
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-2xl bg-[#021B45] p-4 text-white">
                      <div className="text-2xl font-black">3–5</div>
                      <div className="text-white/70">hari draft</div>
                    </div>
                    <div className="rounded-2xl bg-sky-50 p-4 text-[#062B63]">
                      <div className="text-2xl font-black">Online</div>
                      <div className="text-slate-500">mudah dihubungi</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="layanan" className="bg-white py-18 lg:py-22">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">Layanan</p>
              <h2 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl">Yang dibantu Khaa Digital</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Fokusnya bukan bikin website yang ribet. Fokusnya bikin calon pelanggan cepat paham kamu jual apa, cocok untuk siapa, dan harus hubungi lewat mana.
              </p>
            </div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid gap-5 md:grid-cols-3">
              {services.map((item) => (
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
        </section>

        <section className="py-18 lg:py-22">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">Masalah umum</p>
                <h2 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl">Promosi sering nggak jalan karena tampilannya belum meyakinkan.</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Kadang produknya sudah oke, tapi cara menjelaskannya belum rapi. Di sinilah Khaa Digital bantu susun tampilan dan kata-katanya biar lebih enak dibaca calon pelanggan.
                </p>
              </div>

              <div className="grid gap-3">
                {problems.map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl border border-border bg-white p-4 shadow-sm">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="cocok" className="khaa-blue-section py-20 text-white lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-sky-300">Cocok untuk</p>
              <h2 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl">Buat yang butuh mulai rapi dulu, bukan langsung sistem besar.</h2>
              <p className="text-sm leading-relaxed text-white/70">
                Kalau kamu baru mulai promosi online dan butuh tampilan yang lebih niat, paket starter ini cukup untuk langkah pertama.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {suitable.map((item) => (
                <div key={item.title} className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-sky-300">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 font-bold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-white/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="paket" className="bg-white py-20 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">Paket awal</p>
              <h2 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl">Brand Starter Page</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Satu paket simple buat usaha/project yang ingin punya identitas dasar dan 1 halaman promosi yang siap dibagikan.
              </p>
            </div>

            <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-stretch">
              <div className="rounded-[2rem] border border-primary/20 bg-primary/5 p-7 shadow-xl shadow-primary/5">
                <div className="mb-6 flex flex-col gap-4 border-b border-primary/15 pb-6 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="mb-3 inline-flex rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">Paket starter</div>
                    <h3 className="text-2xl font-black">Brand Starter Page</h3>
                    <p className="mt-2 text-sm text-muted-foreground">Untuk UMKM, jasa lokal, dan project kecil yang mau mulai promosi dengan lebih rapi.</p>
                  </div>
                  <div className="shrink-0 rounded-2xl bg-white p-5 text-center shadow-sm">
                    <div className="text-sm font-semibold text-primary">Mulai dari</div>
                    <div className="text-4xl font-black text-primary">Rp299K</div>
                    <div className="text-xs text-muted-foreground">promo awal</div>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Arah brand sederhana: tagline, tone, warna dasar",
                    "Copywriting untuk menjelaskan produk/jasa",
                    "Landing page 1 halaman yang mobile-friendly",
                    "Tombol WhatsApp dengan pesan otomatis",
                    "Section layanan, harga/info, alur, FAQ singkat, kontak",
                    "Revisi ringan 1x setelah draft pertama",
                  ].map((feature) => (
                    <div key={feature} className="flex gap-2 rounded-2xl bg-white p-4 text-sm shadow-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-500" />
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
                <h3 className="mb-5 text-xl font-black">Output yang kamu dapat</h3>
                <div className="space-y-4">
                  {[
                    "Tampilan online yang lebih rapi dan mudah dipercaya",
                    "Kalimat promosi yang lebih jelas untuk calon pelanggan",
                    "Satu link yang bisa ditaruh di bio Instagram/TikTok",
                    "CTA WhatsApp supaya orang gampang tanya/order",
                    "File/source website siap deploy ke Vercel",
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
              <h2 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl">Prosesnya dibuat simpel</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Cocok buat client yang nggak mau ribet teknis. Cukup cerita kebutuhan, nanti Khaa Digital bantu susun halaman promosinya.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {workflow.map((item) => (
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

        <section id="kontak" className="bg-[#DFF6FF] py-20 lg:py-24">
          <div className="container mx-auto max-w-3xl px-4">
            <div className="rounded-[2rem] border border-primary/10 bg-white p-7 shadow-xl shadow-primary/5 sm:p-10">
              <div className="mb-7 text-center">
                <h2 className="mb-3 text-3xl font-black tracking-tight">Mau tanya dulu?</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Salin brief ini, isi seadanya, lalu kirim via WhatsApp. Nggak harus lengkap — nanti bisa dirapikan bareng.
                </p>
              </div>

              <div className="mb-6 overflow-x-auto rounded-2xl bg-[#021B45] p-5 text-sm leading-loose text-sky-300 shadow-inner">
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
            <p className="text-sm text-muted-foreground">Jasa branding simple, copy promosi, dan landing page untuk UMKM/jasa lokal.</p>
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
        href={waLink("Halo Khaa Digital, saya mau konsultasi jasa branding/landing page.")}
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
