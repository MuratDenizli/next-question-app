import React from 'react'
import Link from 'next/link'

import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import styles from './style.module.css'

function Question({ ...props }) {
  const date = new Date(props.published_at)
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

// return (
//   <article className={styles.tweet}>
//     {/* avatar */}
//     <div className={styles.avatar}>
//       <Photo />
//     </div>

//     {/* body */}
//     <div className={styles.body}>
//       <header className={styles.header}>
//         <span className={styles.name}>{name}</span> <span>@{slug}</span> ·{' '}
//         <span>{formatDistanceToNowStrict(datetime)}</span>
//       </header>

//       <div className={styles.content}>{text}</div>

//       <footer className={styles.footer}>
//         {/* reply */}
//         <div className={styles.footerButton}>
//           <IconButton className={styles.actionButton}>
//             <Icon.Reply />
//           </IconButton>
//           <span>3</span>
//         </div>

//         {/* retweet */}
//         <div className={styles.footerButton}>
//           <IconButton className={styles.actionButton}>
//             <Icon.Retweet />
//           </IconButton>
//           <span>12</span>
//         </div>

//         {/* like */}
//         <div className={styles.footerButton}>
//           <IconButton className={styles.actionButton}>
//             <Icon.Like />
//           </IconButton>
//         </div>

//         {/* share */}
//         <div className={styles.footerButton}>
//           <IconButton className={styles.actionButton}>
//             <Icon.Share />
//           </IconButton>
//         </div>
//       </footer>
//     </div>
//   </article>
// )
