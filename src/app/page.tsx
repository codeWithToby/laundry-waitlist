import WaitlistForm from "@/components/WaitlistForm";

const STEPS = [
  {
    title: "You request a pickup",
    detail: "Pick a time that works. No drop-off, no queue.",
  },
  {
    title: "A local cleaner handles it",
    detail: "Trusted dry cleaners near campus do the wash & iron.",
  },
  {
    title: "A rider brings it back",
    detail: "Folded, fresh, delivered to your door.",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-full flex-col bg-white">
      <section className="flex flex-1 flex-col justify-center px-6 pt-14 pb-10">
        <div className="mx-auto w-full max-w-sm">
          <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            Coming soon to your campus
          </span>

          <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-gray-900">
            Laundry day is cancelled.
          </h1>

          <p className="mt-3 text-base leading-relaxed text-gray-600">
            Drop a pickup request from your phone. We handle the rest —
            wash, iron, and delivery back to your door. Built for students,
            staff, and lecturers who don&apos;t have time to stand in line.
          </p>

          <div className="mt-7">
            <WaitlistForm />
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-gray-50 px-6 py-10">
        <div className="mx-auto w-full max-w-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
            How it works
          </h2>
          <ol className="mt-4 space-y-5">
            {STEPS.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-gray-900">{step.title}</p>
                  <p className="text-sm text-gray-600">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <footer className="px-6 py-8 text-center">
        <p className="text-xs text-gray-400">
          We&apos;re validating demand before we launch — join the waitlist
          and you&apos;ll be first to know.
        </p>
      </footer>
    </main>
  );
}
