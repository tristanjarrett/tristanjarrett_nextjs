import { useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";
import Link from 'next/link';

const Dvla = () => {
  const [vehicleData, setVehicleData] = useState(null);
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (registrationNumber.trim() === "") {
      // Display error message for blank search
      setIsLoading(false);
      setError(true);
      setErrorMessage("Please enter a registration number.");
      return;
    }

    try {
      const token = await grecaptcha.execute(
        "6Ld0knQlAAAAACK-5SFSB5-VrsfIeQTI4KXd8O6T",
        { action: "submit" }
      );
      const response = await fetch(
        `/api/dvla?registrationNumber=${registrationNumber}&recaptchaToken=${token}`
      );
      const data = await response.json();

      if (data.error) {
        // Handle the case where no response is found
        setError(true);
        setErrorMessage("No vehicle data found for this registration number.");
        setVehicleData(null);
      } else {
        setVehicleData(data);
        setError(false);
      }
    } catch (error) {
      console.error(error);
    }

    setIsLoading(false);
  };

  return (
    <>
      <Head>
        <title>DVLA Vehicle Enquiry | Check Car Tax and MOT Status</title>
        <meta name="description" content="Perform a DVLA vehicle enquiry to check car tax and MOT status. Lookup vehicle registration, check number plate, and get vehicle information." />
        <meta
          name="keywords"
          content="DVLA, vehicle enquiry, car tax, MOT status, check car tax, check MOT status, vehicle registration lookup, number plate search, vehicle information"
        />
        <meta name="author" content="Tristan Jarrett" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <link rel="canonical" href="https://tristanjarrett.com/tools/dvla" />
      </Head>

      <div className="bg-gray-100 min-h-screen flex flex-col font-sans dark:bg-gray-900">
        <div className="container mx-auto ">
          <Header />
        </div>

        <div className="container px-4 mx-auto flex-grow">
          <div className="pb-16 lg:pb-24 flex flex-col lg:flex-row justify-center items-center lg:space-x-20 text-center">
            <div className="w-full lg:w-3/4 xl:w-3/5">

              <Link href="/" className="inline-block py-12 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faChevronLeft} className="mr-2" />
                  <span className="text-lg font-medium">Back to Profile</span>
                </div>
              </Link>

              <h1 className="text-4xl lg:text-5xl font-bold mb-8">
                DVLA Vehicle Lookup
              </h1>

              <p className="mb-8 text-xl">Check the Tax and MOT status of your vehicle (UK only)</p>

              <div className="w-full mx-auto p-6 md:p-8 bg-white rounded-xl shadow-md dark:bg-gray-800">
                <form onSubmit={handleFormSubmit}>
                  <input
                    type="text"
                    value={registrationNumber}
                    onChange={(e) => setRegistrationNumber(e.target.value)}
                    placeholder="Enter registration number"
                    className="border-2 border-gray-300 px-4 py-4 w-full rounded-md focus:border-purple-500 dark:focus:border-orange-500 focus:outline-none transition-colors dark:bg-gray-700 dark:border-gray-500"
                  />
                  {error && (
                    <p className="text-red-500 mt-2 text-left">
                      {errorMessage}
                    </p>
                  )}
                  <input
                    type="hidden"
                    id="recaptchaResponse"
                    name="recaptchaResponse"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-br w-full mt-6 from-blue-500 via-purple-500 to-indigo-500 text-white font-bold px-8 py-4 rounded-md hover:from-blue-600 hover:via-purple-600 hover:to-indigo-600 dark:from-yellow-500 dark:via-orange-500 dark:to-pink-500 dark:hover:from-yellow-400 dark:hover:via-orange-400 dark:hover:to-pink-400"
                  >
                    {isLoading ? (
                      <span>Loading...</span>
                    ) : (
                      <div className="flex items-center justify-center">
                        <span className="mr-2">Search</span>
                        <FontAwesomeIcon icon={faSearch} />
                      </div>
                    )}
                  </button>
                </form>
              </div>

              {vehicleData && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 md:my-6">
                    <div className="bg-white rounded-xl shadow-md text-left p-6 md:p-8 dark:bg-gray-800">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold">Tax Status</h3>
                        <p
                          className={`rounded-md text-white py-2 px-3 ${vehicleData.taxStatus === "Taxed"
                              ? "bg-green-500"
                              : "bg-red-500"
                            }`}
                        >
                          {vehicleData.taxStatus === "Taxed"
                            ? "Taxed"
                            : "Not Taxed"}
                        </p>
                      </div>
                      {vehicleData.taxDueDate && (
                        <p className="text-sm">
                          Expires:{" "}
                          {format(
                            new Date(vehicleData.taxDueDate),
                            "dd MMMM yyyy"
                          )}
                        </p>
                      )}
                    </div>

                    <div className="bg-white rounded-xl shadow-md text-left p-6 md:p-8 dark:bg-gray-800">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold">MOT Status</h3>
                        {vehicleData.motStatus === "No details held by DVLA" ? (
                          <p className="rounded-md bg-gray-500 text-white py-2 px-3">
                            N/A
                          </p>
                        ) : (
                          <p
                            className={`rounded-md text-white py-2 px-3 ${vehicleData.motStatus === "Valid"
                                ? "bg-green-500"
                                : "bg-red-500"
                              }`}
                          >
                            {vehicleData.motStatus === "Valid"
                              ? "Valid"
                              : "Invalid"}
                          </p>
                        )}
                      </div>
                      {vehicleData.motExpiryDate && (
                        <p className="text-sm">
                          Expires:{" "}
                          {format(
                            new Date(vehicleData.motExpiryDate),
                            "dd MMMM yyyy"
                          )}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-md text-left p-6 md:p-8 dark:bg-gray-800">
                    <h2 className="text-2xl font-bold mb-4">
                      Vehicle Information
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                      <div>
                        <p>
                          <strong>Registration Number:</strong>{" "}
                          {vehicleData.registrationNumber}
                        </p>
                        <p>
                          <strong>Tax Status:</strong> {vehicleData.taxStatus}
                        </p>
                        {vehicleData.taxDueDate && (
                          <p>
                            <strong>Tax Due Date:</strong>{" "}
                            {format(
                              new Date(vehicleData.taxDueDate),
                              "dd MMMM yyyy"
                            )}
                          </p>
                        )}
                        <p>
                          <strong>MOT Status:</strong> {vehicleData.motStatus}
                        </p>
                        <p>
                          <strong>Make:</strong> {vehicleData.make}
                        </p>
                        <p>
                          <strong>Year of Manufacture:</strong>{" "}
                          {vehicleData.yearOfManufacture}
                        </p>
                        <p>
                          <strong>Engine Capacity:</strong>{" "}
                          {vehicleData.engineCapacity}
                        </p>
                        <p>
                          <strong>CO2 Emissions:</strong>{" "}
                          {vehicleData.co2Emissions}
                        </p>
                      </div>
                      <div>
                        <p>
                          <strong>Fuel Type:</strong> {vehicleData.fuelType}
                        </p>
                        <p>
                          <strong>Marked for Export:</strong>{" "}
                          {vehicleData.markedForExport ? "Yes" : "No"}
                        </p>
                        <p>
                          <strong>Colour:</strong> {vehicleData.colour}
                        </p>
                        <p>
                          <strong>Type Approval:</strong>{" "}
                          {vehicleData.typeApproval}
                        </p>
                        <p>
                          <strong>Date of Last V5C Issued:</strong>{" "}
                          {format(
                            new Date(vehicleData.dateOfLastV5CIssued),
                            "dd MMMM yyyy"
                          )}
                        </p>
                        {vehicleData.motExpiryDate && (
                          <p>
                            <strong>MOT Expiry Date:</strong>{" "}
                            {format(
                              new Date(vehicleData.motExpiryDate),
                              "dd MMMM yyyy"
                            )}
                          </p>
                        )}
                        <p>
                          <strong>Wheelplan:</strong> {vehicleData.wheelplan}
                        </p>
                        <p>
                          <strong>Month of First Registration:</strong>{" "}
                          {vehicleData.monthOfFirstRegistration}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
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
