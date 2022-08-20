import { useAuthUser } from '../hooks/useAuthUser';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { GET_USER } from '../gql/user';
import { useQuery } from '@apollo/client';
import { setAuthUser } from '../redux/slices/auth';
import { connect } from 'react-redux';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';

interface IDashboard {
  onSetAuthUser: typeof setAuthUser;
  children: React.ReactNode;
}

const { Header, Sider, Content } = Layout;

function LayoutDashboard({ onSetAuthUser, children }: IDashboard) {
  const [collapsed, setCollapsed] = useState(true);

  const { token } = useAuthUser();

  const { data, loading } = useQuery(GET_USER);

  const router = useRouter();

  useEffect(() => {
    if (!loading && !token && !data?.findByOneUser) {
      router.push('/login');
    } else if (!loading && token && data?.findByOneUser) {
      onSetAuthUser(data.findByOneUser);
    }
  }, [token, loading]);

  return (
    <Layout className="custom-container-dashboard">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="custom-container-dashboard__logo">
          <UserOutlined />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Sucursales',
              onClick: () => router.push('/my-branchs')
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'Mesas'
            },
            {
              key: '3',
              icon: <VideoCameraOutlined />,
              label: 'Menu'
            },
            {
              key: '4',
              icon: <UploadOutlined />,
              label: 'Platillos'
            },
            {
              key: '5',
              icon: <UploadOutlined />,
              label: 'Mi Cuenta',
              onClick: () => router.push('/my-account')
            }
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="custom-container-dashboard"
          style={{
            padding: 0
          }}
        >
          <UserOutlined onClick={() => setCollapsed(!collapsed)} style={{ color: 'white' }} />
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}

const mapDispatchToProps = {
  onSetAuthUser: setAuthUser
};

export default connect(null, mapDispatchToProps)(LayoutDashboard);
