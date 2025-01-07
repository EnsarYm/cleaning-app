function StaffDetails({ staff }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center mb-4">
        <div className="h-20 w-20 bg-gray-100 rounded-full flex items-center justify-center">
          <span className="text-2xl font-medium text-gray-500">
            {staff.firstName[0]}{staff.lastName[0]}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500">Ad</p>
          <p className="font-medium">{staff.firstName}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Soyad</p>
          <p className="font-medium">{staff.lastName}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">E-posta</p>
          <p className="font-medium">{staff.email}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Telefon</p>
          <p className="font-medium">{staff.phone}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Pozisyon</p>
          <p className="font-medium">{staff.position}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Deneyim</p>
          <p className="font-medium">{staff.experience}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Başlangıç Tarihi</p>
          <p className="font-medium">
            {new Date(staff.applicationDate).toLocaleDateString('tr-TR')}
          </p>
        </div>
      </div>
    </div>
  )
}

export default StaffDetails 