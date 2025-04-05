import {cn} from '@/lib/utils';

type PingVariant = 'green' | 'red';

interface PingProps {
	variant?: PingVariant;
	className?: string;
}

export function Ping({variant = 'green', className}: PingProps) {
	const getColorClasses = (v: PingVariant) => {
		switch (v) {
			case 'red':
				return {
					ping: 'bg-red-400',
					dot: 'bg-red-500',
				};
			case 'green':
			default:
				return {
					ping: 'bg-green-400',
					dot: 'bg-green-500',
				};
		}
	};

	const colorClasses = getColorClasses(variant);

	return (
		<span className={cn('relative flex h-2 w-2', className)}>
			<span
				className={cn(
					'absolute inline-flex h-full w-full animate-ping rounded-full opacity-75',
					colorClasses.ping,
				)}
			></span>
			<span
				className={cn(
					'relative inline-flex h-2 w-2 rounded-full',
					colorClasses.dot,
				)}
			></span>
		</span>
	);
}
