import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { jobApplications } from '../../../data/fakeData'
import Modal from '../../../components/common/Modal'
import StaffDetails from '../components/StaffDetails'

function StaffList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedStaff, setSelectedStaff] = useState(null)
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false)
  const navigate = useNavigate()
  
  // Sadece onaylanmış personelleri filtrele
  const approvedStaff = jobApplications.filter(staff => staff.status === "approved")
  
  const filteredStaff = approvedStaff.filter(staff => 
    staff.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    staff.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    staff.position.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleEdit = (staff) => {
    navigate(`/staff-edit/${staff.id}`)
  }

  const handleViewDetails = (staff) => {
    setSelectedStaff(staff)
    setIsDetailModalOpen(true)
  }

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Personel Listesi</h1>
        <p className="mt-2 text-sm text-gray-700">Aktif çalışan personel listesi</p>
      </div>

      {/* Arama */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="İsim veya pozisyon ile ara..."
          className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Personel Listesi */}
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Personel
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                İletişim
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Pozisyon
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Deneyim
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                İşlemler
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredStaff.map((staff) => (
              <tr key={staff.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-gray-500">
                        {staff.firstName[0]}{staff.lastName[0]}
                      </span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {staff.firstName} {staff.lastName}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{staff.email}</div>
                  <div className="text-sm text-gray-500">{staff.phone}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {staff.position}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {staff.experience}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button 
                    onClick={() => handleViewDetails(staff)}
                    className="text-blue-600 hover:text-blue-900 mr-3"
                  >
                    Detaylar
                  </button>
                  <button 
                    onClick={() => handleEdit(staff)}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    Düzenle
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detay Modalı */}
      <Modal
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        title="Personel Detayları"
        size="md"
      >
        {selectedStaff && <StaffDetails staff={selectedStaff} />}
      </Modal>
    </div>
  )
}

export default StaffList 