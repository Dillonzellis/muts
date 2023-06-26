type ListProps = {
  liItems: React.ReactNode[];
};

const List = ({ liItems }: ListProps) => {
  return (
    <ul className="list-inside list-disc">
      {liItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default List;
