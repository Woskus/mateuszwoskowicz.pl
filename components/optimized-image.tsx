import {DetailedHTMLProps, ImgHTMLAttributes} from 'react';

type OptimizedImageProps = Omit<
	DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
	'src'
> & {
	src: string;
};

export function OptimizedImage({src, ...imageProps}: OptimizedImageProps) {
	const webpSrc = src.replace(/\.(jpe?g|png)$/i, '.webp');

	const originalType = src.toLowerCase().endsWith('png') ? 'image/png' : 'image/jpeg';

	return (
		<picture>
			<source
				srcSet={webpSrc}
				type="image/webp"
			/>
			<source
				srcSet={src}
				type={originalType}
			/>
			<img
				src={src}
				{...imageProps}
			/>
		</picture>
	);
}

export default OptimizedImage;
