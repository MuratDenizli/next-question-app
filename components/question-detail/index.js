import React from 'react'

import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import styles from './style.module.css'

function QuestionDetail({ ...props }) {
  // const date = formatDistanceToNowStrict(new Date(props?.published_at))
  console.log('props', props)
  return (
    <article className={styles.article}>
      <div>
        <header className={styles.header}>
          <span className={styles.question}>{props.question}</span>
          <span className={styles.date}>
            Created question <strong>23 satt</strong> ago
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
            return (
              <div key={q.url}>
                <span>
                  {q.choice}
                  {q.vote && <span className={styles.votes}>{q.vote}</span>}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </article>
  )
}

export default QuestionDetail
