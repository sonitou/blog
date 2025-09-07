import type { Route } from './+types/about'
import Layout from './components/Layout'
import avatar from '../assets/avt.png'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Giới thiệu - MyBlog' },
    { name: 'description', content: 'Tìm hiểu về tác giả và câu chuyện đằng sau MyBlog' }
  ]
}

export default function About() {
  return (
    <Layout>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        {/* Hero Section */}
        <header className='text-center mb-16'>
          <div className='w-36 h-36 rounded-full overflow-hidden mx-auto ring-2 ring-slate-200 dark:ring-slate-700'>
            <img
              src={avatar}
              alt='Ảnh đại diện Đỗ Công Sơn'
              className='w-full h-full object-cover'
              loading='lazy'
              width={144}
              height={144}
            />
          </div>
          <h1 className='text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6'>
            Xin chào, tôi là{' '}
            <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              Đỗ Công Sơn
            </span>
          </h1>
          <p className='text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto'>
            Một Full-stack Developer với niềm đam mê chia sẻ kiến thức và kinh nghiệm trong lĩnh vực lập trình và công
            nghệ.
          </p>
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
        <section className='mb-16'>
          <h2 className='text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center'>Hành trình nghề nghiệp</h2>
          <div className='space-y-8'>
            {/* Intern Backend */}
            <div className='flex items-start space-x-4'>
              <div className='w-4 h-4 bg-blue-600 rounded-full mt-2'></div>
              <div className='space-y-2'>
                <h3 className='text-xl font-semibold text-slate-900 dark:text-white'>Intern Backend Node.js</h3>
                <p className='text-blue-600 dark:text-blue-400 font-medium'>
                  CÔNG TY TNHH SUNNYLEE MEDIA • 6/2023 - 10/2023
                </p>
                <ul className='list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 mt-2'>
                  <li>
                    <span className='font-medium text-slate-800 dark:text-slate-100'>Xây dựng & phát triển API:</span>{' '}
                    Tham gia xây dựng các API RESTful bằng Node.js & Express.js để xử lý nghiệp vụ CRUD (người dùng, sản
                    phẩm).
                  </li>
                  <li>
                    <span className='font-medium text-slate-800 dark:text-slate-100'>Làm việc với Database:</span> Thiết
                    kế schema & thực hiện truy vấn với MongoDB / PostgreSQL.
                  </li>
                  <li>
                    <span className='font-medium text-slate-800 dark:text-slate-100'>
                      Viết tài liệu & xác thực API:
                    </span>{' '}
                    Kiểm thử endpoint bằng Postman, viết tài liệu API bằng Swagger hỗ trợ frontend tích hợp.
                  </li>
                  <li>
                    <span className='font-medium text-slate-800 dark:text-slate-100'>Sửa lỗi & bảo trì:</span> Phân
                    tích, tìm & sửa bug phát sinh dưới sự hướng dẫn của mentor.
                  </li>
                </ul>
              </div>
            </div>

            {/* Personal Projects */}
            <div className='flex items-start space-x-4'>
              <div className='w-4 h-4 bg-green-600 rounded-full mt-2'></div>
              <div className='space-y-4'>
                <h3 className='text-xl font-semibold text-slate-900 dark:text-white'>Personal Projects</h3>

                {[
                  {
                    name: 'E-commerce Backend',
                    period: '2/2025 - hiện tại',
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
                    points: [
                      'Xây dựng backend cho mạng xã hội hỗ trợ CRUD (bài viết, bình luận…), upload media, và thông báo theo thời gian thực.',
                      'Triển khai với Express.js + MongoDB; xác thực bằng JWT, Refresh Token, Google OAuth2; tích hợp AWS S3 cho upload media an toàn; thông báo real-time (likes, retweets, mentions) qua WebSocket.'
                    ],
                    result:
                      'Hệ thống backend ổn định, xử lý CRUD nhanh; media upload an toàn; xác thực bảo mật; thông báo real-time tăng tương tác người dùng.',
                    tech: ['Express.js', 'MongoDB', 'AWS S3', 'WebSocket', 'JWT'],
                    github: 'https://github.com/sonitou/twitter_Api'
                  }
                ].map((p) => (
                  <article
                    key={p.name}
                    className='rounded-lg border border-slate-200 dark:border-slate-700 p-4 bg-slate-50 dark:bg-slate-800/40'
                  >
                    <p className='text-blue-600 dark:text-blue-400 font-medium'>
                      {p.name} • {p.period}
                    </p>
                    <ul className='list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 mt-2'>
                      {p.points.map((x, i) => (
                        <li key={i}>{x}</li>
                      ))}
                      <li>
                        <span className='font-medium text-slate-800 dark:text-slate-100'>Kết quả:</span> {p.result}
                      </li>
                      <li>
                        <span className='font-medium text-slate-800 dark:text-slate-100'>Công nghệ:</span>{' '}
                        {p.tech.join(', ')}.
                      </li>
                    </ul>
                    {p.github && (
                      <div className='mt-3'>
                        <a
                          href={p.github}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='inline-block text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline'
                        >
                          🔗 GitHub Repository
                        </a>
                      </div>
                    )}
                  </article>
                ))}
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
              href='https://byvn.net/lI2p'
              target='_blank'
              rel='noopener'
              aria-label='Mở hoặc tải CV PDF của tôi'
              className='flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors'
              download='DoCongSon_CV.pdf'
              type='application/pdf'
              title='Mở CV (PDF) trong tab mới hoặc tải xuống'
            >
              📄 Resume
            </a>
          </div>
        </section>
      </div>
    </Layout>
  )
}
