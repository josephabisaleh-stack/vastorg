import Link from "next/link"
import { Target, Zap, ShieldCheck, Wine, Users, ArrowRight } from "lucide-react"
import { Navbar } from "@/components/marketing/Navbar"
import { Footer } from "@/components/marketing/Footer"
import { Button } from "@/components/ui/button"

const values = [
  {
    icon: Zap,
    title: "Natif IA",
    desc: `Chaque devis, chaque document, chaque classification douanière passe par une couche d'intelligence artificielle. Pas un add-on — le cœur du produit.`,
  },
  {
    icon: ShieldCheck,
    title: "Conformité d'abord",
    desc: `Statut RDE (Représentant en Douane Enregistré) en cours d'obtention. Chaque déclaration est vérifiée par notre moteur avant transmission à DELT@-X.`,
  },
  {
    icon: Target,
    title: "Obsession client",
    desc: `Nos clients sont des PME françaises qui n'ont pas de service logistique dédié. Nous sommes leur département export externalisé.`,
  },
  {
    icon: Wine,
    title: "Expertise spécialisée",
    desc: `Le vin, les spiritueux et les objets d'art représentent un flux d'export unique. Vastorg maîtrise chaque contrainte réglementaire de cette filière.`,
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="bg-[#1B3A5C] text-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-[#D6E4F0] text-xs font-semibold uppercase tracking-widest mb-4">
                {`À propos de Vastorg`}
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
                Le transitaire pensé pour l&apos;ère numérique.
              </h1>
              <p className="text-[#D6E4F0] text-lg leading-relaxed">
                {`Vastorg est un transitaire de nouvelle génération, construit entièrement sur l'IA, basé en France et opérant vers le monde entier. Nous réinventons l'export pour les PME françaises — sans les délais, sans les intermédiaires, sans la complexité.`}
              </p>
            </div>
          </div>
        </section>

        {/* ── Who we are ── */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#1B3A5C] mb-6">
                  Qui sommes-nous ?
                </h2>
                <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                  <p>
                    {`Vastorg est née d'un constat simple : le secteur du fret international reste l'un des plus opaques et des moins digitalisés de l'économie. Les PME françaises qui exportent — qu'il s'agisse de vins fins, de produits industriels ou de biens de consommation — font face à des devis qui prennent des jours, des déclarations douanières fastidieuses et un manque total de visibilité sur leurs expéditions.`}
                  </p>
                  <p>
                    {`Nous avons construit Vastorg pour changer ça. Notre plateforme, `}
                    <strong className="text-[#1B3A5C]">Vastorg Atlas</strong>
                    {`, centralise l'ensemble de la chaîne export : calcul de tarif en temps réel, réservation en ligne, génération automatique des documents, dédouanement in-house et suivi de livraison — le tout dans une interface conçue pour des non-logisticiens.`}
                  </p>
                  <p>
                    {`Nous sommes en cours d'obtention du statut `}
                    <strong className="text-[#1B3A5C]">
                      Représentant en Douane Enregistré (RDE)
                    </strong>
                    {` auprès de la Direction Générale des Douanes et Droits Indirects. Ce statut nous permet de déposer des déclarations douanières directement via DELT@-X, sans recours à un commissionnaire externe.`}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { val: "30s", lbl: "Pour un devis" },
                  { val: "RDE", lbl: "Statut douane" },
                  { val: "4", lbl: "Modes de transport" },
                  { val: "100 %", lbl: "Digital, zéro papier" },
                ].map(({ val, lbl }) => (
                  <div
                    key={lbl}
                    className="bg-[#D6E4F0]/30 border border-[#D6E4F0] rounded-2xl p-6 text-center"
                  >
                    <div className="text-3xl font-bold text-[#1B3A5C] mb-1">
                      {val}
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">
                      {lbl}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Values ── */}
        <section className="bg-gray-50 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1B3A5C] mb-3">
                Nos engagements
              </h2>
              <p className="text-gray-500 text-sm max-w-xl mx-auto">
                Quatre principes qui guident chaque décision produit chez Vastorg.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {values.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#2E6DA4] hover:shadow-md transition-all duration-200"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#1B3A5C] flex items-center justify-center mb-5">
                    <Icon className="text-white size-5" />
                  </div>
                  <h3 className="text-base font-semibold text-[#1B3A5C] mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Vision & Mission ── */}
        <section className="bg-[#1B3A5C] py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Notre vision
                </h2>
                <p className="text-[#D6E4F0] text-sm leading-relaxed mb-4">
                  {`Devenir la référence du fret international pour les PME françaises en leur donnant accès à des outils réservés jusqu'ici aux grands comptes : moteur tarifaire en temps réel, dédouanement automatisé, gestion documentaire centralisée.`}
                </p>
                <p className="text-[#D6E4F0] text-sm leading-relaxed">
                  {`Notre ambition est simple : qu'un viticulteur en Bourgogne puisse expédier ses bouteilles à Hong Kong aussi facilement qu'il commande ses intrants — en 2 minutes, depuis son téléphone.`}
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Notre mission
                </h2>
                <p className="text-[#D6E4F0] text-sm leading-relaxed mb-4">
                  {`Rendre l'export accessible, transparent et fiable pour les PME françaises, en supprimant chaque friction entre le produit et son client à l'international.`}
                </p>
                <p className="text-[#D6E4F0] text-sm leading-relaxed">
                  {`Chaque fonctionnalité de Vastorg répond à une question concrète : comment réduire le délai, le coût ou l'incertitude d'une étape dans la chaîne export ? Si elle n'y répond pas, elle n'existe pas dans le produit.`}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Wine specialty ── */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-start gap-8 border-l-4 border-[#E8A020] bg-amber-50 rounded-r-2xl px-8 py-8">
              <div className="w-12 h-12 rounded-xl bg-[#E8A020] flex items-center justify-center flex-shrink-0">
                <Wine className="text-white size-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1B3A5C] mb-3">
                  Expertise vin, spiritueux &amp; objets d&apos;art
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  {`La filière viticole et les objets d'art représentent deux segments d'export particulièrement complexes sur le plan réglementaire. Vastorg a développé une expertise spécifique sur ces filières : gestion des déclarations DAE (Document d'Accompagnement Électronique) via GAMMA2, suivi des mouvements EMCS, qualification des transporteurs ATP pour le contrôle thermique.`}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {`Nos systèmes détectent automatiquement les codes HS liés au vin (2204, 2208) et aux spiritueux pour déclencher le workflow adapté — sans intervention manuelle.`}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-12 h-12 rounded-full bg-[#1B3A5C] flex items-center justify-center mx-auto mb-6">
              <Users className="text-white size-6" />
            </div>
            <h2 className="text-3xl font-bold text-[#1B3A5C] mb-4">
              Travaillons ensemble
            </h2>
            <p className="text-gray-600 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
              {`Vous exportez depuis la France ? Parlez-nous de vos besoins. Nous étudions chaque demande et proposons une solution adaptée à votre flux.`}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-[#1B3A5C] hover:bg-[#2E6DA4] text-white font-semibold h-12 px-8 text-base rounded-lg"
              >
                <Link href="/dashboard">
                  Obtenir un devis
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#1B3A5C] text-[#1B3A5C] hover:bg-[#D6E4F0] font-semibold h-12 px-8 text-base rounded-lg"
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
