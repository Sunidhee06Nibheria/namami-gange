
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionTitle } from "@/components/SectionTitle";
import { FeatureCard } from "@/components/FeatureCard";
import { 
  BarChart3, 
  Bell, 
  Brain,
  Database,
  Droplets, 
  LineChart, 
  Map,
  Search,
  Share2
} from "lucide-react";

export default function Features() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-river-50 py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-gray-900">
              Our Features
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the powerful capabilities of our AI-powered water quality monitoring platform
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <SectionTitle
            title="Core Features"
            subtitle="Comprehensive tools for monitoring and analyzing water quality"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <FeatureCard
              title="Real-Time Water Monitoring"
              description="Access live water quality data from multiple stations along the Ganga. Parameters include DO, BOD, nitrate, ammonia, and fecal coliform levels."
              icon={Droplets}
              className="md:col-span-2"
            />
            <FeatureCard
              title="AI-Powered Forecasting"
              description="Our machine learning models predict water quality parameters for 3-5 days ahead, enabling proactive intervention."
              icon={Brain}
            />
            <FeatureCard
              title="Interactive Dashboard"
              description="Visualize time-series data, spatial patterns, and statistical analyses through an intuitive interface."
              icon={LineChart}
            />
            <FeatureCard
              title="Smart Alerts & Notifications"
              description="Receive timely alerts when water quality parameters exceed predefined thresholds or show concerning trends."
              icon={Bell}
              className="md:col-span-2"
            />
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <SectionTitle
            title="Advanced Capabilities"
            subtitle="Going beyond basic monitoring for comprehensive water quality management"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <FeatureCard
              title="Scenario-Based Pollution Analysis"
              description="Model the impact of various pollution scenarios on water quality to guide mitigation strategies."
              icon={BarChart3}
            />
            <FeatureCard
              title="Spatial Analysis"
              description="Map-based visualization of pollution hotspots, pollution sources, and spatial trends along the river."
              icon={Map}
            />
            <FeatureCard
              title="Trend Detection"
              description="Advanced algorithms identify long-term patterns, seasonal variations, and anomalies in water quality data."
              icon={Search}
            />
            <FeatureCard
              title="Open Data Access"
              description="Download historical and current water quality data for research, education, and policy planning."
              icon={Database}
            />
            <FeatureCard
              title="Data Integration"
              description="Our platform integrates multiple data sources including satellite imagery, IoT sensors, and field measurements."
              icon={Share2}
            />
            <FeatureCard
              title="Custom Reporting"
              description="Generate comprehensive reports with visualizations for specific locations, time periods, or water quality parameters."
              icon={LineChart}
            />
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <SectionTitle
            title="Our Technology"
            subtitle="Advanced technologies powering our water quality monitoring platform"
          />
          
          <div className="mt-12 bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Data Collection</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-river-100 flex items-center justify-center mr-2 flex-shrink-0">
                      <span className="text-xs font-medium text-river-600">1</span>
                    </span>
                    <span>IoT sensors deployed at key locations along the Ganga River</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-river-100 flex items-center justify-center mr-2 flex-shrink-0">
                      <span className="text-xs font-medium text-river-600">2</span>
                    </span>
                    <span>Satellite-based remote sensing for wide-area monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-river-100 flex items-center justify-center mr-2 flex-shrink-0">
                      <span className="text-xs font-medium text-river-600">3</span>
                    </span>
                    <span>Manual sampling and laboratory analysis for validation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-river-100 flex items-center justify-center mr-2 flex-shrink-0">
                      <span className="text-xs font-medium text-river-600">4</span>
                    </span>
                    <span>Crowdsourced data from citizen scientists</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">AI & Analytics</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-river-100 flex items-center justify-center mr-2 flex-shrink-0">
                      <span className="text-xs font-medium text-river-600">1</span>
                    </span>
                    <span>Machine learning models for time-series forecasting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-river-100 flex items-center justify-center mr-2 flex-shrink-0">
                      <span className="text-xs font-medium text-river-600">2</span>
                    </span>
                    <span>Computer vision for satellite image analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-river-100 flex items-center justify-center mr-2 flex-shrink-0">
                      <span className="text-xs font-medium text-river-600">3</span>
                    </span>
                    <span>Anomaly detection algorithms for early warning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-river-100 flex items-center justify-center mr-2 flex-shrink-0">
                      <span className="text-xs font-medium text-river-600">4</span>
                    </span>
                    <span>Hydrological modeling for pollution dispersion</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
