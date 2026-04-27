import Link from "next/link"
import {
  Package,
  Truck,
  Ship,
  Plane,
  FileCheck,
  Wine,
  ArrowRight,
  Check,
} from "lucide-react"
import { type LucideIcon } from "lucide-react"
import { Navbar } from "@/components/marketing/Navbar"
import { Footer } from "@/components/marketing/Footer"
import { Button } from "@/components/ui/button"

interface Service {
  id: string
  icon: LucideIcon
  title: string
  subtitle: string
  description: string
  features: string[]
  accent: string
}

const services: Service[] = [
  {
    id: "coursier",
    icon: Package,
    title: "Coursier express",
    subtitle: "FedEx · DHL Express",
    description: `Idéal pour les envois urgents jusqu'à 70 kg. Vastorg intègre les API FedEx et DHL Express pour proposer des tarifs en temps réel et une prise en charge sous 24 h dans les grandes villes françaises.`,
    features: [
      "Délais de livraison J+1 à J+5 selon destination",
      "Couverture mondiale 220+ pays",
      "Tracking en temps réel via Vastorg Atlas",
      "Documents d'export générés automatiquement",
      "Assurance marchandise incluse en option",
    ],
    accent: "#2E6DA4",
  },
  {
    id: "route",
    icon: Truck,
    title: "Transport routier",
    subtitle: "Réseau propre · Groupage & lots complets",
    description: `Vastorg opère son propre réseau de transporteurs routiers homologués pour l'export hors UE. Idéal pour les palettes et envois entre 70 kg et 20 tonnes vers l'Europe, le Maghreb et le Moyen-Orient.`,
    features: [
      "Lots complets (FTL) et groupage (LTL)",
      "Couverture Europe, Maghreb, Moyen-Orient",
      "Tarifs au barème LDM et au poids réel",
      "Suivi GPS des transporteurs partenaires",
      "Prise en charge départ usine ou entrepôt",
    ],
    accent: "#2E6DA4",
  },
  {
    id: "maritime",
    icon: Ship,
    title: "Fret maritime",
    subtitle: "FCL · LCL · Tous ports",
    description: `Pour les grandes quantités ou les destinations lointaines, le fret maritime reste le mode le plus économique. Vastorg propose FCL (conteneur complet) et LCL (groupage) vers tous les grands ports mondiaux.`,
    features: [
      "FCL 20', 40', 40' HC et conteneurs frigorifiques",
      "LCL au mètre cube ou à la tonne",
      "Transit time moyen 15-45 jours selon destination",
      "Dédouanement export inclus (RDE)",
      "Connaissement (B/L) généré automatiquement",
    ],
    accent: "#2E6DA4",
  },
  {
    id: "aerien",
    icon: Plane,
    title: "Fret aérien",
    subtitle: "IATA agréé · Cargo & express",
    description: `Pour les envois urgents de plus de 70 kg ou les destinations non desservies par les intégrateurs. Vastorg est en cours d'accréditation IATA pour opérer comme agent de fret aérien accrédité.`,
    features: [
      "Cargo sur vols réguliers et charters",
      "Couverture mondiale, toutes destinations",
      "Délais 24 h - 72 h selon la route",
      "Matières dangereuses (IATA DGR) sur devis",
      "Documents AWB et SLI générés automatiquement",
    ],
    accent: "#2E6DA4",
  },
  {
    id: "douane",
    icon: FileCheck,
    title: "Dédouanement (RDE)",
    subtitle: "DELT@-X · EX-A · In-house",
    description: `Vastorg est Représentant en Douane Enregistré (RDE) — statut accordé par la DGDDI. Toutes les déclarations douanières sont traitées directement par nos systèmes via DELT@-X, sans recours à un commissionnaire externe.`,
    features: [
      "Déclarations EX-A (export) via DELT@-X DGDDI",
      "Classification HS automatique par IA (>95 % de précision)",
      "Calcul des droits et taxes à l'export",
      "Gestion des licences et autorisations spéciales",
      "MRN (Mouvement de Reference Number) en temps réel",
      "Archive douanière centralisée dans Vastorg Atlas",
    ],
    accent: "#1B3A5C",
  },
  {
    id: "vin",
    icon: Wine,
    title: "Vin, spiritueux & objets d'art",
    subtitle: "GAMMA2 · EMCS · ATP certifié",
    description: `Une offre dédiée aux filières vin, spiritueux et objets d'art — les deux segments d'export les plus réglementés de France. Vastorg maîtrise chaque étape de cette chaîne complexe.`,
    features: [
      "Déclarations DAE via GAMMA2 (mouvements EMCS)",
      "Gestion du numéro d'accise du consignataire",
      "Transporteurs ATP certifiés (température contrôlée)",
      "Détection automatique des codes HS 2204, 2208",
      "Workflow dédié : du chai au client final",
      "Assurance spécialisée valeur déclarée",
    ],
    accent: "#E8A020",
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="bg-[#1B3A5C] text-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-[#D6E4F0] text-xs font-semibold uppercase tracking-widest mb-4">
                Nos services
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
                {`L'export, couvert de A à Z.`}
              </h1>
              <p className="text-[#D6E4F0] text-lg leading-relaxed">
                {`Coursier express, fret routier, maritime, aérien — et douane intégrée in-house. Vastorg couvre l'ensemble du spectre logistique pour les exportateurs français.`}
              </p>
            </div>
          </div>
        </section>

        {/* ── Services list ── */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {services.map(
                ({ id, icon: Icon, title, subtitle, description, features, accent }, index) => (
                  <div
                    key={id}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                      index % 2 === 1 ? "lg:grid-flow-dense" : ""
                    }`}
                  >
                    {/* Text side */}
                    <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                        style={{ backgroundColor: accent }}
                      >
                        <Icon className="text-white size-7" />
                      </div>
                      <h2 className="text-2xl font-bold text-[#1B3A5C] mb-1">
                        {title}
                      </h2>
                      <p className="text-sm font-semibold mb-4" style={{ color: accent }}>
                        {subtitle}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        {description}
                      </p>
                      <Button
                        asChild
                        className="h-10 px-6 rounded-lg font-semibold text-white"
                        style={{ backgroundColor: accent }}
                      >
                        <Link href="/dashboard">
                          Obtenir un devis
                          <ArrowRight className="ml-2 size-4" />
                        </Link>
                      </Button>
                    </div>

                    {/* Features side */}
                    <div
                      className={`bg-gray-50 rounded-2xl p-8 border border-gray-200 ${
                        index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                      }`}
                    >
                      <h3 className="text-xs font-semibold text-[#1B3A5C] uppercase tracking-widest mb-5">
                        Fonctionnalités clés
                      </h3>
                      <ul className="space-y-3">
                        {features.map((feat) => (
                          <li key={feat} className="flex items-start gap-3">
                            <div
                              className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                              style={{ backgroundColor: `${accent}20` }}
                            >
                              <Check className="size-3" style={{ color: accent }} />
                            </div>
                            <span className="text-sm text-gray-700 leading-relaxed">
                              {feat}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-gradient-to-br from-[#1B3A5C] to-[#2E6DA4] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Quel mode vous convient ?
            </h2>
            <p className="text-[#D6E4F0] text-base mb-8 max-w-xl mx-auto leading-relaxed">
              {`Décrivez votre envoi en quelques clics. Notre moteur compare automatiquement tous les modes disponibles et vous propose le meilleur rapport qualité/prix.`}
            </p>
            <Button
              asChild
              className="bg-white text-[#1B3A5C] hover:bg-[#D6E4F0] font-semibold h-12 px-10 text-base rounded-lg"
            >
              <Link href="/dashboard">
                Obtenir un devis instantané
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
