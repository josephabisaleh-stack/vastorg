"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [lang, setLang] = useState<"fr" | "en">("fr")

  const t = {
    services: lang === "fr" ? "Services" : "Services",
    about: lang === "fr" ? "À propos" : "About",
    contact: lang === "fr" ? "Contact" : "Contact",
    login: lang === "fr" ? "Connexion" : "Login",
    cta: lang === "fr" ? "Obtenir un devis" : "Get a quote",
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-7 h-7 rounded-md bg-[#1B3A5C] flex items-center justify-center">
              <span className="text-white text-xs font-bold">V</span>
            </div>
            <span className="text-lg font-bold tracking-tight text-[#1B3A5C]">
              Vastorg
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/services"
              className="text-sm font-medium text-gray-600 hover:text-[#1B3A5C] transition-colors"
            >
              {t.services}
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-600 hover:text-[#1B3A5C] transition-colors"
            >
              {t.about}
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-600 hover:text-[#1B3A5C] transition-colors"
            >
              {t.contact}
            </Link>
          </nav>

          {/* Right-side actions */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => setLang(lang === "fr" ? "en" : "fr")}
              className="text-xs font-semibold text-gray-500 hover:text-[#1B3A5C] transition-colors px-2.5 py-1 rounded-md border border-gray-200 hover:border-[#2E6DA4]"
            >
              {lang === "fr" ? "EN" : "FR"}
            </button>
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-[#1B3A5C] hover:bg-[#D6E4F0] font-medium"
            >
              <Link href="/dashboard">{t.login}</Link>
            </Button>
            <Button
              asChild
              size="sm"
              className="bg-[#1B3A5C] hover:bg-[#2E6DA4] text-white font-medium"
            >
              <Link href="/dashboard">{t.cta}</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-[#1B3A5C] hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-5 space-y-4">
          <nav className="flex flex-col gap-3">
            <Link
              href="/services"
              className="text-sm font-medium text-gray-700 hover:text-[#1B3A5C]"
              onClick={() => setMobileOpen(false)}
            >
              {t.services}
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-700 hover:text-[#1B3A5C]"
              onClick={() => setMobileOpen(false)}
            >
              {t.about}
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-700 hover:text-[#1B3A5C]"
              onClick={() => setMobileOpen(false)}
            >
              {t.contact}
            </Link>
          </nav>
          <div className="flex items-center gap-3 pt-1 border-t border-gray-100">
            <button
              onClick={() => setLang(lang === "fr" ? "en" : "fr")}
              className="text-xs font-semibold text-gray-500 px-2.5 py-1 rounded-md border border-gray-200"
            >
              {lang === "fr" ? "EN" : "FR"}
            </button>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-[#1B3A5C] text-[#1B3A5C]"
            >
              <Link href="/dashboard" onClick={() => setMobileOpen(false)}>
                {t.login}
              </Link>
            </Button>
            <Button
              asChild
              size="sm"
              className="bg-[#1B3A5C] hover:bg-[#2E6DA4] text-white"
            >
              <Link href="/dashboard" onClick={() => setMobileOpen(false)}>
                {t.cta}
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
