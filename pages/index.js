import useSWR from 'swr'

import fetcher from '../lib/fetch'
import styles from '../styles/Home.module.css'

import Layout from '../components/layout'
import Question from '../components/question'
import Loading from '../components/loading'

export default function Home() {
  const { data } = useSWR('/api/question/questions', fetcher)

  return (
    <Layout>
      {!data && (
        <div className={styles.loading}>
          <Loading />
        </div>
      )}

      {data?.map((q) => {
        return <Question key={q.url} {...q}></Question>
      })}
    </Layout>
  )
}
