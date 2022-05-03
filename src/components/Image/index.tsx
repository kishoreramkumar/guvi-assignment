function Image({ src, srcSet, className, style, alt }: any) {
  return (
    <picture className={className} style={style}>
      {srcSet &&
        srcSet.map((srcImg: any, index: number) => {
          return (
            <source key={index} type={srcImg?.type} srcSet={srcImg?.src} />
          );
        })}
      <img style={{ width: "100%", height: "100%" }} src={src} alt={alt} />
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
