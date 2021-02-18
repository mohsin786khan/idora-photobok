import {Route} from 'react-router-dom'
import Footer from './components/Footer';
import Login from './pages/Login';
import AdminUserManagement from './pages/AdminUserManagement';
import AdminUserEdit from './pages/AdminUserEdit';
import Header from './components/Header';
import AdminUserAdd from './pages/AdminUserAdd';

const App = () => {
    return (
        <>
            <Header />
            <Route path="/" exact component={Login} />
            <Route path="/admindashboard/userManage" component={AdminUserManagement} />
            <Route path='/admindashboard/adduser' component={AdminUserAdd} />
            <Route path="/admindashboard/user/:id/edit" component={AdminUserEdit} />
            <Footer />
        </>
    )
}

export default App;