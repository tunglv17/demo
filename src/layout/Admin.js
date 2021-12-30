import React from 'react'
import { Layout, Menu } from 'antd';
import "antd/dist/antd.css";
import { Link, NavLink } from 'react-router-dom';
const { Sider, Content } = Layout;
const { SubMenu } = Menu;

const LayoutAdmin = (props) => {
    return (
        <div>
            <Layout>
                <Sider >
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <NavLink to="/admin/product">Products</NavLink>
                        </Menu.Item>
                        <Menu.Item key="2">
                        <NavLink to="/admin/category">Category</NavLink>
                        </Menu.Item>
                        <SubMenu key="sub1" title="User">
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title="Team">
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9">
                            Files
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Content>{props.children}</Content>
            </Layout>
        </div>
    )
}

export default LayoutAdmin
