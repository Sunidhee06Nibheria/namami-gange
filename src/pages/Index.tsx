import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionTitle } from "@/components/SectionTitle";
import { FeatureCard } from "@/components/FeatureCard";
import { 
  BarChart3, 
  Bell, 
  Database, 
  Droplets, 
  LineChart, 
  Map,
  Share2
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Index() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Ocean/cloud background image with overlay */}
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/c00134d7-6240-46db-9571-025889651905.png"
            alt="Ocean and Clouds"
            className="w-full h-full object-cover object-center"
            style={{ minHeight: "100%", minWidth: "100%" }}
          />
          {/* Overlay for contrast */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="container relative px-4 py-20 md:py-28 lg:py-32">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block text-[#00008B]">Namami Gange</span>
              <span className="block mt-2 text-river-100">
                AI-Powered Water Quality Monitoring
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-white/90">
              Safeguarding the Ganga, One Data Point at a Time.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild className="bg-river-500 hover:bg-river-600 text-white">
                <Link to="/dashboard">Monitor Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-white text-river-600 border-white hover:bg-river-100">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
            <div className="mt-10 max-w-sm mx-auto">
              <Card>
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="h-12 w-12 flex-shrink-0 rounded-full bg-river-100 flex items-center justify-center">
                    <LineChart className="h-6 w-6 text-river-600" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium">Latest Insight</p>
                    <p className="text-xs text-gray-500">
                      Water quality at Kanpur shows concerning BOD levels. Check dashboard for details.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <div className="water-wave h-16"></div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <SectionTitle
            title="Protecting The Ganga River"
            subtitle="The Ganga is the most sacred river in India, supporting over 400 million people. Our platform helps monitor and predict water quality to preserve this vital resource."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="relative rounded-lg overflow-hidden aspect-square md:aspect-auto">
              <img
                src="https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&q=80"
                alt="Ganga River"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold">Our Sacred River</h3>
                <p className="mt-2">A lifeline for millions of people, plants, and animals</p>
              </div>
            </div>
            
            <div className="flex flex-col justify-center space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Why Namami Gange?</h3>
              <p className="text-gray-700">
                The Ganga River stretches over 2,500 kilometers, flowing from the Himalayas to the Bay of Bengal. 
                It's not just a water body but a symbol of faith, sustenance, and life for millions.
              </p>
              <div className="space-y-3">
                {[
                  "Real-time monitoring across multiple locations",
                  "AI-powered forecasting for early interventions",
                  "Open data access for researchers and citizens",
                  "Smart alerts for pollution events"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-river-100 flex items-center justify-center mr-2">
                      <span className="text-xs font-medium text-river-600">{index + 1}</span>
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
              <div>
                <Button asChild>
                  <Link to="/about">Read Our Story</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <SectionTitle
            title="Cutting-Edge Technology"
            subtitle="Our platform combines satellite data, IoT sensors, and advanced AI models to provide comprehensive monitoring and forecasting of the Ganga River's water quality."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <FeatureCard
              title="Real-Time Monitoring"
              description="Access live data from multiple monitoring stations across the Ganga River basin."
              icon={Droplets}
            />
            <FeatureCard
              title="AI-Powered Forecasting"
              description="3-5 day predictions of water quality parameters using machine learning models."
              icon={BarChart3}
            />
            <FeatureCard
              title="Interactive Dashboard"
              description="Visualize water quality trends and patterns through an intuitive data dashboard."
              icon={LineChart}
            />
            <FeatureCard
              title="Smart Alerts"
              description="Receive notifications when water quality parameters exceed safe thresholds."
              icon={Bell}
            />
            <FeatureCard
              title="Geospatial Analysis"
              description="Map-based visualization of pollution hotspots and spatial trends."
              icon={Map}
            />
            <FeatureCard
              title="Open Data Access"
              description="Download and use water quality data for research, education, and policy planning."
              icon={Database}
            />
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-river-500 hover:bg-river-600">
              <Link to="/features">Explore All Features</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container px-4">
          <SectionTitle
            title="Interactive Dashboard"
            subtitle="Explore water quality data through our intuitive and powerful analytics dashboard."
          />
          
          <div className="mt-10 relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80"
                alt="Dashboard Preview"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <Button size="lg" asChild className="bg-river-500 hover:bg-river-600">
                  <Link to="/dashboard">Access Dashboard</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-river-500 text-white">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold">Join the Movement</h2>
            <p className="mt-4 text-river-50">
              Be part of the mission to protect and restore the Ganga River ecosystem. 
              Together, we can make a difference through data-driven conservation.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="outline" className="bg-white text-river-600 hover:bg-river-50 hover:text-river-700 border-white hover:border-river-50" asChild>
                <Link to="/dashboard">Access Dashboard</Link>
              </Button>
              <Button size="lg" className="bg-white text-river-600 hover:bg-river-50 hover:text-river-700" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Share Section */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-xl font-bold">Spread the Word</h3>
              <p className="text-gray-600 mt-2">
                Share our platform with others who care about the Ganga River
              </p>
            </div>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Share2 size={16} />
                <span>Share</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
