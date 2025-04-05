import {useLocale, useTranslations} from 'next-intl';
import {routing} from '@/lib/i18n/routing';
import LocaleSwitcherSelect from './locale-switcher-select';

export function LocaleSwitcher() {
	const t = useTranslations('LocaleSwitcher');
	const locale = useLocale();

	return (
		<LocaleSwitcherSelect
			defaultValue={locale}
			label={t('label')}
			locales={routing.locales.map((cur) => ({
				label: t('locale', {locale: cur}),
				value: cur,
			}))}
		/>
	);
}
