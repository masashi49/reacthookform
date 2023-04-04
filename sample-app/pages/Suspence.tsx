import { useState, Suspense, useEffect } from 'react'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import { flushSync } from 'react-dom'
import { resolve } from 'path'

const sleep = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000)
  })
}

export const Suspence = () => {
  if (Math.random() < 0.5) {
    throw sleep()
  }
  return <p>Hello, world!</p>
}

type Props = {
  [key: string]: string
}
export const RenderingNotifier = ({ name }: Props) => {
  console.log(`${name} rendered`)
  return null
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

export default SuspenceDemo
