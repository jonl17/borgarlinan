import { keyframes } from "styled-components"
import { styles } from "../constants"

export const tvist = keyframes`
    0% {
        background-color: ${styles.Blue};
    }
    50% {
        background-color: yellow;
    }
    100% {
        background-color: ${styles.Blue};
    }
`
