import { trpc } from '../../../shared/api/trpc'

export function useIdeas() {
  return trpc.getIdeas.useQuery()
}
