import type { Route } from './+types/about'
import Layout from './components/Layout'
import avatar from '../assets/avt.png'
import { useEffect, useState } from 'react'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Giới thiệu - MyBlog' },
    { name: 'description', content: 'Tìm hiểu về tác giả và câu chuyện đằng sau MyBlog' }
  ]
}

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <Layout>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        {/* Hero Section */}
        <header className='text-center mb-20 relative overflow-hidden'>
          {/* Background Animation */}
          <div className='absolute inset-0 -z-10'>
            <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse'></div>
            <div className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000'></div>
          </div>

          <div
            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className='relative inline-block'>
              <div className='w-40 h-40 rounded-full overflow-hidden mx-auto ring-4 ring-blue-200 dark:ring-blue-800 shadow-2xl hover:scale-105 transition-transform duration-300'>
                <img
                  src={avatar}
                  alt='Ảnh đại diện Đỗ Công Sơn'
                  className='w-full h-full object-cover'
                  loading='lazy'
                  width={160}
                  height={160}
                />
              </div>
              {/* Floating elements */}
              <div className='absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full animate-bounce'></div>
              <div className='absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-bounce delay-500'></div>
              <div className='absolute top-1/2 -right-8 w-4 h-4 bg-purple-500 rounded-full animate-bounce delay-1000'></div>
            </div>

            <h1 className='text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 mt-8'>
              Xin chào, tôi là{' '}
              <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient'>
                Đỗ Công Sơn
              </span>
            </h1>
            <p className='text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed'>
              Một <span className='font-semibold text-blue-600 dark:text-blue-400'>Backend Developer</span> với niềm đam
              mê chia sẻ kiến thức và kinh nghiệm trong lĩnh vực lập trình và công nghệ.
            </p>
          </div>
        </header>

        {/* About Content */}
        <section className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16'>
          <div>
            <h2 className='text-3xl font-bold text-slate-900 dark:text-white mb-6'>Câu chuyện của tôi</h2>
            <div className='space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed'>
              <p>
                Tôi bắt đầu hành trình lập trình từ năm 2020 khi còn là sinh viên ngành Công nghệ thông tin. Từ những
                dòng code đầu tiên viết bằng C++, tôi đã bị cuốn hút bởi sức mạnh của lập trình.
              </p>
              <p>
                Sau 4 năm học tập và rèn luyện kỹ năng, tôi có cơ hội làm việc với nhiều công nghệ: từ frontend với
                React đến backend với Node.js.
              </p>
              <p>
                Blog này được tạo ra để chia sẻ kiến thức, kinh nghiệm và những bài học tôi tích lũy trong quá trình làm
                việc và học tập.
              </p>
            </div>
          </div>

          <div>
            <h2 className='text-3xl font-bold text-slate-900 dark:text-white mb-6'>Kỹ năng & Công nghệ</h2>
            <div className='space-y-6'>
              <div>
                <h3 className='text-lg font-semibold text-slate-900 dark:text-white mb-3'>Frontend</h3>
                <div className='flex flex-wrap gap-2'>
                  {['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Sass'].map((skill) => (
                    <span
                      key={skill}
                      className='bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className='text-lg font-semibold text-slate-900 dark:text-white mb-3'>Backend</h3>
                <div className='flex flex-wrap gap-2'>
                  {['Node.js', 'NestJS', 'Express.js', 'PostgreSQL', 'MongoDB'].map((skill) => (
                    <span
                      key={skill}
                      className='bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className='text-lg font-semibold text-slate-900 dark:text-white mb-3'>DevOps & Tools</h3>
                <div className='flex flex-wrap gap-2'>
                  {['Docker', 'Git', 'Postman', 'Swagger'].map((skill) => (
                    <span
                      key={skill}
                      className='bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className='mb-20'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4'>
              <span className='bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent'>
                Hành trình nghề nghiệp
              </span>
            </h2>
            <p className='text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
              Các cột mốc quan trọng trong sự nghiệp phát triển backend của tôi
            </p>
          </div>

          <div className='relative'>
            {/* Timeline line */}
            <div className='absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500'></div>

            <div className='space-y-12'>
              {/* Intern Backend */}
              <div
                className={`relative flex items-start space-x-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
              >
                <div className='relative z-10'>
                  <div className='w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg'>
                    <span className='text-white font-bold text-xl'>I</span>
                  </div>
                  <div className='absolute -left-1 top-8 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-slate-900'></div>
                </div>

                <div className='flex-1 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1'>
                  <div className='flex items-center gap-4 mb-4'>
                    <h3 className='text-2xl font-bold text-slate-900 dark:text-white'>Intern Backend Node.js</h3>
                    <span className='px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full font-medium'>
                      Internship
                    </span>
                  </div>

                  <p className='text-blue-600 dark:text-blue-400 font-semibold mb-6 text-lg'>
                    CÔNG TY TNHH SUNNYLEE MEDIA • 6/2023 - 10/2023
                  </p>

                  <div className='grid md:grid-cols-2 gap-6'>
                    <div className='space-y-4'>
                      <div className='flex items-start gap-3'>
                        <div className='w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0'></div>
                        <div>
                          <span className='font-semibold text-slate-800 dark:text-slate-100'>
                            Xây dựng & phát triển API:
                          </span>
                          <p className='text-slate-600 dark:text-slate-300 mt-1'>
                            Tham gia xây dựng các API RESTful bằng Node.js & Express.js để xử lý nghiệp vụ CRUD (người
                            dùng, sản phẩm).
                          </p>
                        </div>
                      </div>

                      <div className='flex items-start gap-3'>
                        <div className='w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0'></div>
                        <div>
                          <span className='font-semibold text-slate-800 dark:text-slate-100'>
                            Làm việc với Database:
                          </span>
                          <p className='text-slate-600 dark:text-slate-300 mt-1'>
                            Thiết kế schema & thực hiện truy vấn với MongoDB / PostgreSQL.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className='space-y-4'>
                      <div className='flex items-start gap-3'>
                        <div className='w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0'></div>
                        <div>
                          <span className='font-semibold text-slate-800 dark:text-slate-100'>
                            Viết tài liệu & xác thực API:
                          </span>
                          <p className='text-slate-600 dark:text-slate-300 mt-1'>
                            Kiểm thử endpoint bằng Postman, viết tài liệu API bằng Swagger hỗ trợ frontend tích hợp.
                          </p>
                        </div>
                      </div>

                      <div className='flex items-start gap-3'>
                        <div className='w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0'></div>
                        <div>
                          <span className='font-semibold text-slate-800 dark:text-slate-100'>Sửa lỗi & bảo trì:</span>
                          <p className='text-slate-600 dark:text-slate-300 mt-1'>
                            Phân tích, tìm & sửa bug phát sinh dưới sự hướng dẫn của mentor.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='mt-6 flex flex-wrap gap-2'>
                    <span className='px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full'>
                      Node.js
                    </span>
                    <span className='px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full'>
                      Express.js
                    </span>
                    <span className='px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full'>
                      MongoDB
                    </span>
                    <span className='px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-sm rounded-full'>
                      PostgreSQL
                    </span>
                  </div>
                </div>
              </div>

              {/* Personal Projects */}
              <div
                className={`relative flex items-start space-x-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
              >
                <div className='relative z-10'>
                  <div className='w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl flex items-center justify-center shadow-lg'>
                    <span className='text-white font-bold text-xl'>P</span>
                  </div>
                  <div className='absolute -left-1 top-8 w-4 h-4 bg-green-600 rounded-full border-4 border-white dark:border-slate-900'></div>
                </div>

                <div className='flex-1 space-y-8'>
                  <div className='bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1'>
                    <div className='flex items-center gap-4 mb-6'>
                      <h3 className='text-2xl font-bold text-slate-900 dark:text-white'>Personal Projects</h3>
                      <span className='px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full font-medium'>
                        Freelance
                      </span>
                    </div>

                    <div className='grid md:grid-cols-2 gap-8'>
                      {[
                        {
                          name: 'E-commerce Backend',
                          period: '2/2025 - hiện tại',
                          icon: '🛒',
                          color: 'blue',
                          points: [
                            'Xây dựng hệ thống thương mại điện tử hỗ trợ nhiều sản phẩm (SKU, thương hiệu, danh mục, đa ngôn ngữ), thanh toán trực tuyến và cập nhật đơn hàng theo thời gian thực.',
                            'Thiết kế backend mô-đun với NestJS + PostgreSQL; tối ưu truy vấn bằng Prisma & indexing; tích hợp cổng thanh toán Sepay và xử lý callback qua WebSocket; triển khai xác thực & phân quyền (JWT, OAuth2, 2FA, Role/Permission); viết tài liệu API bằng Swagger.'
                          ],
                          result:
                            'API cải thiện hiệu năng đáng kể; theo dõi đơn hàng thời gian thực tăng trải nghiệm người dùng; tài liệu API giúp giảm 30% thời gian tích hợp frontend.',
                          tech: ['NestJS', 'TypeScript', 'PostgreSQL', 'Prisma', 'Redis', 'WebSocket'],
                          github: 'https://github.com/sonitou/Ecommerce_BE'
                        },
                        {
                          name: 'Social Network API',
                          period: '10/2024 - 6/2025',
                          icon: '🌐',
                          color: 'purple',
                          points: [
                            'Xây dựng backend cho mạng xã hội hỗ trợ CRUD (bài viết, bình luận…), upload media, và thông báo theo thời gian thực.',
                            'Triển khai với Express.js + MongoDB; xác thực bằng JWT, Refresh Token, Google OAuth2; tích hợp AWS S3 cho upload media an toàn; thông báo real-time (likes, retweets, mentions) qua WebSocket.'
                          ],
                          result:
                            'Hệ thống backend ổn định, xử lý CRUD nhanh; media upload an toàn; xác thực bảo mật; thông báo real-time tăng tương tác người dùng.',
                          tech: ['Express.js', 'MongoDB', 'AWS S3', 'WebSocket', 'JWT'],
                          github: 'https://github.com/sonitou/twitter_Api'
                        }
                      ].map((p, index) => (
                        <article
                          key={p.name}
                          className={`group relative rounded-xl border border-slate-200 dark:border-slate-700 p-6 bg-gradient-to-br from-${p.color}-50/50 to-${p.color}-100/50 dark:from-${p.color}-900/20 dark:to-${p.color}-800/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                          style={{ animationDelay: `${index * 200 + 600}ms` }}
                        >
                          <div className='flex items-center gap-3 mb-4'>
                            <div
                              className={`w-12 h-12 bg-gradient-to-r from-${p.color}-600 to-${p.color}-700 rounded-xl flex items-center justify-center text-xl`}
                            >
                              {p.icon}
                            </div>
                            <div>
                              <h4 className='text-lg font-bold text-slate-900 dark:text-white'>{p.name}</h4>
                              <p className={`text-${p.color}-600 dark:text-${p.color}-400 text-sm font-medium`}>
                                {p.period}
                              </p>
                            </div>
                          </div>

                          <div className='space-y-3 text-slate-600 dark:text-slate-300'>
                            {p.points.map((point, i) => (
                              <div key={i} className='flex items-start gap-2'>
                                <span
                                  className={`w-1.5 h-1.5 bg-${p.color}-500 rounded-full mt-2 flex-shrink-0`}
                                ></span>
                                <span className='text-sm'>{point}</span>
                              </div>
                            ))}
                          </div>

                          <div className='mt-4 p-3 bg-slate-100 dark:bg-slate-700 rounded-lg'>
                            <p className='text-sm'>
                              <span className='font-semibold text-slate-800 dark:text-slate-100'>Kết quả:</span>{' '}
                              {p.result}
                            </p>
                          </div>

                          <div className='mt-4 flex flex-wrap gap-2'>
                            {p.tech.map((tech) => (
                              <span
                                key={tech}
                                className={`px-2 py-1 bg-${p.color}-100 dark:bg-${p.color}-900 text-${p.color}-800 dark:text-${p.color}-200 text-xs rounded-full`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {p.github && (
                            <div className='mt-4'>
                              <a
                                href={p.github}
                                target='_blank'
                                rel='noopener noreferrer'
                                className={`group/link inline-flex items-center gap-2 text-${p.color}-600 dark:text-${p.color}-400 hover:text-${p.color}-700 dark:hover:text-${p.color}-300 font-medium text-sm transition-colors`}
                              >
                                <span>🔗 GitHub Repository</span>
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
                            </div>
                          )}
                        </article>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section
          aria-labelledby='contact-title'
          className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white'
        >
          <h3 id='contact-title' className='text-2xl font-bold mb-4'>
            Liên hệ & Kết nối
          </h3>
          <p className='text-blue-100 mb-6 max-w-2xl mx-auto'>
            Tôi đang tìm kiếm cơ hội để phát triển trong lĩnh vực Backend Development. Nếu anh/chị quan tâm, hãy kết nối
            với tôi qua các kênh sau:
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='/contact'
              className='flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors'
            >
              📧 Email
            </a>

            {/* GitHub */}
            <a
              href='https://github.com/sonitou'
              target='_blank'
              rel='noopener noreferrer me'
              aria-label='Xem GitHub của tôi'
              className='flex items-center justify-center gap-2 bg-slate-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-900 transition-colors'
              title='Mở GitHub trong tab mới'
            >
              💻 GitHub
            </a>

            {/* Resume PDF: mở tab + có download tên file đẹp + type */}
            <a
              href='https://www.topcv.vn/documents/view/eyJpdiI6IkVYMEdvemREbW9Ramg1cUJwcjIzMFE9PSIsInZhbHVlIjoiaElwd1NzWVNZRTRnYzZ6SHpXMi8rYk5jTEg4dFZ6WGpDc1dDUFVzbHYwdmxFY0QyY2dHZkFXOW5OYnpzNjJlbXhuYTJXdlB1NU5WSkt1UjQrUkQ2WXRaRzFuc0traHR4L0NlWllmdmF3Y2FUcDhrSFhzSGhDdkdIWGVSMmphc1ciLCJtYWMiOiIwYzNjYzc1NTIyOTlhM2M3ODY1ZjU0NDgxY2ZlZTZmYjY5MDg2ODI0NjE0ODFmZWFlZmQxYjc4Y2M0ZjQ3YzNjIiwidGFnIjoiIn0='
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Xem CV của tôi trên TopCV'
              className='flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors'
              title='Xem CV trên TopCV'
            >
              📄 CV trên TopCV
            </a>
          </div>
        </section>
      </div>
    </Layout>
  )
}
