import React, { FormEvent, useState } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import ReactQueryApp from "./react_query/ReactQueryApp";
import RecoilMaster from "./recoil/RecoilMaster";
import { darkTheme } from "./theme";

const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-weight: 300;
  font-family: 'Source Sans Pro', sans-serif;
  background-color: ${(props) => props.theme.bgColor};
  color:${(props) => props.theme.textColor};
  line-height: 1.2;
}
a {
  text-decoration: none;
  color:inherit;
}
`;

const Container = styled.div`
  padding: 0px 20px;
  max-width: 100%;
  margin: 0 auto;
`;

const TopNavigation = styled.div`
  width: auto;
  height: auto;
  margin: 10px;
  padding: auto;
`;

const TopButton = styled.button<{ selected: boolean }>`
  background-color: ${(props) =>
    props.selected ? "whitesmoke" : props.theme.cardBgColor};
  color: ${(props) => (props.selected ? "black" : props.theme.textColor)};
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
  border: 1px solid white;
  height: auto;
  width: auto;
  font-size: large;
  cursor: pointer;
`;

function App() {
  const [viewId, setViewId] = useState("1");
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setViewId(value);
  };

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <Container>
          <TopNavigation>
            <TopButton value="1" selected={viewId === "1"} onClick={onClick}>
              ReactQuery Sample
            </TopButton>
            <TopButton value="2" selected={viewId === "2"} onClick={onClick}>
              Recoil Sample
            </TopButton>
          </TopNavigation>
          <div>{viewId === "1" && <ReactQueryApp />}</div>
          <div>{viewId === "2" && <RecoilMaster />}</div>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
