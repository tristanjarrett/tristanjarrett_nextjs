import { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Dvla = () => {
  const [vehicleData, setVehicleData] = useState(null);
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(`/api/dvla?registrationNumber=${registrationNumber}`);
      const data = await response.json();
      setVehicleData(data);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  return (
    <>
      <Head>
        <title>DVLA Vehicle Enquiry - Tristan Jarrett</title>
        <meta name="description" content="Perform a DVLA vehicle enquiry." />
        <meta name="keywords" content="DVLA, vehicle enquiry" />
        <meta name="author" content="Tristan Jarrett" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="bg-gray-100 min-h-screen flex flex-col font-sans dark:bg-gray-900">
        <Header />

        <div className="container px-4 mx-auto flex-grow">
          <div className="py-16 lg:py-24 flex flex-col lg:flex-row justify-center items-center lg:space-x-20 text-center">
            <div className="lg:w-3/5">
              <h1 className="text-4xl lg:text-5xl font-bold mb-8">DVLA Vehicle Enquiry</h1>
              <form onSubmit={handleFormSubmit}>
                <input
                  type="text"
                  value={registrationNumber}
                  onChange={(e) => setRegistrationNumber(e.target.value)}
                  placeholder="Enter registration number"
                  className="border-2 border-gray-300 px-4 py-2 w-full mb-6 rounded-md focus:border-purple-500 dark:focus:border-orange-500 focus:outline-none transition-colors dark:bg-gray-700 dark:border-gray-500"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-br w-full from-blue-500 via-purple-500 to-indigo-500 text-white font-bold px-8 py-4 rounded-md hover:from-blue-600 hover:via-purple-600 hover:to-indigo-600 dark:from-yellow-500 dark:via-orange-500 dark:to-pink-500 dark:hover:from-yellow-400 dark:hover:via-orange-400 dark:hover:to-pink-400"
                >
                  <div className="flex items-center justify-center">
                    <span className="mr-2">Search</span>
                    <FontAwesomeIcon icon={faSearch} />
                  </div>
                </button>
              </form>
              {isLoading && (
                <p className="text-gray-500 mt-4">Loading...</p>
              )}
              {vehicleData && (
                <div className="bg-white rounded-xl shadow-lg p-6 text-left mt-8 dark:bg-gray-800">
                  <h2 className="text-2xl font-bold mb-2">Vehicle Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p>
                        <strong>Registration Number:</strong> {vehicleData.registrationNumber}
                      </p>
                      <p>
                        <strong>Tax Status:</strong> {vehicleData.taxStatus}
                      </p>
                      <p>
                        <strong>Tax Due Date:</strong> {vehicleData.taxDueDate}
                      </p>
                      <p>
                        <strong>MOT Status:</strong> {vehicleData.motStatus}
                      </p>
                      <p>
                        <strong>Make:</strong> {vehicleData.make}
                      </p>
                      <p>
                        <strong>Year of Manufacture:</strong> {vehicleData.yearOfManufacture}
                      </p>
                      <p>
                        <strong>Engine Capacity:</strong> {vehicleData.engineCapacity}
                      </p>
                      <p>
                        <strong>CO2 Emissions:</strong> {vehicleData.co2Emissions}
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong>Fuel Type:</strong> {vehicleData.fuelType}
                      </p>
                      <p>
                        <strong>Marked for Export:</strong> {vehicleData.markedForExport ? 'Yes' : 'No'}
                      </p>
                      <p>
                        <strong>Colour:</strong> {vehicleData.colour}
                      </p>
                      <p>
                        <strong>Type Approval:</strong> {vehicleData.typeApproval}
                      </p>
                      <p>
                        <strong>Date of Last V5C Issued:</strong> {vehicleData.dateOfLastV5CIssued}
                      </p>
                      <p>
                        <strong>MOT Expiry Date:</strong> {vehicleData.motExpiryDate}
                      </p>
                      <p>
                        <strong>Wheelplan:</strong> {vehicleData.wheelplan}
                      </p>
                      <p>
                        <strong>Month of First Registration:</strong> {vehicleData.monthOfFirstRegistration}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Dvla;
