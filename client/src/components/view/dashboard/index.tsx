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
import { generateBarData, generateLineData } from '@/utils';

interface Props {
  isLoading: boolean;
  randNumbers: number[];
  savedNumbers: number[];
}

export function DashboardViewComponent(props: Props) {
  const [chartType, setChartType] = useState<string>('Bar');
  const { isLoading, randNumbers, savedNumbers } = props;

  const lineSavedData: LineData[] = generateLineData(savedNumbers, 'hsl(33, 70%, 50%)');
  const lineRandData: LineData[] = generateLineData(randNumbers, 'hsl(33, 70%, 50%)');
  const barSavedData: BarDatum[] = generateBarData(savedNumbers);
  const barRandData: BarDatum[] = generateBarData(randNumbers);

  return isLoading ? (
    <LoadingComponent />
  ) : (
    <MainContent>
      <TopBarComponent setChartType={setChartType} chartType={chartType} />
      <ChartGroup>
        <div style={{ width: '50%' }}>
          <SubTitle>Saved Data</SubTitle>
          {chartType === 'Bar' && <BarChartComponent data={barSavedData} />}
          {chartType === 'Line' && <LineChartComponent data={lineSavedData} />}
        </div>
        <div style={{ width: '50%' }}>
          <SubTitle>Random Data</SubTitle>
          {chartType === 'Bar' && <BarChartComponent data={barRandData} />}
          {chartType === 'Line' && <LineChartComponent data={lineRandData} />}
        </div>
      </ChartGroup>
    </MainContent>
  );
}
