'use client';

import {useTheme} from 'next-themes';
import {Moon, Sun} from 'lucide-react';
import {Button} from '@/components/ui/button';

export function DarkModeToggler() {
	const {setTheme, theme} = useTheme();

	return (
		<Button
			variant="ghost"
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      size="icon"
			aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
		>
			{theme === 'light' ? (
				<Moon />
			) : (
				<Sun />
			)}
		</Button>
	);
}
