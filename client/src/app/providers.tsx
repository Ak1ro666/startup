import { ReactNode } from 'react'
import { TrpcProvider } from '../shared/api/trpc'

export function Providers({ children }: { children: ReactNode }) {
  return <TrpcProvider>{children}</TrpcProvider>
}
