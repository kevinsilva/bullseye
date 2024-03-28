import { useQuery } from '@apollo/client';
import { GET_DAILY_TIME_SERIES } from '../graphql/queries';
import { useSecurityContext } from '../context/securityContext';

export default function useSecurityDetail(ticker: string | undefined) {
  const { securityList } = useSecurityContext();
  const securityData = securityList.find(
    (security) => security.ticker === ticker
  );

  const { data, loading, error } = useQuery(GET_DAILY_TIME_SERIES, {
    variables: { securityId: securityData?.id },
  });

  return { securityData, data, loading, error };
}
