import divide from '../assets/divide.svg'
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
    type: typeof divide | typeof equals | typeof minus | typeof percent | typeof plus | typeof plusminus | typeof result | typeof x
}

export function OperatorButton({ primary, quartiary, type }: OperatorButton) {
    if (quartiary) {
        return (
            <button className="quartiary">
                <Image src={type} alt={type} />
            </button>
        )
    } else if (primary) {
        return (
            <button>
                <Image src={type} alt={type} />
            </button>
        )
    }
    return (
        <button className='tertiary'>
            <Image src={type} alt={type} />
        </button>
    );

}