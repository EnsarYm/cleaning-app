import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { applications } from '../../../../data/fakeData.js';

function StaffIndex() {
  const [staffList, setStaffList] = useState([]);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const approvedApplications = applications.filter(app => app.status === 'approved');
    setStaffList(approvedApplications);
  }, []);

  const openModal = (person) => {
    setSelectedStaff(person);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Bu personeli silmek istediğinizden emin misiniz?')) {
      setStaffList(staffList.filter(staff => staff.id !== id));
    }
  };

  return (
    <div>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Personel</h1>
          <p className="mt-2 text-sm text-gray-700">
            Personel listesi
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <Link
            to="/staff/create"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            Personel Ekle
          </Link>
        </div>
      </div>

      {/* Personel Tablosu */}
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Ad Soyad
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      E-posta
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Telefon
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Pozisyon
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Deneyim
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Adres
                    </th>
                    <th className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">İşlemler</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {staffList.map((person) => (
                    <tr key={person.id}>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.firstName} {person.lastName}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.email}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.phone}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.position}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.experience}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.address}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <Link 
                          to={`/staff/${person.id}/edit`} 
                          className="text-indigo-600 hover:text-indigo-900 mr-4"
                        >
                          Düzenle
                        </Link>
                        <button
                          onClick={() => openModal(person)}
                          className="text-gray-600 hover:text-gray-900 mr-4"
                        >
                          Görüntüle
                        </button>
                        <button
                          onClick={() => handleDelete(person.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Sil
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Görüntüleme Modalı */}
      {isModalOpen && selectedStaff && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Personel Detayları</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Kapat</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Ad Soyad</p>
                <p className="mt-1">{selectedStaff.firstName} {selectedStaff.lastName}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">E-posta</p>
                <p className="mt-1">{selectedStaff.email}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Telefon</p>
                <p className="mt-1">{selectedStaff.phone}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Adres</p>
                <p className="mt-1">{selectedStaff.address}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Pozisyon</p>
                <p className="mt-1">{selectedStaff.position}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Deneyim</p>
                <p className="mt-1">{selectedStaff.experience}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StaffIndex; 