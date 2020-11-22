import React from 'react'
import Link from 'next/link'

import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import styles from './style.module.css'

function Question({ ...props }) {
  const date = new Date(props.published_at)
  console.log('props', props)

  return (
    <Link href={props.url}>
      <a {...props}>
        <article className={styles.article}>
          <div>
            <header className={styles.header}>
              <span className={styles.question}>{props.question}</span>
              <span className={styles.date}>
                Created question{' '}
                <strong>{formatDistanceToNowStrict(date)}</strong> ago
              </span>
            </header>
          </div>
          {/* body */}
          <div className={styles.body}>
            <div>
              <span className={styles.header}>Choice</span>
            </div>
            <div className={styles.choices}>
              {props?.choices?.map((q) => {
                return <span key={q.url}>{q.choice}</span>
              })}
            </div>
          </div>
        </article>
      </a>
    </Link>
  )
}

export default Question
