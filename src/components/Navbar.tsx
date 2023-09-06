import * as S from "../styles";

const Navbar = () => {
  return (
    <S.Navbar>
      <S.NavLogo>
        <a href="/home">Sleep Graphs</a>
      </S.NavLogo>
      <S.NavList>
        <S.NavItem>
          <S.NavLinks href="/home">Home</S.NavLinks>
        </S.NavItem>
        <S.NavItem>
          <S.NavLinks href="/graphs">Graficos do Sono</S.NavLinks>
        </S.NavItem>
        <S.NavItem>
          <S.NavLinks href="/graphs">Ranking</S.NavLinks>
        </S.NavItem>
      </S.NavList>
    </S.Navbar>
  );
};

export default Navbar;
