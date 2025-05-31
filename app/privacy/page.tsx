export default function PrivacyPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-ocean text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-100">
              Last updated: January 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8 text-lg">
              At ScubaDiveIn, we are committed to protecting your privacy and ensuring the security of your 
              personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard 
              your information when you use our services.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-4">1. Information We Collect</h2>
            <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
            <p className="text-gray-600 mb-4">
              We may collect the following personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li>Name, email address, and phone number</li>
              <li>Date of birth and nationality</li>
              <li>Emergency contact information</li>
              <li>Medical information relevant to diving</li>
              <li>Diving certification details</li>
              <li>Payment and billing information</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Usage Information</h3>
            <p className="text-gray-600 mb-6">
              We automatically collect certain information about your device and how you interact with our website, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li>IP address and browser type</li>
              <li>Pages visited and time spent on our site</li>
              <li>Referring website addresses</li>
              <li>Device and operating system information</li>
            </ul>

            <h2 className="text-3xl font-heading font-bold mb-4 mt-8">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li>Process course enrollments and certifications</li>
              <li>Communicate about courses, schedules, and updates</li>
              <li>Process payments and maintain records</li>
              <li>Ensure safety and medical fitness for diving</li>
              <li>Send promotional offers and newsletters (with consent)</li>
              <li>Improve our services and website experience</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-3xl font-heading font-bold mb-4 mt-8">3. Information Sharing and Disclosure</h2>
            <p className="text-gray-600 mb-4">
              We do not sell, trade, or rent your personal information. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li>With PADI for certification processing and verification</li>
              <li>With dive insurance providers (with your consent)</li>
              <li>With emergency services in case of medical emergencies</li>
              <li>When required by law or legal proceedings</li>
              <li>With service providers who assist in our operations</li>
            </ul>

            <h2 className="text-3xl font-heading font-bold mb-4 mt-8">4. Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate technical and organizational security measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li>SSL encryption for data transmission</li>
              <li>Secure servers and databases</li>
              <li>Limited access to personal information</li>
              <li>Regular security assessments</li>
            </ul>

            <h2 className="text-3xl font-heading font-bold mb-4 mt-8">5. Your Rights</h2>
            <p className="text-gray-600 mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li>Access: Request a copy of your personal data</li>
              <li>Correction: Request correction of inaccurate data</li>
              <li>Deletion: Request deletion of your data (subject to legal requirements)</li>
              <li>Portability: Receive your data in a structured format</li>
              <li>Opt-out: Unsubscribe from marketing communications</li>
            </ul>

            <h2 className="text-3xl font-heading font-bold mb-4 mt-8">6. Cookies</h2>
            <p className="text-gray-600 mb-6">
              We use cookies to enhance your browsing experience. Cookies are small files stored on your device that help us:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li>Remember your preferences</li>
              <li>Understand how you use our website</li>
              <li>Improve our services</li>
              <li>Provide relevant content</li>
            </ul>
            <p className="text-gray-600 mb-6">
              You can control cookies through your browser settings, but disabling them may affect website functionality.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-4 mt-8">7. Children's Privacy</h2>
            <p className="text-gray-600 mb-6">
              For participants under 18 years of age, we require parental or guardian consent. We do not knowingly 
              collect personal information from children under 10 years without parental consent.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-4 mt-8">8. International Data Transfers</h2>
            <p className="text-gray-600 mb-6">
              Your information may be transferred to PADI headquarters and processed in countries other than India. 
              We ensure appropriate safeguards are in place for such transfers.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-4 mt-8">9. Updates to Privacy Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-4 mt-8">10. Contact Us</h2>
            <p className="text-gray-600 mb-6">
              If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-sand-beige/30 p-6 rounded-lg">
              <p className="text-gray-700">
                <strong>Data Protection Officer</strong><br />
                ScubaDiveIn<br />
                Email: privacy@scubadivein.in<br />
                Phone: +91-XXXXX-XXXXX<br />
                Address: 123, Marine Drive, Bangalore, Karnataka 560001
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 