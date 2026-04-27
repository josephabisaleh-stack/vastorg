import Link from "next/link"
import { Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1B3A5C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-md bg-white/20 flex items-center justify-center">
                <span className="text-white text-xs font-bold">V</span>
              </div>
              <span className="text-lg font-bold tracking-tight">Vastorg</span>
            </div>
            <p className="text-sm text-[#D6E4F0] leading-relaxed max-w-sm">
              Le transitaire natif IA, depuis la France vers le monde entier.
              Devis en 30 secondes. Douane 100 % in-house.
              {`Spécialiste vin & objets d'art.`}
            </p>
            <div className="flex items-center gap-2 mt-4 text-sm text-[#D6E4F0]">
              <MapPin size={14} className="flex-shrink-0" />
              <span>France</span>
            </div>
            <div className="flex items-center gap-2 mt-2 text-sm text-[#D6E4F0]">
              <Mail size={14} className="flex-shrink-0" />
              <a href="mailto:contact@vastorg.com" className="hover:text-white transition-colors">
                contact@vastorg.com
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Services", href: "/services" },
                { label: "À propos", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Vastorg Atlas", href: "/dashboard" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-[#D6E4F0] hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                "Coursier express",
                "Transport routier",
                "Fret maritime",
                "Fret aérien",
                "Dédouanement (RDE)",
                "Vin & objets d'art",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="text-sm text-[#D6E4F0] hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-[#D6E4F0]">
            © 2025 Vastorg. Tous droits réservés.
          </p>
          <div className="flex flex-wrap gap-5">
            {[
              { label: "Mentions légales", href: "#" },
              { label: "Politique de confidentialité", href: "#" },
              { label: "CGV", href: "#" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-xs text-[#D6E4F0] hover:text-white transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
