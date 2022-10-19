import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import Layout from "src/components/Layout";
import UserCard from "src/components/UserCard";
import StyledContainer from "./UserList.style";
import getUsersList from "src/services/";

const UserList: React.FC = () => {
  const [userData, setData] = useState([]);

  useEffect(() => {
    const fetchUsers = async (): Promise<void> => {
      const response = await getUsersList();
      if (response.status === 200) {
        setData(response.data);
      }
    };

    fetchUsers();
  });

  console.log("user_data ", userData);
  return (
    <Layout>
      <StyledContainer>
        <Row gutter={[36, 72]}>
          {userData.map((user, key) => (
            <Col key={key}>
              <UserCard />
            </Col>
          ))}
        </Row>
      </StyledContainer>
    </Layout>
  );
};

export default UserList;
