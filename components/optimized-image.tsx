import Image, {type ImageProps} from 'next/image';

type OptimizedImageProps = Omit<ImageProps, 'src'> & {
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
			<Image
				src={src}
				{...imageProps}
			/>
		</picture>
	);
}

export default OptimizedImage;
