const SectionTitle = ({
  title,
  fromTheLogo,
}: {
  title: string;
  fromTheLogo?: boolean;
}) => {
  return (
    <h1
      className={`${
        fromTheLogo ? "" : "mb-5"
      } text-sm uppercase tracking-widest font-semibold`}
    >
      {title}
    </h1>
  );
};

export default SectionTitle;
