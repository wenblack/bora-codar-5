interface ButtonProps {
    value: string | number
    secondary?: boolean
}

export function NumberButton({ value, secondary }: ButtonProps) {
    if (secondary) {
        return (
            <button className="secondary">{value}</button>
        )
    }
    return (
        <button>{value}</button>
    );

}