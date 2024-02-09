import React from 'react';
import { Button, ButtonGroup } from './styled';

interface Props {
  setChartType: (str: string) => void;
  chartType: string;
}

export const TopBarComponent: React.FC<Props> = ({
  setChartType,
  chartType,
}) => {
  return (
    <ButtonGroup>
      <Button
        isActive={chartType === 'Bar'}
        onClick={() => setChartType('Bar')}
      >
        Bar Chart
      </Button>
      <Button
        isActive={chartType === 'Line'}
        onClick={() => setChartType('Line')}
      >
        Line Chart
      </Button>
    </ButtonGroup>
  );
};
