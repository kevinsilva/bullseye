import { createContext, useContext } from 'react';
import { useQuery } from '@apollo/client';
import { ALL_SECURITIES } from '../graphql/queries';
import { ChildrenTypes, SecurityContextTypes } from '../utils/types';

const SecurityContext = createContext<SecurityContextTypes | null>(null);

export default function SecurityContextProvider({ children }: ChildrenTypes) {
  const { data, loading, error } = useQuery(ALL_SECURITIES);
  if (!data) return null;

  return (
    <SecurityContext.Provider
      value={{ securityList: data.securityList, loading, error }}
    >
      {children}
    </SecurityContext.Provider>
  );
}

/* eslint-disable react-refresh/only-export-components */
export function useSecurityContext() {
  const context = useContext(SecurityContext);
  if (!context)
    throw new Error(
      'useSecurityContext must be used within a SecurityContextProvider'
    );

  return context;
}
