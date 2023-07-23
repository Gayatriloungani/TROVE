import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>We value the trust you place in us and recognize the importance of secure transactions and information privacy.</p>
          <p>We use personal information to provide the services you request. To the extent we use your personal information to market to you, we will provide you the ability to opt-out of such uses. We use your personal information to assist sellers and business partners in handling and fulfilling orders; enhancing customer experience; to resolve disputes; troubleshoot problems; help promote a safe service; collect money; measure consumer interest in our products and services</p>
          <p>Please check our Privacy Policy periodically for changes. We may update this Privacy Policy to reflect changes to our information practices.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
