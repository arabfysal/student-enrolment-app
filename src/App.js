import React, { useState } from 'react';
import { Layout, Drawer } from 'antd';
import 'antd/dist/antd.css'
import Sider from './features/Nav/Sider'
import StudentListTable from './features/studentList/StudentList';
import EnrolmentForm from './features/enrolmentForm/enrolmentForm';

const { Header, Content, Footer } = Layout;

/* let isVisible = false
  const setDrawerVisibility = ()=> {
    console.log(isVisible)
    isVisible = !isVisible
  } */

function App() {
  const [isShown, setVisibility ] = useState(false)
  const setDrawerVisibility = ()=> {
    setVisibility(!isShown)
  }
  return (  
    <Layout>
        <Sider/>
        <Layout>
          <Header  style={{ padding: 0 }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 467 /* 360 */ , background: '#fff' }}>
              <StudentListTable/>
            </div>
            <Layout>
              {/* <button onClick={ ()=> setDrawerVisibility() }>clicked</button> */}
                <Drawer /* onClose={setVisibility(false)} */ visible={ isShown }>
                    <EnrolmentForm/>
                </Drawer>
            </Layout>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Fysal</Footer>
        </Layout>
      </Layout>
  );
}

export default App;
