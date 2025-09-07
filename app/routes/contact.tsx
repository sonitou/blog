import type { Route } from './+types/contact'
import Layout from './components/Layout'

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
  return (
    <Layout>
      <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        {/* Hero */}
        <header className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6'>
            Liên hệ với{' '}
            <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              Đỗ Công Sơn
            </span>
          </h1>
          <p className='text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
            Backend Developer • NestJS • PostgreSQL • Redis
          </p>
          <p className='mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
            Nếu anh/chị là nhà tuyển dụng hoặc đối tác quan tâm, hãy liên hệ trực tiếp qua các kênh dưới đây.
          </p>
        </header>

        {/* Contact Info */}
        <section className='space-y-6'>
          {/* Email */}
          <a
            href='mailto:son305.02@gmail.com?subject=Ứng tuyển Backend Developer&body=Xin chào Sơn,'
            aria-label='Gửi email cho Đỗ Công Sơn'
            title='Gửi email cho Đỗ Công Sơn'
            className='flex items-center space-x-4 p-4 bg-red-100 dark:bg-red-900 rounded-lg hover:bg-red-200 dark:hover:bg-red-800 transition-colors'
          >
            <svg className='w-6 h-6 text-red-600 dark:text-red-400' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M3 8l9 6 9-6v10a2 2 0 01-2 2H5a2 2 0 01-2-2z' />
              <path d='M3 6l9 6 9-6H3z' />
            </svg>
            <span className='font-medium text-slate-900 dark:text-white'>son305.02@gmail.com</span>
          </a>

          {/* GitHub */}
          <a
            href='https://github.com/sonitou'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Xem GitHub của Đỗ Công Sơn'
            title='Xem GitHub của Đỗ Công Sơn'
            className='flex items-center space-x-4 p-4 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors'
          >
            <svg className='w-6 h-6 text-slate-900 dark:text-white' fill='currentColor' viewBox='0 0 24 24'>
              <path
                d='M12 0c-6.626 0-12 5.373-12 
                       12 0 5.302 3.438 9.8 
                       8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 
                       1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 
                       2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 
                       0-1.311.469-2.381 
                       1.236-3.221-.124-.303-.535-1.524.117-3.176 
                       0 0 1.008-.322 3.301 
                       1.23.957-.266 1.983-.399 
                       3.003-.404 1.02.005 2.047.138 
                       3.006.404 2.291-1.552 
                       3.297-1.23 3.297-1.23.653 
                       1.653.242 2.874.118 3.176.77.84 
                       1.235 1.911 1.235 3.221 
                       0 4.609-2.807 5.624-5.479 
                       5.921.43.372.823 1.102.823 
                       2.222v3.293c0 .319.192.694.801.576 
                       4.765-1.589 8.199-6.086 
                       8.199-11.386 0-6.627-5.373-12-12-12z'
              />
            </svg>
            <span className='font-medium text-slate-900 dark:text-white'>GitHub</span>
          </a>

          {/* Resume */}
          <a
            href='https://byvn.net/lI2p'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Tải CV PDF của Đỗ Công Sơn'
            title='Tải CV PDF của Đỗ Công Sơn'
            className='flex items-center space-x-4 p-4 bg-green-100 dark:bg-green-900 rounded-lg hover:bg-green-200 dark:hover:bg-green-800 transition-colors'
          >
            <span className='text-green-600 dark:text-green-400 text-xl'>📄</span>
            <span className='font-medium text-slate-900 dark:text-white'>Resume (PDF)</span>
          </a>
        </section>
      </div>
    </Layout>
  )
}
