import React from 'react';

function ApplicationDetails({ application }) {
  const statusStyles = {
    pending: {
      text: "Beklemede",
      className: "bg-yellow-100 text-yellow-800"
    },
    approved: {
      text: "Onaylandı",
      className: "bg-green-100 text-green-800"
    },
    rejected: {
      text: "Reddedildi",
      className: "bg-red-100 text-red-800"
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center mb-4">
        <div className="h-20 w-20 bg-gray-100 rounded-full flex items-center justify-center">
          <span className="text-2xl font-medium text-gray-500">
            {application.firstName[0]}{application.lastName[0]}
          </span>
        </div>
      </div>
      {/* Diğer detay içeriği */}
    </div>
  );
}

export default ApplicationDetails; 