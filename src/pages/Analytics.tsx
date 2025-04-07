
import React, { useState, useEffect } from 'react';
import InjuryTrendsChart from '@/components/analytics/InjuryTrendsChart';
import InjuryTypesChart from '@/components/analytics/InjuryTypesChart';
import BodyPartInjuriesChart from '@/components/analytics/BodyPartInjuriesChart';

// Mock data
const injuryTrendData = [
  { month: 'Jan', count: 5 },
  { month: 'Feb', count: 7 },
  { month: 'Mar', count: 3 },
  { month: 'Apr', count: 4 },
  { month: 'May', count: 8 },
  { month: 'Jun', count: 6 },
  { month: 'Jul', count: 5 },
  { month: 'Aug', count: 2 },
];

const injuryTypeData = [
  { name: 'Muscle Strain', value: 35 },
  { name: 'Sprain', value: 25 },
  { name: 'Fracture', value: 10 },
  { name: 'Tendonitis', value: 15 },
  { name: 'Concussion', value: 5 },
  { name: 'Other', value: 10 },
];

const bodyPartData = [
  { part: 'Ankle', count: 18 },
  { part: 'Knee', count: 23 },
  { part: 'Shoulder', count: 15 },
  { part: 'Hamstring', count: 24 },
  { part: 'Lower Back', count: 19 },
  { part: 'Wrist', count: 8 },
  { part: 'Neck', count: 6 },
];

const Analytics = () => {
  const [loading, setLoading] = useState(true);
  const [trendsData, setTrendsData] = useState([] as typeof injuryTrendData);
  const [typesData, setTypesData] = useState([] as typeof injuryTypeData);
  const [bodyPartsData, setBodyPartsData] = useState([] as typeof bodyPartData);

  useEffect(() => {
    // Simulate data loading with a delay
    const loadData = async () => {
      setLoading(true);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Load data in sequence to improve perceived performance
      setTrendsData(injuryTrendData);
      
      await new Promise(resolve => setTimeout(resolve, 100));
      setTypesData(injuryTypeData);
      
      await new Promise(resolve => setTimeout(resolve, 100));
      setBodyPartsData(bodyPartData);
      
      setLoading(false);
    };
    
    loadData();
    
    // Cleanup function
    return () => {
      setTrendsData([]);
      setTypesData([]);
      setBodyPartsData([]);
    };
  }, []);

  return (
    <div className="container py-6">
      <h1 className="text-3xl font-bold mb-8">Analytics</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-6">
        <InjuryTrendsChart data={trendsData} isLoading={loading} />
        <InjuryTypesChart data={typesData} isLoading={loading} />
      </div>
      
      <BodyPartInjuriesChart data={bodyPartsData} isLoading={loading} />
    </div>
  );
};

export default Analytics;
