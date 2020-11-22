import { useRouter } from 'next/router'
import useSWR from 'swr'
import Layout from '../../components/layout'
import QuestionDetail from '../../components/question-detail'
import fetcher from '../../lib/fetch'

export default function Detail() {
  const { query } = useRouter()
  const { data, error } = useSWR(
    () => query.id && `/api/question/${query.id}`,
    fetcher
  )
  return (
    <Layout>
      <QuestionDetail {...data}></QuestionDetail>
    </Layout>
  )
}
