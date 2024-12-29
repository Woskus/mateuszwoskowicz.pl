import {Container} from '@/components/container';
import {certificates} from '@/data/certificates';
import {CertificateLink} from '@/components/certificate-link';

export function Certificates() {
	return (
		<section
			className="mt-12"
			id="certyfikaty"
		>
      <Container>
        <h2 className="mb-5 text-base">Certyfikaty</h2>

        <div className="flex flex-wrap gap-2">
          {certificates.map(({name, company, url}) => (
            <CertificateLink
              key={name}
              name={name}
              company={company}
              url={url}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
