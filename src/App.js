import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import OrderPlace from './components/OrderPlace/OrderPlace';
import LogIn from './components/login/LogIn';
import Context from './Context/Context';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import MyOrder from './components/myOrder/MyOrder';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';
import AddService from './components/AddService/AddService';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Context>
<BrowserRouter>
<Header></Header>
<Switch>
<Route exact path='/'>
<Home></Home>
</Route>

<Route path='/home'>
<Home></Home>
</Route>

<Route path='/login'>
<LogIn></LogIn>
</Route>
<Route path='/myOrder'>
<MyOrder></MyOrder>
</Route>
<Route path='/manage'>
<ManageAllOrders></ManageAllOrders>
</Route>
<Route path='/addService'>
<AddService></AddService>
</Route>

<PrivateRoute path='/HomeServices/:id'>
<OrderPlace></OrderPlace>
</PrivateRoute>
</Switch>

</BrowserRouter>
<Footer></Footer>
</Context>
    </div>
  );
}

export default App;
