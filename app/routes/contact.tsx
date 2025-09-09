import type { Route } from './+types/contact'
import Layout from './components/Layout'
import { useEffect, useState } from 'react'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Liên hệ - Đỗ Công Sơn | Backend Developer' },
    {
      name: 'description',
      content:
        'Thông tin liên hệ của Đỗ Công Sơn (Backend Developer). Bao gồm Email, GitHub và Resume (PDF) để nhà tuyển dụng dễ dàng kết nối.'
    },
    { property: 'og:title', content: 'Liên hệ - Đỗ Công Sơn | Backend Developer' },
    {
      property: 'og:description',
      content:
        'Kết nối với Đỗ Công Sơn qua Email, GitHub hoặc tải Resume (PDF). Dành cho nhà tuyển dụng và đối tác quan tâm.'
    },
    { property: 'og:type', content: 'website' }
  ]
}

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <Layout>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        {/* Hero */}
        <header className='text-center mb-20 relative overflow-hidden'>
          {/* Background Animation */}
          <div className='absolute inset-0 -z-10'>
            <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse'></div>
            <div className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000'></div>
          </div>

          <div
            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h1 className='text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6'>
              Liên hệ với{' '}
              <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient'>
                Đỗ Công Sơn
              </span>
            </h1>
            <p className='text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-4'>
              <span className='font-semibold text-blue-600 dark:text-blue-400'>Backend Developer</span> • NestJS •
              PostgreSQL • Redis
            </p>
            <p className='text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto'>
              Nếu anh/chị là nhà tuyển dụng hoặc đối tác quan tâm, hãy liên hệ trực tiếp qua các kênh dưới đây.
            </p>
          </div>
        </header>

        {/* Contact Info */}
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4'>
              <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                Thông tin liên hệ
              </span>
            </h2>
            <p className='text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
              Kết nối với tôi qua các kênh dưới đây để thảo luận về cơ hội việc làm hoặc dự án hợp tác
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            {/* Email */}
            <div
              className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <a
                href='mailto:son305.02@gmail.com?subject=Ứng tuyển Backend Developer&body=Xin chào Sơn,'
                aria-label='Gửi email cho Đỗ Công Sơn'
                title='Gửi email cho Đỗ Công Sơn'
                className='group block bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center'
              >
                <div className='w-20 h-20 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300'>
                  <svg className='w-10 h-10 text-white' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M3 8l9 6 9-6v10a2 2 0 01-2 2H5a2 2 0 01-2-2z' />
                    <path d='M3 6l9 6 9-6H3z' />
                  </svg>
                </div>
                <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors'>
                  Email
                </h3>
                <p className='text-slate-600 dark:text-slate-300 mb-2 font-medium'>son305.02@gmail.com</p>
                <p className='text-sm text-slate-500 dark:text-slate-400'>Phản hồi trong 24h</p>
                <div className='mt-4 flex items-center justify-center'>
                  <svg
                    className='w-5 h-5 text-slate-400 group-hover:text-red-500 group-hover:translate-x-1 transition-all'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                  </svg>
                </div>
              </a>
            </div>

            {/* GitHub */}
            <div
              className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <a
                href='https://github.com/sonitou'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Xem GitHub của Đỗ Công Sơn'
                title='Xem GitHub của Đỗ Công Sơn'
                className='group block bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center'
              >
                <div className='w-20 h-20 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300'>
                  <svg className='w-10 h-10 text-white' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                  </svg>
                </div>
                <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors'>
                  GitHub
                </h3>
                <p className='text-slate-600 dark:text-slate-300 mb-2 font-medium'>github.com/sonitou</p>
                <p className='text-sm text-slate-500 dark:text-slate-400'>Xem dự án của tôi</p>
                <div className='mt-4 flex items-center justify-center'>
                  <svg
                    className='w-5 h-5 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                  </svg>
                </div>
              </a>
            </div>

            {/* Resume */}
            <div
              className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <a
                href='https://www.topcv.vn/documents/view/eyJpdiI6IkVYMEdvemREbW9Ramg1cUJwcjIzMFE9PSIsInZhbHVlIjoiaElwd1NzWVNZRTRnYzZ6SHpXMi8rYk5jTEg4dFZ6WGpDc1dDUFVzbHYwdmxFY0QyY2dHZkFXOW5OYnpzNjJlbXhuYTJXdlB1NU5WSkt1UjQrUkQ2WXRaRzFuc0traHR4L0NlWllmdmF3Y2FUcDhrSFhzSGhDdkdIWGVSMmphc1ciLCJtYWMiOiIwYzNjYzc1NTIyOTlhM2M3ODY1ZjU0NDgxY2ZlZTZmYjY5MDg2ODI0NjE0ODFmZWFlZmQxYjc4Y2M0ZjQ3YzNjIiwidGFnIjoiIn0='
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Xem CV của Đỗ Công Sơn trên TopCV'
                title='Xem CV của Đỗ Công Sơn trên TopCV'
                className='group block bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center'
              >
                <div className='w-20 h-20 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300'>
                  <span className='text-white text-3xl'>📄</span>
                </div>
                <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors'>
                  CV trên TopCV
                </h3>
                <p className='text-slate-600 dark:text-slate-300 mb-2 font-medium'>Xem CV chi tiết</p>
                <p className='text-sm text-slate-500 dark:text-slate-400'>Thông tin đầy đủ về kinh nghiệm</p>
                <div className='mt-4 flex items-center justify-center'>
                  <svg
                    className='w-5 h-5 text-slate-400 group-hover:text-green-500 group-hover:translate-x-1 transition-all'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* Call to Action */}
          <div
            className={`mt-16 text-center transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white'>
              <h3 className='text-2xl font-bold mb-4'>Sẵn sàng cho cơ hội mới!</h3>
              <p className='text-blue-100 mb-6 max-w-2xl mx-auto'>
                Tôi đang tìm kiếm cơ hội để phát triển trong lĩnh vực Backend Development. Hãy liên hệ với tôi để thảo
                luận về vị trí phù hợp.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <a
                  href='mailto:son305.02@gmail.com?subject=Ứng tuyển Backend Developer&body=Xin chào Sơn,'
                  className='flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors'
                >
                  📧 Gửi Email
                </a>
                <a
                  href='https://www.topcv.vn/documents/view/eyJpdiI6IkVYMEdvemREbW9Ramg1cUJwcjIzMFE9PSIsInZhbHVlIjoiaElwd1NzWVNZRTRnYzZ6SHpXMi8rYk5jTEg4dFZ6WGpDc1dDUFVzbHYwdmxFY0QyY2dHZkFXOW5OYnpzNjJlbXhuYTJXdlB1NU5WSkt1UjQrUkQ2WXRaRzFuc0traHR4L0NlWllmdmF3Y2FUcDhrSFhzSGhDdkdIWGVSMmphc1ciLCJtYWMiOiIwYzNjYzc1NTIyOTlhM2M3ODY1ZjU0NDgxY2ZlZTZmYjY5MDg2ODI0NjE0ODFmZWFlZmQxYjc4Y2M0ZjQ3YzNjIiwidGFnIjoiIn0='
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors'
                >
                  📄 Xem CV trên TopCV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
