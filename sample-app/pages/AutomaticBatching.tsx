import { useState } from 'react'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import { flushSync } from 'react-dom'

const AutomaticBatching = () => {
  const [user, setUser] = useState(0)
  const [count, setCount] = useState(0)

  const clickHandler = () => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      //flushSync(() => {
      setUser(res.data)
      //})
      //flushSync(() => {
      setCount((count) => count + 1)
      //})
    })
  }

  console.log('Automatic Batching')
  console.log(user)
  console.log(count)
  return (
    <div className={styles.center}>
      <div>
        <button onClick={clickHandler}>clickHandler</button>
      </div>
    </div>
  )
}

export default AutomaticBatching

/**
## AutomaticBatching

React17で、すでにあった機能です。
イベントハンドラーの中で複数のstateを更新する時、レンダリングを1回にまとめてくれる機能となります。
React18で変わった点はというと、Priomiseの内部で行われる処理に対してもbatchingが動くようになりました！
試してみます。
*/
