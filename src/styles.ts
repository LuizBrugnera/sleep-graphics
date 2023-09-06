import { styled, createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    primary: "#0070f3",
    schema: "light dark",
    background: {
      primary: "#292828",
      secondary: "#302d2d",
      tertiary: "rgba(255, 255, 255, 0.87)",
    },
  text: {
    primary: "rgba(255, 255, 255, 0.87)",
    secondary: "#ffffff",
    },
  },
};

export const GlobalStyles = createGlobalStyle`

:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: ${theme.colors.schema};
  color: ${theme.colors.text.primary};
  background-color: ${theme.colors.background.primary};

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-inline-start: 0;
  padding-inline-end: 0;
}

a {
  text-decoration: none;
  color:inherit;
  cursor: pointer;
}

ul {
   list-style: none;
}
`;

// NavBar

export const Navbar = styled.nav`
  background-color: ${theme.colors.background.primary};
  color: ${theme.colors.text.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px;
  height: 10vh;
  width: 100%;
`;

export const NavLogo = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavItem = styled.li`
  padding: 0px 10px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
`;

export const NavLinks = styled.a`
  padding: 5px 10px;
  color: ${theme.colors.text.primary};
  transition: all 0.3s ease-in-out;
`;

export const MobileLine = styled.div`
  width: 100%;
  height: 4px;
  background-color: ${theme.colors.background.tertiary};
  transition: all 0.2s;
`;

export const MobileNavList = styled.ul`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  background: linear-gradient(
    to bottom,
    ${theme.colors.background.primary},
    ${theme.colors.background.secondary}
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  z-index: 1;
  padding: 20px 0px;
  border-bottom: 1px solid #333;

  list-style: none;
`;

export const MobileIcon = styled.div`
  width: 30px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  z-index: 5;
`;

export const MobileNavItem = styled.li`
  min-width: 30%;
  padding: 20px 30px;
  font-size: 1.6rem;
  font-weight: 600;
  color: ${theme.colors.text.primary};
  min-width: 150px;
  cursor: pointer;
  padding &:hover {
    border-bottom: 1px solid #333;
    color: ${theme.colors.text.secondary};
    transition: all 2s ease-in-out;
  }

  @media (max-width: 800px) {
    font-size: 1.2rem;
  }
`;

export const MobileAncor = styled.a`
  text-decoration: none;
  color: ${theme.colors.text.primary};
  padding: 1rem;
`;
// home

export const HomeContainer = styled.div`
  background-color: ${theme.colors.background.primary};
  color: ${theme.colors.text.primary};
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 90px 90px;
  height: 90vh;
  width: 100%;

  @media screen and (max-width: 1050px) {
    padding: 90px 20px;
  }

  @media screen and (max-width: 500px) {
    padding: 90px 0px;
  }
`;

export const LineGraphContainer = styled.div`
  background-color: ${theme.colors.background.primary};
  color: ${theme.colors.text.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;

  @media screen and (max-width: 1050px) {
    height: 80%;
  }

  @media screen and (max-width: 500px) {
    height: 70%;
    width: 90%;
  }
`;
