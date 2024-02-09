import { DashboardContainer } from '@/containers';
import { WithLayout } from '@/layouts';

function Dashboard() {
  return <DashboardContainer />;
}

export const DashboardPage = WithLayout(Dashboard);
