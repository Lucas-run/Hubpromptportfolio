type LogoProps = {
  src: string;
  alt?: string;
  size?: number;
};

export const Logo = ({ src = "", alt = "logo", size = 56 }: LogoProps) => {
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      style={{ objectFit: "cover", borderRadius: 10 }}
    />
  );
};
