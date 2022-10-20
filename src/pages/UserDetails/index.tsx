import React from "react";
import { useParams } from "react-router-dom";

import Layout from "src/components/Layout";
import UserCard from "src/components/UserCard";
import { useAppSelector } from "src/hooks/redux-hooks";

const UserDetails: React.FC = (props) => {
  const params = useParams();
  const { userId } = params;
  const { users } = useAppSelector((state) => state.users);

  const [userData] = users.filter((user) => {
    return user.id.toString() === userId;
  });
  const { id, username, name, email, phone, website } = userData[0];

  return (
    <Layout>
      <UserCard
        id={id}
        username={username}
        name={name}
        email={email}
        phone={phone}
        website={website}
      />
    </Layout>
  );
};

export default UserDetails;
