import {type Metadata} from 'next';
import {useLocale} from 'next-intl';
import {Container} from '@/components/container';

export const metadata: Metadata = {
	title: 'Mateusz Woskowicz',
	description: '',
};

export default function Page() {
	const locale = useLocale();

	return (
		<Container className="pt-[120px]">
			{locale === 'pl' ? <PrivacyPolicyPl /> : <PrivacyPolicyEn />}
		</Container>
	);
}

export function PrivacyPolicyEn() {
	return (
		<>
			<h1 className="mb-8 text-3xl md:text-4xl">Privacy Policy</h1>
			<ol className="list-decimal space-y-4 pl-5">
				<li>
					General information: This Privacy Policy outlines the rules for
					processing and protecting personal data provided by users in
					connection with their use of the website located at
					https://mateuszwoskowicz.pl/.
				</li>
				<li>
					The administrator of personal data contained in the service is Mateusz
					Woskowicz, NIP 6282282230 REGON 388095340.
				</li>
				<li>
					Personal data is processed based on the user&apos;s consent or when the law
					permits it to fulfill a contract between the parties.
				</li>
				<li>
					The service collects user data and behavior in the following ways: a)
					through voluntarily submitted forms, b) via cookies.
				</li>
				<li>The service collects information voluntarily provided by users.</li>
				<li>
					The data entered in the form is processed to handle contact inquiries
					and facilitate the execution of the contract between the user and the
					site administrator.
				</li>
				<li>
					Personal data left on the website will not be sold or shared with
					third parties, in accordance with data protection laws.
				</li>
				<li>
					The person who provided the data in the form has the right to access,
					modify, and request the deletion of their data at any time.
				</li>
				<li>
					We reserve the right to change this privacy policy due to developments
					in internet technology, changes in law, or the evolution of our
					website. Any changes will be clearly communicated.
				</li>
				<li>
					Cookies are small text files stored on the user’s device. Most
					browsers accept them by default, but users can adjust cookie settings.
					Restricting or disabling cookies may impact website functionality.
					<br />
					<br />
					This site uses:
					<ul className="mt-5 list-disc space-y-2 pl-5">
						<li>
							PostHog - This website uses PostHog services for anonymous
							analytics. Users can block data transfer to PostHog through
							browser settings. More info is available{' '}
							<a
								href="https://posthog.com/privacy"
								target="_blank"
								rel="nofollow noreferrer"
							>
								here
							</a>
							.
						</li>
					</ul>
				</li>
			</ol>
		</>
	);
}

export function PrivacyPolicyPl() {
	return (
		<>
			<h1 className="mb-8 text-3xl md:text-4xl">Polityka prywatności</h1>

			<ol className="list-decimal space-y-4 pl-5">
				<li>
					Informacje ogólne Niniejsza Polityka Prywatności określa zasady
					przetwarzania i ochrony danych osobowych przekazanych przez
					Użytkowników w związku z korzystaniem ze strony internetowej
					znajdującej się pod linkiem https://mateuszwoskowicz.pl/.
				</li>

				<li>
					Administratorem danych osobowych zawartych w serwisie jest Mateusz
					Woskowicz NIP 6282282230 REGON 388095340.
				</li>

				<li>
					Dane Osobowe przetwarzane są na podstawie zgody wyrażanej przez
					Użytkownika oraz w przypadkach, w których przepisy prawa upoważniają
					Administratora do przetwarzania danych osobowych na podstawie
					przepisów prawa lub w celu realizacji zawartej pomiędzy stronami
					umowy.
				</li>

				<li>
					Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i ich
					zachowaniach w następujący sposób: a) poprzez dobrowolnie wprowadzone
					w formularzach informacje b) poprzez gromadzenie plików “cookies”.
				</li>

				<li>Serwis zbiera informacje dobrowolnie podane przez użytkownika.</li>

				<li>
					Dane podane w formularzu są przetwarzane w celu dokonania procesu
					obsługi kontaktu informacyjnego oraz usprawnienia wykonania umowy
					pomiędzy użytkownikiem i administratorem serwisu.
				</li>

				<li>
					Dane osobowe pozostawione w serwisie nie zostaną sprzedane ani
					udostępnione osobom trzecim, zgodnie z przepisami Ustawy o ochronie
					danych osobowych.
				</li>

				<li>
					Do danych zawartych w formularzu przysługuje wgląd osobie fizycznej,
					która je tam umieściła. Osoba ta ma również praw do modyfikacji i
					zaprzestania przetwarzania swoich danych w dowolnym momencie.
				</li>

				<li>
					Zastrzegamy sobie prawo do zmiany w polityce ochrony prywatności
					serwisu, na które może wpłynąć rozwój technologii internetowej,
					ewentualne zmiany prawa w zakresie ochrony danych osobowych oraz
					rozwój naszego serwisu internetowego. O wszelkich zmianach będziemy
					informować w sposób widoczny i zrozumiały.
				</li>

				<li>
					Cookies to niewielkie informacje tekstowe w postaci plików tekstowych,
					które są wysyłane przez serwer i zapisywane po stronie osoby
					odwiedzającej strony internetowe (np. na dysku twardym komputera lub
					laptopa albo na karcie pamięci smartfona - w zależności od urządzenia,
					z którego korzysta użytkownik). Standardowo większość dostępnych na
					rynku przeglądarek internetowych domyślnie akceptuje zapisywanie
					plików cookies. Każdy ma możliwość określenia warunków korzystania z
					plików cookies za pomocą ustawień swojej przeglądarki internetowej.
					Oznacza to, że możliwość zapisywania plików cookies może być np.
					częściowo ograniczona (np. czasowo) lub całkowicie wyłączona - w tym
					ostatnim przypadku może to jednak wpłynąć na niektóre funkcjonalności
					stron internetowych.
					<br />
					<br />
					Strona wykorzystuje następujące pliki cookies:
					<ul className="mt-5 list-disc space-y-2 pl-5">
						<li>
							PostHog - strona korzysta z usług PostHog i jego funkcji
							dostarczanych przez PostHog Inc. PostHog wykorzystuje cookies
							do analizy sposobu korzystania z witryn internetowych.
							Otrzymane dane są przetwarzane w sposób zbiorczy i anonimowy.
							Każdy może zablokować przekazywanie danych z urządzeń
							elektronicznych do PostHog Analytics, korzystając z ustawień
							swojej przeglądarki. Więcej informacji na temat narzędzia
							PostHog dostępnych jest{' '}
							<a
								href="https://posthog.com/privacy"
								target="_blank"
								rel="nofollow noreferrer"
							>
								tutaj
							</a>
							.
						</li>
					</ul>
				</li>
			</ol>
		</>
	);
}
