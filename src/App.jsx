import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import { siteConfig, menuItems } from './data/fakeData'
import StaffList from './features/staff/pages/StaffList'
import StaffEdit from './features/staff/pages/StaffEdit'
import Applications from './features/applications/pages/Applications'
import ApplicationEdit from './features/applications/pages/ApplicationEdit'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Sidebar */}
        <div className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transition-transform duration-200 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold">{siteConfig.siteName}</h1>
              <button onClick={() => setIsSidebarOpen(false)} className="md:hidden">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* User Info */}
            <div className="mt-6 mb-8">
              <div className="flex items-center">
                <img src={siteConfig.userInfo.avatar} alt="avatar" className="w-10 h-10 rounded-full" />
                <div className="ml-3">
                  <p className="font-medium">{siteConfig.userInfo.name}</p>
                  <p className="text-sm text-gray-400">{siteConfig.userInfo.role}</p>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <nav className="space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-colors duration-200"
                >
                  <span className="inline-flex items-center justify-center h-6 w-6">
                    <i className={`fas fa-${item.icon}`}></i>
                  </span>
                  <span className="ml-3">{item.title}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className={`${isSidebarOpen ? 'ml-64' : 'ml-0'} transition-margin duration-200 ease-in-out`}>
          {/* Navbar */}
          <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                  <div className="ml-4 font-semibold text-gray-700">{siteConfig.companyName}</div>
                </div>
              </div>
            </div>
          </nav>

          {/* Page Content */}
          <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<StaffList />} />
              <Route path="/staff-list" element={<StaffList />} />
              <Route path="/staff-edit/:id" element={<StaffEdit />} />
              <Route path="/applications" element={<Applications />} />
              <Route path="/application-edit/:id" element={<ApplicationEdit />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App 