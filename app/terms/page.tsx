export default function TermsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-ocean text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Terms & Conditions
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
            <h2 className="text-3xl font-heading font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing and using the services of ScubaDiveIn, you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-4 mt-8">2. Course Enrollment and Requirements</h2>
            <p className="text-gray-600 mb-4">
              All participants must meet the following requirements:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li>Minimum age requirements as specified for each course</li>
              <li>Medical fitness certified by PADI medical statement</li>
              <li>Basic swimming skills</li>
              <li>Completion of all required paperwork before course commencement</li>
            </ul>

            <h2 className="text-3xl font-heading font-bold mb-4 mt-8">3. Payment Terms</h2>
            <p className="text-gray-600 mb-4">
              Course fees are due in full before the start of any program unless otherwise agreed upon in writing.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li>All prices are in Indian Rupees (INR) and include GST</li>
              <li>Payment can be made via cash, card, bank transfer, or UPI</li>
              <li>Course fees include certification, training materials, and equipment rental</li>
              <li>Additional costs may apply for travel, accommodation, and personal gear</li>
            </ul>

            <h2 className="text-3xl font-heading font-bold mb-4 mt-8">4. Cancellation and Refund Policy</h2>
            <p className="text-gray-600 mb-4">
              We understand that plans can change. Our cancellation policy is as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li>30+ days before course: Full refund minus processing fee</li>
              <li>15-29 days before course: 50% refund</li>
              <li>7-14 days before course: 25% refund</li>
              <li>Less than 7 days: No refund, but course can be rescheduled once</li>
              <li>No-shows forfeit the entire course fee</li>
            </ul>

            <h2 className="text-3xl font-heading font-bold mb-4 mt-8">5. Health and Safety</h2>
            <p className="text-gray-600 mb-6">
              Scuba diving is an adventure sport that involves inherent risks. All participants must:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li>Complete and sign the PADI medical statement truthfully</li>
              <li>Disclose any medical conditions that may affect diving safety</li>
              <li>Follow all safety instructions provided by instructors</li>
              <li>Maintain appropriate dive insurance</li>
            </ul>

            <h2 className="text-3xl font-heading font-bold mb-4 mt-8">6. Liability and Indemnification</h2>
            <p className="text-gray-600 mb-6">
              Participants acknowledge the risks involved in scuba diving and agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li>Release ScubaDiveIn from liability for any injury or damage</li>
              <li>Indemnify ScubaDiveIn against claims arising from their participation</li>
              <li>Maintain personal dive insurance for medical and equipment coverage</li>
            </ul>

            <h2 className="text-3xl font-heading font-bold mb-4 mt-8">7. Code of Conduct</h2>
            <p className="text-gray-600 mb-6">
              All participants must maintain professional behavior and respect for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li>Fellow divers and staff</li>
              <li>Marine life and environment</li>
              <li>Local laws and regulations</li>
              <li>Equipment and facilities</li>
            </ul>

            <h2 className="text-3xl font-heading font-bold mb-4 mt-8">8. Intellectual Property</h2>
            <p className="text-gray-600 mb-6">
              All course materials, videos, and content provided by ScubaDiveIn remain our intellectual property 
              and may not be reproduced or distributed without written permission.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-4 mt-8">9. Modifications to Terms</h2>
            <p className="text-gray-600 mb-6">
              ScubaDiveIn reserves the right to modify these terms at any time. Changes will be effective 
              immediately upon posting to our website.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-4 mt-8">10. Contact Information</h2>
            <p className="text-gray-600 mb-6">
              For questions about these Terms & Conditions, please contact us at:
            </p>
            <div className="bg-sand-beige/30 p-6 rounded-lg">
              <p className="text-gray-700">
                <strong>ScubaDiveIn</strong><br />
                Email: legal@scubadivein.in<br />
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