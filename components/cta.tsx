import {Download, Linkedin} from 'lucide-react';
import {Container} from '@/components/container';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter} from '@/components/ui/card';
import Link from 'next/link';

export function Cta() {
  return (
    <section className="mt-16">
      <Container>
        <Card className="py-8">
          <CardHeader>
            <CardTitle className="text-center w-full">
              Chcesz ze mną współpracować?
            </CardTitle>

            <CardDescription className="text-center text-base">
              Napisz do mnie na linkedin i bądźmy w kontakcie!
            </CardDescription>
          </CardHeader>

          <CardFooter className="gap-2 justify-center">
           <Link href="https://linkedin.com/in/mateusz-woskowicz" target="_blank">
             <Button>
               <Linkedin className="h-4 w-4" />
               Napisz na Linkedin
             </Button>
           </Link>

            {/*<Button variant="outline">*/}
            {/*  <Download className="h-4 w-4" />*/}
            {/*  Pobierz CV*/}
            {/*</Button>*/}
          </CardFooter>
        </Card>
      </Container>
    </section>
  );
}
