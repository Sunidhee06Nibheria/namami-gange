
// Types for water quality data
export interface WaterQualityPoint {
  date: string;
  do: number; // Dissolved Oxygen (mg/L)
  bod: number; // Biochemical Oxygen Demand (mg/L)
  nitrate: number; // Nitrate (mg/L)
  ammonia: number; // Ammonia (mg/L)
  fecalColiform: number; // Fecal Coliform (MPN/100ml)
  temperature: number; // Water Temperature (°C)
  ph: number; // pH Level
  conductivity: number; // Conductivity (µS/cm)
  tds: number; // Total Dissolved Solids (mg/L)
}

export interface MonitoringStation {
  id: string;
  name: string;
  location: string;
  coordinates: [number, number]; // [latitude, longitude]
  status: "normal" | "warning" | "alert";
  parameters: {
    do: number;
    bod: number;
    nitrate: number;
    ammonia: number;
    fecalColiform: number;
  };
}

// Generate random historical water quality data for the past 30 days
export const generateHistoricalData = (days: number = 30): WaterQualityPoint[] => {
  const data: WaterQualityPoint[] = [];
  const today = new Date();
  
  for (let i = days; i >= 0; i--) {
    const date = new Date();
    date.setDate(today.getDate() - i);
    
    // Add some randomness but with overall trends
    const dayFactor = Math.sin((i / days) * Math.PI * 2) * 0.3;
    const randomFactor = Math.random() * 0.2 - 0.1;
    
    data.push({
      date: date.toISOString().split('T')[0],
      do: 5.8 + dayFactor + randomFactor * 2, // Healthy range: 5-10 mg/L
      bod: 2.2 - dayFactor + randomFactor * 1.5, // Good: <3 mg/L
      nitrate: 0.8 + dayFactor * 0.5 + randomFactor, // Good: <1 mg/L
      ammonia: 0.2 + dayFactor * 0.2 + randomFactor * 0.3, // Good: <0.5 mg/L
      fecalColiform: 800 + dayFactor * 500 + randomFactor * 400, // Good: <1000 MPN/100ml
      temperature: 22 + dayFactor * 3 + randomFactor * 2,
      ph: 7.2 + dayFactor * 0.3 + randomFactor * 0.2,
      conductivity: 350 + dayFactor * 50 + randomFactor * 30,
      tds: 180 + dayFactor * 30 + randomFactor * 20,
    });
  }
  
  return data;
};

// Generate AI predictions for the next 5 days
export const generatePredictionData = (days: number = 5): WaterQualityPoint[] => {
  const data = generateHistoricalData(days);
  const trend = Math.random() > 0.5 ? 1 : -1; // Random trend direction
  
  return data.map((point, index) => {
    const trendFactor = trend * (index / days) * 0.4;
    return {
      ...point,
      // Add trend to predictions
      do: point.do + trendFactor,
      bod: point.bod + trendFactor * 0.5,
      nitrate: point.nitrate + trendFactor * 0.3,
      ammonia: point.ammonia + trendFactor * 0.1,
      fecalColiform: point.fecalColiform + trendFactor * 200,
    };
  });
};

// Mock monitoring stations
export const monitoringStations: MonitoringStation[] = [
  {
    id: "station-1",
    name: "Rishikesh",
    location: "Uttarakhand",
    coordinates: [30.1087, 78.2932],
    status: "normal",
    parameters: {
      do: 7.8,
      bod: 1.8,
      nitrate: 0.6,
      ammonia: 0.15,
      fecalColiform: 500
    }
  },
  {
    id: "station-2",
    name: "Haridwar",
    location: "Uttarakhand",
    coordinates: [29.9457, 78.1642],
    status: "normal",
    parameters: {
      do: 6.9,
      bod: 2.1,
      nitrate: 0.7,
      ammonia: 0.18,
      fecalColiform: 720
    }
  },
  {
    id: "station-3",
    name: "Kanpur",
    location: "Uttar Pradesh",
    coordinates: [26.4499, 80.3319],
    status: "alert",
    parameters: {
      do: 4.2,
      bod: 5.8,
      nitrate: 1.9,
      ammonia: 1.2,
      fecalColiform: 5400
    }
  },
  {
    id: "station-4",
    name: "Varanasi",
    location: "Uttar Pradesh",
    coordinates: [25.3176, 82.9739],
    status: "warning",
    parameters: {
      do: 5.1,
      bod: 3.2,
      nitrate: 1.2,
      ammonia: 0.7,
      fecalColiform: 2800
    }
  },
  {
    id: "station-5",
    name: "Patna",
    location: "Bihar",
    coordinates: [25.5941, 85.1376],
    status: "warning",
    parameters: {
      do: 5.3,
      bod: 2.9,
      nitrate: 1.0,
      ammonia: 0.62,
      fecalColiform: 2500
    }
  },
  {
    id: "station-6",
    name: "Kolkata",
    location: "West Bengal",
    coordinates: [22.5726, 88.3639],
    status: "normal",
    parameters: {
      do: 6.1,
      bod: 2.3,
      nitrate: 0.9,
      ammonia: 0.45,
      fecalColiform: 1200
    }
  }
];

// Water quality standard thresholds
export const waterQualityStandards = {
  do: {
    good: 6.0, // Above this is good
    fair: 4.0, // Above this is fair, below is poor
  },
  bod: {
    good: 3.0, // Below this is good
    fair: 5.0, // Below this is fair, above is poor
  },
  nitrate: {
    good: 1.0, // Below this is good
    fair: 2.0, // Below this is fair, above is poor
  },
  ammonia: {
    good: 0.5, // Below this is good
    fair: 1.0, // Below this is fair, above is poor
  },
  fecalColiform: {
    good: 1000, // Below this is good
    fair: 2500, // Below this is fair, above is poor
  }
};

// Get mock alert data
export const alertsData = [
  {
    id: "alert-1",
    stationId: "station-3",
    stationName: "Kanpur",
    timestamp: "2025-04-20T09:15:00Z",
    parameter: "BOD",
    value: 5.8,
    threshold: 5.0,
    severity: "high"
  },
  {
    id: "alert-2",
    stationId: "station-3",
    stationName: "Kanpur",
    timestamp: "2025-04-20T09:15:00Z",
    parameter: "Ammonia",
    value: 1.2,
    threshold: 1.0,
    severity: "high"
  },
  {
    id: "alert-3",
    stationId: "station-4",
    stationName: "Varanasi",
    timestamp: "2025-04-21T11:30:00Z",
    parameter: "Fecal Coliform",
    value: 2800,
    threshold: 2500,
    severity: "medium"
  },
  {
    id: "alert-4",
    stationId: "station-5",
    stationName: "Patna",
    timestamp: "2025-04-22T14:45:00Z",
    parameter: "Fecal Coliform",
    value: 2500,
    threshold: 2500,
    severity: "low"
  },
  {
    id: "alert-5",
    stationId: "station-3",
    stationName: "Kanpur",
    timestamp: "2025-04-19T06:00:00Z",
    parameter: "Dissolved Oxygen",
    value: 4.2,
    threshold: 4.0,
    severity: "low"
  }
];
