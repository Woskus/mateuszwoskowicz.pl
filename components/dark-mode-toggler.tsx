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
		>
			{theme === 'light' ? (
				<Moon />
			) : (
				<Sun />
			)}
		</Button>
	);
}
