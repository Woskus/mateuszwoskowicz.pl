'use client';

import {useEffect, useState, CSSProperties} from 'react';

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
const COLORS = [
  '204, 8%, 76%',
  '210, 29%, 24%',
  '210, 29%, 24%'
]

const randomInRange = (min: number, max: number): number =>
	Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomAlpha = (): number => Math.random();

export function NorthenLights() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<div className="absolute top-0 h-screen w-screen overflow-hidden -z-10">
			<div className="absolute left-1/2 top-0 flex h-[100vmax] w-[200vmax] -translate-x-[20%] -translate-y-[55%] rotate-[30deg] blur-[75px]">
				{LIGHTS_ARR.map((_, index) => (
					<Light
						key={index}
						aplhas={ALPHAS}
					/>
				))}
			</div>
		</div>
	);
}

interface LightProps {
	aplhas: number[];
}

function Light({aplhas}: LightProps) {
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
		'--color-one': `hsla(${COLORS[0]}, ${aplhas[0]})`,
		'--color-two': `hsla(${COLORS[1]}, ${aplhas[1]})`,
		'--color-three': `hsla(${COLORS[2]}, ${aplhas[2]})`,
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
