import type { Route } from './+types/home'
import { Link } from 'react-router'
import Layout from './components/Layout'
import avatar from '../assets/avt.png'
import { useEffect, useState } from 'react'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <Layout>
      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        {/* Hero Section with Enhanced Animation */}
        <section className='text-center relative overflow-hidden'>
          {/* Background Animation */}
          <div className='absolute inset-0 -z-10'>
            <div className='absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse'></div>
            <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000'></div>
          </div>

          <div
            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className='relative inline-block'>
              <div className='w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-blue-200 dark:ring-blue-800 mb-8 shadow-2xl hover:scale-105 transition-transform duration-300'>
                <img src={avatar} alt='Đỗ Công Sơn' className='w-full h-full object-cover' loading='lazy' />
              </div>
              {/* Floating elements around avatar */}
              <div className='absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full animate-bounce'></div>
              <div className='absolute -bottom-2 -left-2 w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-500'></div>
            </div>

            <h1 className='text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4'>
              <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient'>
                Đỗ Công Sơn
              </span>
            </h1>

            <div className='text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-2'>
              <span className='inline-block animate-pulse'>🚀</span> Backend Developer
            </div>
            <div className='text-lg text-slate-500 dark:text-slate-400 mb-8'>
              NestJS • PostgreSQL • Redis • WebSocket • TypeScript
            </div>

            <div className='flex flex-col sm:flex-row gap-4 justify-center mb-16'>
              <a
                href='https://www.topcv.vn/documents/view/eyJpdiI6IkVYMEdvemREbW9Ramg1cUJwcjIzMFE9PSIsInZhbHVlIjoiaElwd1NzWVNZRTRnYzZ6SHpXMi8rYk5jTEg4dFZ6WGpDc1dDUFVzbHYwdmxFY0QyY2dHZkFXOW5OYnpzNjJlbXhuYTJXdlB1NU5WSkt1UjQrUkQ2WXRaRzFuc0traHR4L0NlWllmdmF3Y2FUcDhrSFhzSGhDdkdIWGVSMmphc1ciLCJtYWMiOiIwYzNjYzc1NTIyOTlhM2M3ODY1ZjU0NDgxY2ZlZTZmYjY5MDg2ODI0NjE0ODFmZWFlZmQxYjc4Y2M0ZjQ3YzNjIiwidGFnIjoiIn0='
                target='_blank'
                rel='noopener noreferrer'
                className='group px-8 py-4 rounded-xl bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold hover:from-green-700 hover:to-green-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl'
              >
                <span className='flex items-center gap-2'>
                  📄 Xem CV trên TopCV
                  <svg
                    className='w-4 h-4 group-hover:translate-x-1 transition-transform'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                    />
                  </svg>
                </span>
              </a>
              <a
                href='https://github.com/sonitou'
                target='_blank'
                rel='noopener noreferrer'
                className='group px-8 py-4 rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 text-white font-semibold hover:from-slate-800 hover:to-slate-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl'
              >
                <span className='flex items-center gap-2'>
                  💻 GitHub
                  <svg
                    className='w-4 h-4 group-hover:translate-x-1 transition-transform'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                  </svg>
                </span>
              </a>
              <Link
                to='/contact'
                className='group px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl'
              >
                <span className='flex items-center gap-2'>
                  ✉️ Liên hệ
                  <svg
                    className='w-4 h-4 group-hover:translate-x-1 transition-transform'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className='mt-20'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4'>
              <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                Dự án nổi bật
              </span>
            </h2>
            <p className='text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
              Các dự án thể hiện kỹ năng và kinh nghiệm trong phát triển backend
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            {/* Project 1 */}
            <article className='group relative rounded-2xl border border-slate-200 dark:border-slate-700 p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden'>
              {/* Background gradient */}
              <div className='absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

              <div className='relative z-10'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center'>
                    <span className='text-white font-bold text-xl'>E</span>
                  </div>
                  <h3 className='text-xl font-bold text-slate-900 dark:text-white'>E-commerce Backend</h3>
                </div>

                <p className='text-sm text-blue-600 dark:text-blue-400 mb-4 font-medium'>
                  NestJS • PostgreSQL • Prisma • Redis • WebSocket
                </p>

                <ul className='space-y-3 text-slate-600 dark:text-slate-300'>
                  <li className='flex items-start gap-3'>
                    <span className='w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0'></span>
                    <span>Giảm ~40% thời gian phản hồi API bằng tối ưu truy vấn & indexing</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0'></span>
                    <span>Tích hợp Sepay, xử lý callback & real-time update qua WebSocket</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0'></span>
                    <span>JWT, OAuth2, 2FA, Role/Permission; Swagger cho API docs</span>
                  </li>
                </ul>

                <div className='mt-6 flex items-center justify-between'>
                  <a
                    href='https://github.com/sonitou/Ecommerce_BE'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group/link flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors'
                  >
                    <span>🔗 Repository</span>
                    <svg
                      className='w-4 h-4 group-hover/link:translate-x-1 transition-transform'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                      />
                    </svg>
                  </a>

                  <div className='flex gap-2'>
                    <span className='px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full'>
                      NestJS
                    </span>
                    <span className='px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full'>
                      PostgreSQL
                    </span>
                  </div>
                </div>
              </div>
            </article>

            {/* Project 2 */}
            <article className='group relative rounded-2xl border border-slate-200 dark:border-slate-700 p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden'>
              {/* Background gradient */}
              <div className='absolute inset-0 bg-gradient-to-br from-green-50/50 to-blue-50/50 dark:from-green-900/20 dark:to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

              <div className='relative z-10'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center'>
                    <span className='text-white font-bold text-xl'>S</span>
                  </div>
                  <h3 className='text-xl font-bold text-slate-900 dark:text-white'>Social Network API</h3>
                </div>

                <p className='text-sm text-green-600 dark:text-green-400 mb-4 font-medium'>
                  Express.js • MongoDB • AWS S3 • WebSocket • JWT
                </p>

                <ul className='space-y-3 text-slate-600 dark:text-slate-300'>
                  <li className='flex items-start gap-3'>
                    <span className='w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0'></span>
                    <span>CRUD bài viết/bình luận, upload media an toàn (S3)</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0'></span>
                    <span>Thông báo real-time (likes, retweets, mentions)</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0'></span>
                    <span>JWT + Refresh Token + Google OAuth2</span>
                  </li>
                </ul>

                <div className='mt-6 flex items-center justify-between'>
                  <a
                    href='https://github.com/sonitou/twitter_Api'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group/link flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium transition-colors'
                  >
                    <span>🔗 Repository</span>
                    <svg
                      className='w-4 h-4 group-hover/link:translate-x-1 transition-transform'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                      />
                    </svg>
                  </a>

                  <div className='flex gap-2'>
                    <span className='px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full'>
                      Express.js
                    </span>
                    <span className='px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full'>
                      MongoDB
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Skills */}
        <section className='mt-20'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4'>
              <span className='bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>
                Kỹ năng chính
              </span>
            </h2>
            <p className='text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
              Các công nghệ và kỹ năng tôi sử dụng để xây dựng các ứng dụng backend hiệu quả
            </p>
          </div>

          <div className='grid sm:grid-cols-3 gap-8'>
            {[
              {
                title: 'Backend',
                icon: '⚙️',
                color: 'blue',
                items: ['NestJS', 'Node.js', 'Express.js', 'PostgreSQL', 'MongoDB'],
                description: 'Xây dựng API mạnh mẽ và scalable'
              },
              {
                title: 'DevOps',
                icon: '🚀',
                color: 'green',
                items: ['Docker', 'Git', 'Postman', 'Swagger'],
                description: 'Triển khai và quản lý ứng dụng'
              },
              {
                title: 'Frontend',
                icon: '🎨',
                color: 'purple',
                items: ['React', 'TypeScript', 'Tailwind CSS'],
                description: 'Tạo giao diện người dùng đẹp mắt'
              }
            ].map((g, index) => (
              <div
                key={g.title}
                className={`group relative rounded-2xl border border-slate-200 dark:border-slate-700 p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-${g.color}-50/50 to-${g.color}-100/50 dark:from-${g.color}-900/20 dark:to-${g.color}-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>

                <div className='relative z-10'>
                  <div className='flex items-center gap-4 mb-4'>
                    <div
                      className={`w-16 h-16 bg-gradient-to-r from-${g.color}-600 to-${g.color}-700 rounded-2xl flex items-center justify-center text-2xl`}
                    >
                      {g.icon}
                    </div>
                    <div>
                      <h3 className='text-xl font-bold text-slate-900 dark:text-white'>{g.title}</h3>
                      <p className='text-sm text-slate-600 dark:text-slate-400'>{g.description}</p>
                    </div>
                  </div>

                  <div className='flex flex-wrap gap-2'>
                    {g.items.map((item, itemIndex) => (
                      <span
                        key={item}
                        className={`px-4 py-2 text-sm rounded-full bg-${g.color}-100 dark:bg-${g.color}-900 text-${g.color}-800 dark:text-${g.color}-200 font-medium hover:scale-105 transition-transform duration-200`}
                        style={{ animationDelay: `${index * 200 + itemIndex * 100}ms` }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  )
}
