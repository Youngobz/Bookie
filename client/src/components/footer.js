import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background: #3f51b5;
  margin-top: 20px;
  padding: 16px;
  text-align: center;
  box-shadow: 0px -2px 20px rgba(0, 0, 0, 0.2);
`;

const DonateButton = styled.button`
  padding: 8px;
  border-radius: 8px;
  background: var(--primary-color);
  color: #ececec;
`;

const Footer = () => {
  const navigate = useNavigate();
  const doRedirectToPaymentPage = () => {
    navigate("/payment");
  };
  return (
    <FooterWrapper>
      <div>
        <DonateButton onClick={doRedirectToPaymentPage}>Donate me</DonateButton>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
