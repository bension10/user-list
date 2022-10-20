import React from "react";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";
import { HeartOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { UsersData } from "src/interface/user";
import CardDetails from "src/components/CardDetails";

const UserCard: React.FC<UsersData> = (props) => {
  const { id, username, name, email, phone, website } = props;
  const navigate = useNavigate();

  const navigateToUserDetail = (): void => {
    navigate(`/users/${id}`);
  };

  return (
    <Card
      onClick={navigateToUserDetail}
      style={{ width: 300 }}
      cover={
        <img alt="example" src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg`} />
      }
      actions={[
        <HeartOutlined key="like" />,
        <EditOutlined key="edit" />,
        <DeleteOutlined key="delete" />,
      ]}
    >
      <CardDetails id={id} name={name} email={email} phone={phone} website={website} />
    </Card>
  );
};

export default UserCard;
