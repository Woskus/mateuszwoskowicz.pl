import {Container} from '@/components/container';

const PROJECTS = [
  {
    title: 'Mobilne Rozgrywki Galaxy',
    img: '/img/projects/samsung.png',
  },
  {
    title: 'PKO BP Fortnite',
    img: '/img/projects/pkobp.png',
  },
  {
    title: 'inStreamly',
    img: '/img/projects/instreamly.png',
  }
]

export function Projects() {
  return (
    <section className="mt-8">
      <Container>
        <h2 className="text-base">Wyróżnione projekty</h2>

        <div className="grid grid-cols-3 gap-2 mt-5">
          {PROJECTS.map(({title, img}) => (
            <div key={title} className="relative rounded-lg overflow-hidden">
              <img src={img} alt={title} className="w-full" />

              <div className="bg-gradient-to-t from-black/80 to-black/0 bg-transparent absolute bottom-0 left-0 w-full h-[150px]" />

              <h3 className="absolute bottom-5 left-5 text-lg">{title}</h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
