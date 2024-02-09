import { TopBarComponent } from './index';

describe('BarChartComponent', () => {
  it('should render the bar chart with the correct data', () => {

    const setChartType = cy.stub().as('setChartType');

    cy.viewport(1200, 800);

    cy.mount(
      <div data-testid="line-chart" style={{ height: 600 }}>
        <TopBarComponent setChartType={setChartType} chartType="Bar" />
      </div>
    );

     cy.contains('Bar Chart').should('exist');
     cy.contains('Line Chart').should('exist');
 
     cy.contains('Line Chart').click().then(() => {
       expect(setChartType).to.be.calledWith('Line');
     });
 
     cy.contains('Bar Chart').click().then(() => {
       expect(setChartType).to.be.calledWith('Bar');
     });
  });
});
