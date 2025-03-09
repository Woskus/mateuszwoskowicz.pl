import {Download, Linkedin} from 'lucide-react';
import {Container} from '@/components/container';
import {Button} from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
	CardFooter,
} from '@/components/ui/card';
import Link from 'next/link';

export function Cta() {
	return (
		<section className="mt-16">
			<Container>
				<Card className="py-8 bg-[url('https://s3.eu-central-1.amazonaws.com/mateuszwoskowicz.pl/cta-background.jpg')] bg-cover bg-no-repeat">
					<CardHeader>
						<CardTitle className="w-full text-center">
							Chcesz ze mną współpracować?
						</CardTitle>

						<CardDescription className="text-center text-base">
							Napisz do mnie na linkedin i bądźmy w kontakcie!
						</CardDescription>
					</CardHeader>

					<CardFooter className="justify-center gap-2">
						<Button asChild>
							<Link
								href="https://linkedin.com/in/mateusz-woskowicz"
								target="_blank"
							>
								<Linkedin className="h-4 w-4" />
								Napisz na Linkedin
							</Link>
						</Button>
					</CardFooter>
				</Card>
			</Container>
		</section>
	);
}
