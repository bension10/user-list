import React from "react";
import { MailOutlined, PhoneOutlined, GlobalOutlined } from "@ant-design/icons";
import { StyledCardDetails, UserFullName, UserInfo } from "./CardDetails.style";

interface Props {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

const CardDetails: React.FC<Props> = (props) => {
  const { name, email, phone, website } = props;

  return (
    <StyledCardDetails>
      <UserFullName>{name}</UserFullName>
      <span>
        <MailOutlined />
        <UserInfo>
          <a href={`mailto:${email}`}>{email}</a>
        </UserInfo>
      </span>
      <span>
        <PhoneOutlined />
        <UserInfo>{phone}</UserInfo>
      </span>
      <span>
        <GlobalOutlined />
        <UserInfo>
          <a href={`http://${website}`} target="_blank" rel="noreferrer">
            {website}
          </a>
        </UserInfo>
      </span>
    </StyledCardDetails>
  );
};

export default CardDetails;
