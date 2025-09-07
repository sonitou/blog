import type { Route } from './+types/home'
import { Link } from 'react-router'
import Layout from './components/Layout'
import avatar from '../assets/avt.png'

export default function Home() {
  return (
    <Layout>
      <main className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        {/* Hero */}
        <section className='text-center'>
          <div className='w-28 h-28 mx-auto rounded-full overflow-hidden ring-2 ring-slate-200 dark:ring-slate-700 mb-6'>
            <img src={avatar} alt='Đỗ Công Sơn' className='w-full h-full object-cover' loading='lazy' />
          </div>
          <h1 className='text-3xl md:text-5xl font-bold text-slate-900 dark:text-white'>Đỗ Công Sơn</h1>
          <p className='mt-3 text-lg text-slate-600 dark:text-slate-300'>
            Backend Developer • NestJS • PostgreSQL • Redis • WebSocket
          </p>
          <div className='mt-6 flex flex-col sm:flex-row gap-3 justify-center'>
            <a
              href='https://byvn.net/lI2p'
              target='_blank'
              rel='noopener'
              className='px-5 py-3 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700'
            >
              📄 Xem Resume
            </a>
            <a
              href='https://github.com/sonitou'
              target='_blank'
              rel='noopener noreferrer'
              className='px-5 py-3 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800'
            >
              💻 GitHub
            </a>
            <Link to='/contact' className='px-5 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700'>
              ✉️ Liên hệ
            </Link>
          </div>
        </section>

        {/* Featured Projects */}
        <section className='mt-16'>
          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-6'>Dự án nổi bật</h2>
          <div className='grid md:grid-cols-2 gap-6'>
            {/* Project 1 */}
            <article className='rounded-xl border border-slate-200 dark:border-slate-700 p-5 bg-white dark:bg-slate-800'>
              <h3 className='text-lg font-semibold text-slate-900 dark:text-white'>E-commerce Backend</h3>
              <p className='text-sm text-blue-600 dark:text-blue-400 mt-1'>
                NestJS • PostgreSQL • Prisma • Redis • WebSocket
              </p>
              <ul className='mt-3 list-disc list-inside text-slate-600 dark:text-slate-300 space-y-1'>
                <li>Giảm ~40% thời gian phản hồi API bằng tối ưu truy vấn & indexing.</li>
                <li>Tích hợp Sepay, xử lý callback & real-time update qua WebSocket.</li>
                <li>JWT, OAuth2, 2FA, Role/Permission; Swagger cho API docs.</li>
              </ul>
              <div className='mt-4 flex gap-3'>
                <a
                  href='https://github.com/sonitou/Ecommerce_BE'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-600 dark:text-blue-400 hover:underline text-sm'
                >
                  🔗 Repository
                </a>
                {/* <a href="/case-studies/ecommerce" className="text-sm text-slate-700 dark:text-slate-200 hover:underline">📚 Case study</a> */}
              </div>
            </article>

            {/* Project 2 */}
            <article className='rounded-xl border border-slate-200 dark:border-slate-700 p-5 bg-white dark:bg-slate-800'>
              <h3 className='text-lg font-semibold text-slate-900 dark:text-white'>Social Network API</h3>
              <p className='text-sm text-blue-600 dark:text-blue-400 mt-1'>
                Express.js • MongoDB • AWS S3 • WebSocket • JWT
              </p>
              <ul className='mt-3 list-disc list-inside text-slate-600 dark:text-slate-300 space-y-1'>
                <li>CRUD bài viết/bình luận, upload media an toàn (S3).</li>
                <li>Thông báo real-time (likes, retweets, mentions).</li>
                <li>JWT + Refresh Token + Google OAuth2.</li>
              </ul>
              <div className='mt-4 flex gap-3'>
                <a
                  href='https://github.com/sonitou/twitter_Api'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-600 dark:text-blue-400 hover:underline text-sm'
                >
                  🔗 Repository
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* Skills */}
        <section className='mt-16'>
          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-6'>Kỹ năng chính</h2>
          <div className='grid sm:grid-cols-3 gap-4'>
            {[
              { title: 'Backend', items: ['NestJS', 'Node.js', 'Express.js', 'PostgreSQL', 'MongoDB'] },
              { title: 'DevOps', items: ['Docker', 'Git', 'Postman', 'Swagger'] },
              { title: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS'] }
            ].map((g) => (
              <div key={g.title} className='rounded-xl border border-slate-200 dark:border-slate-700 p-5'>
                <h3 className='font-semibold text-slate-900 dark:text-white'>{g.title}</h3>
                <div className='mt-3 flex flex-wrap gap-2'>
                  {g.items.map((x) => (
                    <span
                      key={x}
                      className='px-2.5 py-1 text-sm rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200'
                    >
                      {x}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  )
}
