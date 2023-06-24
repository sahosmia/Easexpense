import React from 'react'

function Company() {
  return (
    <div className="container">
      <h4 className="text-[#999999] text-lg pt-10 md:pt-20 lg:pt-32 pb-10 text-center">
        Trusted by 100+ companies
      </h4>
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-10 grid-flow-row justify-center items-center text-center">
        <img
          className="block justify-items-center"
          src="/images/companies/company-1.png"
          alt="company"
        />
        <img
          className="block justify-items-center"
          src="/images/companies/company-2.png"
          alt="company"
        />
        <img
          className="block justify-items-center"
          src="/images/companies/company-3.png"
          alt="company"
        />
        <img
          className="block justify-items-center"
          src="/images/companies/company-4.png"
          alt="company"
        />
        <img
          className="block justify-items-center"
          src="/images/companies/company-5.png"
          alt="company"
        />
      </div>
    </div>
  );
}

export default Company