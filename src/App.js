import React from 'react';
import { Layout, Drawer } from 'antd';
import 'antd/dist/antd.css'
import Sider from './features/Nav/Sider'
import StudentListTable from './features/studentList/StudentList';
import EnrolmentForm from './features/enrolmentForm/enrolmentForm';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDrawer } from './features/enrolmentForm/enrolmentFormDrawerSlice';

const { Header, Content, Footer } = Layout;

function App() {
  const dispatch = useDispatch()
  const isOpen = useSelector((state)=> state.drawerState.value)
  const closeDrawer = ()=> { return dispatch(toggleDrawer(false)) }
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
                <Drawer onClose={closeDrawer} visible={ isOpen }>
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
