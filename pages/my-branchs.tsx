import { setAuthUser } from '../redux/slices/auth';
import { connect } from 'react-redux';
import LayoutDashboard from '../layout/layoutDashboard';
import { Avatar, Tabs } from 'antd';
import { useState } from 'react';
import PerfilAccount from '../element/myAccount/PerfilAccount';
import { GET_USER } from '../gql/user';
import { useApolloClient, useQuery } from '@apollo/client';
import { GET_RESTAURANT } from '../gql/restaurant';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useRouter } from 'next/router';
import { removeDataLocal } from '../utils/local';
import CreateBranch from '../element/myBranch/createbranch';

interface IMyBranch {
  user: any;
}

const { TabPane } = Tabs;
function MyBranch({ user }: IMyBranch) {
  const [activeTab, setActiveTab] = useState('perfil');

  const { data } = useQuery(GET_USER);
  const { data: dataRestaurant } = useQuery(GET_RESTAURANT);

  const options = [
    {
      key: '1',
      tab: 'Listado de Sucursales',
      sug: 'list-branch'
    },
    {
      key: '2',
      tab: 'Crear Sucursal',
      sug: 'crear-branch'
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
      await client.resetStore();
      removeDataLocal('auth_token_user_irestaurant');
      router.push('/login');
    } catch (error) {
      console.log('🚀 ~ file: my-branchs.tsx ~ line 64 ~ handleLogout ~ error', error);
    }
  };

  const componentRender = () => {
    switch (activeTab) {
      case 'list-branch':
        return <PerfilAccount user={data?.findByOneUser} />;
      case 'crear-branch':
        return <CreateBranch restaurant={dataRestaurant?.findByOneRestaurant} />;
      default:
        return null;
    }
  };

  return (
    <>
      <LayoutDashboard>
        <div className="container-myBranch">
          <div className="container-myBranch__head">
            <div>
              <h3>Cuenta</h3>
            </div>
            <div>Opciones</div>
          </div>
          <div className="container-myBranch__body">
            <div className="body__sidebar">
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

export default connect(mapStateToProps, mapDispatchToProps)(MyBranch);
