'use client';

import {useTheme} from 'next-themes';
import {Moon, Sun} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {cn} from '@/lib/utils';

export function DarkModeToggler() {
	const {setTheme, theme} = useTheme();

	return (
		<Button
			variant="ghost"
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      size="icon"
			className={cn(theme ? 'opacity-100' : 'opacity-0')}
		>
			{theme === 'dark' ? (
				<Sun />
			) : (
				<Moon />
			)}
		</Button>
	);
}
