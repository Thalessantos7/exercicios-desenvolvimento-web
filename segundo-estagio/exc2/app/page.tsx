import { Title } from "./components/title.component";
import { Post } from "./components/post.component";

export default function Home() {
  return (
    <main className="p-24">
      <h1>Meu Feed</h1>

      <Post/>
      <Post/>
    </main>
  )
}