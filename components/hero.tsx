import {Linkedin, Github} from 'lucide-react';
import {Container} from '@/components/container';
import {Button} from '@/components/ui/button';

export function Hero() {
  return (
    <section className="mt-[160px]">
      <Container>
        <div className="border border-border rounded-full p-1 w-fit mb-2">
          <img src="/img/mateusz-woskowicz.jpg" alt="Mateusz Woskowicz" className="rounded-full" />
        </div>

        <h1 className="text-2xl">Mateusz Woskowicz</h1>

        <p className="text-muted-foreground">Senior Frontend Developer</p>

        <div className="space-x-2 mt-4">
          <Button size="icon" variant="outline">
            <Linkedin className="h-4 w-4" />
          </Button>

          <Button size="icon" variant="outline">
            <Github className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
