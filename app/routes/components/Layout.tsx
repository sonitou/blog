import { Link, useLocation } from 'react-router'
import { useEffect, useState } from 'react'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation()
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path: string) => location.pathname === path

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
      document.body.classList.add('dark')
      document.documentElement.setAttribute('data-theme', 'dark')
      document.documentElement.style.colorScheme = 'dark'
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove('dark')
      document.body.classList.remove('dark')
      document.documentElement.setAttribute('data-theme', 'light')
      document.documentElement.style.colorScheme = 'light'
    }
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  const toggleDarkMode = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)

    if (newMode) {
      document.documentElement.classList.add('dark')
      document.body.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      document.documentElement.setAttribute('data-theme', 'dark')
      document.documentElement.style.colorScheme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      document.body.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      document.documentElement.setAttribute('data-theme', 'light')
      document.documentElement.style.colorScheme = 'light'
    }
  }

  return (
    <div
      className={`${isDarkMode ? 'dark' : ''} min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300`}
    >
      {/* Header */}
      <header className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            {/* Logo */}
            <Link to='/' className='flex items-center space-x-2'>
              <div className='w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-lg'>B</span>
              </div>
              <span className='text-xl font-bold text-slate-900 dark:text-white'>MyBlog</span>
            </Link>

            {/* Navigation */}
            <nav className='hidden md:flex space-x-8'>
              <Link
                to='/'
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/')
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                    : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                Trang chủ
              </Link>
              <Link
                to='/about'
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/about')
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                    : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                Giới thiệu
              </Link>
              <Link
                to='/contact'
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/contact')
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                    : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                Liên hệ
              </Link>
            </nav>

            {/* Theme toggle and Mobile menu */}
            <div className='flex items-center gap-4'>
              {/* Dark mode toggle */}
              <button
                onClick={toggleDarkMode}
                className='p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200 hover:scale-105'
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDarkMode ? (
                  <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                    />
                  </svg>
                ) : (
                  <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                    />
                  </svg>
                )}
              </button>

              {/* Mobile menu button */}
              <div className='md:hidden'>
                <button
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                  aria-label='Mở menu điều hướng'
                  aria-expanded={isMenuOpen}
                  className='text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'
                >
                  <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* Mobile dropdown menu */}
          {isMenuOpen && (
            <div className='md:hidden mt-2 pb-2'>
              <nav className='space-y-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur rounded-xl p-3 shadow-lg border border-slate-200 dark:border-slate-700'>
                <Link
                  to='/'
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive('/')
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  Trang chủ
                </Link>
                <Link
                  to='/about'
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive('/about')
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  Giới thiệu
                </Link>
                <Link
                  to='/contact'
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive('/contact')
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  Liên hệ
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main content */}
      <main className='flex-1'>{children}</main>

      {/* Footer */}
      <footer className='bg-slate-900 dark:bg-slate-950 text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div>
              <div className='flex items-center space-x-2 mb-4'>
                <div className='w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center'>
                  <span className='text-white font-bold text-lg'>B</span>
                </div>
                <span className='text-xl font-bold'>MyBlog</span>
              </div>
              <p className='text-slate-400'>
                Một Backend Developer với niềm đam mê chia sẻ kiến thức và kinh nghiệm trong lĩnh vực lập trình và công
                nghệ.
              </p>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-4'>Liên kết nhanh</h3>
              <ul className='space-y-2'>
                <li>
                  <Link to='/' className='text-slate-400 hover:text-white transition-colors'>
                    Trang chủ
                  </Link>
                </li>
                <li>
                  <Link to='/about' className='text-slate-400 hover:text-white transition-colors'>
                    Giới thiệu
                  </Link>
                </li>
                <li>
                  <Link to='/contact' className='text-slate-400 hover:text-white transition-colors'>
                    Liên hệ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-4'>Theo dõi</h3>
              <div className='flex space-x-4'>
                <a href='#' className='text-slate-400 hover:text-white transition-colors'>
                  <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' />
                  </svg>
                </a>
                <a href='#' className='text-slate-400 hover:text-white transition-colors'>
                  <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z' />
                  </svg>
                </a>
                <a href='#' className='text-slate-400 hover:text-white transition-colors'>
                  <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z' />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className='border-t border-slate-800 mt-8 pt-8 text-center text-slate-400'>
            <p>&copy; 2024 MyBlog. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
