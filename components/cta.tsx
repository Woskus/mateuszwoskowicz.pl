import {Download, Linkedin} from 'lucide-react';
import {Container} from '@/components/container';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter} from '@/components/ui/card';

export function Cta() {
  return (
    <section className="mt-16">
      <Container>
        <Card>
          <CardHeader className="flex flex-row items-center gap-3">
            <CardTitle>
              Chcesz ze mną współpracować?
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae viverra nisl, non accumsan lectus. Etiam molestie mauris augue, et aliquam erat porta eget.
            </p>
          </CardContent>

          <CardFooter className="gap-2">
            <Button>
              <Linkedin className="h-4 w-4" />
              Linkedin
            </Button>

            <Button variant="outline">
              <Download className="h-4 w-4" />
              Pobierz CV
            </Button>
          </CardFooter>
        </Card>
      </Container>
    </section>
  );
}
