export default function Privacy() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="mb-10">
        <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-neutral-400">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>
      </header>

      <div className="prose prose-invert prose-neutral max-w-none space-y-8 text-sm leading-relaxed text-neutral-300">
        <section>
          <h2 className="mb-3 text-base font-semibold text-white">
            Introduction
          </h2>
          <p>
            Epistle (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and related services. By using Epistle, you agree to the practices described in this policy.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-white">
            Information We Collect
          </h2>
          <p className="mb-3">
            We collect only the information necessary to provide and improve the Epistle experience:
          </p>
          <ul className="list-inside list-disc space-y-2 pl-2">
            <li>
              <strong className="text-neutral-200">Account information:</strong> If you create an account, we may collect your email address and a password (stored securely). Account creation may be optional depending on the features you use.
            </li>
            <li>
              <strong className="text-neutral-200">Subscription and purchase data:</strong> If you purchase a subscription or in-app product, we receive transaction and entitlement information from the Apple App Store (or other storefront) to manage your access. We do not store your full payment card details.
            </li>
            <li>
              <strong className="text-neutral-200">App preferences and usage:</strong> We may collect your chosen notification time, language preference, and anonymized or aggregated usage data (e.g., whether you opened today&apos;s encounter) to improve the app and fix issues.
            </li>
            <li>
              <strong className="text-neutral-200">Device information:</strong> We may collect device type, operating system version, and a unique identifier necessary for delivering content and preventing abuse. We do not use this data to build advertising profiles.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-white">
            How We Use Your Information
          </h2>
          <p>
            We use the information we collect to: deliver your daily encounter and any content you have access to; manage your account and subscription; send you notifications at your chosen time (if you opt in); improve our app and fix bugs; and comply with applicable law. We do not sell your personal information or use it for third-party advertising.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-white">
            Data Sharing and Third Parties
          </h2>
          <p>
            We may share data only with service providers that help us operate the app (e.g., hosting, analytics, subscription management such as RevenueCat or Apple). These providers are contractually required to protect your data and use it only for the purposes we specify. We may also disclose information if required by law or to protect our rights and safety.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-white">
            Data Retention and Security
          </h2>
          <p>
            We retain your information only as long as needed to provide the service and fulfill the purposes in this policy, or as required by law. We implement appropriate technical and organizational measures to protect your data against unauthorized access, loss, or misuse.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-white">
            Children&apos;s Privacy
          </h2>
          <p>
            Epistle is not directed at children under 13 (or the applicable age in your region). We do not knowingly collect personal information from children. If you believe we have collected such information, please contact us and we will delete it promptly.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-white">
            Your Rights and Choices
          </h2>
          <p>
            Depending on your location, you may have the right to access, correct, delete, or port your personal data, or to object to or restrict certain processing. You can manage many preferences (e.g., notifications) inside the app. To request access, correction, or deletion of your account data, contact us at the email below. If you are in the EEA or UK, you may also have the right to lodge a complaint with your local data protection authority.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-white">
            Contact Us
          </h2>
          <p>
            For privacy-related questions, requests, or complaints, contact us at{" "}
            <a href="mailto:privacy@epistle.app" className="text-white underline hover:no-underline">
              privacy@epistle.app
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-white">
            Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. We will post the revised policy on this page and update the &ldquo;Last updated&rdquo; date. Continued use of Epistle after changes constitutes acceptance of the updated policy. For material changes, we may provide additional notice (e.g., in the app or by email).
          </p>
        </section>
      </div>
    </article>
  );
}
