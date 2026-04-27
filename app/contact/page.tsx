"use client"

import { useState } from "react"
import { Mail, Clock, ArrowRight, CheckCircle2 } from "lucide-react"
import { Navbar } from "@/components/marketing/Navbar"
import { Footer } from "@/components/marketing/Footer"
import { Button } from "@/components/ui/button"

interface FormState {
  nom: string
  societe: string
  email: string
  telephone: string
  message: string
}

const initial: FormState = {
  nom: "",
  societe: "",
  email: "",
  telephone: "",
  message: "",
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initial)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="bg-[#1B3A5C] text-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-[#D6E4F0] text-xs font-semibold uppercase tracking-widest mb-4">
                Contact
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
                Parlons de votre projet export.
              </h1>
              <p className="text-[#D6E4F0] text-lg leading-relaxed">
                {`Une question sur nos services ? Un besoin de devis pour un envoi complexe ? Notre équipe répond sous 24 h ouvrées. Pour un devis standard, utilisez Vastorg Atlas — réponse en 30 secondes.`}
              </p>
            </div>
          </div>
        </section>

        {/* ── Form + info ── */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
              {/* Form */}
              <div className="lg:col-span-3">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-16">
                    <div className="w-16 h-16 rounded-full bg-[#D6E4F0] flex items-center justify-center mb-6">
                      <CheckCircle2 className="size-8 text-[#1B3A5C]" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#1B3A5C] mb-3">
                      Message envoyé !
                    </h2>
                    <p className="text-gray-600 text-sm max-w-sm leading-relaxed">
                      {`Nous avons bien reçu votre message et nous vous répondrons dans les meilleurs délais. Pour un devis immédiat, rendez-vous sur Vastorg Atlas.`}
                    </p>
                    <Button
                      onClick={() => {
                        setForm(initial)
                        setSubmitted(false)
                      }}
                      variant="outline"
                      className="mt-6 border-[#1B3A5C] text-[#1B3A5C] hover:bg-[#D6E4F0]"
                    >
                      Envoyer un autre message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h2 className="text-2xl font-bold text-[#1B3A5C] mb-2">
                      Nous contacter
                    </h2>
                    <p className="text-gray-500 text-sm mb-6">
                      {`Tous les champs marqués d'un * sont obligatoires.`}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="nom"
                          className="block text-sm font-medium text-gray-700 mb-1.5"
                        >
                          Nom *
                        </label>
                        <input
                          id="nom"
                          name="nom"
                          type="text"
                          required
                          value={form.nom}
                          onChange={handleChange}
                          placeholder="Jean Dupont"
                          className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2E6DA4] focus:border-transparent transition"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="societe"
                          className="block text-sm font-medium text-gray-700 mb-1.5"
                        >
                          {`Société`}
                        </label>
                        <input
                          id="societe"
                          name="societe"
                          type="text"
                          value={form.societe}
                          onChange={handleChange}
                          placeholder="Maison Dupont SAS"
                          className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2E6DA4] focus:border-transparent transition"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1.5"
                        >
                          Email *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="jean@maison-dupont.fr"
                          className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2E6DA4] focus:border-transparent transition"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="telephone"
                          className="block text-sm font-medium text-gray-700 mb-1.5"
                        >
                          {`Téléphone`}
                        </label>
                        <input
                          id="telephone"
                          name="telephone"
                          type="tel"
                          value={form.telephone}
                          onChange={handleChange}
                          placeholder="+33 6 00 00 00 00"
                          className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2E6DA4] focus:border-transparent transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1.5"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={form.message}
                        onChange={handleChange}
                        placeholder={`Décrivez votre besoin — type de marchandise, destination, fréquence d'envoi, contraintes particulières...`}
                        className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2E6DA4] focus:border-transparent transition resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full sm:w-auto bg-[#1B3A5C] hover:bg-[#2E6DA4] text-white font-semibold h-12 px-10 text-base rounded-lg"
                    >
                      Envoyer le message
                      <ArrowRight className="ml-2 size-4" />
                    </Button>
                  </form>
                )}
              </div>

              {/* Info */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-[#1B3A5C] mb-4">
                    Informations de contact
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#D6E4F0] flex items-center justify-center flex-shrink-0">
                        <Mail className="size-4 text-[#1B3A5C]" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-0.5">Email</p>
                        <a
                          href="mailto:contact@vastorg.com"
                          className="text-sm font-medium text-[#2E6DA4] hover:text-[#1B3A5C] transition-colors"
                        >
                          contact@vastorg.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#D6E4F0] flex items-center justify-center flex-shrink-0">
                        <Clock className="size-4 text-[#1B3A5C]" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-0.5">
                          {`Horaires d'ouverture`}
                        </p>
                        <p className="text-sm font-medium text-gray-700">
                          Lun – Ven, 9 h – 18 h CET
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Atlas promo */}
                <div className="bg-[#1B3A5C] rounded-2xl p-6 text-white">
                  <p className="text-xs text-[#D6E4F0] uppercase tracking-widest font-semibold mb-3">
                    Vastorg Atlas
                  </p>
                  <h4 className="text-base font-bold mb-2">
                    Devis en 30 secondes
                  </h4>
                  <p className="text-[#D6E4F0] text-sm leading-relaxed mb-5">
                    {`Pour les demandes de devis standard (envoi, poids, destination), Vastorg Atlas vous répond instantanément — 24 h/24, 7 j/7.`}
                  </p>
                  <Button
                    asChild
                    className="w-full bg-white text-[#1B3A5C] hover:bg-[#D6E4F0] font-semibold h-10 rounded-lg text-sm"
                  >
                    <a href="/dashboard">
                      Accéder à Atlas
                      <ArrowRight className="ml-2 size-4" />
                    </a>
                  </Button>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <h4 className="text-sm font-semibold text-[#1B3A5C] mb-3">
                    Pour les demandes complexes
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Envois de matières dangereuses",
                      "Projets réguliers ou contrats cadres",
                      "Vins fins et objets d'art",
                      "Questions douanières spécifiques",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-[#2E6DA4] font-bold mt-0.5">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
