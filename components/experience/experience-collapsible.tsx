'use client';

import {useState} from 'react';
import {ArrowDown} from 'lucide-react';
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {Button} from '@/components/ui/button';
import {cn} from '@/lib/utils';

interface ExperienceCollapsibleProps {
	header: React.ReactNode;
	children: React.ReactNode;
	initialOpen?: boolean;
}

export function ExperienceCollapsible({
	header,
	children,
	initialOpen = false,
}: ExperienceCollapsibleProps) {
	const [isOpen, setIsOpen] = useState(initialOpen);

	return (
		<Collapsible
			open={isOpen}
			onOpenChange={setIsOpen}
		>
			<CollapsibleTrigger className="w-full focus:outline-0 focus-visible:ring-1 focus:ring-primary rounded-lg">
				<div className="flex cursor-pointer flex-row items-center justify-between gap-3 p-6">
					{header}

					<ArrowDown
						className={cn(
							'h-4 w-4 transform-gpu transition-transform duration-300',
							{'rotate-180': isOpen},
						)}
					/>
				</div>
			</CollapsibleTrigger>

			<CollapsibleContent>{children}</CollapsibleContent>
		</Collapsible>
	);
}
