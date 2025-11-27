import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer"; 
import backgroundImg from "../images/background5.webp"; 

const TermsAndConditions = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <Navbar />

      <div className="flex justify-center py-16 px-4 md:px-0">
        <div className="bg-white bg-opacity-90 rounded-xl shadow-lg mt-10 p-6 md:p-12 max-w-4xl">
          <h1 className="text-2xl md:text-3xl font-bold text-[#12ace5] mb-6">
            Terms and Conditions
          </h1>

          <p className="text-gray-800 mb-4">
            <strong>Last updated:</strong> Nov 28 , 2025
          </p>

          <p className="text-gray-800 mb-4">
            Please read these terms and conditions carefully before using Our Service.
          </p>

          <h2 className="text-xl font-semibold text-[#12ace5] mt-6 mb-2">
            Interpretation and Definitions
          </h2>

          <h3 className="text-lg font-semibold mt-4 mb-2">Interpretation</h3>
          <p className="text-gray-800 mb-4">
            The words of which the initial letter is capitalized have meanings defined under the following conditions. 
            The following definitions shall have the same meaning regardless of whether they appear in singular or plural.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">Definitions</h3>
          <ul className="list-disc list-inside text-gray-800 mb-4">
            <li><strong>Affiliate:</strong> an entity that controls, is controlled by or is under common control with a party.</li>
            <li><strong>Country:</strong> refers to: Delhi, India</li>
            <li><strong>Company:</strong> (referred to as “the Company”, “We”, “Us” or “Our”) refers to Havenn Clinic.</li>
            <li><strong>Device:</strong> any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
            <li><strong>Service:</strong> refers to the Website.</li>
            <li><strong>Terms and Conditions:</strong> (also referred as “Terms”) form the entire agreement between You and the Company regarding the use of the Service.</li>
            <li><strong>Third-party Social Media Service:</strong> any services or content provided by a third-party that may be displayed, included or made available by the Service.</li>
            <li>
              <strong>Website:</strong> refers to Havenn Clinic, accessible from{" "}
              <a
                href="https://havenn-dentel-clinic.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                https://havennclinic.com/
              </a>
            </li>
            <li><strong>You:</strong> the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-2">Acknowledgment</h3>
          <p className="text-gray-800 mb-4">
            These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company.
            Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">Links to Other Websites</h3>
          <p className="text-gray-800 mb-4">
            Our Service may contain links to third-party websites or services that are not owned or controlled by the Company.
            The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">Termination</h3>
          <p className="text-gray-800 mb-4">
            We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including if You breach these Terms.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">Limitation of Liability</h3>
          <p className="text-gray-800 mb-4">
            Notwithstanding any damages that You might incur, the entire liability of the Company under any provision of these Terms shall be limited to the amount actually paid by You through the Service or 100 USD if You haven’t purchased anything through the Service.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">“AS IS” and “AS AVAILABLE” Disclaimer</h3>
          <p className="text-gray-800 mb-4">
            The Service is provided to You “AS IS” and “AS AVAILABLE” and with all faults and defects without warranty of any kind.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">Governing Law</h3>
          <p className="text-gray-800 mb-4">
            The laws of the Country, excluding its conflicts of law rules, shall govern these Terms and Your use of the Service.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">Contact Us</h3>
          <p className="text-gray-800 mb-4">
            If you have any questions about these Terms and Conditions, you can contact us:
          </p>
          <ul className="list-disc list-inside text-gray-800 mb-4">
            <li>By email: Havennsmilestudio@gmail.com</li>
            <li>By visiting this page on our website: 
              <a
                href="https://havenn-dentel-clinic.vercel.app/contactus"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Contact Us
              </a>
            </li>
            <li>By phone number: +91 9315220865</li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
