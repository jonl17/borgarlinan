import { createGlobalStyle } from "styled-components"

export const GlobCSS = createGlobalStyle`
    html, body, #___gatsby, #___gatsby>div {
        width: 100%;
        margin: 0;
    }
    * {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

}
`
