import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { jobApplications } from '../../../data/fakeData'
import Modal from '../../../components/common/Modal'
import ApplicationDetails from '../components/ApplicationDetails'

function Applications() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedApplication, setSelectedApplication] = useState(null)
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false)
  const navigate = useNavigate()
  
  const filteredApplications = jobApplications.filter(application => 
    application.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    application.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    application.position.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleEdit = (application) => {
    navigate(`/application-edit/${application.id}`)
  }

  const handleViewDetails = (application) => {
    setSelectedApplication(application)
    setIsDetailModalOpen(true)
  }

  const statusStyles = {
    pending: {
      text: "Beklemede",
      className: "bg-yellow-100 text-yellow-800 border-yellow-200"
    },
    approved: {
      text: "Onaylandı",
      className: "bg-green-100 text-green-800 border-green-200"
    },
    rejected: {
      text: "Reddedildi",
      className: "bg-red-100 text-red-800 border-red-200"
    }
  }

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Personel Başvuruları</h1>
        <p className="mt-2 text-sm text-gray-700">Tüm iş başvurularını buradan yönetebilirsiniz</p>
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

      {/* Başvuru Listesi */}
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Başvuran
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                İletişim
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Pozisyon
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Başvuru Tarihi
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Durum
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                İşlemler
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredApplications.map((application) => (
              <tr key={application.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {application.firstName} {application.lastName}
                      </div>
                      <div className="text-sm text-gray-500">
                        Deneyim: {application.experience}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{application.email}</div>
                  <div className="text-sm text-gray-500">{application.phone}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {application.position}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {new Date(application.applicationDate).toLocaleDateString('tr-TR')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full border ${statusStyles[application.status].className}`}>
                    {statusStyles[application.status].text}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => handleViewDetails(application)}
                    className="text-blue-600 hover:text-blue-900 mr-3"
                  >
                    Detaylar
                  </button>
                  <button
                    onClick={() => handleEdit(application)}
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
        title="Başvuru Detayları"
        size="md"
      >
        {selectedApplication && <ApplicationDetails application={selectedApplication} />}
      </Modal>
    </div>
  )
}

export default Applications 