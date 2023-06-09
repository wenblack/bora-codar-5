import Head from 'next/head'
import divide from '../assets/divide.svg'
import equals from '../assets/equals.svg'
import minus from '../assets/minus.svg'
import percent from '../assets/percent.svg'
import plus from '../assets/plus.svg'
import plusminus from '../assets/plusminus.svg'
import result from "../assets/result.svg"
import x from '../assets/x.svg'
import Image from 'next/image'
import { NumberButton } from '@/components/NumberButton'
import { OperatorButton } from '@/components/OperatorButton'
import { useState } from 'react'



export default function Home() {
  const [count, setCount] = useState('')
  const [results, setResults] = useState('')

  function udateCount(value: string) {
    if (value === '*') {
      setCount('test')
    }

    if (count === '') {
      setCount(String(value))
    } else if (count === '0') {
      setCount(String(value))
    }
    setCount(count + value)
  }

  function resetCount() {
    setCount('')
    setResults(String(0))
  }

  function calculate() {
    try {
      let total = eval(count)
      setResults(total)
      setCount(total)
    }
    catch (error) {
      setResults('ERROR')
      console.log(error)
    }
  }


  return (
    <>
      <Head>
        <title>Calculator</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div id="calculator">
          <div id="display">
            <div id="last-calc">{count}</div>
            <div id="result">
              <Image src={equals} alt="sinal de igual" />
              <span>{results}</span>
            </div>
          </div>
          <div id="keyboard">
            <NumberButton value={"CE"} secondary clicked={() => { resetCount() }} />
            <NumberButton value={'C'} clicked={() => { resetCount() }} />
            <OperatorButton type={percent} primary clicked={() => { udateCount("%") }} />
            <OperatorButton type={divide} clicked={() => { udateCount('/') }} />
            <NumberButton value={7} clicked={() => { udateCount('7') }} />
            <NumberButton value={8} clicked={() => { udateCount('8') }} />
            <NumberButton value={9} clicked={() => { udateCount('9') }} />
            <OperatorButton type={x} clicked={() => { udateCount('*') }} />
            <NumberButton value={4} clicked={() => { udateCount('4') }} />
            <NumberButton value={5} clicked={() => { udateCount('5') }} />
            <NumberButton value={6} clicked={() => { udateCount('6') }} />
            <OperatorButton type={minus} clicked={() => { udateCount('-') }} />
            <NumberButton value={1} clicked={() => { udateCount('1') }} />
            <NumberButton value={2} clicked={() => { udateCount('2') }} />
            <NumberButton value={3} clicked={() => { udateCount('3') }} />
            <OperatorButton type={plus} clicked={() => { udateCount('+') }} />
            <OperatorButton type={plusminus} primary />
            <NumberButton value={0} clicked={() => { udateCount('0') }} />
            <NumberButton value={','} clicked={() => { udateCount(',') }} />
            <OperatorButton type={result} quartiary clicked={() => { calculate() }} />
          </div>
        </div>
      </main>
    </>
  )
}
