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
          <div style={{ maxWidth: "1200px" }}>
            <Row gutter={[48, 48]}>
              {users.map((user, key) => (
                <Col key={key} span={6}>
                  <UserCard user={user} />
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
