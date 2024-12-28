import React, {ComponentPropsWithoutRef} from 'react';
import Link from 'next/link';
import type {MDXComponents} from 'mdx/types';
import {highlight} from 'sugar-high';
import {Button} from '@/components/ui/button';

type ParagraphProps = ComponentPropsWithoutRef<'p'>;
type ListProps = ComponentPropsWithoutRef<'ul'>;
type ListItemProps = ComponentPropsWithoutRef<'li'>;
type AnchorProps = ComponentPropsWithoutRef<'a'>;

const components = {
	h2: (props: ComponentPropsWithoutRef<'h2'>) => (
		<h2
			className="mt-8"
			{...props}
		/>
	),
	h3: (props: ComponentPropsWithoutRef<'h3'>) => (
		<h3
			className="mt-5 text-base"
			{...props}
		/>
	),
	p: (props: ParagraphProps) => (
		<p
			className="mt-2 leading-snug text-muted-foreground"
			{...props}
		/>
	),
	ol: (props: ListProps) => (
		<ol
			className="list-decimal space-y-2 pl-5 mt-2"
			{...props}
		/>
	),
	ul: (props: ListProps) => (
		<ul
			className="list-disc space-y-1 pl-5 mt-2"
			{...props}
		/>
	),
	li: (props: ListItemProps) => (
		<li
			className="pl-1 text-muted-foreground"
			{...props}
		/>
	),
	strong: (props: ComponentPropsWithoutRef<'strong'>) => (
		<strong
			className="font-medium text-primary"
			{...props}
		/>
	),
	a: ({href, children, ...props}: AnchorProps) => {
		if (href?.startsWith('/') || href?.startsWith('#')) {
			return (
				<Button
					variant="link"
					asChild
				>
					<Link
						href={href}
						{...props}
					>
						{children}
					</Link>
				</Button>
			);
		}

		return (
			<Button
				variant="link"
				asChild
			>
				<a
					href={href}
					target="_blank"
					rel="noopener noreferrer"
					{...props}
				>
					{children}
				</a>
			</Button>
		);
	},
	code: ({children, ...props}: ComponentPropsWithoutRef<'code'>) => {
		const codeHTML = highlight(children as string);
		return (
			<code
				dangerouslySetInnerHTML={{__html: codeHTML}}
				{...props}
			/>
		);
	},
};

declare global {
	type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
	return components;
}
