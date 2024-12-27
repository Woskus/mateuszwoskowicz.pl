import type {HTMLAttributes} from 'react';
import {cn} from '@/lib/utils';

export function Container({
	children,
	className,
	...props
}: HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn('container md:px-6 px-5', className)}
			{...props}
		>
			{children}
		</div>
	);
}
