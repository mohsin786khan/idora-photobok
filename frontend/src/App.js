import {Route} from 'react-router-dom'

import Footer from './components/Footer';

import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import Cms from './pages/Cms';

const App = () => {
    return (
        <>
            <Route path="/" exact component={Login} />
            <Route path="/admindashboard" component={AdminDashboard} />
            <Route path="/cms" component={Cms} />
            <Footer />
        </>
    )
}

export default App;