function Image({ src, srcSet, className, style, alt }: any) {
  return (
    <picture className={className} style={style}>
      {srcSet &&
        srcSet.map((srcImg: any) => {
          return <source type={srcImg?.type} srcSet={srcImg?.src} />;
        })}
      <img src={src} alt={alt} />
    </picture>
  );
}

Image.defaultProps = {
  src: "",
  srcSet: [],
  style: {},
  className: "",
  alt: "",
};
export default Image;
