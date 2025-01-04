'use client';

import {PropsWithChildren} from 'react';
import {ThemeProvider} from 'next-themes';
import {TooltipProvider} from '@/components/ui/tooltip';

export function Providers({children}: PropsWithChildren) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="dark"
			enableSystem
			disableTransitionOnChange
		>
			<TooltipProvider>{children}</TooltipProvider>
		</ThemeProvider>
	);
}
