import React from 'react'

function Question({ name, slug, datetime, text }) {
  return <article>Murat</article>
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