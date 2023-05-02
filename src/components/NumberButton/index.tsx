import { MouseEventHandler } from "react";

interface ButtonProps {
    value: string | number
    secondary?: boolean
    clicked?: MouseEventHandler<HTMLButtonElement>
}

export function NumberButton({ value, secondary, clicked }: ButtonProps) {
    if (secondary) {
        return (
            <button className="secondary" onClick={clicked}>{value}</button>
        )
    }
    return (
        <button onClick={clicked}>{value}</button>
    );

}