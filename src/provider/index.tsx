'use client';

import { ReactNode } from 'react';
import { Toaster } from 'sonner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools
        buttonPosition="bottom-left"
        initialIsOpen={false}
      />
      <Toaster />
    </QueryClientProvider>
  );
};

export default Providers;
