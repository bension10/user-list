import React from "react";
import { Card } from "antd";
import { HeartOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { UsersData } from "src/interface/user";
import CardDetails from "src/components/CardDetails";
interface Props {
  user: UsersData;
}

const UserCard: React.FC<Props> = ({ user }) => {
  const { username } = user;
  return (
    <Card
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
      <CardDetails>
    </Card>
  );
};

export default UserCard;
