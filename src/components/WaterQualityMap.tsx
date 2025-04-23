
import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MonitoringStation } from "@/data/mockData";

interface WaterQualityMapProps {
  stations: MonitoringStation[];
  selectedStation?: string;
  onStationSelect: (stationId: string) => void;
}

export function WaterQualityMap({ 
  stations, 
  selectedStation, 
  onStationSelect 
}: WaterQualityMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  // Status colors for stations
  const statusColors = {
    normal: "#10b981",
    warning: "#f59e0b",
    alert: "#ef4444"
  };

  useEffect(() => {
    // In a real implementation, this would initialize a map library like Leaflet or Google Maps
    // For now, we'll create a static map with CSS
    if (mapRef.current) {
      setIsMapLoaded(true);
    }
  }, []);

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle>Monitoring Stations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative h-[400px] bg-river-50 rounded-md overflow-hidden" ref={mapRef}>
          {/* This is a mockup of a map - in a real project, use a mapping library */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30" />
          
          <div className="absolute inset-0">
            {/* India outline as a placeholder */}
            <svg
              viewBox="0 0 300 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
              style={{ filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.05))" }}
            >
              <path
                d="M150 50 C 100 80, 80 120, 90 150 C 100 180, 120 220, 150 250 C 180 220, 200 180, 210 150 C 220 120, 200 80, 150 50"
                fill="#ffffff"
                stroke="#0ea5e9"
                strokeWidth="2"
              />
              <path
                d="M150 80 L 150 250"
                stroke="#0ea5e9"
                strokeWidth="2"
                strokeDasharray="4 2"
                strokeLinecap="round"
              />
            </svg>

            {/* Station markers */}
            {stations.map((station) => (
              <div
                key={station.id}
                className={`absolute w-4 h-4 rounded-full cursor-pointer transition-all transform -translate-x-1/2 -translate-y-1/2 ${
                  selectedStation === station.id ? "w-5 h-5 border-2 border-white" : ""
                }`}
                style={{
                  backgroundColor: statusColors[station.status],
                  // Positioning is approximate in this demo - in a real app would use map coordinates
                  top: `${station.coordinates[0] / 35 * 100 + 10}%`, 
                  left: `${station.coordinates[1] / 100 * 100 - 20}%`,
                  boxShadow: "0 0 0 2px rgba(255,255,255,0.5)"
                }}
                onClick={() => onStationSelect(station.id)}
                title={station.name}
              />
            ))}
          </div>
          
          {/* Map overlay with station list */}
          <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm p-3 rounded shadow-md max-h-[calc(100%-16px)] overflow-y-auto w-48">
            <h4 className="text-sm font-semibold mb-2">Monitoring Stations</h4>
            <ul className="space-y-1">
              {stations.map((station) => (
                <li 
                  key={station.id}
                  className={`text-xs p-1.5 rounded cursor-pointer flex items-center ${
                    selectedStation === station.id 
                      ? "bg-river-100 text-river-800" 
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => onStationSelect(station.id)}
                >
                  <span 
                    className="w-2 h-2 rounded-full mr-2"
                    style={{ backgroundColor: statusColors[station.status] }}
                  />
                  <span>{station.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {!isMapLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/80">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-river-600"></div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
