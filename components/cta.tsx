import Link from 'next/link';
import {useTranslations} from 'next-intl';
import {Linkedin} from 'lucide-react';
import {Container} from '@/components/container';
import {Button} from '@/components/ui/button';
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardFooter,
} from '@/components/ui/card';

export function Cta() {
	const t = useTranslations('HomePage.cta');

	return (
		<section className="mt-16">
			<Container>
				<Card className="py-8 dark:bg-[url('https://s3.eu-central-1.amazonaws.com/mateuszwoskowicz.pl/cta-background.jpg')] bg-cover bg-no-repeat">
					<CardHeader>
						<CardTitle className="w-full text-center">
							{t('title')}
						</CardTitle>

						<CardDescription className="text-center text-base">
							{t('description')}
						</CardDescription>
					</CardHeader>

					<CardFooter className="justify-center gap-2">
						<Button asChild>
							<Link
								href="https://linkedin.com/in/mateusz-woskowicz"
								target="_blank"
							>
								<Linkedin className="h-4 w-4" />
								{t('button')}
							</Link>
						</Button>
					</CardFooter>
				</Card>
			</Container>
		</section>
	);
}
