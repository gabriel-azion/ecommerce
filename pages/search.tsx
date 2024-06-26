import { getSearchStaticProps } from '@lib/search-props'
import type { GetStaticPropsContext } from 'next'
import Search from '@components/search'

export const runtime = 'experimental-edge'

export async function getStaticProps(context: GetStaticPropsContext) {
  return getSearchStaticProps(context)
}

export default Search
