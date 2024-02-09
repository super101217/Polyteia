import { useState } from 'react';
import { BarDatum } from '@nivo/bar';
import { LineData } from '@/interfaces';
import {
  BarChartComponent,
  LineChartComponent,
  LoadingComponent,
  TopBarComponent,
} from '@/components';

import { ChartGroup, MainContent, SubTitle } from './styled';

interface Props {
  isLoading: boolean;
  randNumbers: number[];
  savedNumbers: number[];
}

export function DashboardViewComponent(props: Props) {
  const [chartType, setChartType] = useState<string>('Bar');
  const { isLoading, randNumbers, savedNumbers } = props;

  const lineSavedData: LineData[] = [
    {
      id: 'number',
      color: '#00B797',
      data: savedNumbers.map((number, index) => ({
        x: `x${index}`,
        y: number,
      })),
    },
  ];
  const lineRandData: LineData[] = [
    {
      id: 'number',
      color: '#00B797',
      data: randNumbers.map((number, index) => ({ x: `x${index}`, y: number })),
    },
  ];
  const barSavedData: BarDatum[] = savedNumbers.map((number, index) => ({
    numberGroup: `x${index}`,
    number: number,
    numberColor: 'hsl(144, 70%, 50%)',
  }));
  const barRandData: BarDatum[] = randNumbers.map((number, index) => ({
    numberGroup: `x${index}`,
    number: number,
    numberColor: 'hsl(144, 70%, 50%)',
  }));

  return isLoading ? (
    <LoadingComponent />
  ) : (
    <MainContent>
      <TopBarComponent setChartType={setChartType} chartType={chartType} />
      <ChartGroup>
        <div style={{ width: '50%'}}>
          <SubTitle>Saved Data</SubTitle>
          {chartType === 'Bar' && <BarChartComponent data={barSavedData} />}
          {chartType === 'Line' && <LineChartComponent data={lineSavedData} />}
        </div>
        <div style={{ width: '50%'}}>
          <SubTitle>Random Data</SubTitle>
          {chartType === 'Bar' && <BarChartComponent data={barRandData} />}
          {chartType === 'Line' && <LineChartComponent data={lineRandData} />}
        </div>
      </ChartGroup>
    </MainContent>
  );
}
