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
			<CollapsibleTrigger asChild>
				<div className="flex flex-row items-center justify-between gap-3 p-6 cursor-pointer">
					{header}

					<Button
						variant="ghost"
						size="icon"
					>
						<ArrowDown
							className={cn(
								'transform-gpu transition-transform duration-300',
								{'rotate-180': isOpen},
							)}
						/>
					</Button>
				</div>
			</CollapsibleTrigger>

			<CollapsibleContent>{children}</CollapsibleContent>
		</Collapsible>
	);
}
