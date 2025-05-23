import { useIdeas } from './model/use-ideas'

export function Page() {
  const ideas = useIdeas()
  console.log(ideas.data?.ideas)

  return <h1>Page</h1>
}
