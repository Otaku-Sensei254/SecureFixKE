export default function TrialAgreementPage() {
  return (
    <div className="container-wide py-16 lg:py-24">
      <article className="max-w-3xl mx-auto prose prose-sm prose-headings:text-primary prose-p:text-muted prose-strong:text-primary">
        <h1>SecureFix.KE Trial Agreement</h1>
        <p className="text-sm text-muted">Last updated: July 2026</p>

        <h2>1. Trial Period</h2>
        <p>
          The SecureFix.KE free trial period lasts 15 days from the moment your account is activated. Activation occurs within 24 hours of your trial request being approved. The trial grants you access to the features of the tier you selected (Sentry or Sentinel) at no cost.
        </p>

        <h2>2. What&apos;s Included</h2>
        <p>During the trial period, you will have access to:</p>
        <ul>
          <li>Full functionality of the selected tier (Sentry or Sentinel)</li>
          <li>The ability to activate additional modules for testing at no extra cost</li>
          <li>Standard support during business hours (9 AM – 5 PM EAT)</li>
        </ul>

        <h2>3. Usage Limitations</h2>
        <p>
          The trial is limited to the number of users and devices specified during the signup process. Sentry trials have no minimum seat requirement. Sentinel trials require a minimum of 15 users. Exceeding these limits may result in restricted access.
        </p>

        <h2>4. No Payment Required</h2>
        <p>
          No credit card or payment information is required to start the trial. You will not be charged during the trial period. Your trial will automatically expire after 15 days with no obligation to purchase.
        </p>

        <h2>5. Data Handling</h2>
        <p>
          All data submitted during the trial (including scanned URLs, emails, and configuration settings) will be handled in accordance with our Privacy Policy and the Kenya Data Protection Act (ODPC). Upon trial expiration, your data will be preserved for 30 days in case you choose to upgrade to a paid plan.
        </p>

        <h2>6. Trial Expiration &amp; Transition</h2>
        <p>
          After 15 days, your trial account will be deactivated. To continue using SecureFix.KE services, you must purchase a paid subscription. Your configurations and historical data will be preserved and accessible upon upgrading. If no upgrade occurs within 30 days of expiration, your data will be permanently deleted.
        </p>

        <h2>7. Acceptable Use</h2>
        <p>
          You agree not to use the trial for:
        </p>
        <ul>
          <li>Penetration testing or scanning of systems you do not own or have explicit permission to test</li>
          <li>Uploading or distributing malware through the platform</li>
          <li>Any illegal activity under Kenyan law</li>
          <li>Reselling or sublicensing access to the trial platform</li>
        </ul>

        <h2>8. Termination</h2>
        <p>
          SecureFix.KE reserves the right to terminate any trial account at any time if we determine, in our sole discretion, that the trial is being used in violation of this agreement or for any unauthorized purpose. No refund or compensation will be provided for terminated trials.
        </p>

        <h2>9. Disclaimer</h2>
        <p>
          THE TRIAL IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. SecureFix.KE does not guarantee that the trial will be uninterrupted or error-free, or that the trial environment will reflect the full performance characteristics of the production environment.
        </p>

        <h2>10. Governing Law</h2>
        <p>
          This agreement is governed by the laws of the Republic of Kenya. Any disputes arising from this agreement shall be resolved in the courts of Kenya.
        </p>

        <h2>11. Contact</h2>
        <p>
          For questions about this Trial Agreement, please contact us at{" "}
          <a href="mailto:legal@securefix.ke" className="text-accent">legal@securefix.ke</a>.
        </p>
      </article>
    </div>
  );
}
