import * as S from "../styles";
import React from "react";

const Navbar = () => {
  const [isScreenSmall, setIsScreenSmall] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const changeOpen = () => {
    setOpen(!open);
  };
  const checkScreenSize = () => {
    setIsScreenSmall(window.innerWidth < 1000);
  };

  React.useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  return (
    <S.Navbar>
      <S.NavLogo>
        <a href="/home">Sleep Graphs</a>
      </S.NavLogo>

      {isScreenSmall ? (
        <>
          <S.MobileIcon onClick={changeOpen}>
            <S.MobileLine />
            <S.MobileLine />
            <S.MobileLine />
          </S.MobileIcon>
          {open && (
            <S.MobileNavList onClick={changeOpen}>
              <S.MobileNavItem>
                <S.MobileAncor href="/home">Home</S.MobileAncor>
              </S.MobileNavItem>
              <S.MobileNavItem>
                <S.MobileAncor href="/graphs">Graficos do Sono</S.MobileAncor>
              </S.MobileNavItem>
            </S.MobileNavList>
          )}
        </>
      ) : (
        <S.NavList>
          <S.NavItem>
            <a href="/home">Home</a>
          </S.NavItem>
          <S.NavItem>
            <a href="/graphs">Graficos do Sono</a>
          </S.NavItem>
        </S.NavList>
      )}
    </S.Navbar>
  );
};

export default Navbar;
