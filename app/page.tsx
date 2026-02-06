import Link from '@/components/Link'

const services = [
  {
    title: 'Konsulta online të personalizuara',
    description:
      'Vlerësim i simptomave, udhëzime të sigurta dhe plan trajtimi i përshtatur për nevojat tuaja.',
  },
  {
    title: 'Kontroll i progresit dhe rikthimi',
    description:
      'Monitorim i vazhdueshëm i përmirësimit dhe këshilla për rikthim të shpejtë dhe të sigurt.',
  },
  {
    title: 'Ushtrime të udhëzuara',
    description:
      'Program ushtrimesh me demonstrime të qarta për t’u ndjekur në shtëpi ose në zyrë.',
  },
]

const steps = [
  {
    title: 'Rezervo takimin',
    description: 'Zgjidh një orar të përshtatshëm dhe dërgo pyetjet kryesore.',
  },
  {
    title: 'Konsulta live',
    description: 'Bisedë video me vlerësim të gjendjes dhe rekomandime të menjëhershme.',
  },
  {
    title: 'Plani i kujdesit',
    description: 'Merr planin e personalizuar me ushtrime dhe këshilla të detajuara.',
  },
]

const faqs = [
  {
    question: 'A mund të trajtoj dhimbje kronike përmes telemedicine?',
    answer:
      'Po, telemedicine është e përshtatshme për vlerësimin fillestar dhe ndjekjen e dhimbjeve kronike me plan të strukturuar.',
  },
  {
    question: 'Çfarë më duhet për konsultën online?',
    answer: 'Një pajisje me kamerë, internet të qëndrueshëm dhe një hapësirë të qetë.',
  },
  {
    question: 'Sa zgjat një konsultë?',
    answer: 'Zakonisht 30-45 minuta, në varësi të nevojave tuaja.',
  },
]

export default function Page() {
  return (
    <div className="space-y-20 py-10">
      <section className="rounded-3xl border border-gray-200/70 bg-white/70 p-8 shadow-sm dark:border-gray-700/60 dark:bg-gray-900/30">
        <div className="space-y-6">
          <p className="text-base leading-6 font-semibold text-primary-500">Mirë se vini</p>
          <div className="space-y-3">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-gray-100">
              Dr. Diellza Rabushaj
            </h1>
            <p className="text-xl font-medium text-gray-600 dark:text-gray-300">
              Doktoreshë – Telemedicine
            </p>
          </div>
          <p className="max-w-2xl text-lg leading-7 text-gray-500 dark:text-gray-400">
            Kujdes profesional dhe i personalizuar në distancë. Konsulta të sigurta, të shpejta dhe
            të përshtatura për ritmin tuaj të jetesës.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="mailto:kontakt@drdiellza.com"
              className="inline-flex items-center justify-center rounded-full bg-primary-500 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-primary-600 dark:hover:bg-primary-400"
            >
              Rezervo Konsultën
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 transition hover:border-primary-300 hover:text-primary-500 dark:border-gray-700 dark:text-gray-200 dark:hover:text-primary-400"
            >
              Mëso më shumë
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Rreth Doktoreshës
        </h2>
        <p className="max-w-3xl text-lg leading-7 text-gray-500 dark:text-gray-400">
          Dr. Diellza Rabushaj është e përkushtuar në ofrimin e kujdesit bashkëkohor me fokus te
          komunikimi i hapur, edukimi i pacientit dhe rezultatet afatgjata. Eksperienca e saj në
          telemedicine sjell fleksibilitet dhe siguri për pacientët në çdo hap.
        </p>
      </section>

      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Shërbimet e Telemedicine
          </h2>
          <p className="max-w-2xl text-lg text-gray-500 dark:text-gray-400">
            Zgjidhje të plota për kujdesin tuaj, kudo që ndodheni.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-gray-200/70 p-6 shadow-sm dark:border-gray-700/60"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {service.title}
              </h3>
              <p className="mt-3 text-base leading-6 text-gray-500 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Si funksionon
          </h2>
          <p className="max-w-2xl text-lg text-gray-500 dark:text-gray-400">
            Tre hapa të thjeshtë për të nisur konsultën tuaj online.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-gray-200/70 p-6 shadow-sm dark:border-gray-700/60"
            >
              <p className="text-sm font-semibold text-primary-500">Hapi {index + 1}</p>
              <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-gray-100">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-6 text-gray-500 dark:text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Pyetje të shpeshta
          </h2>
          <p className="max-w-2xl text-lg text-gray-500 dark:text-gray-400">
            Përgjigje për pyetjet që marrim më shpesh.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-gray-200/70 p-6 shadow-sm dark:border-gray-700/60"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {faq.question}
              </h3>
              <p className="mt-3 text-base leading-6 text-gray-500 dark:text-gray-400">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200/70 bg-gray-50 p-8 shadow-sm dark:border-gray-700/60 dark:bg-gray-900/40">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Kontakt
            </h2>
            <p className="max-w-2xl text-lg text-gray-500 dark:text-gray-400">
              Për pyetje ose për të rezervuar konsultën, na kontaktoni në:
            </p>
            <div className="space-y-1 text-base text-gray-600 dark:text-gray-300">
              <p>📞 +383 44 000 000</p>
              <p>✉️ kontakt@drdiellza.com</p>
              <p>📍 Konsulta online në të gjithë Kosovën</p>
            </div>
          </div>
          <Link
            href="mailto:kontakt@drdiellza.com"
            className="inline-flex items-center justify-center rounded-full bg-primary-500 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-primary-600 dark:hover:bg-primary-400"
          >
            Rezervo Konsultën
          </Link>
        </div>
      </section>
    </div>
  )
}
