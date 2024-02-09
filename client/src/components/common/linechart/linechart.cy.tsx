import { LineData } from '@/interfaces';
import { LineChartComponent } from './index';

describe('BarChartComponent', () => {
  it('should render the bar chart with the correct data', () => {
    const data: LineData[] = [
      {
        id: 'number',
        color: '#00B797',
        data: [
          {
            x: 'A',
            y: 10,
          },
          {
            x: 'B',
            y: 20,
          },
          {
            x: 'C',
            y: 14,
          },
        ],
      },
    ];

    cy.viewport(1200, 800);

    cy.mount(<LineChartComponent data={data} />);

    cy.get('[data-testid="line-chart"]').should('exist');
  });
});
