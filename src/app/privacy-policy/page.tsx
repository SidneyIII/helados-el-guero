import type { Metadata } from "next";
import LegalPageShell from "@/components/LegalPageShell";

export const metadata: Metadata = {
  title: "Privacy Policy | Helados El Güero",
  description: "Privacy policy for the Helados El Güero website.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell title="Privacy Policy" lastUpdated="August 22, 2026">
      <p>
        This Privacy Policy explains what information the Helados El Güero website
        (heladoselguero.com, the &ldquo;Site&rdquo;) collects, how it&rsquo;s used, and the
        choices you have. We&rsquo;ve tried to keep this as short and plain-spoken as possible,
        because Helados El Güero is a small, single-location ice cream shop, not a large online
        retailer.
      </p>

      <h2>1. The Short Version: What We Do and Don&rsquo;t Collect</h2>
      <p>Right now, the Site does not have user accounts, online ordering, or online payments.</p>
      <p>The only information we collect is:</p>
      <ol>
        <li>
          <strong>Reviews you choose to submit</strong> through the review form on the Site,
          which may include your name and your review text; and
        </li>
        <li>
          <strong>Standard, passive website analytics</strong> — the kind of basic traffic
          information most small business websites collect in the background, described in
          Section 4 below.
        </li>
      </ol>
      <p>
        We do not collect payment information, order history, or account information, because
        those features don&rsquo;t exist on the Site today. See Section 8 for what happens if that
        changes in the future.
      </p>

      <h2>2. Review Submissions</h2>
      <p>
        If you submit a review through our Site, the form asks for your name, a star rating, and
        your written review. That information is sent to us so we can read it, and it may be
        displayed publicly on the Site (for example, alongside other customer reviews) or shared
        in our marketing or on our social media.
      </p>
      <p>
        Please don&rsquo;t include sensitive personal information (like a phone number, home
        address, or financial information) in the text of your review, since review text may be
        displayed publicly.
      </p>
      <p>
        We use a third-party form service to receive and deliver review submissions to us by
        email. That provider processes the information you submit strictly to deliver it to us —
        see Section 3 for more on third-party service providers.
      </p>

      <h2>3. We Don&rsquo;t Sell Your Information</h2>
      <p>
        We do not sell, rent, or trade your personal information to third parties for their own
        marketing purposes. The only sharing that happens is with service providers who help us
        operate the Site itself — for example, our website hosting provider and the third-party
        form service that delivers review submissions to us. These providers only receive the
        information necessary to perform their function and are not permitted to use it for their
        own purposes.
      </p>

      <h2>4. Cookies &amp; Analytics</h2>
      <p>
        Like most websites, the Site may use cookies and similar technologies, and may run basic
        analytics or traffic-logging tools (such as those provided by our hosting platform or a
        service like Google Analytics). These tools can passively collect information such as your
        IP address, browser and device type, general location (city/region level), the pages you
        visit, and how you got to the Site.
      </p>
      <p>
        This information is used only in aggregate, to help us understand how many people visit
        the Site and which pages are useful, and is not used to identify you personally. Most web
        browsers let you block or delete cookies through your browser settings — see your
        browser&rsquo;s help documentation for instructions. Blocking cookies may affect how some
        parts of the Site function.
      </p>

      <h2>5. Children&rsquo;s Privacy</h2>
      <p>
        The Site is not directed at children under the age of 13, and we do not knowingly collect
        personal information from children under 13. If you believe a child has submitted personal
        information to us (for example, through the review form), please contact us using the
        information in Section 10 and we will delete it.
      </p>

      <h2>6. How Long We Keep Information &amp; Your Choices</h2>
      <p>
        We keep review submissions for as long as reasonably useful for the purpose of sharing
        customer feedback on the Site — generally, until you ask us to remove it or until we
        determine it&rsquo;s no longer needed. If you&rsquo;d like us to remove a review you
        submitted, or to tell you what information we have connected to your submission, contact
        us using the information in Section 10 and we&rsquo;ll take care of it.
      </p>

      <h2>7. Security</h2>
      <p>
        We take reasonable steps to protect the information submitted through the Site. However,
        no method of transmission over the internet, and no method of electronic storage, is 100%
        secure, and we cannot guarantee absolute security.
      </p>

      <h2>8. Future Online Ordering</h2>
      <p>
        Helados El Güero does not currently offer online or mobile ordering through this Site. If
        we add online ordering in the future, this Privacy Policy will be updated before that
        feature launches to describe what additional information is collected (such as order
        details and payment information), how payments are processed, and any new third-party
        payment processors or order-management providers involved. We encourage you to review this
        page periodically, especially if you use any new features we add to the Site.
      </p>

      <h2>9. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time, for example to reflect changes to the
        Site or applicable law. When we do, we&rsquo;ll update the &ldquo;Last Updated&rdquo; date
        at the top of this page. We encourage you to review this page periodically.
      </p>

      <h2>10. Contact Us</h2>
      <p>If you have questions about this Privacy Policy or your information, contact us at:</p>
      <p>
        Helados El Güero
        <br />
        622 South Main Street
        <br />
        Council Bluffs, IA 51501
        <br />
        Phone: (712) 309-0004
        <br />
        Email: hello@heladoselguero.com
      </p>
    </LegalPageShell>
  );
}
