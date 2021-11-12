import react from "react";
import { Wrapper, ProgressBar } from "./LineChart.styles";

export default function LineChart ({ title, percentage, color }) {
    return <Wrapper>
    <span>
        { title }:
    </span>
    <ProgressBar
        color={color}
        percentage={percentage}
     />
    </Wrapper>
}