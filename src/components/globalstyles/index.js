import { createGlobalStyle } from "styled-components"

export const GlobCSS = createGlobalStyle`
    html, body, #___gatsby, #___gatsby>div {
        height: 100%;
        width: 100%;
        margin: 0;
    }
    * {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    div[role="group"][tabindex] {
    height: 100%;
}
`
