import React, { useEffect, useState } from "react";
import { Col, Row, Spin } from "antd";
import Layout from "src/components/Layout";
import UserCard from "src/components/UserCard";

import { useAppSelector, useAppDispatch } from "src/hooks/redux-hooks";
import { fetchPending, fetchSuccess, fetchFail } from "src/reducers/users";
import getUsersList from "src/services/";

import StyledContainer from "./UserList.style";

const UserList: React.FC = () => {
  const { users } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    const fetchUsers = async (): Promise<void> => {
      dispatch(fetchPending());
      const response = await getUsersList();
      if (response.status === 200) {
        setIsLoading(false);
        dispatch(fetchSuccess(response.data));
      } else {
        setIsLoading(false);
        dispatch(fetchFail());
      }
    };

    fetchUsers();
  }, [dispatch]);

  return (
    <Layout>
      <Spin spinning={isLoading}>
        <StyledContainer>
          <div style={{ width: "1400px" }}>
            <Row gutter={[12, 24]}>
              {users.map((user, key) => (
                <Col key={key} xs={16} sm={12} md={8} xl={6}>
                  <UserCard
                    id={user.id}
                    username={user.username}
                    name={user.name}
                    email={user.email}
                    phone={user.phone}
                    website={user.website}
                    width={300}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </StyledContainer>
      </Spin>
    </Layout>
  );
};

export default UserList;
