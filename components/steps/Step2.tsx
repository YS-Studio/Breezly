const Step2 = ({ currentSubstep }) => {
  return (
    <div className="mx-auto grid grid-cols-2 gap-x-8 gap-y-10">
      {currentSubstep === 1 && (
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="property-details" className="block text-sm font-medium leading-6 text-gray-900">Property Details</label>
          <div className="mt-2">
            <input
              type="text"
              name="property-details"
              id="property-details"
              placeholder="Property Details"
              className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      )}
      {currentSubstep === 2 && (
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="additional-info" className="block text-sm font-medium leading-6 text-gray-900">Additional Info</label>
          <div className="mt-2">
            <input
              type="text"
              name="additional-info"
              id="additional-info"
              placeholder="Additional Info"
              className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Step2;
