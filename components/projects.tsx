import {Container} from '@/components/container';

interface Project {
	title: string;
	company: string;
	img: string;
}

const PROJECTS: Project[] = [
  {
    title: 'Strona "Mobilne Rozgrywki Galaxy"',
    company: 'Samsung',
    img: '/img/projects/samsung.png',
  },
  {
    title: 'Strona dla PKO BP Fortnite',
    company: 'PKO BP',
    img: '/img/projects/pkobp.png',
  },
  {
    title: 'Wordpress to Next.js Migration',
    company: 'inStreamly',
    img: '/img/projects/instreamly.png',
  }
]

export function Projects() {
  return (
    <section className="mt-8">
      <Container>
        <h2 className="text-base">Wyróżnione projekty</h2>

        <div className="grid grid-cols-3 gap-2 mt-5">
          {PROJECTS.map(({title, company, img}) => (
            <div key={title} className="relative rounded-lg overflow-hidden">
              <img src={img} alt={title} className="w-full" />

              <div className="bg-gradient-to-t from-black/80 to-black/0 bg-transparent absolute bottom-0 left-0 w-full h-[150px]" />

              <div className="absolute bottom-5 left-5">
                <h3 className="text-lg">{title}</h3>
                <p className="text-muted-foreground text-sm">{company}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
