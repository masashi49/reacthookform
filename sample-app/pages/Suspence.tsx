import { useState, Suspense, useEffect } from 'react'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import { flushSync } from 'react-dom'
import { resolve } from 'path'

type Props = {
  [key: string]: string
}

const sleep = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000)
  })
}

export const RenderingNotifier = ({ name }: Props) => {
  console.log(`${name} rendered`)
  return null
}

const fetchData1 = async () => {
  await sleep()
  return `Hello, ${(Math.random() * 1000).toFixed(0)}`
}

export const Suspence = () => {
  if (Math.random() < 0.5) {
    throw sleep()
  }
  return <p>Hello, world!</p>
}

const SuspenceDemo = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      Suspenseを試す
      <RenderingNotifier name='a' />
      <Suspense fallback={<p>Loading...</p>}>
        <Suspence />
        <RenderingNotifier name='b' />
        <button className='border p-1' onClick={() => setCount((c) => c + 1)}>
          {count}
        </button>
      </Suspense>
    </div>
  )
}

const Loader = () => {
  const [loading, setloading] = useState(false)
  const [data, setData] = useState<string | null>(null)

  if (data === null) {
    throw fetchData1().then(setData)
  }
  return (
    <div>
      <div>
        <button onClick={() => setloading(true)}>load</button>
      </div>
    </div>
  )
}
const SuspenceDemo2 = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      Suspenseを試す
      <Suspense fallback={<p>Loading...</p>}>
        <Loader />
      </Suspense>
    </div>
  )
}

export default SuspenceDemo2
