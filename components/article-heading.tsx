import {Container} from '@/components/container';

interface ArticleHeadingProps {
	title: string;
	company: string;
	img: string;
}

export function ArticleHeading({title, company, img}: ArticleHeadingProps) {
	return (
		<Container className="pb-8 pt-[72px]">
			<div className="relative">
				<img
					src={img}
					alt={title}
					className="h-[250px] w-full rounded-lg object-cover md:h-[400px]"
				/>

				<div className="absolute bottom-0 left-0 h-[500px] w-full bg-transparent bg-gradient-to-t from-background to-black/0" />

				<div className="absolute bottom-8 md:left-5 left-2 md:space-y-2">
					<h1>{title}</h1>

					<p className="md:text-lg text-muted-foreground">{company}</p>
				</div>
			</div>
		</Container>
	);
}
