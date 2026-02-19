export default function Home() {
  return (
    <section className="mx-auto max-w-4xl space-y-10 py-10">
      <div className="space-y-4 text-center">
        <p className="bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300 inline-block rounded-full px-4 py-1 text-sm font-semibold">
          HAXHIMAKLLA ONLINE
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-gray-100">
          Porosit Haxhimaklla shpejt dhe lehtë
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          Vetëm haxhimaklla — pa produkte tjera. Kjo faqe është ndërtuar për ta marrë porosinë
          online dhe për ta bërë shitjen më të thjeshtë për klientët tuaj.
        </p>
      </div>

      <div className="grid gap-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm md:grid-cols-2 dark:border-gray-700 dark:bg-gray-900">
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Çmimi i rekomanduar
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Për fitim të mirë dhe konkurrencë të shëndetshme, cakto çmimin:
          </p>
          <p className="text-primary-600 dark:text-primary-400 text-4xl font-extrabold">
            39€ / copë
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Ky është çmim i balancuar për shitje online dhe i kuptueshëm për klientin.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Çfarë përfshin oferta
          </h3>
          <ul className="list-disc space-y-2 pl-5 text-gray-600 dark:text-gray-300">
            <li>1x Haxhimaklla premium</li>
            <li>Dërgesë e shpejtë në Kosovë</li>
            <li>Porosi direkte nga telefoni</li>
            <li>Vetëm produkti Haxhimaklla, asgjë tjetër</li>
          </ul>
        </div>
      </div>

      <div className="bg-primary-600 rounded-2xl p-8 text-center text-white">
        <h3 className="text-2xl font-bold">Prano porosi online sot</h3>
        <p className="text-primary-100 mt-2">
          Aktivizo faqen dhe fillo me çmimin 39€ për të testuar tregun e për të rritur fitimin.
        </p>
        <button className="text-primary-700 hover:bg-primary-50 mt-5 rounded-xl bg-white px-6 py-3 font-semibold transition">
          Porosit Tani
        </button>
      </div>
    </section>
  )
}
