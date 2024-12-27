import {ArrowRight} from 'lucide-react';
import {Container} from '@/components/container';

export function About() {
	return (
		<section className="mt-16">
			<Container>
				<h2 className="mb-5 text-base">O mnie</h2>

				<article className="space-y-5 text-muted-foreground">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae
						viverra nisl, non accumsan lectus. Etiam molestie mauris augue, et
						aliquam erat porta eget.
					</p>

					<p>
						Praesent vel sagittis ligula. Nam in volutpat nisi, ut mollis
						ipsum. Nulla et elit consectetur, maximus elit ut, fringilla sem.
						Aliquam at ante eu ante sollicitudin venenatis.
					</p>

					<ul className="[&>li]:flex [&>li]:items-center">
						<li>
							<ArrowRight className="mr-2 h-4 w-4" />
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</li>
						<li>
							<ArrowRight className="mr-2 h-4 w-4" />
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</li>
						<li>
							<ArrowRight className="mr-2 h-4 w-4" />
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</li>
					</ul>

					<p>
						Nullam nec justo blandit velit porta hendrerit scelerisque sit
						amet turpis. Vestibulum gravida enim lectus, a porttitor urna
						interdum eget. Praesent dolor turpis, posuere nec finibus vitae,
						egestas congue leo.
					</p>
				</article>
			</Container>
		</section>
	);
}
