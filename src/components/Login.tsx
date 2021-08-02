// eslint-disable-next-line
import React from 'react';
import { Form, Input, Button, Checkbox ,Row ,Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import myPic from '../assets/pic1.png';

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  }
  const Login = () => {
    return(
          <div style={{marginTop:'string' ,marginRight:'10px'}}>
              <Row>
                <Col span={19}>        
                 <img src={myPic}  alt=''/>
                </Col>

              <Col span={5}>  
              <Form
               name="normal_login"
               className="login-form"
               initialValues={{ remember: true }}
               onFinish={onFinish}
              >
           <h2 style={{paddingTop:'120px',color:'yellowgreen' }}>Welcome &#9819;</h2>
              <span>Please Sign in Here! &#9759;</span>
            <Form.Item
           name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
            >
             <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <a className="login-form-forgot" href=" ">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or
         <a href=" ">register now!</a>
      </Form.Item>
    </Form>
   </Col>
  </Row>  
</div>


      )
}     
export default Login;