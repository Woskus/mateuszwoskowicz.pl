import {Container} from '@/components/container';
import {Card, CardContent, CardHeader, CardTitle, CardFooter} from '@/components/ui/card';

interface Testimonial {
  name: string;
  position: string;
  img: string;
  text: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Mateusz Woskowicz',
    position: 'Google',
    img: '/img/mateusz-woskowicz.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae viverra nisl, non accumsan lectus. Etiam molestie mauris augue, et aliquam erat porta eget.',
  },
  {
    name: 'Mateusz Woskowicz',
    position: 'Google',
    img: '/img/mateusz-woskowicz.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae viverra nisl, non accumsan lectus. Etiam molestie mauris augue, et aliquam erat porta eget.',
  },
  {
    name: 'Mateusz Woskowicz',
    position: 'Apple',
    img: '/img/mateusz-woskowicz.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae viverra nisl, non accumsan lectus. Etiam molestie mauris augue, et aliquam erat porta eget.',
  },
];

export function Testimonials() {
  return (
    <section className="mt-16">
      <Container>
        <h2 className="text-base">Opinie</h2>

        <div className="grid grid-cols-3 gap-2 mt-5">
          {TESTIMONIALS.map(({name, position, img, text}) => (
            <Card key={name} className="w-full">
              <CardContent className="pt-6 text-muted-foreground">
                {text}
              </CardContent>

              <CardFooter className="gap-2">
                <img src={img} alt={name} className="h-10 w-10 rounded-full" />

                <div className="flex-col items-start">
                  <div>{name}</div>
                  <div className="text-muted-foreground text-sm">{position}</div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
