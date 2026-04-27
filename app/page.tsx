import Link from "next/link"
import {
  Zap,
  FileCheck,
  Wine,
  Package,
  Truck,
  Ship,
  Plane,
  CheckCircle2,
  Globe,
  ArrowRight,
  Clock,
} from "lucide-react"
import { Navbar } from "@/components/marketing/Navbar"
import { Footer } from "@/components/marketing/Footer"
import { Button } from "@/components/ui/button"

const differentiators = [
  {
    icon: Zap,
    title: "Devis instantané",
    description:
      "Notre moteur IA calcule le meilleur tarif en temps réel parmi l'ensemble de nos transporteurs partenaires. 30 secondes, pas une de plus.",
    iconBg: "#1B3A5C",
  },
  {
    icon: FileCheck,
    title: "Douane intégrée RDE",
    description:
      "Représentant en Douane Enregistré : déclarations EX-A (DELT@-X) et GAMMA2 gérées entièrement in-house. Zéro prestataire externe, zéro délai.",
    iconBg: "#1B3A5C",
  },
  {
    icon: Wine,
    title: "Spécialiste vin & art",
    description:
      "Transporteurs ATP certifiés, température contrôlée, déclarations EMCS. Une expertise rare pour les exportateurs de vins fins et objets d'art.",
    iconBg: "#E8A020",
  },
]

const shippingModes = [
  { icon: Package, label: "Coursier", desc: "FedEx · DHL Express" },
  { icon: Truck, label: "Route", desc: "Réseau propre" },
  { icon: Ship, label: "Maritime", desc: "FCL · LCL" },
  { icon: Plane, label: "Aérien", desc: "IATA agréé" },
]

const steps = [
  {
    num: "01",
    icon: Clock,
    title: "Obtenez un devis",
    desc: "Décrivez votre envoi en quelques clics. Notre IA calcule le meilleur tarif en 30 secondes parmi tous vos modes disponibles.",
  },
  {
    num: "02",
    icon: CheckCircle2,
    title: "Réservez en ligne",
    desc: "Acceptez le devis, payez en ligne. Confirmation immédiate, documents générés automatiquement dans votre espace client.",
  },
  {
    num: "03",
    icon: Globe,
    title: "On s'occupe du reste",
    desc: "Enlèvement, transit, dédouanement, tracking temps réel. Vous suivez chaque étape depuis Vastorg Atlas.",
  },
]

const stats = [
  { value: "30s", label: "délai de devis moyen" },
  { value: "100 %", label: "douane in-house" },
  { value: "4", label: "modes d'expédition" },
]

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-[#1B3A5C] text-white">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at 80% 40%, #2E6DA4 0%, transparent 60%)",
            }}
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
            <div className="max-w-3xl">
              <p className="text-[#D6E4F0] text-xs font-semibold uppercase tracking-widest mb-5">
                Transitaire natif IA · Basé en France
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Un devis en 30 secondes.
                <br />
                Une réservation en&nbsp;2&nbsp;minutes.
              </h1>
              <p className="text-lg sm:text-xl text-[#D6E4F0] mb-10 max-w-2xl leading-relaxed">
                Vastorg — le transitaire natif IA, depuis la France vers le
                monde entier. Douane intégrée, tracking en temps réel,
                spécialiste vin &amp; objets d&apos;art.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-white text-[#1B3A5C] hover:bg-[#D6E4F0] font-semibold h-12 px-8 text-base rounded-lg"
                >
                  <Link href="/dashboard">
                    Obtenir un devis instantané
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:border-white font-semibold h-12 px-8 text-base rounded-lg"
                >
                  <Link href="/services">En savoir plus</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Differentiators ── */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1B3A5C] mb-3">
                Pourquoi Vastorg ?
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
                {`Conçu de zéro pour l'ère de l'IA — pas un logiciel legacy avec un chatbot greffé dessus.`}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {differentiators.map(({ icon: Icon, title, description, iconBg }) => (
                <div
                  key={title}
                  className="rounded-2xl p-8 bg-[#D6E4F0]/20 border border-[#D6E4F0] hover:border-[#2E6DA4] hover:shadow-lg transition-all duration-200"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: iconBg }}
                  >
                    <Icon className="text-white size-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1B3A5C] mb-3">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Shipping modes ── */}
        <section className="bg-gray-50 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1B3A5C] mb-3">
                4 modes d&apos;expédition
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
                {`De l'envoi urgent en 24 h au fret maritime full container, Vastorg couvre l'ensemble de vos besoins logistiques.`}
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {shippingModes.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#2E6DA4] hover:shadow-md transition-all duration-200"
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-[#D6E4F0] group-hover:bg-[#2E6DA4] transition-colors duration-200">
                    <Icon className="size-5 text-[#2E6DA4] group-hover:text-white transition-colors duration-200" />
                  </div>
                  <h3 className="font-semibold text-[#1B3A5C] mb-1 text-sm">
                    {label}
                  </h3>
                  <p className="text-xs text-gray-500">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Wine specialist callout ── */}
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 border-l-4 border-[#E8A020] bg-amber-50 rounded-r-2xl px-8 py-8">
              <div className="w-12 h-12 rounded-xl bg-[#E8A020] flex items-center justify-center flex-shrink-0">
                <Wine className="text-white size-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-bold text-[#1B3A5C] mb-2">
                  Spécialiste vin &amp; objets d&apos;art
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Vastorg maîtrise la chaîne complète pour les exportateurs de
                  vins fins et spiritueux : codes HS 2204 / 2208, déclarations
                  GAMMA2 / DAE, mouvements EMCS, transporteurs ATP
                  température-contrôlée. Une expertise rare, accessible à chaque
                  expédition.
                </p>
              </div>
              <Button
                asChild
                className="bg-[#E8A020] hover:bg-amber-600 text-white font-semibold h-10 px-6 rounded-lg flex-shrink-0"
              >
                <Link href="/services">
                  En savoir plus
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ── How it works ── */}
        <section className="bg-gray-50 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-[#1B3A5C] mb-3">
                Comment ça marche
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
                Trois étapes simples, de la demande à la livraison.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {steps.map(({ num, icon: Icon, title, desc }) => (
                <div key={num}>
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-full bg-[#1B3A5C] flex items-center justify-center flex-shrink-0">
                      <Icon className="text-white size-5" />
                    </div>
                    <span className="text-5xl font-bold text-[#D6E4F0] leading-none pt-1">
                      {num}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#1B3A5C] mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="bg-[#1B3A5C] py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center py-8 sm:py-0 sm:px-8">
                  <div className="text-5xl font-bold text-white mb-2">
                    {value}
                  </div>
                  <div className="text-xs text-[#D6E4F0] uppercase tracking-widest">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="bg-gradient-to-br from-[#1B3A5C] to-[#2E6DA4] py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Prêt à expédier ?
            </h2>
            <p className="text-[#D6E4F0] text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              {`Créez votre compte gratuitement et obtenez votre premier devis en moins d'une minute.`}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-white text-[#1B3A5C] hover:bg-[#D6E4F0] font-semibold h-12 px-10 text-base rounded-lg"
              >
                <Link href="/dashboard">
                  Créer un compte
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:border-white font-semibold h-12 px-10 text-base rounded-lg"
              >
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
