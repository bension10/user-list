import React, { useEffect } from 'react';
import Layout from 'src/components/Layout';
import getUsersList from 'src/services/';

const UserList: React.FC = () => {

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsersList();
      console.log('data ', data);
    };

    fetchUsers();
  });

  return(
    <Layout>
      
    </Layout>
  );
};

export default UserList;