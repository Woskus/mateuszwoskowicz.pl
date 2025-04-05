'use client';

import {useParams} from 'next/navigation';
import {type Locale} from 'next-intl';
import {useTransition} from 'react';
import {usePathname, useRouter} from '@/lib/i18n/navigation';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

interface LocaleSwitcherSelectProps {
	locales: {
		label: string;
		value: string;
	}[];
	defaultValue: string;
	label: string;
}

export default function LocaleSwitcherSelect({
	locales,
	defaultValue,
	label,
}: LocaleSwitcherSelectProps) {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const pathname = usePathname();
	const params = useParams();

	function onValueChange(nextLocale: string) {
		startTransition(() => {
			router.replace(
				// @ts-expect-error -- TypeScript will validate that only known `params`
				// are used in combination with a given `pathname`. Since the two will
				// always match for the current route, we can skip runtime checks.
				{pathname, params},
				{locale: nextLocale as Locale},
			);
		});
	}

	return (
		<div>
			<span className="sr-only">{label}</span>
			<Select
				defaultValue={defaultValue}
				onValueChange={onValueChange}
				disabled={isPending}
			>
				<SelectTrigger className="w-fit bg-transparent border-none">
					<SelectValue placeholder={label} />
				</SelectTrigger>
				<SelectContent>
					{locales.map((locale) => (
						<SelectItem
							key={locale.value}
							value={locale.value}
						>
							{locale.label}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
}
