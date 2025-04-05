import Link from 'next/link';
import {useTranslations} from 'next-intl';
import {Linkedin, Github} from 'lucide-react';
import {Container} from '@/components/container';
import {Button} from '@/components/ui/button';
import {Tooltip, TooltipTrigger, TooltipContent} from '@/components/ui/tooltip';
import {OptimizedImage} from '@/components/optimized-image';
import {FrontendMasters, Leetcode} from '@/components/logotypes';
import {Ping} from '@/components/ping';

const links = [
	{
		name: 'LinkedIn',
		href: 'https://www.linkedin.com/in/mateusz-woskowicz/',
		icon: <Linkedin />,
	},
	{
		name: 'Github',
		href: 'https://github.com/Woskus',
		icon: <Github />,
	},
	{
		name: 'LeetCode',
		href: 'https://leetcode.com/u/MateuszWoskowicz/',
		icon: <Leetcode />,
	},
	{
		name: 'Frontend Masters',
		href: 'https://frontendmasters.com/u/MateuszWoskowicz/',
		icon: <FrontendMasters />,
	},
];

const isLookingForJob = false;

export function Hero() {
	const t = useTranslations('HomePage');

	return (
		<section className="pt-[160px]">
			<Container>
				<div className="mb-2 w-fit rounded-full border border-border p-1">
					<OptimizedImage
						src="https://s3.eu-central-1.amazonaws.com/mateuszwoskowicz.pl/mateusz-woskowicz-avatar.jpg"
						alt="Mateusz Woskowicz"
						className="h-16 w-16 rounded-full"
						width={64}
						height={64}
					/>
				</div>

				<h1 className="text-2xl">Mateusz Woskowicz</h1>

				<p className="text-muted-foreground">Senior Frontend Developer</p>

				<p className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
					<Ping variant={isLookingForJob ? 'green' : 'red'} />
					{t('lookingForJob', {isLookingForJob: String(isLookingForJob)})}
				</p>

				<div className="mt-4 flex items-start gap-2">
					{links.map((link) => (
						<Tooltip key={link.name}>
							<TooltipTrigger asChild>
								<Button
									size="icon"
									variant="outline"
									asChild
								>
									<Link
										href={link.href}
										target="_blank"
										aria-label={link.name}
									>
										{link.icon}
									</Link>
								</Button>
							</TooltipTrigger>

							<TooltipContent>{link.name}</TooltipContent>
						</Tooltip>
					))}
				</div>
			</Container>
		</section>
	);
}
