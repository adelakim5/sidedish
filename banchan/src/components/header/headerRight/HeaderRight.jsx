import styled from "styled-components";
import IconButton from "../../componentUtils/button/IconButton";
import { CenterContainer } from "../../componentUtils/styles/common";
// import Callback from "../../Callback";

const HeaderRight = (props) => {
  const tempFn = () => {
    console.log("hello");
  };

  return (
    <HeaderRightDiv>
      <SearchBox>
        <input />
        <IconButton type="SEARCH" fn={tempFn} />
      </SearchBox>
      <a href="https://github.com/login/oauth/authorize?client_id=4a408cfdbefb7d2edba7&redirect_uri=http://localhost:3000/callback">
        <StyledSpan>로그인</StyledSpan>
      </a>
      <StyledSpan>장바구니</StyledSpan>
    </HeaderRightDiv>
  );
};

const HeaderRightDiv = styled(CenterContainer)`
  justify-content: start;
`;

const StyledSpan = styled.span`
  margin: 0 12px;
  font-size: ${(props) => props.theme.fontSizes.S};
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;
const SearchBox = styled(CenterContainer)`
  justify-content: space-between;
  border-radius: ${(props) => props.theme.borders.radius};
  background: ${(props) => props.theme.colors.lightGrayBG};
  width: 248px;
  height: 40px;
  padding: 0 10px 0 15px;
  input {
    all: unset;
  }
`;
export default HeaderRight;
