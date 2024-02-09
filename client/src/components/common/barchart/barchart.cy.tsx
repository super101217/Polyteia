import { BarDatum } from '@nivo/bar';
import { BarChartComponent } from './index';

describe('BarChartComponent', () => {
  it('should render the bar chart with the correct data', () => {
    const data: BarDatum[] = [
      { numberGroup: 'A', number: 10, numberColor: 'hsl(144, 70%, 50%)' },
      { numberGroup: 'B', number: 20, numberColor: 'hsl(144, 70%, 50%)' },
      { numberGroup: 'C', number: 30, numberColor: 'hsl(144, 70%, 50%)' },
    ];

    cy.viewport(1200, 800);

    cy.mount(<BarChartComponent data={data} />);

    cy.get('[data-testid="bar-chart"]').should('exist');
  });
});
