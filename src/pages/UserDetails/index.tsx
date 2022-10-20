import React from "react";
import { useParams } from "react-router-dom";

import Layout from "src/components/Layout";
import UserCard from "src/components/UserCard";
import { useAppSelector } from "src/hooks/redux-hooks";
import StyledContainer from "./UserDetails.style";

const UserDetails: React.FC = (props) => {
  const params = useParams();
  const { userId } = params;
  const users = useAppSelector((state) => state.users);

  const [userData] = users.filter((user) => {
    return user.id.toString() === userId;
  });
  console.log("userId ", userId);
  console.log(userData);
  const { id, username, name, email, phone, website } = userData;
  return (
    <Layout>
      <StyledContainer>
        <div style={{ maxWidth: "1200px" }}>
          <UserCard
            id={id}
            username={username}
            name={name}
            email={email}
            phone={phone}
            website={website}
            width={920}
          />
        </div>
      </StyledContainer>
    </Layout>
  );
};

export default UserDetails;
