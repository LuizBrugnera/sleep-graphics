import { styled, createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    primary: "#0070f3",
    schema: "light dark",
    background: {
      primary: "#292828",
      secondary: "#302d2d",
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

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1rem;
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
  position: fixed;
  width: 100%;
  z-index: 999;
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
