
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionTitle } from "@/components/SectionTitle";
import { ContactForm } from "@/components/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-river-50 py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-gray-900">
              Contact Us
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about our platform? Want to become a partner? Reach out to our team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <SectionTitle
                title="Get In Touch"
                subtitle="We'd love to hear from you"
                align="left"
              />
              
              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-river-100 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-river-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Email</h3>
                    <p className="mt-1 text-gray-600">contact@namamigange.in</p>
                    <p className="mt-1 text-gray-600">support@namamigange.in</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-river-100 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-river-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Phone</h3>
                    <p className="mt-1 text-gray-600">+91 123 456 7890</p>
                    <p className="mt-1 text-gray-600">Mon-Fri, 9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-river-100 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-river-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Office</h3>
                    <p className="mt-1 text-gray-600">
                      National Mission for Clean Ganga<br />
                      1st Floor, Major Dhyan Chand National Stadium<br />
                      India Gate, New Delhi - 110002
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-lg font-medium mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-river-100 hover:text-river-600 transition-colors"
                    >
                      <span className="sr-only">{social}</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10z" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <SectionTitle
                title="Send Us a Message"
                subtitle="Fill out the form below and we'll get back to you as soon as possible"
                align="left"
              />
              
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Find quick answers to common questions"
          />
          
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "How accurate is the water quality data?",
                  answer: "Our sensors provide measurements with ±2% accuracy for most parameters. The AI predictions have an average accuracy of 85-90% based on historical validation."
                },
                {
                  question: "Can I use the data for research purposes?",
                  answer: "Yes, all data is available for academic and research purposes under a CC BY-NC license. For commercial use, please contact us for licensing options."
                },
                {
                  question: "How often is the data updated?",
                  answer: "Most monitoring stations update data every 30 minutes. Satellite data is updated daily, while AI predictions are generated twice daily."
                },
                {
                  question: "How can I report a pollution incident?",
                  answer: "You can report pollution incidents through the 'Report' feature in our dashboard or by emailing alert@namamigange.in with location details and photos if possible."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-medium mb-2">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
