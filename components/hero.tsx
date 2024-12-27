import {Container} from '@/components/container';

export function Hero() {
  return (
    <section className="mt-[160px]">
      <Container>
        <div className="border border-border rounded-full p-1 w-fit mb-2">
          <img src="/img/mateusz-woskowicz.jpg" alt="Mateusz Woskowicz" className="rounded-full" />
        </div>

        <h1 className="text-2xl">Mateusz Woskowicz</h1>

        <p className="text-muted-foreground">Senior Frontend Developer</p>
      </Container>
    </section>
  );
}
