'use client';

import {useEffect, useState, type CSSProperties} from 'react';
import {useTheme} from 'next-themes';

interface LightCSSProperties extends CSSProperties {
	'--duration'?: string;
	'--delay'?: string;
	'--x'?: number;
	'--y'?: number;
	'--up'?: string;
	'--left'?: string;
	'--color-one'?: string;
	'--color-two'?: string;
	'--color-three'?: string;
}

const LIGHT_COUNT = 30;
const LIGHTS_ARR = Array.from({length: LIGHT_COUNT});
const ALPHAS = Array(3).fill(0).map(Math.random);
const COLORS_DARK = ['204, 8%, 76%', '210, 29%, 24%', '210, 29%, 24%'];
const COLORS_LIGHT = ['204, 8%, 76%', '207, 15%, 61%', '207, 15%, 61%'];

const randomInRange = (min: number, max: number): number =>
	Math.floor(Math.random() * (max - min + 1)) + min;

export function NorthenLights() {
	const [mounted, setMounted] = useState(false);
	const [opacity, setOpacity] = useState(0);

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		const timer = setTimeout(() => { setOpacity(1); }, 200);
		return () => { clearTimeout(timer); };
	}, []);

	if (!mounted) return null;

	return (
		<div className="absolute inset-0 -z-10 min-h-[150vh] overflow-hidden">
			<div
				className="absolute left-0 top-0 flex h-[50vmax] w-[100vmax] -translate-x-[20%] -translate-y-[55%] rotate-[30deg] blur-[35px] md:left-1/2 md:h-[100vmax] md:w-[200vmax] md:blur-[75px]"
				style={{opacity, transition: 'opacity 5s'}}
			>
				{LIGHTS_ARR.map((_, index) => (
					<Light
						key={index}
						alphas={ALPHAS}
					/>
				))}
			</div>
		</div>
	);
}

interface LightProps {
	alphas: number[];
}

function Light({alphas}: LightProps) {
	const {resolvedTheme} = useTheme();
	const COLORS = resolvedTheme === 'dark' ? COLORS_DARK : COLORS_LIGHT;

	const duration = randomInRange(5, 15);
	const delay = randomInRange(4, 10);
	const x = randomInRange(0, 5);
	const y = randomInRange(0, 10);

	const style: LightCSSProperties = {
		'--duration': `${duration}s`,
		'--delay': `${-delay}s`,
		'--x': x,
		'--y': y,
		'--up': `calc(var(--y) * 2vmax)`,
		'--left': `calc(var(--x) * 2vmax)`,
		'--color-one': `hsla(${COLORS[0]}, ${alphas[0]})`,
		'--color-two': `hsla(${COLORS[1]}, ${alphas[1]})`,
		'--color-three': `hsla(${COLORS[2]}, ${alphas[2]})`,
		backgroundImage: `linear-gradient(0deg, transparent, var(--color-one) 10%, transparent, var(--color-two) 40%, transparent, var(--color-three) 60%)`,
		backgroundSize: '100% 40vmax',
		backgroundPosition: 'center bottom',
		transform: 'translate(var(--left), var(--up)) scale(1)',
	};

	return (
		<div
			className="flex-1 animate-shift bg-no-repeat"
			style={style}
		/>
	);
}
