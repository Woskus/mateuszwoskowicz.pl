'use client';

import {useEffect, Suspense, type PropsWithChildren} from 'react';
import {usePathname, useSearchParams} from 'next/navigation';
import {ThemeProvider} from 'next-themes';
import posthog from 'posthog-js';
import {PostHogProvider, usePostHog} from 'posthog-js/react';
import {TooltipProvider} from '@/components/ui/tooltip';

export function Providers({children}: PropsWithChildren) {
	useEffect(() => {
		posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY ?? '', {
			api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
			capture_pageview: false,
			capture_pageleave: true,
		});
	}, []);

	return (
		<PostHogProvider client={posthog}>
			<SuspendedPostHogPageView />

			<ThemeProvider
				attribute="class"
				defaultTheme="dark"
				disableTransitionOnChange
			>
				<TooltipProvider>{children}</TooltipProvider>
			</ThemeProvider>
		</PostHogProvider>
	);
}

function PostHogPageView() {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const ph = usePostHog();

	useEffect(() => {
		if (pathname && ph) {
			let url = window.origin + pathname;
			if (searchParams.toString()) {
				url = `${url}?${searchParams.toString()}`;
			}

			ph.capture('$pageview', {$current_url: url});
		}
	}, [pathname, searchParams, ph]);

	return null;
}

function SuspendedPostHogPageView() {
	return (
		<Suspense fallback={null}>
			<PostHogPageView />
		</Suspense>
	);
}
