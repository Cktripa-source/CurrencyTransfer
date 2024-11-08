import React, { useState } from 'react';

function App() {
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [conversionDirection, setConversionDirection] = useState('INR_TO_RWF'); // Default to INR to RWF

  // Conversion rate: 1 INR = 15.1 RWF
  const INR_TO_RWF_RATE = 15.1;

  const handleConvert = () => {
    let result;
    if (conversionDirection === 'INR_TO_RWF') {
      result = amount * INR_TO_RWF_RATE;
    } else {
      result = amount / INR_TO_RWF_RATE;
    }
    // Set result to 2 decimal places
    setConvertedAmount(parseFloat(result.toFixed(2)));
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="w-full shadow-blue-200 text-black font-bold p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-extrabold text-blue-600 border-4 border-blue-600 p-2 rounded-full w-full text-center">Martin Exchange</h1>
        </div>
      </nav>
      
      {/* Conversion Section */}
      <div className="flex flex-col lg:flex-row gap-10 justify-between my-10 p-4 md:p-10">
        <section className="mt-10 max-w-2xl text-center w-full lg:w-1/2">
          <h2 className="text-4xl font-extrabold text-blue-600 capitalize">Welcome to Our Currency Converter and transfer</h2>
          <p className="mt-4 text-gray-600">
            Quickly convert your Indian Rupees (INR) to Rwandan Francs (RWF) or vice versa with our easy-to-use tool.
            Just enter the amount, select the conversion direction, and click convert. This tool is designed to make currency conversions hassle-free!
          </p>
        </section>
        
        <div className="bg-white p-8 rounded-lg shadow-2xl shadow-blue-600 max-w-md w-full">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="conversionDirection">
              Conversion Direction:
            </label>
            <select
              id="conversionDirection"
              value={conversionDirection}
              onChange={(e) => {
                setConversionDirection(e.target.value);
                setAmount(''); 
                setConvertedAmount(null); 
              }}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            >
              <option value="INR_TO_RWF">INR to RWF</option>
              <option value="RWF_TO_INR">RWF to INR</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
              Amount in {conversionDirection === 'INR_TO_RWF' ? "INR" : "RWF"}:
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <button
            onClick={handleConvert}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
          >
            Convert to {conversionDirection === 'INR_TO_RWF' ? "RWF" : "INR"}
          </button>
          {convertedAmount !== null && (
            <p className="text-xl font-semibold text-gray-700 mt-4">
              {amount} {conversionDirection === 'INR_TO_RWF' ? "INR" : "RWF"} = {convertedAmount} {conversionDirection === 'INR_TO_RWF' ? "RWF" : "INR"}
            </p>
          )}
        </div>
      </div>

      {/* Contact and Payment Section */}
      <div className="flex flex-col lg:flex-row gap-10 justify-between p-4 md:p-10">
        <div className="w-full lg:w-1/3 p-4 flex flex-col gap-5 shadow-lg shadow-blue-300 rounded-lg">
          <h2 className="text-xl font-extrabold text-blue-600 capitalize">Payment Method</h2>
          <p>Mobile Money: <span>+250790025908</span></p>
          <p>Bank Account-Equity: 4006112846937</p>
        </div>

        <div className="w-full lg:w-1/3 p-4 flex flex-col gap-5 shadow-lg shadow-blue-300 rounded-lg">
          <h2 className="text-xl font-extrabold text-blue-600 capitalize">Tell Me If You Paid</h2>
          <input type='text' name='name' placeholder='Enter Your Full Name' required id='name'
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          />
          <input type='email' name='Email' placeholder='Enter Your Email' required id='email'
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          />
          <input type='file' name='screenshot' id='screenshot' className="w-full px-3 py-2 border rounded-lg" />
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
          >
            Send Payment Proof
          </button>
        </div>
        
        <div className="w-full lg:w-1/3 p-4 flex flex-col gap-5 shadow-lg shadow-blue-300 rounded-lg">
          <h2 className="text-xl font-extrabold text-blue-600 capitalize">Contact Me For Any Problems</h2>
          <input type='email' name='Email' placeholder='Enter Your Email' required id='email'
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          />
          <textarea placeholder="Message" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"></textarea>
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
          >
            Send Message
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
