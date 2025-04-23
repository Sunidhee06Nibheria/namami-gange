
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, TooltipProps } from "recharts";
import { WaterQualityPoint, waterQualityStandards } from "@/data/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";

interface WaterQualityChartProps {
  historicalData: WaterQualityPoint[];
  predictionData: WaterQualityPoint[];
  parameter: "do" | "bod" | "nitrate" | "ammonia" | "fecalColiform";
}

const parameterLabels = {
  do: "Dissolved Oxygen (mg/L)",
  bod: "Biochemical Oxygen Demand (mg/L)",
  nitrate: "Nitrate (mg/L)",
  ammonia: "Ammonia (mg/L)",
  fecalColiform: "Fecal Coliform (MPN/100ml)"
};

const parameterColors = {
  do: "#3b82f6",
  bod: "#ef4444",
  nitrate: "#f59e0b",
  ammonia: "#10b981",
  fecalColiform: "#8b5cf6"
};

export function WaterQualityChart({ 
  historicalData, 
  predictionData, 
  parameter 
}: WaterQualityChartProps) {
  const [showPrediction, setShowPrediction] = useState(true);
  
  // Combine historical and prediction data
  const combinedData = [
    ...historicalData,
    ...predictionData.map(point => ({
      ...point,
      isPrediction: true
    }))
  ];

  const paramLabel = parameterLabels[parameter];
  const paramColor = parameterColors[parameter];
  
  // Determine domain for Y axis based on data
  const allValues = combinedData.map(point => point[parameter]);
  const minValue = Math.min(...allValues) * 0.9;
  const maxValue = Math.max(...allValues) * 1.1;

  // Add threshold lines based on the parameter
  const thresholds = waterQualityStandards[parameter];
  
  const CustomTooltip = ({ 
    active, 
    payload, 
    label 
  }: TooltipProps<ValueType, NameType>) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload as WaterQualityPoint & { isPrediction?: boolean };
      return (
        <div className="bg-white p-3 border rounded shadow-sm">
          <p className="text-sm font-semibold">{`Date: ${label}`}</p>
          <p className="text-sm" style={{ color: paramColor }}>
            {`${paramLabel}: ${payload[0].value}`}
          </p>
          {data.isPrediction && (
            <p className="text-xs mt-1 font-semibold text-river-600">AI Prediction</p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle>{paramLabel}</CardTitle>
          <div className="flex items-center space-x-2 text-sm">
            <label className="flex items-center space-x-1 cursor-pointer">
              <input
                type="checkbox"
                checked={showPrediction}
                onChange={() => setShowPrediction(!showPrediction)}
                className="rounded text-river-600 focus:ring-river-500 h-4 w-4"
              />
              <span>Show AI Predictions</span>
            </label>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={combinedData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
              <XAxis
                dataKey="date"
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => {
                  const date = new Date(value);
                  return `${date.getDate()}/${date.getMonth() + 1}`;
                }}
              />
              <YAxis 
                domain={[minValue, maxValue]} 
                tick={{ fontSize: 12 }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ bottom: 0, fontSize: 12 }} />
              
              {/* Threshold lines */}
              {thresholds && (
                <>
                  <line
                    x1="0%"
                    x2="100%"
                    y1={thresholds.good}
                    y2={thresholds.good}
                    stroke="#10b981"
                    strokeWidth={1}
                    strokeDasharray="5 5"
                  />
                  <line
                    x1="0%"
                    x2="100%"
                    y1={thresholds.fair}
                    y2={thresholds.fair}
                    stroke="#f59e0b"
                    strokeWidth={1}
                    strokeDasharray="5 5"
                  />
                </>
              )}
              
              {/* Historical data line */}
              <Line
                type="monotone"
                dataKey={parameter}
                stroke={paramColor}
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 5 }}
                name="Historical Data"
                connectNulls
              />
              
              {/* Prediction data line */}
              {showPrediction && (
                <Line
                  type="monotone"
                  dataKey={parameter}
                  data={predictionData}
                  stroke="#9333ea"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={{ r: 3 }}
                  activeDot={{ r: 5 }}
                  name="AI Prediction"
                  connectNulls
                />
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
