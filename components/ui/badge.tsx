import * as React from 'react';
import {cva, type VariantProps} from 'class-variance-authority';
import {cn} from '@/lib/utils';

const badgeVariants = cva(
	'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
	{
		variants: {
			variant: {
				default:
					'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
				secondary:
					'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
				destructive:
					'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
				warning: 'border-transparent dark:bg-amber-950 bg-amber-50 text-amber-500 dark:hover:bg-amber-900 hover:bg-amber-100',
				info: 'border-transparent dark:bg-sky-950 bg-sky-50 text-sky-500 dark:hover:bg-sky-900 hover:bg-sky-100',
				success: 'border-transparent dark:bg-green-950 bg-green-50 text-green-500 dark:hover:bg-green-900 hover:bg-green-100',
				outline: 'text-foreground',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	},
);

export interface BadgeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badgeVariants> {}

function Badge({className, variant, ...props}: BadgeProps) {
	return (
		<div
			className={cn(badgeVariants({variant}), className)}
			{...props}
		/>
	);
}

export {Badge, badgeVariants};
