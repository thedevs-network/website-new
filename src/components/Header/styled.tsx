import styled from "@emotion/styled";

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  color: white;
  padding: 5px;

  &:not(:last-child) {
    margin-right: 10px;
  }

  /* dot before each item */
  &:not(:first-child) {
    &:before {
      display: block;
      content: "";
      width: 5px;
      height: 5px;
      background: white;
      border-radius: 10px;
      margin-right: 20px;
    }
  }
`;
