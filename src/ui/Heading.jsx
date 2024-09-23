export const Heading = ({ as = "h1", children }) => {
  const baseClasses = "line-height-1.4";
  const elementClasses = {
    h1: "text-3xl font-semibold",
    h2: "text-2xl font-semibold",
    h3: "text-2xl font-medium",
    h4: "text-3xl font-semibold text-center",
  };

  const Tag = as; // to determine the heading element

  return (
    <Tag className={`${baseClasses} ${elementClasses[as]}`}>{children}</Tag>
  );
};

export default Heading;
