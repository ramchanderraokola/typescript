import  { useState } from 'react';
import {  Input,  Row, Col, Checkbox, Button } from 'antd';
import myPic from '../assets/pic1.png';
import {  useMutation } from '@apollo/client';
import {SIGN_UP_MUTATION} from './query';

const SignUp = () => {

 const[firstName,setFirstName] = useState ('');
 const[lastName,setLastName] = useState ('');
 const[email,setEmail] = useState ('');
 const[password,setPassword] = useState ('');
 const [phoneNo,setPhoneNo] = useState('');
 const[signup] =useMutation(SIGN_UP_MUTATION);
  
  return (
       
    <form
    onSubmit={(e) => {

         e.preventDefault();
          signup({
           variables: {
           firstname: firstName,
           lastname: lastName,
           email: email,
           password: password,
           phoneNo:phoneNo
             },
          });
        }}
    >
    
       <div>

      <Row>
        <Col span={18}>
        <img src={myPic} alt=''/>
        </Col>

        <Col span={6}>
       
        <h3 style={{color:'crimson',marginInline:'10px'}}>Please Register Here &#x270C;</h3>
        
        <div className="signup-form">

          <div>
              <label>First Name</label>
              <Input
                type="text"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
          </div>
      
          <div>
              <label>Last Name</label>
              <Input
                type="text"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)
                }
                required
              />
              
          </div>
      

          <div>
              <label>email</label>
              <Input
                type="text"
                placeholder="Enter your E-mail here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
          </div>

          <div>
              <label>password</label>
              <Input
                type="password"
                placeholder="Enter your password here"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
          </div>  

          <div>
              <label>phoneNo</label>
              <Input
                type="number"
                placeholder="Enter your phone Number"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                required
              />
          </div>  
         <br/>
        <Checkbox>
                   I have read the <a href=" ">agreement</a>
        </Checkbox>
        <br/>
        <br/>
        <Button type="primary" onClick={(e) => {
          alert('form submitted')

                      e.preventDefault();
                    signup({
                         variables: {
                           firstname: firstName,
                           lastname: lastName,
                           email: email,
                           password: password,
                           phoneNo:phoneNo
                                    },
                           });
                  }}>
          Register
        </Button>
      </div> 
    </Col>
   </Row>  
  </div>   

</form>  
  );
};

export default SignUp;