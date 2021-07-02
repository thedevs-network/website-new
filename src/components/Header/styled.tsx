import styled from "@emotion/styled";

export const Menu = styled.ul`
  list-style: none;
  display: flex;
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  color: white;

  &:not(:last-child) {
    margin-right: 20px;
  }

  /* dot before item */
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
