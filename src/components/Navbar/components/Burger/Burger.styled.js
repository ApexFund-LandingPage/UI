import styled from 'styled-components';

export const StyledBurger = styled.button`
  position: absolute;
  top: 50%;  /* position the top  edge of the element at the middle of the parent */
  transform: translate( 0, -50%);
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  margin: -0.25rem 0 0 0;

  span {
    width: 2rem;
    height: 0.25rem;
    background: linear-gradient(214.95deg, #6B56DF 15.12%, #BA4BFB 75.31%);
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;
