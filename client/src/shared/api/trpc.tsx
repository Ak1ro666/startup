import type { ReactNode } from 'react'

import type { TrpcRouter } from '@ideanick/backend/src/trpc'

import { createTRPCReact, httpBatchLink } from '@trpc/react-query'

import { CONFIG } from '../model/config'
import { queryClient } from './query-client'
import { QueryClientProvider } from '@tanstack/react-query'

export const trpc = createTRPCReact<TrpcRouter>()

const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: `${CONFIG.API_BASE_URL}/trpc`,
    }),
  ],
})

export const TrpcProvider = ({ children }: { children: ReactNode }) => {
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  )
}
