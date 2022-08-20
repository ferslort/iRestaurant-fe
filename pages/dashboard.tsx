import { setAuthUser } from '../redux/slices/auth';
import { connect } from 'react-redux';
import LayoutDashboard from '../layout/layoutDashboard';

function Dashboard() {
  return (
    <>
      <LayoutDashboard>
        <div>Desde el dashboard</div>
      </LayoutDashboard>
    </>
  );
}

const mapDispatchToProps = {
  onSetAuthUser: setAuthUser
};

export default connect(null, mapDispatchToProps)(Dashboard);
