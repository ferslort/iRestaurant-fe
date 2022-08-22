import { setAuthUser } from '../redux/slices/auth';
import { connect } from 'react-redux';
import LayoutDashboard from '../layout/layoutDashboard';
import { Avatar, Tabs } from 'antd';
import { useState } from 'react';
import PerfilAccount from '../element/myAccount/PerfilAccount';
import { GET_USER } from '../gql/user';
import { useQuery } from '@apollo/client';
import { GET_RESTAURANT } from '../gql/restaurant';
import CreateBranch from '../element/myBranch/CreateBranch';
import ListBranch from '../element/myBranch/ListBranch';
import { GET_ALL_BRANCH } from '../gql/branch';

interface IMyBranch {
  user: any;
}

const { TabPane } = Tabs;
function MyBranch({ user }: IMyBranch) {
  const [activeTab, setActiveTab] = useState('list-branch');

  const { data } = useQuery(GET_ALL_BRANCH);
  console.log('🚀 ~ file: my-branchs.tsx ~ line 23 ~ MyBranch ~ data', data);

  const options = [
    {
      key: '1',
      tab: 'Listar',
      sug: 'list-branch'
    },
    {
      key: '2',
      tab: 'Crear',
      sug: 'crear-branch'
    }
  ];

  const handleChangeOptions = async (sug: string) => {
    setActiveTab(sug);
  };

  const componentRender = () => {
    switch (activeTab) {
      case 'list-branch':
        return <ListBranch user={data?.findByOneUser} />;
      case 'crear-branch':
        return <CreateBranch />;
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
