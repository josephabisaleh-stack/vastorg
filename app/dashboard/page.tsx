import Link from "next/link"
import {
  Zap,
  Globe,
  FileText,
  BarChart2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react"
import { Navbar } from "@/components/marketing/Navbar"
import { Footer } from "@/components/marketing/Footer"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Zap,
    title: "Devis instantané",
    desc: "Obtenez un tarif en 30 secondes pour n'importe quel mode et n'importe quelle destination.",
  },
  {
    icon: Globe,
    title: "Suivi en temps réel",
    desc: `Tracking de vos expéditions en direct — statut, position, alertes — depuis un seul tableau de bord.`,
  },
  {
    icon: ShieldCheck,
    title: "Gestion douanière",
    desc: `Vos déclarations EX-A et DAE, générées et soumises automatiquement. MRN disponible en temps réel.`,
  },
  {
    icon: FileText,
    title: "Bibliothèque documentaire",
    desc: `Tous vos documents d'export centralisés : devis, confirmations, FCR, HAWB, factures, certificats.`,
  },
  {
    icon: BarChart2,
    title: "Historique & analytics",
    desc: `Consultez l'ensemble de vos expéditions passées, dépenses, et économies réalisées grâce à Vastorg.`,
  },
]

export default function DashboardPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* ── Hero ── */}
        <section className="bg-[#1B3A5C] text-white py-24 lg:py-36">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Atlas badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#E8A020]" />
              <span className="text-xs font-semibold text-[#D6E4F0] uppercase tracking-widest">
                Vastorg Atlas
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-5">
              Vastorg Atlas
            </h1>
            <p className="text-xl text-[#D6E4F0] mb-4 font-light">
              Votre plateforme de fret intelligente
            </p>
            <p className="text-[#D6E4F0] text-base max-w-xl mx-auto leading-relaxed mb-12">
              {`Devis instantané, réservation en ligne, suivi temps réel, douane intégrée, bibliothèque documentaire — tout en un seul endroit.`}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-[#1B3A5C] hover:bg-[#D6E4F0] font-semibold h-12 px-10 text-base rounded-lg">
                Créer un compte
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button
                variant="outline"
                className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:border-white font-semibold h-12 px-10 text-base rounded-lg"
              >
                Se connecter
              </Button>
            </div>

            <p className="text-xs text-[#D6E4F0]/60 mt-6">
              Aucune carte bancaire requise pour créer un compte.
            </p>
          </div>
        </section>

        {/* ── Feature highlights ── */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1B3A5C] mb-3">
                Tout ce dont vous avez besoin
              </h2>
              <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
                {`Vastorg Atlas centralise l'ensemble de votre activité export dans une interface conçue pour les non-logisticiens.`}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-gray-50 rounded-2xl p-7 border border-gray-200 hover:border-[#2E6DA4] hover:shadow-md transition-all duration-200"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#D6E4F0] flex items-center justify-center mb-5">
                    <Icon className="size-5 text-[#1B3A5C]" />
                  </div>
                  <h3 className="text-base font-semibold text-[#1B3A5C] mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}

              {/* Prompt card */}
              <div className="bg-[#1B3A5C] rounded-2xl p-7 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-[#D6E4F0] uppercase tracking-widest font-semibold mb-3">
                    Commencer maintenant
                  </p>
                  <h3 className="text-base font-bold text-white mb-2">
                    Premier devis gratuit
                  </h3>
                  <p className="text-sm text-[#D6E4F0] leading-relaxed mb-6">
                    {`Créez votre compte et obtenez votre premier devis en moins d'une minute.`}
                  </p>
                </div>
                <Button className="bg-white text-[#1B3A5C] hover:bg-[#D6E4F0] font-semibold h-10 rounded-lg text-sm">
                  {`S'inscrire gratuitement`}
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Explainer strip ── */}
        <section className="bg-[#D6E4F0]/40 border-y border-[#D6E4F0] py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-[#1B3A5C] mb-2">
                  {`Déjà client Vastorg ?`}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {`Connectez-vous à votre espace Atlas pour accéder à vos expéditions, documents et devis.`}
                </p>
              </div>
              <div className="h-px md:h-16 w-full md:w-px bg-[#D6E4F0]" />
              <div className="flex-1">
                <h3 className="text-lg font-bold text-[#1B3A5C] mb-2">
                  Nouveau chez Vastorg ?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {`Créez votre compte en 2 minutes. Aucun engagement, aucune carte bancaire requise.`}
                </p>
              </div>
              <div className="h-px md:h-16 w-full md:w-px bg-[#D6E4F0]" />
              <div className="flex-1">
                <h3 className="text-lg font-bold text-[#1B3A5C] mb-2">
                  Une question ?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {`Notre équipe répond sous 24 h. Pour un devis urgente, Atlas est disponible 24 h/24.`}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Final sign-up ── */}
        <section className="bg-white py-16">
          <div className="max-w-xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-[#1B3A5C] mb-3">
              {`Prêt à simplifier vos exports ?`}
            </h2>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              Rejoignez les exportateurs français qui font confiance à Vastorg
              pour leurs expéditions internationales.
            </p>
            <Button
              asChild
              className="bg-[#1B3A5C] hover:bg-[#2E6DA4] text-white font-semibold h-12 px-10 text-base rounded-lg"
            >
              <Link href="#">
                {`Créer mon compte Atlas`}
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <p className="text-xs text-gray-400 mt-4">
              Ou contactez-nous à{" "}
              <a
                href="mailto:contact@vastorg.com"
                className="text-[#2E6DA4] hover:underline"
              >
                contact@vastorg.com
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
