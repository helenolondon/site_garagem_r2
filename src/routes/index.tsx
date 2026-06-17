import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Droplets, Shield, Car, Phone, MapPin, Instagram, Clock, Check } from "lucide-react";
import heroCar from "../assets/hero-car.jpg";
import serviceMicropintura from "../assets/service-micro-pintura.png";
import serviceInterior from "../assets/service-interior.jpg";
import serviceCeramic from "../assets/service-ceramic.jpg";
import logo from "../assets/garagem r2 logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Garagem R2 Estética Automotiva — Brilho que impressiona" },
      { name: "description", content: "Estética automotiva especializada em lavagem detalhada, polimento, higienização interna e vitrificação. Agende seu horário." },
      { property: "og:title", content: "Garagem R2 Estética Automotiva" },
      { property: "og:description", content: "Cuidamos do seu carro como se fosse nosso. Lavagem premium, polimento e vitrificação." },
    ],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/5527997332033?text=Olá!%20Gostaria%20de%20agendar%20um%20serviço.";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Services />
      <About />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-36 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Garagem R2" className="h-32 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-2xl text-muted-foreground">
          <a href="#servicos" className="hover:text-foreground transition-colors">Serviços</a>
          <a href="#sobre" className="hover:text-foreground transition-colors">Sobre</a>
          <a href="#precos" className="hover:text-foreground transition-colors">Preços</a>
          <a href="#contato" className="hover:text-foreground transition-colors">Contato</a>
        </nav>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground hover:opacity-90 transition"
        >
          Agendar
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-36 overflow-hidden">
      <img
        src={heroCar}
        alt="Carro preto sendo detalhado com espuma"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 bg-background/40" />
      <div className="relative max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs uppercase tracking-widest text-primary">
            <Sparkles className="h-3 w-3" /> Estética automotiva premium
          </span>
          <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
            Brilho que <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>impressiona</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Lavagem detalhada, polimento, higienização interna e vitrificação. Devolvemos ao seu carro o brilho de showroom — com técnica, produtos premium e atenção a cada detalhe.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              <Phone className="h-4 w-4" /> Agendar pelo WhatsApp
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background/40 px-6 py-3 text-sm font-medium hover:bg-background/70 transition"
            >
              Ver serviços
            </a>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              //{ n: "100+", l: "Carros atendidos" },
              //{ n: "5★", l: "Avaliação média" },
              { n: "3h", l: "Tempo médio" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl font-bold text-primary">{s.n}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: Droplets,
    title: "Lavagem Detalhada",
    desc: "Lavagem técnica com shampoo neutro, descontaminação e secagem com microfibra premium.",
    img: heroCar,
  },
  {
    icon: Sparkles,
    title: "Micro pintura e pequenos reparos",
    desc: "Correção de riscos e pequenos danos na pintura. Devolve o aspecto de novo da pintura.",
    img: serviceMicropintura,
  },
  {
    icon: Car,
    title: "Higienização Interna",
    desc: "Limpeza profunda de bancos, carpetes, teto e plásticos. Eliminação de odores.",
    img: serviceInterior,
  },
  {
    icon: Shield,
    title: "Vitrificação",
    desc: "Proteção cerâmica de longa duração. Repele água, sujeira e protege contra UV.",
    img: serviceCeramic,
  },
];

function Services() {
  return (
    <section id="servicos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-widest text-primary">Nossos serviços</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
            Cuidado completo para o seu carro
          </h2>
          <p className="mt-4 text-muted-foreground">
            Cada serviço é executado com produtos profissionais e protocolos rigorosos. Você acompanha cada etapa.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group relative overflow-hidden rounded-xl border border-border bg-card">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  width={1024}
                  height={640}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-md bg-primary/10 p-2">
                    <s.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="py-24 px-6 bg-card/40 border-y border-border">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs uppercase tracking-widest text-primary">Sobre nós</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
            Paixão por cada detalhe
          </h2>
          <p className="mt-6 text-muted-foreground">
            A Garagem R2 nasceu da paixão por carros e do cuidado obsessivo com os detalhes. Somos uma estética automotiva nova, mas com técnica apurada e compromisso real com cada cliente.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Produtos profissionais e importados",
              "Técnicos treinados em detailing",
              "Garantia de satisfação",
            ].map((b) => (
              <li key={b} className="flex items-center gap-3 text-sm">
                <Check className="h-4 w-4 text-primary" /> {b}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <img
            src={serviceMicropintura}
            alt="Polimento profissional"
            width={1024}
            height={1024}
            loading="lazy"
            className="rounded-xl border border-border object-cover aspect-square w-full"
          />
        </div>
      </div>
    </section>
  );
}

const plans = [
  {
    name: "Essencial",
    price: "R$ 80",
    items: ["Lavagem externa detalhada", "Pretinho nos pneus", "Limpeza dos vidros", "Aspiração simples"],
  },
  {
    name: "Premium",
    price: "R$ 100",
    featured: true,
    items: ["Tudo do Essencial", "Limpeza dos cantos de porta", "Limpeza dos plásticos internos", "Limpeza das caixas de roda", "Aspiração completa"],
  },
  {
    name: "Premium Plus",
    price: "R$ 140",
    featured: false,
    items: ["Tudo do Premium", "Aplicação de cera em pasta"],
  }
];

function Pricing() {
  return (
    <section id="precos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-widest text-primary">Preços</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">Pacotes simples e transparentes</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-xl border p-8 flex flex-col ${p.featured ? "border-primary bg-card relative" : "border-border bg-card/60"}`}
              style={p.featured ? { boxShadow: "var(--shadow-glow)" } : undefined}
            >
              {p.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Mais pedido
                </span>
              )}
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold">{p.price}</span>
                <span className="text-sm text-muted-foreground">/ a partir de</span>
              </div>
              <ul className="mt-6 space-y-3 flex-1">
                {p.items.map((i) => (
                  <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> {i}
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className={`mt-8 inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-medium transition ${p.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border border-border hover:bg-secondary"}`}
              >
                Agendar
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const items = [
    { icon: MapPin, title: "Endereço", text: "Rua Rosa de Prata, 480, Novo México, Vila Velha - ES" },
    { icon: Clock, title: "Horário", text: "Sáb e Dom · 08h às 18h" },
    { icon: Phone, title: "Telefone", text: "(27) 99733-2033" },
    // { icon: Instagram, title: "Instagram", text: "@garagem.r2" },
  ];
  return (
    <section id="contato" className="py-24 px-6 bg-card/40 border-t border-border">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <span className="text-xs uppercase tracking-widest text-primary">Contato</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">Agende seu horário</h2>
          <p className="mt-4 text-muted-foreground">
            Fale com a gente pelo WhatsApp e receba um orçamento personalizado em minutos.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
            style={{ boxShadow: "var(--shadow-glow)" }}
          >
            <Phone className="h-4 w-4" /> Chamar no WhatsApp
          </a>
        </div>
        <div className="space-y-5">
          {items.map((i) => (
            <div key={i.title} className="flex items-start gap-4 rounded-lg border border-border bg-card p-5">
              <div className="rounded-md bg-primary/10 p-2">
                <i.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-sm font-semibold">{i.title}</div>
                <div className="text-sm text-muted-foreground mt-1">{i.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Garagem R2" className="h-8 w-auto" />
          <span>© {new Date().getFullYear()} Garagem R2 Estética Automotiva</span>
        </div>
        <div>Feito com cuidado para quem ama carros.</div>
      </div>
    </footer>
  );
}
