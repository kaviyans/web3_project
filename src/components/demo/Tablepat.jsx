import React, { useState } from "react"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table"

const hospitalData = [
  {
    id: "HOSP001",
    name: "City Hospital",
    validity: "2024-12-31",
    qrCodeUrl: "https://via.placeholder.com/150/0000FF/FFFFFF?text=QR+Code+1",
  },
  {
    id: "HOSP002",
    name: "General Health Clinic",
    validity: "2024-01-15",
    qrCodeUrl: "https://via.placeholder.com/150/FF0000/FFFFFF?text=QR+Code+2",
  },
  {
    id: "HOSP003",
    name: "National Medical Center",
    validity: "2024-06-30",
    qrCodeUrl: "https://via.placeholder.com/150/00FF00/FFFFFF?text=QR+Code+3",
  },
  {
    id: "HOSP004",
    name: "Green Valley Hospital",
    validity: "2024-12-01",
    qrCodeUrl: "https://via.placeholder.com/150/FFFF00/000000?text=QR+Code+4",
  },
  {
    id: "HOSP001",
    name: "City Hospital",
    validity: "2024-12-31",
    qrCodeUrl: "https://via.placeholder.com/150/0000FF/FFFFFF?text=QR+Code+1",
  },
  {
    id: "HOSP002",
    name: "General Health Clinic",
    validity: "2025-01-15",
    qrCodeUrl: "https://via.placeholder.com/150/FF0000/FFFFFF?text=QR+Code+2",
  },
  {
    id: "HOSP003",
    name: "National Medical Center",
    validity: "2024-06-30",
    qrCodeUrl: "https://via.placeholder.com/150/00FF00/FFFFFF?text=QR+Code+3",
  },
  {
    id: "HOSP004",
    name: "Green Valley Hospital",
    validity: "2024-12-01",
    qrCodeUrl: "https://via.placeholder.com/150/FFFF00/000000?text=QR+Code+4",
  },
  {
    id: "HOSP001",
    name: "City Hospital",
    validity: "2024-12-31",
    qrCodeUrl: "https://via.placeholder.com/150/0000FF/FFFFFF?text=QR+Code+1",
  },
  {
    id: "HOSP002",
    name: "General Health Clinic",
    validity: "2025-01-15",
    qrCodeUrl: "https://via.placeholder.com/150/FF0000/FFFFFF?text=QR+Code+2",
  },
  {
    id: "HOSP003",
    name: "National Medical Center",
    validity: "2024-06-30",
    qrCodeUrl: "https://via.placeholder.com/150/00FF00/FFFFFF?text=QR+Code+3",
  },
  {
    id: "HOSP004",
    name: "Green Valley Hospital",
    validity: "2025-12-01",
    qrCodeUrl: "https://via.placeholder.com/150/FFFF00/000000?text=QR+Code+4",
  },
]

export default function TableWithQRCode() {
  const [selectedQr, setSelectedQr] = useState(null);

  const handleQrClick = (qrCodeUrl) => {
    setSelectedQr(qrCodeUrl);
  };

  const handleClosePopup = () => {
    setSelectedQr(null);
  };

  const sortedHospitalData = hospitalData.sort((a, b) => {
    const dateA = new Date(a.validity);
    const dateB = new Date(b.validity);
    return dateB - dateA;
  });

  const handleDownloadQr = () => {
    const link = document.createElement("a");
    link.href = selectedQr;
    link.download = "QRCode.png";
    link.click();
  };

  const isExpired = (validityDate) => {
    const currentDate = new Date();
    const validity = new Date(validityDate);
    return currentDate > validity;
  };

  return (
    <div>
      <Table className="text-white w-full">
        <TableCaption>Hospital validity and QR codes.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[400px]">Hospital id</TableHead>
            <TableHead className="w-[400px]">Hospital Name</TableHead>
            <TableHead>Validity Date</TableHead>
            <TableHead>QR Code</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedHospitalData.map((hospital) => {
            const expired = isExpired(hospital.validity); // Check if the validity date is expired

            return (
              <TableRow
                key={hospital.id}
                className={`h-16 ${expired ? "bg-gray-600" : ""}`} // Add background color for expired rows
              >
                <TableCell className="w-[200px] font-medium">{hospital.id}</TableCell>
                <TableCell className="w-[200px] font-medium">{hospital.name}</TableCell>
                <TableCell className="w-[400px] font-medium">{hospital.validity}</TableCell>
                <TableCell className="w-[400px] font-medium">
                  <button
                    className={`text-blue-600 underline ${expired ? "cursor-not-allowed" : ""}`}
                    onClick={() => !expired && handleQrClick(hospital.qrCodeUrl)}
                    disabled={expired} // Disable button if expired
                  >
                    View QR Code
                  </button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      {/* QR Code Popup */}
      {selectedQr && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[300px] text-center">
            <h2 className="text-lg font-bold mb-4">QR Code</h2>
            <img src={selectedQr} alt="QR Code" className="mb-4 mx-auto" />
            <div className="flex flex-col">
              <button
                onClick={handleDownloadQr}
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded"
              >
                Download QR Code
              </button>
              <button
                onClick={handleClosePopup}
                className="mt-4 text-red-600 underline"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}