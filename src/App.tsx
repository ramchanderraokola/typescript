import './App.css';
import 'antd/dist/antd.css';
import {BrowserRouter as Router ,Route,Switch,Link} from "react-router-dom";
import {Row, Col} from 'antd';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client';

const createApolloClient = () => {

  return new ApolloClient({
    link: new HttpLink({
      uri: 'https://free-cattle-53.hasura.app/v1/graphql',
      headers: {
        'x-hasura-admin-secret': '8qGstj6x8MBdORaXpYwwYhbk4qry0kzIW6mqRV3K1T7TOHQVv8XJP4hvci0Rmm6u'}
    }),
    cache: new InMemoryCache(),
  });
 }
 const client = createApolloClient();

  
function App() {
  return (

  <ApolloProvider client={client}>

    <div className="App" style={{backgroundColor:'aliceblue',height:'100vh',width:'100vw'}}>
    <Router>
       <Row style={{padding:'15px',backgroundColor:'aqua'}}>
         <Col span={3} >
         </Col>
         <Col span={5} >
         <Row>
             <Col span={12}>
             <Link style={{margin:'auto',textDecoration:'none'}} to='/loginpage'>Login</Link>
             </Col>
             
             <Col span={12}>
             <Link style={{margin:'auto',textDecoration:'none'}} to='/signup'>SignUp</Link>
             </Col>
        </Row>    
         </Col>
         
         <Col span={8}>
         </Col>

         <Col span={8}>
         </Col>

       </Row>
       <Switch>
         <Route exact path="/loginpage">
           <Login/>
         </Route>

         <Route path='/signup'>
           <SignUp />
         </Route>  
       </Switch>     

    </Router>
 </div>
 
</ApolloProvider> 

  )
}

export default App;
