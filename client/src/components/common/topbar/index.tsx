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
        isactive={chartType === 'Bar'? 'active' : ''}
        onClick={() => setChartType('Bar')}
      >
        Bar Chart
      </Button>
      <Button
        isactive={chartType === 'Line'? 'active': ''}
        onClick={() => setChartType('Line')}
      >
        Line Chart
      </Button>
    </ButtonGroup>
  );
};
