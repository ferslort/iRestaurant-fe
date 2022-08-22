import { setAuthUser } from '../redux/slices/auth';
import { connect } from 'react-redux';
import LayoutDashboard from '../layout/layoutDashboard';
import { AntDesignOutlined } from '@ant-design/icons';
import { Avatar, Tabs } from 'antd';
import { useState } from 'react';
import PerfilAccount from '../element/myAccount/PerfilAccount';
import PerfilRestaurant from '../element/myAccount/PerfilRestaurant';
import { GET_USER } from '../gql/user';
import { useApolloClient, useQuery } from '@apollo/client';
import { GET_RESTAURANT } from '../gql/restaurant';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useRouter } from 'next/router';
import * as Sentry from '@sentry/browser';

interface IMyAccount {
  user: any;
}

const { TabPane } = Tabs;
function MyAccount({ user }: IMyAccount) {
  const [activeTab, setActiveTab] = useState('perfil');

  const { data } = useQuery(GET_USER);
  const { data: dataRestaurant } = useQuery(GET_RESTAURANT);

  const options = [
    {
      key: '1',
      tab: 'Perfil',
      sug: 'perfil'
    },
    {
      key: '2',
      tab: 'Restaurant',
      sug: 'restaurant'
    },
    {
      key: '3',
      tab: 'Cerrar sesión',
      sug: 'cerrar-sesion'
    }
  ];

  const handleChangeOptions = async (sug: string) => {
    if (sug === 'cerrar-sesion') {
      await handleLogout();
      return;
    }
    setActiveTab(sug);
  };

  const router = useRouter();
  const client = useApolloClient();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      await client.clearStore();
      router.push('/login');
    } catch (error) {
      Sentry.captureException(error);
    }
  };

  const componentRender = () => {
    switch (activeTab) {
      case 'perfil':
        return <PerfilAccount user={data?.findByOneUser} />;
      case 'restaurant':
        return <PerfilRestaurant restaurant={dataRestaurant?.findByOneRestaurant} />;
      default:
        return null;
    }
  };

  return (
    <>
      <LayoutDashboard>
        <div className="container-myAccount">
          <div className="container-myAccount__head">
            <div>
              <h3>Cuenta</h3>
            </div>
            <div>Opciones</div>
          </div>
          <div className="container-myAccount__body">
            <div className="body__sidebar">
              <div>
                <h2>Mi Cuenta</h2>
              </div>
              <div className="body__avatar">
                <Avatar
                  size={{
                    xs: 24,
                    sm: 32,
                    md: 70,
                    lg: 90,
                    xl: 100,
                    xxl: 100
                  }}
                  src={user.photoUrl}
                  icon={<AntDesignOutlined />}
                />
                <p>
                  {user.name} {user.lastName}
                </p>
              </div>
              <div className="body__options">
                <div>
                  <aside className="side-bar sticky-top">
                    <div className="widget_nav_menu m-b40">
                      <ul>
                        {options.map((i) => (
                          <li key={i.sug}>
                            <a href="#" onClick={() => handleChangeOptions(i.sug)}>
                              {i.tab}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
            <div className="body__content">{componentRender()}</div>
          </div>
        </div>
      </LayoutDashboard>
    </>
  );
}

const mapDispatchToProps = {
  onSetAuthUser: setAuthUser
};

const mapStateToProps = (state: any) => ({
  user: state.auth.user
});

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount);
