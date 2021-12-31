import React from 'react'
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Menu, Breadcrumb } from 'antd';
import SiderWebsite from '../components/Sider';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const LayoutAdmin = (props) => {
    return (
        <div>
            <Layout style={{ minHeight: '100vh' }}>
                <SiderWebsite />
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            {props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        </div >
    )
}

export default LayoutAdmin
