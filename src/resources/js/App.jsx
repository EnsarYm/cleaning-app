import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import ApplicationIndex from './pages/application/index';
import ApplicationEdit from './pages/application/edit';
import StaffIndex from './pages/staff/index';
import StaffEdit from './pages/staff/edit';
import StaffCreate from './pages/staff/create';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="flex min-h-screen bg-gray-100">
          {/* Sidebar */}
          <div className="w-64 bg-white shadow-lg">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-center h-16 px-4 bg-gray-800">
                <span className="text-xl font-bold text-white">Temizlik Şirketi</span>
              </div>
              <nav className="flex-1 px-2 py-4 space-y-1">
                <Link
                  to="/application"
                  className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Başvurular
                </Link>
                <Link
                  to="/staff"
                  className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  Personel
                </Link>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <main className="p-6">
              <Routes>
                <Route path="/" element={<ApplicationIndex />} />
                <Route path="/application" element={<ApplicationIndex />} />
                <Route path="/application/:id/edit" element={<ApplicationEdit />} />
                <Route path="/staff" element={<StaffIndex />} />
                <Route path="/staff/create" element={<StaffCreate />} />
                <Route path="/staff/:id/edit" element={<StaffEdit />} />
              </Routes>
            </main>
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App; 