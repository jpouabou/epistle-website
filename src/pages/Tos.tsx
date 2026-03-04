export default function Tos() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="mb-10">
        <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-neutral-400">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>
      </header>

      <div className="prose prose-invert prose-neutral max-w-none space-y-8 text-sm leading-relaxed text-neutral-300">
        <section>
          <h2 className="mb-3 text-base font-semibold text-white">
            Agreement to Terms
          </h2>
          <p>
            By downloading, installing, or using the Epistle mobile application (&ldquo;App&rdquo;) and related services (&ldquo;Services&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree, do not use the App or Services. We may update these Terms from time to time; continued use after changes constitutes acceptance.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-white">
            Description of Service
          </h2>
          <p>
            Epistle provides a daily Scripture-based experience: a passage from the King James Version of the Bible paired with a short video reflection. The App is for personal, non-commercial use to support reflection and spiritual formation. We reserve the right to modify, suspend, or discontinue the Service or any part of it at any time.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-white">
            Account and Eligibility
          </h2>
          <p>
            You must be at least 13 years of age (or the minimum age in your jurisdiction) to use the App. If we offer account registration, you are responsible for keeping your credentials secure and for all activity under your account. You must provide accurate information and notify us of any unauthorized use.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-white">
            Subscriptions and Payments
          </h2>
          <p>
            Some features may require a paid subscription or one-time purchase. Payments are processed by the Apple App Store (or other applicable storefront) in accordance with their terms and conditions. Subscription renewals, cancellations, and refunds are managed through your device and store account settings. We do not store your full payment card details. Prices and availability may vary by region.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-white">
            Intellectual Property
          </h2>
          <p>
            The App, its design, content (except where we use public domain or licensed materials such as Scripture), and our trademarks are owned by Epistle or our licensors. You may not copy, modify, distribute, or create derivative works from the App or our content without permission. Scripture content is used in accordance with our licensing and the public domain where applicable.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-white">
            Acceptable Use
          </h2>
          <p>
            You agree to use the App only for lawful purposes and in a way that does not infringe the rights of others or restrict their use. You may not: reverse engineer or attempt to extract source code; use the App to distribute malware or abuse our systems; resell or commercially exploit the Service; or use the App in any manner that could damage or impair the Service.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-white">
            Disclaimers
          </h2>
          <p>
            The App and Services are provided &ldquo;as is&rdquo; and &ldquo;as available.&rdquo; We do not guarantee that the Service will be uninterrupted, error-free, or free of harmful components. Epistle is a tool for reflection and is not a substitute for professional spiritual, medical, or legal advice. Scripture and reflections are offered for encouragement only.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-white">
            Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by law, Epistle and its affiliates, officers, and employees shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or data, arising from your use of the App or Services. Our total liability shall not exceed the amount you paid to us in the twelve (12) months preceding the claim. Some jurisdictions do not allow certain limitations; in such cases, our liability is limited to the fullest extent permitted by law.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-white">
            Indemnification
          </h2>
          <p>
            You agree to indemnify and hold harmless Epistle and its affiliates from any claims, damages, or expenses (including reasonable attorneys&apos; fees) arising from your use of the App, your violation of these Terms, or your violation of any third-party rights.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-white">
            Governing Law and Disputes
          </h2>
          <p>
            These Terms are governed by the laws of the United States and the state in which Epistle operates, without regard to conflict of law principles. Any dispute arising from these Terms or the Service shall be resolved in the courts of that jurisdiction, except where prohibited. You may also have rights under consumer protection laws in your country.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-white">
            Contact
          </h2>
          <p>
            For questions about these Terms, contact us at{" "}
            <a href="mailto:support@epistle.app" className="text-white underline hover:no-underline">
              support@epistle.app
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-white">
            Changes
          </h2>
          <p>
            We may revise these Terms at any time. The revised Terms will be posted on this page with an updated &ldquo;Last updated&rdquo; date. Your continued use of the App after changes constitutes acceptance. For material changes, we may provide notice in the App or by email.
          </p>
        </section>
      </div>
    </article>
  );
}
