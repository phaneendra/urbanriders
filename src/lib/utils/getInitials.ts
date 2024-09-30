export const getInitials = (name: string) => {
  if (!name) return "";
  if (name.split(" ").length === 1) return name.split(" ")[0][0];
  return `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`;
};
