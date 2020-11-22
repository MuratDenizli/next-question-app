import useSWR from 'swr'
import { useRouter } from 'next/router'

import fetcher from '../../lib/fetch'

import Layout from '../../components/layout'

export default function QuestionDetail() {
  const { query } = useRouter()
  const { data, error } = useSWR(
    () => query.id && `/api/question/${query.id}`,
    fetcher
  )
  console.log(data)
  return (
    <Layout>
      <span>{JSON.stringify(data)}</span>
    </Layout>
  )
}
