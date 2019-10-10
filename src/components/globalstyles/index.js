import { createGlobalStyle } from "styled-components"

import { styles } from "../../constants"

export const GlobCSS = createGlobalStyle` 

    ::selection {
        color: ${styles.Blue};
        background-color: ${styles.LinuLitur};
    }
      
    html, body, #___gatsby, #___gatsby>div {
        width: 100%;
        margin: 0;
    }
    
    
`
