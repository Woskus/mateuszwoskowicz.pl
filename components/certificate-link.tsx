import {ExternalLink} from 'lucide-react';
import {Card} from '@/components/ui/card';
import {type Certificate} from '@/data/certificates';

type CertificateProps = Certificate;

export function CertificateLink({name, company, url}: CertificateProps) {
	return (
		<a
			href={url}
			target="_blank"
			className="group w-full md:w-fit"
			rel="noopener"
		>
			<Card className="relative p-4">
				<p className="text-xs text-muted-foreground">{company}</p>
				<p className="text-sm group-hover:underline">{name}</p>

				<ExternalLink className="absolute right-2 top-2 h-3.5 w-3.5" />
			</Card>
		</a>
	);
}
