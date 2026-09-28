import { Title } from "./components/title.component";
import { Counter } from "./components/counter.component";

export default function Home() {
  return (
    <div className="flex flex-col p-4 gap-2">
      <Title
      main = "Bem vindo ao React!"
      subtitle = "Estudando React e Next.JS"
      />

      <Counter/>

    </div>
  )
}