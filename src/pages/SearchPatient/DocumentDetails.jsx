import React from 'react';

const DocumentDetails = ({ documents }) => {
  return (
    <div className="document-details">

      <div className="py-2 grid grid-cols-5 text-center border rounded-lg text-xl font-medium mt-2 border-[#76C8FF]">
        <div>Document Type</div>
        <div>Upload Type</div>
        <div>Uploaded By</div>
        <div>Remarks</div>
        <div>Action</div>
      </div>
      <div >
        {/* {documents.map((document) => (
          <div key={document.id} className="py-2 grid grid-cols-5 text-center text-lg">
            <div>{document.documentType}</div>
            <div>{document.uploadType}</div>
            <div>{document.uploadedBy}</div>
            <div>{document.remarks}</div>
            <div>
              <button className="view-button">View</button>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default DocumentDetails;
