import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DashboardViewComponent } from '@/components';

import { AppActions, RootState } from '@/store';

export function DashboardContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AppActions.numeric.getSavedNumbers());
    dispatch(AppActions.numeric.getRandNumbers());
  }, []);

  const { isLoading, randNumbers, savedNumbers } = useSelector(
    (state: RootState) => state.numeric
  );

  return (
    <DashboardViewComponent
      isLoading={isLoading}
      randNumbers={randNumbers}
      savedNumbers={savedNumbers}
    />
  );
}
