import React from 'react';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css'
import { UserOutlined, HomeOutlined, ContactsOutlined, SolutionOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const Logo = styled.div`
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
`

const { Sider } = Layout;

const SideNav =  function SideNav() {
    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
            console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
            }}
        >
        <Logo/>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1" icon={<HomeOutlined />}>
                <span onClick={()=> console.log('I am clicked')}>Home</span>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
                Enrol
            </Menu.Item>
            <Menu.Item key="3" icon={<SolutionOutlined />}>
                Admission
            </Menu.Item>
            <Menu.Item key="4" icon={<ContactsOutlined />}>
                Contact us
            </Menu.Item>
        </Menu>
        </Sider>
    )
}
export default SideNav