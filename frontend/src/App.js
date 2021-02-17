import {Route} from 'react-router-dom'

import Footer from './components/Footer';

import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';

const App = () => {
    return (
        <>
            <Route path="/" exact component={Login} />
            <Route path="/admindashboard" component={AdminDashboard} />
            <Footer />
        </>
    )
}

export default App;