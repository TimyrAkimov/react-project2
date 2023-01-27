import styled from "styled-components";

const Header = () => {
    return (
      <MainHeader>
        <Heading>React-App Memory Game</Heading>
      </MainHeader>
    );
  };

  const MainHeader = styled.header`
  margin: 0 auto;
  text-align: center;
  width: 100%;
`;

const Heading = styled.h1`
  color: #303030;
  font-size: 48px;
  padding-inline: 36px;
`;

export default Header;  