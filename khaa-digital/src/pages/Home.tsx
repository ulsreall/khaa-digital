import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, CheckCircle2, LayoutTemplate, PenTool, Image, Globe, Sparkles,
  Copy, FileText, MonitorSmartphone, MessageCircle, Star, ArrowRight,
  Instagram, Phone, Zap, Shield, Clock, Smile
} from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

const WA_NUMBER = "6281392340102";
const WA_BASE = `https://wa.me/${WA_NUMBER}`;
const IG_LINK = "https://instagram.com/itsmaulacc";

function waLink(msg: string) {
  return `${WA_BASE}?text=${encodeURIComponent(msg)}`;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

function Home() {
  const { toast } = useToast();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const briefText = `Halo Khaa Digital, saya ingin konsultasi:

Nama usaha/kegiatan: 
Jenis usaha: 
Target pelanggan: 
Butuh dibantu bagian apa: 
Gaya tampilan yang diinginkan: 
Referensi jika ada: 
Deadline: 
Nomor/kontak: `;

  const copyBrief = () => {
    navigator.clipboard.writeText(briefText).then(() => {
      toast({ title: "Formulir Berhasil Disalin", description: "Tinggal paste ke WhatsApp atau DM Instagram." });
    });
  };

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">

      {/* ── NAVBAR ── */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/90 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary text-primary-foreground rounded-full p-2">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="font-bold text-lg tracking-tight">Khaa Digital Creative</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {[
              ["Home", "#"],
              ["Tentang", "#tentang"],
              ["Layanan", "#layanan"],
              ["Harga", "#harga"],
              ["Contoh", "#contoh"],
              ["FAQ", "#faq"],
              ["Kontak", "#kontak"],
            ].map(([label, href]) => (
              <a key={label} href={href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <a href="#layanan">Lihat Layanan</a>
            </Button>
            <Button size="sm" asChild>
              <a href={waLink("Halo Khaa Digital, saya ingin konsultasi layanan.")} target="_blank" rel="noopener noreferrer">
                Mulai Pesan
              </a>
            </Button>
          </div>

          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-white border-b border-border"
            >
              <nav className="flex flex-col p-4 gap-4">
                {[["Tentang", "#tentang"], ["Layanan", "#layanan"], ["Harga", "#harga"], ["Contoh", "#contoh"], ["FAQ", "#faq"]].map(([l, h]) => (
                  <a key={l} href={h} onClick={closeMenu} className="text-sm font-medium">{l}</a>
                ))}
                <div className="flex flex-col gap-2 pt-2 border-t border-border">
                  <Button variant="outline" className="w-full" onClick={closeMenu} asChild>
                    <a href="#layanan">Lihat Layanan</a>
                  </Button>
                  <Button className="w-full" onClick={closeMenu} asChild>
                    <a href={waLink("Halo Khaa Digital, saya ingin konsultasi.")} target="_blank" rel="noopener noreferrer">
                      Mulai Pesan
                    </a>
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-44">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex flex-col gap-6">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary w-fit">
                <Sparkles className="mr-2 h-4 w-4" />
                Jasa Digital Kreatif untuk Usaha & Komunitas
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                Usaha Kamu Lebih Mudah Dilirik <span className="text-primary relative inline-block">
                  Pelanggan
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#F4C96B]" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                  </svg>
                </span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Khaa Digital Creative bantu kamu bikin promosi yang <strong className="text-foreground">jelas, rapi, dan langsung bisa dipakai</strong> — mulai dari caption, branding, sampai landing page.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Button size="lg" className="rounded-full px-8 h-12 text-base" asChild>
                  <a href={waLink("Halo Khaa Digital, saya ingin konsultasi dan pesan layanan.")} target="_blank" rel="noopener noreferrer">
                    Ceritakan Kebutuhanmu <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base" asChild>
                  <a href="#harga">Lihat Paket Harga</a>
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground font-medium pt-2">
                <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-primary" /> Mulai dari Rp25.000</span>
                <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-primary" /> Proses simpel, tidak ribet</span>
                <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-primary" /> Cocok untuk pemula</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative lg:ml-auto w-full max-w-md mx-auto">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/20 blur-3xl rounded-full mix-blend-multiply" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#F4C96B]/20 blur-3xl rounded-full mix-blend-multiply" />

              <div className="relative rounded-[2rem] bg-gradient-to-br from-[#15112B] to-primary p-1 shadow-2xl shadow-primary/20 ring-1 ring-white/10">
                <div className="absolute top-4 left-4 right-4 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center px-4 border border-white/10">
                  <div className="w-1/2 h-3 rounded-full bg-white/20" />
                </div>
                <div className="h-[460px] rounded-[1.75rem] bg-background/95 mt-14 overflow-hidden flex flex-col gap-4 p-6 border border-white/5 relative">

                  <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute -right-4 top-6 bg-white shadow-xl rounded-xl p-3 border border-border flex items-center gap-3 w-48">
                    <div className="bg-primary/10 p-2 rounded-lg"><LayoutTemplate className="w-5 h-5 text-primary" /></div>
                    <div><div className="text-xs font-bold">Landing Page</div><div className="text-[10px] text-muted-foreground">Siap rilis</div></div>
                  </motion.div>

                  <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                    className="absolute -left-6 bottom-28 bg-white shadow-xl rounded-xl p-3 border border-border flex items-center gap-3 w-48">
                    <div className="bg-[#F4C96B]/20 p-2 rounded-lg"><PenTool className="w-5 h-5 text-[#D49D26]" /></div>
                    <div><div className="text-xs font-bold">Caption Promo</div><div className="text-[10px] text-muted-foreground">Lebih natural</div></div>
                  </motion.div>

                  <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
                    className="absolute right-2 bottom-12 bg-white shadow-xl rounded-xl p-3 border border-border flex items-center gap-3 w-44">
                    <div className="bg-green-100 p-2 rounded-lg"><Sparkles className="w-5 h-5 text-green-600" /></div>
                    <div><div className="text-xs font-bold">Branding Mini</div><div className="text-[10px] text-muted-foreground">Siap dipakai</div></div>
                  </motion.div>

                  <div className="space-y-3 pt-4">
                    <div className="h-28 rounded-xl bg-gradient-to-br from-primary/10 to-primary/20" />
                    <div className="h-4 w-3/4 rounded-full bg-muted" />
                    <div className="h-4 w-1/2 rounded-full bg-muted" />
                    <div className="grid grid-cols-2 gap-3 mt-2">
                      <div className="h-16 rounded-xl bg-primary/8" />
                      <div className="h-16 rounded-xl bg-primary/8" />
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[88%] bg-white rounded-2xl shadow-xl border border-border p-3 flex justify-between items-center z-10">
                  <div className="text-center flex-1">
                    <div className="text-lg font-bold text-primary">50+</div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Template</div>
                  </div>
                  <div className="w-px h-8 bg-border" />
                  <div className="text-center flex-1">
                    <div className="text-lg font-bold">1-2</div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Hari Kerja</div>
                  </div>
                  <div className="w-px h-8 bg-border" />
                  <div className="text-center flex-1">
                    <div className="text-lg font-bold">25K</div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Mulai Dari</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PARTNER ROW ── */}
      <section className="py-8 border-y border-border/50 bg-white/60 backdrop-blur-sm overflow-hidden">
        <div className="container mx-auto px-4 mb-4">
          <p className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-widest">Cocok untuk berbagai jenis usaha & komunitas</p>
        </div>
        <div className="flex gap-4 overflow-hidden whitespace-nowrap" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
          <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, ease: "linear", duration: 28 }} className="flex gap-4 min-w-full items-center">
            {["UMKM", "Toko Online", "Event Komunitas", "Coffee Shop", "Barbershop", "Jasa Lokal", "Laundry", "Komunitas Digital", "Project Online", "Grup WhatsApp/Telegram",
              "UMKM", "Toko Online", "Event Komunitas", "Coffee Shop", "Barbershop", "Jasa Lokal", "Laundry", "Komunitas Digital", "Project Online", "Grup WhatsApp/Telegram"].map((item, i) => (
              <div key={i} className="px-5 py-2 rounded-full border border-border bg-white text-muted-foreground text-sm font-medium whitespace-nowrap shadow-sm">
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="tentang" className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="flex flex-col gap-6">
              <motion.div variants={fadeUp} className="text-primary font-semibold text-sm tracking-wider uppercase">Tentang Kami</motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold leading-tight">
                Usaha Kecil Juga Berhak Tampil Rapi dan Profesional
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Khaa Digital Creative hadir khusus buat kamu yang baru mulai usaha atau project online tapi belum tahu harus mulai dari mana. Bukan agensi besar, bukan harga mahal — tapi hasilnya tetap rapi dan siap dipakai.
                </p>
                <p>
                  Kamu cukup ceritakan kebutuhanmu. Sisanya? Kita yang kerjakan — dari nulis caption, bikin branding, sampai buat landing page sederhana.
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="flex gap-4 pt-2">
                <div className="flex-1 bg-muted/50 rounded-2xl p-4 border border-border flex items-start gap-3">
                  <div className="bg-white p-2 rounded-lg shadow-sm shrink-0"><CheckCircle2 className="w-5 h-5 text-primary" /></div>
                  <div>
                    <h4 className="font-semibold text-sm">Harga Bersahabat</h4>
                    <p className="text-xs text-muted-foreground mt-1">Mulai dari Rp25.000 saja</p>
                  </div>
                </div>
                <div className="flex-1 bg-muted/50 rounded-2xl p-4 border border-border flex items-start gap-3">
                  <div className="bg-white p-2 rounded-lg shadow-sm shrink-0"><Sparkles className="w-5 h-5 text-primary" /></div>
                  <div>
                    <h4 className="font-semibold text-sm">Langsung Bisa Dipakai</h4>
                    <p className="text-xs text-muted-foreground mt-1">Hasil rapi, siap post atau publish</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
              <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-[#F4C96B] text-[#15112B] text-xs font-bold px-3 py-1 rounded-full shadow-lg rotate-12">
                  Hasil Rapi!
                </div>
                <div className="bg-white rounded-xl shadow-lg border border-border overflow-hidden">
                  <div className="bg-muted p-3 border-b border-border flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                    <div className="ml-2 text-xs text-muted-foreground font-mono">contoh-promosi.txt</div>
                  </div>
                  <div className="p-6 space-y-3">
                    <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-[10px] font-bold rounded-md">Siap Publish</span>
                    <h3 className="font-bold text-xl">Promo Akhir Bulan!</h3>
                    <p className="text-sm text-foreground/80 leading-relaxed border-l-2 border-primary pl-3">
                      Lagi cari tempat ngopi yang asik buat nugas? Mampir hari ini dan dapetin diskon 20% untuk semua menu kopi susu!
                    </p>
                    <ul className="text-sm space-y-2 pt-2">
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> WiFi kencang &amp; colokan tersedia</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Harga mulai Rp15K</li>
                    </ul>
                    <div className="pt-2">
                      <span className="inline-block px-2 py-1 bg-purple-100 text-purple-800 text-[10px] font-bold rounded-md mb-2">CTA Jelas</span>
                      <div className="w-full text-center bg-green-600 text-white text-sm font-bold rounded-lg py-2 cursor-default">Pesan Sekarang via WhatsApp</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PROBLEMS ── */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-3">Masalah Umum</p>
            <h2 className="text-3xl font-bold mb-3">Pernah Ngerasain Ini?</h2>
            <p className="text-muted-foreground text-sm">Banyak usaha kecil tertahan di masalah yang sama. Kita hadir untuk bantu selesaikan itu.</p>
          </div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: MessageCircle, title: "Bingung Nulis Promosi", desc: "Punya produk bagus tapi nggak tahu cara nulis yang bikin orang mau beli." },
              { icon: Image, title: "Tampilan Belum Meyakinkan", desc: "Feed, banner, atau poster masih kelihatan seadanya dan kurang profesional." },
              { icon: Star, title: "Belum Punya Identitas Brand", desc: "Usaha sudah jalan, tapi nama, tagline, dan tampilannya belum konsisten." },
              { icon: Globe, title: "Belum Ada Halaman Promosi", desc: "Butuh satu halaman untuk jelasin produk atau jasa, tapi nggak bisa coding." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <p className="text-sm font-semibold text-primary">Semua masalah di atas bisa kita bantu selesaikan.</p>
            <a href="#layanan" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors mt-1">
              Lihat layanan kami <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="layanan" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-primary font-semibold text-sm tracking-wider uppercase mb-3">Layanan</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Apa Saja yang Bisa Kita Bantu?</h2>
            <p className="text-muted-foreground text-sm">Pilih sesuai kebutuhan — bisa mulai dari satu layanan kecil dulu, nggak harus langsung paket besar.</p>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Star, title: "Branding Simple", desc: "Bantu susun nama, tagline, deskripsi singkat, dan arah visual biar usahamu punya karakter." },
              { icon: PenTool, title: "Copywriting Promosi", desc: "Caption jualan, deskripsi produk, CTA, bio sosmed — ditulis supaya enak dibaca dan bikin orang tertarik." },
              { icon: Image, title: "Konsep Desain & Banner", desc: "Konsep poster, flyer digital, banner event, atau header komunitas yang rapi sesuai brand." },
              { icon: MessageCircle, title: "Community & Event Kit", desc: "Announcement, rules grup, welcome message, dan template pendaftaran untuk grup WA, Telegram, atau Discord." },
              { icon: Globe, title: "Landing Page Basic", desc: "Halaman satu halaman untuk promosi usaha, event, komunitas, atau project digital kamu." },
              { icon: Sparkles, title: "AI Prompt Design", desc: "Bantu buat instruksi AI (prompt) yang tepat untuk generate logo, banner, maskot, atau stiker brand." },
              { icon: FileText, title: "Rapihin Teks & Dokumen", desc: "Punya draft kasar? Kita bantu edit supaya bahasanya lebih rapi, profesional, dan enak dibaca." },
              { icon: MonitorSmartphone, title: "Setup Online Basic", desc: "Bantu setup landing page, link CTA di bio, atau deploy ke Vercel — simpel dan langsung jalan." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white p-6 rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all group cursor-default">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PURPLE BAND ── */}
      <section className="py-24 bg-[#15112B] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-[#15112B]" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary blur-[100px] rounded-full opacity-50" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#F4C96B] blur-[100px] rounded-full opacity-20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-7">
              <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
                Promosi Lebih Rapi, Pesan Lebih Jelas, Usaha Lebih Dipercaya
              </h2>
              <p className="text-lg text-white/70 leading-relaxed">
                Calon pelanggan sering ragu beli karena promosi yang berantakan. Dengan sentuhan Khaa Digital Creative, materi promosimu jadi lebih meyakinkan — tanpa terlihat lebay atau kaku.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Bahasa mudah dipahami", "CTA yang jelas dan kuat", "Tampilan lebih rapi", "Cocok untuk semua platform"].map((text, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#F4C96B] shrink-0" />
                    <span className="text-sm font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-6 shadow-2xl text-foreground relative z-10 -rotate-2">
                <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">Sebelum</div>
                <div className="p-4 bg-muted rounded-xl border border-border opacity-70">
                  <p className="text-sm text-muted-foreground">Jual makanan, ready order, murah meriah hubungi nomor di bio ya.</p>
                </div>
              </div>
              <div className="bg-white rounded-3xl p-6 shadow-2xl text-foreground relative z-20 mt-[-1.5rem] ml-8 rotate-2 border-2 border-primary">
                <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">Sesudah</div>
                <div className="p-4 bg-primary/5 rounded-xl border border-primary/20">
                  <h4 className="font-bold text-primary mb-2">Lagi lapar tapi mager keluar?</h4>
                  <p className="text-sm mb-3">Menu favorit siap diantar. Rasa resto, harga warung — pesan sekarang!</p>
                  <div className="w-full text-center bg-green-600 text-white text-sm font-bold rounded-lg py-2 cursor-default">Order via WhatsApp</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SAMPLE WORK ── */}
      <section id="contoh" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-primary font-semibold text-sm tracking-wider uppercase mb-3">Contoh Pekerjaan</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Contoh yang Bisa Kita Buat</h2>
            <span className="text-xs text-muted-foreground bg-white border border-border py-2 px-4 rounded-full inline-flex items-center gap-2">
              <Sparkles className="w-3 h-3 text-primary" /> Semua contoh dibuat sebagai sampel — bukan klien nyata
            </span>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { tag: "Copywriting + Banner", title: "Promo UMKM Makanan", color: "from-orange-400 to-red-500", desc: "Headline poster, caption jualan, deskripsi menu, dan CTA order yang menarik." },
              { tag: "Landing Page", title: "Landing Page Jasa Lokal", color: "from-blue-400 to-indigo-500", desc: "Halaman promosi untuk laundry, barbershop, bengkel, atau jasa rumahan." },
              { tag: "Event Kit", title: "Event Sekolah / Kampus", color: "from-purple-400 to-pink-500", desc: "Announcement, rules, teks pendaftaran, dan caption promosi event." },
              { tag: "Branding + Bio", title: "Toko Online Kecil", color: "from-emerald-400 to-teal-500", desc: "Bio Instagram, tagline, deskripsi toko, dan template caption." },
              { tag: "Community Kit", title: "Komunitas Digital", color: "from-indigo-500 to-purple-600", desc: "Welcome message, rules komunitas, dan template announcement grup." },
              { tag: "Branding Mini", title: "Project Digital Simple", color: "from-cyan-400 to-blue-500", desc: "Tagline, deskripsi project, copy landing page, dan prompt visual." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all group">
                <div className={`h-44 bg-gradient-to-br ${item.color} flex items-end p-4 relative`}>
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="w-9 h-9 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center relative z-10">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="p-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded-md mb-3 inline-block">
                    {item.tag}
                  </span>
                  <h3 className="font-bold text-base mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{item.desc}</p>
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    Lihat Detail
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Kenapa Pilih Khaa Digital Creative?</h2>
            <p className="text-muted-foreground text-sm">Bukan sekadar murah — tapi juga proses yang mudah dan hasil yang bisa langsung dipakai.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { icon: Zap, title: "Mulai Rp25K", desc: "Terjangkau" },
              { icon: Clock, title: "1–2 Hari", desc: "Proses cepat" },
              { icon: Shield, title: "Bisa Custom", desc: "Fleksibel" },
              { icon: Smile, title: "Revisi Ringan", desc: "Sampai puas" },
            ].map((stat, i) => (
              <div key={i} className="bg-primary/5 rounded-2xl p-6 text-center border border-primary/10">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-xl font-bold text-primary mb-1">{stat.title}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.desc}</div>
              </div>
            ))}
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Harga Ramah di Kantong", desc: "Cocok banget buat UMKM dan project kecil yang baru mulai — nggak perlu sewa agensi mahal." },
              { title: "Bisa Mulai dari Nol", desc: "Belum punya ide sama sekali juga tidak apa-apa. Cerita dulu, kita bantu susun bareng." },
              { title: "Bahasa Indonesia yang Natural", desc: "Teks ditulis agar terasa natural dan mudah dipahami target market lokal — bukan bahasa robot." },
              { title: "Prosesnya Tidak Ribet", desc: "Ceritakan kebutuhanmu, diskusi singkat, draft jadi, revisi jika perlu, lalu selesai. Sesimpel itu." },
              { title: "Hasil Langsung Siap Pakai", desc: "Output yang dikirim bukan sekadar konsep — tapi materi yang langsung bisa kamu post atau rilis." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="flex gap-4 p-6 bg-white border border-border rounded-2xl shadow-sm">
                <div className="mt-0.5 shrink-0">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-base mb-1.5">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="harga" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-primary font-semibold text-sm tracking-wider uppercase mb-3">Harga</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Paket Harga Awal</h2>
            <p className="text-muted-foreground text-sm">Pilih sesuai kebutuhan. Harga bisa disesuaikan — tinggal chat untuk diskusi lebih lanjut.</p>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Starter", price: "25", for: "Task kecil dan cepat",
                features: ["1 bio / caption / tagline", "1 announcement pendek", "Rapihin 1 teks promosi", "1x revisi ringan"],
                msg: "Halo, saya tertarik dengan Paket Starter Rp25K.",
              },
              {
                name: "Promo Basic", price: "50", for: "Promosi produk atau jasa",
                features: ["Caption promosi", "Deskripsi produk/jasa", "Call-to-Action (CTA)", "Konsep visual sederhana", "1x revisi ringan"],
                msg: "Halo, saya tertarik dengan Paket Promo Basic Rp50K.",
              },
              {
                name: "Community / Event Kit", price: "75", for: "Event atau komunitas",
                features: ["Announcement", "Rules komunitas/event", "Teks pendaftaran", "Welcome message", "1x revisi ringan"],
                msg: "Halo, saya tertarik dengan Paket Community/Event Kit Rp75K.",
              },
              {
                name: "Branding Mini", price: "100", for: "Usaha yang butuh identitas",
                features: ["Tagline brand", "Deskripsi brand", "Bio sosial media", "Arah visual dasar", "Prompt logo/banner AI", "1x revisi ringan"],
                highlight: true,
                msg: "Halo, saya tertarik dengan Paket Branding Mini Rp100K.",
              },
              {
                name: "Landing Page Basic", price: "150", for: "Halaman promosi sederhana",
                features: ["1 halaman landing page", "HTML/CSS + responsive", "Teks promosi lengkap", "Tombol CTA", "1x revisi ringan"],
                msg: "Halo, saya tertarik dengan Paket Landing Page Basic Rp150K.",
              },
              {
                name: "Launch Simple", price: "250", for: "Siap mulai promosi penuh",
                features: ["Branding Mini", "Copywriting promosi", "Konsep banner", "Landing Page Basic", "Template DM promosi"],
                highlight: true,
                msg: "Halo, saya tertarik dengan Paket Launch Simple Rp250K.",
              },
            ].map((pkg, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ y: -6 }}
                className={`relative rounded-3xl p-7 bg-white flex flex-col border ${pkg.highlight ? "border-primary shadow-xl shadow-primary/10 ring-1 ring-primary/20" : "border-border shadow-sm"}`}>
                {pkg.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Rekomendasi
                  </div>
                )}
                <div className="mb-5 border-b border-border/60 pb-5">
                  <h3 className="font-bold text-lg mb-1">{pkg.name}</h3>
                  <p className="text-xs text-muted-foreground mb-3">Cocok untuk: {pkg.for}</p>
                  <div className="flex items-baseline gap-1 text-primary">
                    <span className="font-semibold">Rp</span>
                    <span className="text-4xl font-black">{pkg.price}K</span>
                  </div>
                </div>
                <ul className="space-y-2.5 mb-7 flex-1">
                  {pkg.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={pkg.highlight ? "default" : "outline"} asChild>
                  <a href={waLink(pkg.msg)} target="_blank" rel="noopener noreferrer">
                    Pilih Paket
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>

          <p className="text-center text-xs text-muted-foreground mt-8">
            Butuh sesuatu yang berbeda? <a href={waLink("Halo, saya ingin konsultasi kebutuhan custom di luar paket.")} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">Chat langsung untuk harga custom.</a>
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-xl mx-auto mb-14">
            <h2 className="text-3xl font-bold mb-3">Cara Order — Gampang Banget</h2>
            <p className="text-muted-foreground text-sm">Empat langkah simpel dari cerita kebutuhan sampai hasil siap dipakai.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 -z-10" />
            {[
              { num: "01", title: "Ceritakan Kebutuhan", desc: "Salin formulir di bawah, isi sesuai kebutuhanmu, kirim via WhatsApp atau DM Instagram." },
              { num: "02", title: "Diskusi Singkat", desc: "Kita ngobrol sebentar untuk mastiin hasilnya sesuai ekspektasi kamu." },
              { num: "03", title: "Pengerjaan Draft", desc: "Ditunggu 1–2 hari kerja. Kamu bisa fokus urusan lain dulu." },
              { num: "04", title: "Revisi & Selesai", desc: "Cek hasilnya, minta revisi kalau perlu, lalu materi siap langsung dipakai." },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white border-4 border-primary/20 shadow-md flex items-center justify-center font-black text-2xl text-primary mb-5 ring-1 ring-border">
                  {step.num}
                </div>
                <h3 className="font-bold text-base mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRIEF TEMPLATE ── */}
      <section id="brief" className="py-24 bg-[#F8F6FF]">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-primary/10">
            <div className="text-center mb-7">
              <h2 className="text-2xl lg:text-3xl font-bold mb-3">Ceritakan Kebutuhanmu Seperti Ini</h2>
              <p className="text-muted-foreground text-sm">Tidak harus rapi — ceritakan saja seadanya dulu, kita bantu susun bareng.</p>
            </div>

            <div className="bg-[#15112B] rounded-2xl p-6 text-green-400 font-mono text-sm leading-loose mb-6 shadow-inner overflow-x-auto">
              <pre><code>{`Nama usaha/project: 
Jenis usaha: 
Target audience: 
Butuh dibantu bagian apa: 
Gaya yang diinginkan: 
Referensi jika ada: 
Deadline: 
Kontak: `}</code></pre>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="flex-1 gap-2 h-12" onClick={copyBrief}>
                <Copy className="w-4 h-4" /> Salin Formulir
              </Button>
              <Button size="lg" variant="outline" className="flex-1 gap-2 h-12 border-green-500 text-green-700 hover:bg-green-50" asChild>
                <a href={waLink(briefText)} target="_blank" rel="noopener noreferrer">
                  <Phone className="w-4 h-4" /> Langsung ke WhatsApp
                </a>
              </Button>
            </div>

            <p className="text-center text-xs text-muted-foreground mt-4">
              atau DM Instagram <a href={IG_LINK} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">@itsmaulacc</a>
            </p>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-xl mx-auto mb-12">
            <div className="text-primary font-semibold text-sm tracking-wider uppercase mb-3">Contoh Feedback</div>
            <h2 className="text-3xl font-bold mb-3">Kata Mereka Tentang Hasilnya</h2>
            <p className="text-xs text-muted-foreground italic">Testimoni di bawah adalah contoh — akan diganti dengan ulasan nyata setelah order pertama.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { quote: "Modal 50 ribu tapi caption Instagramku jadi kelihatan kayak ditulis tim profesional. Rekomen banget buat teman UMKM!", author: "Contoh Klien UMKM", role: "Owner Kedai Kopi" },
              { quote: "Mau bikin rules Discord tapi bingung mulai dari mana. Setelah dibantu, bahasanya asik dan member baru langsung gampang paham.", author: "Contoh Admin Komunitas", role: "Moderator Komunitas Game" },
              { quote: "Landing page basic-nya simpel tapi tampilannya bersih dan niat. Langsung taruh di link bio IG dan hasilnya oke banget.", author: "Contoh Project Digital", role: "Freelance Fotografer" },
            ].map((testi, i) => (
              <div key={i} className="bg-muted/50 p-7 rounded-3xl border border-border">
                <div className="flex text-[#F4C96B] mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-foreground text-sm leading-relaxed italic mb-6">"{testi.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                    {testi.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-sm">{testi.author}</div>
                    <div className="text-xs text-muted-foreground">{testi.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Masih Ada Pertanyaan?</h2>
            <p className="text-muted-foreground text-sm">Beberapa pertanyaan yang sering ditanyakan sebelum order.</p>
          </div>

          <Accordion type="single" collapsible className="w-full bg-white rounded-2xl border border-border px-6 shadow-sm">
            {[
              { q: "Apakah ini agensi besar?", a: "Bukan. Khaa Digital Creative adalah layanan freelance independen. Karena itu harganya jauh lebih terjangkau dan prosesnya lebih personal." },
              { q: "Kalau saya belum punya konsep, bisa dibantu?", a: "Tentu bisa. Ceritakan saja kebutuhanmu seadanya — dari sana kita bantu susun konsep yang pas bareng." },
              { q: "Berapa lama proses pengerjaannya?", a: "Paket kecil seperti caption atau bio biasanya 1 hari kerja. Landing page bisa 3–5 hari kerja tergantung antrean." },
              { q: "Apakah ada revisi?", a: "Ya, setiap paket sudah termasuk 1x revisi ringan. Kalau ada perubahan besar, biasanya ada biaya tambahan kecil." },
              { q: "Bagaimana cara bayarnya?", a: "Transfer bank atau e-wallet (GoPay, Dana, OVO). Bisa DP 50% dulu atau bayar penuh setelah draft pertama disetujui." },
              { q: "Bisa request layanan di luar paket?", a: "Sangat bisa. Chat saja dulu — kita hitungkan biayanya sesuai kebutuhan. Fleksibel dan tidak ribet." },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors py-4 text-sm">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4 text-sm">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 bg-gradient-to-b from-[#15112B] to-[#0A0815] text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/20">
            <Sparkles className="w-7 h-7 text-[#F4C96B]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-5 leading-tight">Yuk, Mulai dari Satu Langkah Kecil</h2>
          <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto leading-relaxed">
            Nggak harus langsung paket besar. Mulai dari task kecil dulu — caption, bio, atau sekadar konsultasi gratis. Kita bantu dari sana.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full h-14 px-8 text-base border-0" asChild>
              <a href={waLink("Halo Khaa Digital, saya ingin konsultasi dan pesan layanan.")} target="_blank" rel="noopener noreferrer">
                <Phone className="w-4 h-4 mr-2" /> Pesan via WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20 rounded-full h-14 px-8 text-base backdrop-blur-sm" asChild>
              <a href="#harga">Lihat Paket Harga</a>
            </Button>
          </div>

          <p className="text-xs text-white/40 mb-6">Mulai dari Rp25.000 • Bisa custom sesuai kebutuhan • Konsultasi gratis</p>

          <p className="text-xs font-medium text-white/50 uppercase tracking-widest mb-4">Atau hubungi via</p>
          <div className="flex justify-center gap-4">
            <a href={WA_BASE} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-green-600/80 hover:-translate-y-1 transition-all rounded-full border border-white/10 text-sm font-medium">
              <Phone className="w-4 h-4" /> WhatsApp
            </a>
            <a href={IG_LINK} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-pink-600/80 hover:-translate-y-1 transition-all rounded-full border border-white/10 text-sm font-medium">
              <Instagram className="w-4 h-4" /> @itsmaulacc
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-background py-14 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-primary text-primary-foreground rounded-full p-1.5">
                  <Sparkles className="w-3 h-3" />
                </div>
                <span className="font-bold tracking-tight">Khaa Digital Creative</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Jasa digital kreatif untuk UMKM, komunitas, dan usaha lokal. Tampil lebih profesional tanpa bikin kantong jebol.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm">Layanan</h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li><a href="#layanan" className="hover:text-primary transition-colors">Branding Simple</a></li>
                <li><a href="#layanan" className="hover:text-primary transition-colors">Copywriting Promosi</a></li>
                <li><a href="#layanan" className="hover:text-primary transition-colors">Landing Page Basic</a></li>
                <li><a href="#layanan" className="hover:text-primary transition-colors">Community Kit</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm">Menu</h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li><a href="#tentang" className="hover:text-primary transition-colors">Tentang Kami</a></li>
                <li><a href="#harga" className="hover:text-primary transition-colors">Harga</a></li>
                <li><a href="#contoh" className="hover:text-primary transition-colors">Contoh</a></li>
                <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div id="kontak">
              <h4 className="font-bold mb-4 text-sm">Kontak</h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li>
                  <a href={WA_BASE} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5" /> WhatsApp
                  </a>
                </li>
                <li>
                  <a href={IG_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                    <Instagram className="w-3.5 h-3.5" /> @itsmaulacc
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">© 2026 Khaa Digital Creative. All rights reserved.</p>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              Dibuat dengan <Sparkles className="w-3 h-3 text-primary" /> untuk Usaha Lokal Indonesia
            </p>
          </div>
        </div>
      </footer>

      {/* ── FLOATING WA BUTTON ── */}
      <a
        href={waLink("Halo Khaa Digital, saya ingin konsultasi.")}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-xl shadow-green-500/30 hover:-translate-y-1 transition-all font-semibold text-sm"
        aria-label="Chat WhatsApp"
      >
        <Phone className="w-4 h-4" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}

export default Home;
