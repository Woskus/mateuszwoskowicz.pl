import {Container} from '@/components/container';

interface ArticleHeadingProps {
	title: string;
	company: string;
	img: string;
}

export function ArticleHeading({title, company, img}: ArticleHeadingProps) {
	return (
		<Container className="pt-[72px] pb-8">
			<div className="relative">
				<img
					src={img}
					alt={title}
					className="max-h-[400px] w-full rounded-lg object-cover"
				/>

				<div className="absolute bottom-0 left-0 h-[500px] w-full bg-transparent bg-gradient-to-t from-background to-black/0" />

        <div className="absolute bottom-8 left-5 space-y-2">
          <h1>{title}</h1>

          <p className="text-muted-foreground text-lg">
            {company}
          </p>
        </div>
      </div>
    </Container>
	);
}
