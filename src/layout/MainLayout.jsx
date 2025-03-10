import React, { memo, useState } from 'react'
import { Button, Layout, Menu, theme } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { items } from '../static'

const { Header, Sider, Content } = Layout;

const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const { token: { colorBgContainer, borderRadiusLG }, } = theme.useToken();

    return (
        <Layout className='w-full h-screen'>
            <Sider trigger={null} width={'280px'} collapsible collapsed={collapsed}>
                <div className="w-[400px] demo-logo-vertical" />
                <Menu className='w-full h-screen bg-[#1C2434]'
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={items}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer, }} >
                    <Button type="text" icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)} style={{ fontSize: '16px', width: 64, height: 64, }} />
                </Header>
                <Content style={{
                    margin: '24px 16px', padding: 24, minHeight: 280,
                    background: colorBgContainer, borderRadius: borderRadiusLG,
                }} >
                    Content
                </Content>
            </Layout>
        </Layout>
    )
}

export default memo(MainLayout)