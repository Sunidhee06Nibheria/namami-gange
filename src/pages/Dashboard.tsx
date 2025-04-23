
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WaterQualityChart } from "@/components/WaterQualityChart";
import { WaterQualityMap } from "@/components/WaterQualityMap";
import { 
  generateHistoricalData,
  generatePredictionData, 
  monitoringStations,
  alertsData
} from "@/data/mockData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell } from "lucide-react";

export default function Dashboard() {
  const [selectedStation, setSelectedStation] = useState("station-1");
  
  // Generate data for selected station
  const historicalData = generateHistoricalData(10);
  const predictionData = generatePredictionData(3);

  // Find details for selected station
  const stationDetails = monitoringStations.find(s => s.id === selectedStation);

  return (
    <>
      <Navbar />
      
      {/* Dashboard Header */}
      <section className="bg-river-50 py-8">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">Water Quality Dashboard</h1>
              <p className="text-gray-600 mt-1">Real-time monitoring and AI predictions</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center">
              <span className="text-sm text-gray-600 mr-2">Last updated: </span>
              <span className="text-sm font-medium">{new Date().toLocaleString()}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-8">
        <div className="container px-4">
          {/* Alert Banner */}
          {alertsData.length > 0 && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-center">
              <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                <Bell className="h-5 w-5 text-red-500" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-red-800">Pollution Alert</h3>
                <p className="text-red-600">
                  High pollution levels detected at {alertsData[0].stationName}. {alertsData[0].parameter} exceeds safe limits.
                </p>
              </div>
            </div>
          )}
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Map and Station Info */}
            <div className="lg:col-span-1">
              <WaterQualityMap 
                stations={monitoringStations}
                selectedStation={selectedStation}
                onStationSelect={setSelectedStation}
              />
              
              {stationDetails && (
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Station Details: {stationDetails.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Location</h4>
                        <p>{stationDetails.location}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Coordinates</h4>
                        <p>{stationDetails.coordinates.join(', ')}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Current Status</h4>
                        <div className="flex items-center mt-1">
                          <span className={`h-3 w-3 rounded-full ${
                            stationDetails.status === 'normal' ? 'bg-green-500' :
                            stationDetails.status === 'warning' ? 'bg-amber-500' : 'bg-red-500'
                          }`}></span>
                          <span className="ml-2 capitalize">{stationDetails.status}</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Key Parameters</h4>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          <div className="p-2 bg-gray-50 rounded">
                            <p className="text-xs text-gray-500">DO</p>
                            <p className="font-medium">{stationDetails.parameters.do} mg/L</p>
                          </div>
                          <div className="p-2 bg-gray-50 rounded">
                            <p className="text-xs text-gray-500">BOD</p>
                            <p className="font-medium">{stationDetails.parameters.bod} mg/L</p>
                          </div>
                          <div className="p-2 bg-gray-50 rounded">
                            <p className="text-xs text-gray-500">Nitrate</p>
                            <p className="font-medium">{stationDetails.parameters.nitrate} mg/L</p>
                          </div>
                          <div className="p-2 bg-gray-50 rounded">
                            <p className="text-xs text-gray-500">Ammonia</p>
                            <p className="font-medium">{stationDetails.parameters.ammonia} mg/L</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
            
            {/* Right Column - Charts */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="do">
                <TabsList className="grid grid-cols-5 mb-6">
                  <TabsTrigger value="do">DO</TabsTrigger>
                  <TabsTrigger value="bod">BOD</TabsTrigger>
                  <TabsTrigger value="nitrate">Nitrate</TabsTrigger>
                  <TabsTrigger value="ammonia">Ammonia</TabsTrigger>
                  <TabsTrigger value="fecalColiform">Coliform</TabsTrigger>
                </TabsList>
                <TabsContent value="do">
                  <WaterQualityChart
                    historicalData={historicalData}
                    predictionData={predictionData}
                    parameter="do"
                  />
                </TabsContent>
                <TabsContent value="bod">
                  <WaterQualityChart
                    historicalData={historicalData}
                    predictionData={predictionData}
                    parameter="bod"
                  />
                </TabsContent>
                <TabsContent value="nitrate">
                  <WaterQualityChart
                    historicalData={historicalData}
                    predictionData={predictionData}
                    parameter="nitrate"
                  />
                </TabsContent>
                <TabsContent value="ammonia">
                  <WaterQualityChart
                    historicalData={historicalData}
                    predictionData={predictionData}
                    parameter="ammonia"
                  />
                </TabsContent>
                <TabsContent value="fecalColiform">
                  <WaterQualityChart
                    historicalData={historicalData}
                    predictionData={predictionData}
                    parameter="fecalColiform"
                  />
                </TabsContent>
              </Tabs>
              
              {/* AI Insights Card */}
              <Card className="mt-6 bg-gradient-to-r from-river-50 to-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="mr-2">AI Insights</span>
                    <span className="text-xs bg-river-100 text-river-800 px-2 py-1 rounded">BETA</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Based on current trends and seasonal patterns, our AI model predicts a 
                    <span className="font-medium"> 15% improvement in DO levels</span> over the next 7 days 
                    at this station. This improvement is likely due to reduced industrial 
                    discharge and favorable weather conditions.
                  </p>
                  <div className="mt-4 p-3 bg-white rounded-lg border border-gray-100">
                    <h4 className="text-sm font-medium">Suggested Actions</h4>
                    <ul className="mt-2 text-sm text-gray-600 space-y-1">
                      <li>Continue monitoring BOD levels which remain slightly elevated</li>
                      <li>Verify industrial discharge compliance in upstream areas</li>
                      <li>Schedule additional sampling if ammonia levels continue rising</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}
