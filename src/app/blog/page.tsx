import Navbar from '@/components/layout/Navbar'
import Link from 'next/link'

const posts = [
  {
    id: 1,
    title: 'Maximizing Yield with Protected Cultivation',
    href: '#',
    description:
      'Learn how protected cultivation techniques can significantly increase your crop yield while conserving resources.',
    date: 'Mar 16, 2024',
    datetime: '2024-03-16',
    category: { title: 'Technology', href: '#' },
    author: {
      name: 'Dr. Rajesh Kumar',
      role: 'Agricultural Scientist',
      href: '#',
    },
  },
  {
    id: 2,
    title: 'Choosing the Right Shade Net for Your Crops',
    href: '#',
    description:
      'A comprehensive guide to selecting the appropriate shade net percentage based on your crop requirements and climate conditions.',
    date: 'Mar 10, 2024',
    datetime: '2024-03-10',
    category: { title: 'Products', href: '#' },
    author: {
      name: 'Priya Sharma',
      role: 'Product Specialist',
      href: '#',
    },
  },
  {
    id: 3,
    title: 'Modern Hydroponics: A Guide to Soilless Farming',
    href: '#',
    description:
      'Discover the benefits of hydroponic farming and how it can revolutionize your agricultural practices.',
    date: 'Mar 5, 2024',
    datetime: '2024-03-05',
    category: { title: 'Innovation', href: '#' },
    author: {
      name: 'Amit Patel',
      role: 'Hydroponics Expert',
      href: '#',
    },
  },
  {
    id: 4,
    title: 'Automation in Protected Cultivation',
    href: '#',
    description:
      'Explore how automation technologies are transforming greenhouse operations and improving efficiency.',
    date: 'Feb 28, 2024',
    datetime: '2024-02-28',
    category: { title: 'Technology', href: '#' },
    author: {
      name: 'Suresh Reddy',
      role: 'Automation Specialist',
      href: '#',
    },
  },
]

export default function Blog() {
  return (
    <div>
      <Navbar />
      <div className="bg-white py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Agricultural Insights</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Expert articles and resources on protected cultivation and modern farming techniques.
            </p>
          </div>
          <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex flex-col items-start">
                <div className="relative w-full">
                  <div className="aspect-[16/9] w-full rounded-2xl bg-gray-100 sm:aspect-[2/1] lg:aspect-[3/2]" />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-500">
                      {post.date}
                    </time>
                    <Link
                      href={post.category.href}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.category.title}
                    </Link>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-[#2e7d32]">
                      <Link href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <div className="h-10 w-10 rounded-full bg-gray-100" />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <Link href={post.author.href}>
                          <span className="absolute inset-0" />
                          {post.author.name}
                        </Link>
                      </p>
                      <p className="text-gray-600">{post.author.role}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 