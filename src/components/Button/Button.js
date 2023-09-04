import {ButtonLM, Wrapper} from "./Button.styled";

export const Button = ({onClick}) => {
    return (
        <Wrapper>
            <ButtonLM type="submit" onClick>Load more</ButtonLM>
        </Wrapper>
    )
}