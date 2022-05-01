import styled, {css} from "styled-components";

export const Wrapper = styled.div`
  height: 48px;
  padding: 16px;
  display: flex;
  align-items: center;
  color: #5f6368;
`
export const Input = styled.input`
  width: 600px;
  background-color: #f1f3f4;
  border: 1px solid transparent;
  height: 46px;
  border-radius: 8px;
  outline: none;
  text-indent: 70px;
  /* margin-left: 30px; */

  :focus {
    background-color: #fff;
    box-shadow: 1px 1px 2px #9e9d9d;
  }
`
export const StyledInput = styled.div`
  position: relative;
  /* svg {
    position: absolute;
    padding: 7px;
    margin: 7px;
    fill: #5f6368;
    cursor: pointer;

    :hover {
      background-color: #e0e2e2;
      border-radius: 50%;
      opacity: 1;
    }
  } */
`;

export const ActiveState = styled.div`
  width: 90px;
  /* color: #5f6368; */
  border: 1px solid #dadce0;
  border-radius: 18px;
  height: 32px;
  padding-left: 8px;
  padding-right: 8px;
  margin-left: 30px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: .875rem;
  letter-spacing: .25px;

  :hover {
    background-color: #e0e2e2;
    /* border-radius: 50%; */
    /* opacity: 1; */
  }

`
export const Image = styled.img`
  height: 40px;
  margin-right: 75px;
`
// export const Line = styled.hr`
//   color: red;
//   height: 30px;
//   width: 100%;
// `

export const IconWrapper = styled.span<{hasHover?: boolean, left?: number, right?: number}>`
  ${({hasHover=false, left=null, right=null}) => css`
  left: ${left};
    right: ${right};
    position: ${(left !== null || right !== null) ? 'absolute' : ''};
  svg {
    padding: 7px;
    margin: 7px;
    cursor: pointer;
   

    :hover {
      background-color: ${hasHover && '#e0e2e2' };
      border-radius: ${hasHover && '50%' };
    }
  }
  `}
`