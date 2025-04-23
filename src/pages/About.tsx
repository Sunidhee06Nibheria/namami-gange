
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionTitle } from "@/components/SectionTitle";

export default function About() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-river-50 py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-gray-900">
              About Namami Gange
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              Learn about our mission to monitor, protect and revitalize India's most sacred river through technology and data-driven insights.
            </p>
          </div>
        </div>
      </section>

      {/* Why Namami Gange Section */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <SectionTitle
            title="Why Namami Gange?"
            subtitle="Understanding the urgency behind our mission"
            align="left"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <div>
              <p className="text-gray-700 mb-6">
                The Ganga is not just a river; it's a lifeline that sustains over 400 million people 
                across the northern Indian plains. For centuries, it has been the center of social 
                and religious traditions, providing water for drinking, agriculture, and industry.
              </p>
              <p className="text-gray-700 mb-6">
                However, rapid urbanization, industrial growth, and agricultural intensification 
                have placed enormous pressure on this vital resource. Pollution levels have 
                reached alarming levels in many stretches of the river, threatening both 
                ecosystem health and human wellbeing.
              </p>
              <p className="text-gray-700">
                Our AI-powered water quality monitoring platform was born from the urgent need 
                to track, understand, and predict water quality parameters along the entire 
                length of the Ganga. By leveraging cutting-edge technology, we aim to provide 
                actionable insights for policymakers, researchers, and citizens.
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80" 
                alt="The Ganga River" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Government Initiatives Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <SectionTitle
            title="Government Initiatives"
            subtitle="National Mission for Clean Ganga (NMCG)"
          />
          
          <div className="mt-12">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                <div className="w-32 h-32 rounded-full bg-river-50 flex items-center justify-center flex-shrink-0">
                  <span className="text-river-600 text-5xl font-bold">NG</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Namami Gange Programme</h3>
                  <p className="text-gray-700">
                    Launched in June 2014, the Namami Gange Programme is an integrated conservation 
                    mission with a budget of ₹20,000 Crore to accomplish the twin objectives of 
                    effective abatement of pollution and conservation and rejuvenation of the Ganga river.
                  </p>
                </div>
              </div>
              
              <h4 className="text-xl font-semibold mb-4">Key Components of the Programme</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Sewage Treatment Infrastructure",
                    description: "Creating and upgrading sewage treatment plants along the river."
                  },
                  {
                    title: "River-Front Development",
                    description: "Improving the river front and ensuring proper cremation processes."
                  },
                  {
                    title: "River-Surface Cleaning",
                    description: "Removal of floating solid wastes from the river surface."
                  },
                  {
                    title: "Bio-Diversity Conservation",
                    description: "Protecting and restoring the river's diverse ecosystem."
                  },
                  {
                    title: "Afforestation",
                    description: "Planting trees along the river banks to prevent erosion."
                  },
                  {
                    title: "Public Awareness",
                    description: "Engaging communities in the conservation efforts."
                  }
                ].map((item, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2">{item.title}</h5>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-river-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  Our AI-powered water quality monitoring platform complements these government 
                  initiatives by providing real-time data and predictive analytics to assess the 
                  impact of various interventions and guide future actions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <SectionTitle
            title="Our Team"
            subtitle="Dedicated professionals working towards a cleaner Ganga"
          />
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <div key={member} className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold">Team Member {member}</h3>
                <p className="text-gray-600 text-sm">Water Quality Specialist</p>
                <p className="mt-3 text-sm text-gray-500">
                  Passionate about using technology to drive environmental conservation and water quality monitoring.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
