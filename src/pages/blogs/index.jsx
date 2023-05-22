import { Card } from '@/components/Card'
import Head from 'next/head'
import Image from 'next/image'

import { SimpleLayout } from '@/components/SimpleLayout'
import { formatDate } from '@/lib/formatDate'
import { getAllArticles } from '@/lib/getAllArticles'

function Article({ article }) {
  return (
    <Card>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 grid max-w-2xl gap-x-8 gap-y-20">
          <article className="flex flex-col items-start justify-between">
            <a href={`/blogs/${article.slug}`}>
              <div className="relative w-full">
                <Image
                  src={article.imageUrl.src}
                  width={500}
                  height={300}
                  objectFit="cover"
                  className="rounded-2xl"
                  alt="blog thumbnail"
                />
              </div>
            </a>

            <div className="max-w-xl">
              <div className="mt-8 flex items-center gap-x-4 text-xs">
                <time dateTime={article.date} className="text-gray-500">
                  {formatDate(article.date)}
                </time>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6  ">
                  <a href={`/blogs/${article.slug}`}>
                    <Card.Title>
                      <span className="absolute inset-0"></span>
                      {article.title}
                    </Card.Title>
                  </a>
                </h3>
                <Card.Description className="line-clamp-3 mt-5 text-sm leading-6 ">
                  {article.description}
                </Card.Description>
              </div>
            </div>
          </article>
        </div>
      </div>
    </Card>
  )
}

export default function ArticlesIndex({ articles }) {
  return (
    <>
      <Head>
        <title>Blogs - Beautiful documentation that converts users</title>
        <meta
          name="Blogs"
          content="Build the documentation you've always wanted. Beautiful out of the box, easy to maintain, and optimized for user engagement."
        />
      </Head>
      <SimpleLayout
        title="Blogs"
        intro="Mintlify Chronicles: Navigating the World of Technical Documentation"
      >
        <div>
          <div>
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  }
}