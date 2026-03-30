import React from "react";
export const metadata = {
  title: "Privacy Policy | Beeztech ",
  description:
    "Learn how Beeztech  collects, uses, and protects your personal data across branding, design, and web development services.",
  keywords:
    "Beeztech  privacy policy, data protection, Beeztech Udaipur, GDPR compliance, Beeztech website privacy",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.beeztech.studio/privacy-policy",
  },
};


export default function PrivacyPolicy() {
  return (
    <>
      
      <main className="max-w-7xl mt-12 md:mt-24   mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">
          Privacy Policy
        </h1>

        <p className="mb-6 text-gray-600 text-center">
          Effective Date: January 1, 2025
        </p>

        <section className="space-y-4 text-sm md:text-xl  mt-8 mb-4  md:mt-14 md:mb-8">
           <h2 className="text-2xl md:text-4xl font-bold mt-8 mb-4  md:mt-14 md:mb-8">Privacy at Beeztech</h2>
          <p>
            At <strong>Beeztech</strong>, we are committed to safeguarding
            your privacy and ensuring your data is handled responsibly. This
            Privacy Policy explains how we collect, use, and protect personal
            information across our website and services including design,
            branding, product design, and development solutions.
          </p>

          <h2 className="text-2xl md:text-4xl font-bold mt-8 mb-4  md:mt-14 md:mb-8">Consent</h2>
          <p>
            By accessing or using our website (
            <a
              href="https://www.beeztech.studio"
              className="text-orange-500 underline"
            >
              www.beeztech.studio
            </a>
            ), you agree to this Privacy Policy and consent to our data
            practices described below.
          </p>

          <h2 className="text-2xl md:text-4xl font-bold mt-8 mb-4  md:mt-14 md:mb-8">Information We Collect</h2>
          <p>
            We collect both personal and non-personal information that helps us
            improve user experience and provide better service. This includes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Contact details such as name, email address, phone number, and
              company name when you fill forms or contact us.
            </li>
            <li>
              Usage information such as browser type, IP address, and device
              data to analyze website performance.
            </li>
            <li>
              Project-related information voluntarily shared during service
              inquiries or consultations.
            </li>
          </ul>

          <h2 className="text-2xl md:text-4xl font-bold mt-8 mb-4  md:mt-14 md:mb-8">How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To operate and maintain our website.</li>
            <li>
              To communicate with you for inquiries, updates, and project
              proposals.
            </li>
            <li>
              To improve our design, branding, and development services.
            </li>
            <li>
              To send promotional information (only if you have opted in).
            </li>
            <li>To detect and prevent fraudulent or unauthorized activity.</li>
          </ul>

          <h2 className="text-2xl md:text-4xl font-bold mt-8 mb-4  md:mt-14 md:mb-8">Log Files</h2>
          <p>
            Like most websites, Beeztech  uses standard log files. These
            logs include IP addresses, browser type, date/time stamps, and
            referring pages. This data helps us analyze trends and administer
            the website. It is not linked to personally identifiable
            information.
          </p>

          <h2 className="text-2xl md:text-4xl font-bold mt-8 mb-4  md:mt-14 md:mb-8">Cookies</h2>
          <p>
            We use cookies to enhance your browsing experience and tailor our
            content based on preferences. You can choose to disable cookies in
            your browser settings, though some website features may not function
            properly as a result.
          </p>

          <h2 className="text-2xl md:text-4xl font-bold mt-8 mb-4  md:mt-14 md:mb-8">
            Third-Party Services
          </h2>
          <p>
            Beeztech may use trusted third-party tools like analytics,
            form processors, and payment gateways. These services have their own
            privacy policies, and we encourage you to review them separately.
          </p>

          <h2 className="text-2xl md:text-4xl font-bold mt-8 mb-4  md:mt-14 md:mb-8">Data Protection Rights (GDPR)</h2>
          <p>Under applicable laws, you have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Request access to your personal data.</li>
            <li>Request correction or deletion of inaccurate data.</li>
            <li>Withdraw consent or restrict processing of your data.</li>
            <li>Request a copy of your data in a portable format.</li>
          </ul>
          <p>
            If you wish to exercise any of these rights, please contact us using
            the details below.
          </p>

          <h2 className="text-2xl md:text-4xl font-bold mt-8 mb-4  md:mt-14 md:mb-8">Children’s Privacy</h2>
          <p>
            We do not knowingly collect personal information from children under
            13. If you believe your child has provided such information, please
            contact us immediately and we will take steps to remove it.
          </p>

          <h2 className="text-2xl md:text-4xl font-bold mt-8 mb-4  md:mt-14 md:mb-8">Updates to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically to reflect changes in
            our practices. Updates will be posted on this page with a revised
            effective date.
          </p>

          <h2 className="text-2xl md:text-4xl font-bold mt-8 mb-4  md:mt-14 md:mb-8">Contact Us</h2>
          <p>
            For any questions or concerns about this Privacy Policy or data
            usage, please contact:
          </p>
          <p className="mt-2">
            <strong>Beeztech </strong>
            <br />
            Email:{" "}
            <a
              href="mailto:hello@beeztech.studio"
              className="text-orange-500 underline"
            >
              hello@beeztech.studio
            </a>  
            <br />
            Website:{" "}
            <a
              href="https://www.beeztech.studio"
              className="text-orange-500 underline"
            >
              www.beeztech.studio
            </a>
          </p>
        </section>
      </main>
    </>
  );
}
