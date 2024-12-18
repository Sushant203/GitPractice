import React from 'react';

const CalltoAction = () => {
  return (
    <main className="min-h-screen flex items-center justify-center ">
      <div className="text-center bg-white shadow-md rounded-lg p-6 md:p-10">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
          Enter Your Number to Join Us
        </h1>
        <form action="#" className="space-y-4">
          <div>
            <input
              type="number"
              name="number"
              placeholder="e.g. 9800000000"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <input
              type="submit"
            value="john"
              className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </form>
      </div>
    </main>
  );
};

export default CalltoAction;
