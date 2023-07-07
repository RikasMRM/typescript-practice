import { ReactNode } from "react";

interface ListProps<T> {
  items: T[];
  render: (item: T) => ReactNode;
}

  /* <T extends{}> same to <T,>*/
const List = <T,>({ items, render }: ListProps<T>) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
};
export default List;
