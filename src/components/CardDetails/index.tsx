import React from "react";

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
    <div>
      <span>{name}</span>
      <span>{email}</span>
      <span>{phone}</span>
      <span>{website}</span>
    </div>
  );
};

export default CardDetails;
