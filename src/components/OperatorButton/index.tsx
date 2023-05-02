import { MouseEventHandler } from 'react'
import divide from '../../assets/divide.svg'
import equals from '../assets/equals.svg'
import minus from '../assets/minus.svg'
import percent from '../assets/percent.svg'
import plus from '../assets/plus.svg'
import plusminus from '../assets/plusminus.svg'
import result from '../assets/result.svg'
import x from '../assets/x.svg'
import Image from 'next/image'

interface OperatorButton {
    primary?: boolean
    quartiary?: boolean
    clicked?: MouseEventHandler<HTMLButtonElement>
    type: typeof divide | typeof equals | typeof minus | typeof percent | typeof plus | typeof plusminus | typeof result | typeof x
}

export function OperatorButton({ primary, quartiary, type, clicked }: OperatorButton) {
    if (quartiary) {
        return (
            <button onClick={clicked} className="quartiary">
                <Image src={type} alt={type} />
            </button>
        )
    } else if (primary) {
        return (
            <button onClick={clicked}>
                <Image src={type} alt={type} />
            </button>
        )
    }
    return (
        <button onClick={clicked} className='tertiary'>
            <Image src={type} alt={type} />
        </button>
    );

}