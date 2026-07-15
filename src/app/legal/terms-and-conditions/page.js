export default function TermsPage() {
  return (
    <div className="container-wide py-16 lg:py-24">
      <article className="max-w-3xl mx-auto prose prose-sm prose-headings:text-primary prose-p:text-muted prose-strong:text-primary">
        <h1>SecureFix.KE Terms &amp; Conditions</h1>
        <p className="text-sm text-muted">Last updated: July 2026</p>

        <h2>1. Introduction</h2>
        <p>
          These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your use of the SecureFix.KE platform, website, and related services (&ldquo;Services&rdquo;). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree, do not use our Services.
        </p>

        <h2>2. Services Description</h2>
        <p>
          SecureFix.KE provides enterprise cybersecurity solutions including but not limited to: threat intelligence, phishing detection, URL scanning, leak checking, infrastructure monitoring, penetration testing tools, and mobile security. The specific services available depend on the tier you subscribe to (Sentry, Sentinel, or Citadel).
        </p>

        <h2>3. Account Registration &amp; Security</h2>
        <p>
          You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account. SecureFix.KE reserves the right to suspend or terminate accounts that violate these Terms.
        </p>

        <h2>4. Subscription &amp; Billing</h2>
        <p>
          All prices are listed in Kenyan Shillings (KES) and are exclusive of applicable taxes. Subscriptions are billed per user per month. Annual billing is available at a discounted rate. Payments are processed securely through our payment gateway. Late payments may result in service suspension.
        </p>

        <h2>5. Seat Minimums</h2>
        <p>
          Sentinel subscriptions require a minimum of 15 users/seats. Citadel subscriptions require a minimum of 100 users/seats and are governed by a separate enterprise agreement. Sentry has no minimum seat requirement.
        </p>

        <h2>6. Service Level Commitments</h2>
        <p>
          SecureFix.KE will make commercially reasonable efforts to maintain platform availability. Specific service level agreements (SLAs) apply to Citadel-tier customers under their enterprise agreement. Support response times vary by tier as described on our Pricing page.
        </p>

        <h2>7. Data Protection &amp; Privacy</h2>
        <p>
          SecureFix.KE complies with the Kenya Data Protection Act (ODPC, 2019). We implement appropriate technical and organizational measures to protect your data. Detailed information about our data handling practices is available in our Privacy Policy. Data processing for financial institutions adheres to CBK guidelines.
        </p>

        <h2>8. Acceptable Use</h2>
        <p>You agree not to use our Services to:</p>
        <ul>
          <li>Violate any applicable laws or regulations</li>
          <li>Infringe on the intellectual property rights of others</li>
          <li>Distribute malware, viruses, or other harmful code</li>
          <li>Attempt to gain unauthorized access to our systems or other users&apos; accounts</li>
          <li>Conduct security testing without proper authorization</li>
        </ul>

        <h2>9. Intellectual Property</h2>
        <p>
          All intellectual property rights in the SecureFix.KE platform, including software, trademarks, logos, and documentation, are owned by SecureFix.KE or our licensors. You are granted a limited, non-exclusive, non-transferable license to use the Services during your subscription period.
        </p>

        <h2>10. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, SecureFix.KE shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Services. Our total liability shall not exceed the amount you paid for the Services during the 12 months preceding the claim.
        </p>

        <h2>11. Termination</h2>
        <p>
          Either party may terminate the agreement with 30 days&apos; written notice. SecureFix.KE may terminate immediately if you violate these Terms or fail to pay fees when due. Upon termination, your access to the Services will be revoked and your data will be handled in accordance with our data retention policy.
        </p>

        <h2>12. Governing Law &amp; Dispute Resolution</h2>
        <p>
          These Terms are governed by the laws of the Republic of Kenya. Any disputes arising from these Terms shall first be addressed through good-faith negotiations. If unresolved, disputes shall be referred to mediation under the Nairobi Centre for International Arbitration (NCIA) rules. If mediation fails, disputes shall be resolved in the courts of Kenya.
        </p>

        <h2>13. CBK Compliance</h2>
        <p>
          For clients in the financial sector, SecureFix.KE ensures compliance with applicable Central Bank of Kenya (CBK) guidelines on cybersecurity, including CBK Prudential Guideline No. 29 on Cybersecurity. Reporting and audit features available in the Citadel tier support CBK compliance requirements.
        </p>

        <h2>14. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. We will notify subscribers of material changes via email or through the platform. Continued use of the Services after changes constitutes acceptance of the modified Terms.
        </p>

        <h2>15. Contact</h2>
        <p>
          For questions about these Terms, please contact us at{" "}
          <a href="mailto:legal@securefix.ke" className="text-accent">legal@securefix.ke</a>.
        </p>
      </article>
    </div>
  );
}
