import React, { useState } from 'react';

const BillDetail = () => {
  // Dummy data for demonstration
  const billDetails = [
    { label: 'Paid Amount', value: 10000 },
    { label: 'Credit Amount', value: 5000 },
    { label: 'Provisional Amount', value: 2000 },
    { label: 'Deposit Amount', value: 8000 },
    { label: 'Balance Amount', value: 12000 },
    { label: 'Total Due', value: 500 },
    { label: 'Returned Amount', value: 100 },
    { label: 'Cancelled Amount', value: 0 },
  ];

  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (label) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [label]: !prevCheckedItems[label],
    }));
  };

  const [openAccordion, setOpenAccordion] = useState('accordion-1');

  const handleAccordionToggle = (accordionId) => {
    setOpenAccordion(accordionId === openAccordion ? null : accordionId);
  };

  const accordionData = [
    {
      id: 'accordion-1',
      title: 'Paid Bills',
      tableData: [
        { date: '2023-01-01', invoiceNo: 'INV001', amount: 5000, paymentMode: 'Cash', billStatus: 'Paid' },
        
      ],
    },
   
  ];

  

  return (
    <div className="flex gap-4 mt-4" style={{borderRadius: "0.625rem",
        background: "rgba(255, 255, 255, 0.21)",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset"}}>
      {/* Left Part */}
      <div className="flex-col items-center rounded-xl pb-20 m-[1px] bg-blue-200 shadow-md text-blue-900 font-inter font-medium text-lg basis-1/2  p-4">
        <div className="text-xl mb-12 border-4 font-bold text-center mx-40  self-center justify-self-center border-white rounded" style={{boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
}}>Bill Details</div>
        <div className="flex-col ">
          {billDetails.map((item) => (
            <div key={item.label} className="flex my-2 items-center justify-between mr-24 ml-14 ">
             <div> <input
                type="checkbox"
                className="mr-2"
                checked={checkedItems[item.label] || false}
                onChange={() => handleCheckboxChange(item.label)}
              />
              {item.label}:
              </div>
              <div className=' text-center'>
                 {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Part */}
      <div className="flex-col basis-1/2 mt-8 pr-8 h-96">
        
        <div className="flex-col gap-2">
          {/* Accordion 1 */}
          <div className="flex flex-col gap-4">
      {accordionData.map((accordion) => (
        <div key={accordion.id} id={accordion.id} data-accordion={openAccordion === accordion.id ? 'open' : 'closed'}>
          <h2
            id={`${accordion.id}-heading`}
            className="border  border-gray-200 dark:border-gray-700 rounded-xl"
          >
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border  border-gray-200 rounded-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
              style={{
                borderRadius: '1.25rem',
                border: '1px solid #76C8FF',
                background: '#FFF',
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset',
              }
              }
              data-accordion-target={`#${accordion.id}-body`}
              aria-expanded={openAccordion === accordion.id}
              aria-controls={`${accordion.id}-body`}
              onClick={() => handleAccordionToggle(accordion.id)}
            >
              <span className="flex items-center">
                <svg
                  className={`w-5 h-5 me-2 shrink-0 ${openAccordion === accordion.id ? 'rotate-180' : ''}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>{' '}
                {accordion.title}
              </span>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"></path>
              </svg>
            </button>
          </h2>
          <div id={`${accordion.id}-body`} className={openAccordion === accordion.id ? '' : 'hidden'} aria-labelledby={`${accordion.id}-heading`}>
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <table className="border-collapse  h-9.3125rem flex-shrink-0 border-2 border-blue-300 text-center bg-white">
                <thead>
                  <tr>
                    <th className="border-r-2 border-blue-300 border-b-2 p-2">Invoice No.</th>
                    <th className="border-r-2 border-blue-300 border-b-2 p-2">Date</th>
                    <th className="border-r-2 border-blue-300 border-b-2 p-2">Amount</th>
                    <th className="border-r-2 border-blue-300 border-b-2 p-2">Payment Mode</th>
                    <th className="border-r-2 border-blue-300 border-b-2 p-2">Bill Status</th>
                  </tr>
                </thead>
                <tbody>
                  {accordion.tableData.map((bill) => (
                    <tr key={bill.invoiceNo}>
                      <td className="border-r-2 border-blue-300 border-b-2 p-2">{bill.date}</td>
                      <td className="border-r-2 border-blue-300 border-b-2 p-2">{bill.amount}</td>
                      <td className="border-r-2 border-blue-300 border-b-2 p-2">{bill.invoiceNo}</td>
                      <td className="border-r-2 border-blue-300 border-b-2 p-2">{bill.paymentMode}</td>
                      <td className="border-r-2 border-blue-300 border-b-2 p-2">{bill.billStatus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
      </div>
    </div>
  );
};

export default BillDetail;
