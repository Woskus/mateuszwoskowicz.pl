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
			className="mt-5"
			{...props}
		/>
	),
	h3: (props: ComponentPropsWithoutRef<'h3'>) => (
		<h3
			className="mt-5"
			{...props}
		/>
	),
	p: (props: ParagraphProps) => (
		<p
			className="leading-snug mt-4 text-muted-foreground"
			{...props}
		/>
	),
	ol: (props: ListProps) => (
		<ol
			className="list-decimal space-y-2 pl-5"
			{...props}
		/>
	),
	ul: (props: ListProps) => (
		<ul
			className="list-disc space-y-1 pl-5"
			{...props}
		/>
	),
	li: (props: ListItemProps) => (
		<li
			className="pl-1"
			{...props}
		/>
	),
	strong: (props: ComponentPropsWithoutRef<'strong'>) => (
		<strong
			className="font-medium"
			{...props}
		/>
	),
	a: ({href, children, ...props}: AnchorProps) => {
		if (href?.startsWith('/') || href?.startsWith('#')) {
			return (
				<Link
					href={href}
					{...props}
				>
					<Button variant="link">{children}</Button>
				</Link>
			);
		}

		return (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				{...props}
			>
				<Button variant="link">{children}</Button>
			</a>
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
