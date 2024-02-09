import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { AppActions, RootState } from '@/store';

export function DashboardContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AppActions.numeric.getSavedNumbers('/numeric/saved'));
    dispatch(AppActions.numeric.getRandNumbers('/numeric/rand'));
  }, []);

  const { isLoading, randNumbers, savedNumbers } = useSelector(
    (state: RootState) => state.numeric
  );

  return (
    <></>
  );
}
