import React from "react";
import { Avatar, Card } from "antd";
import { HeartOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { UsersData } from "src/interface/user";

const { Meta } = Card;
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
      <Meta
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title="Card title"
        description="This is the description"
      />
    </Card>
  );
};

export default UserCard;
