import {Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import AdminUserManagement from './pages/AdminUserManagement';
import AdminUserEdit from './pages/AdminUserEdit';
import AdminUserAdd from './pages/AdminUserAdd';
import AdminProductManagement from './pages/AdminProductManagement';

const App = () => {
    return (
        <>
            <Header />
            <Route path="/" exact component={Login} />
            <Route path="/admindashboard_productManage" component={AdminProductManagement} />
            <Route path="/admindashboard_userManage" component={AdminUserManagement} />
            <Route path='/admindashboard_adduser' component={AdminUserAdd} />
            <Route path="/admindashboard_edituser" component={AdminUserEdit} />
            <Footer />
        </>
    )
}

export default App;