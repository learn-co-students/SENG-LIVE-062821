import styled from "styled-components";

const UnorderedList = styled.ul`
  width: 400px;
  margin: 16px;
  padding: 16px;
  list-style: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-align: center;
  box-shadow: 2px 2px 4px black;
`;

const ListItem = styled.li`
  padding: 4px 16px;
  background: ${props => (props.isEven && "deeppink")};
  /* background: ${props => (props.isEven ? "deeppink" : "white")}; */
`;

const items = ["Check", "Out", "This", "Great", "List"];

export default function List() {
  return (
    <UnorderedList>
      {items.map((item, index) => (
        <ListItem key={item} isEven={(index + 1) % 2 === 0}>
          {item}
        </ListItem>
      ))}
    </UnorderedList>
  );
}
