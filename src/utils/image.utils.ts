export const getImageUrl = (relativePath: string) => {
  return require(`assets/images/${relativePath}`);
};
