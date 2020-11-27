import { Layout, Menu, Breadcrumb, Typography } from 'antd';
import React from 'react'
import AlgInfoPage from './AlgInfoPage'
import AlgModelPage from './AlgModelPage'
import InterfaceInfoPage from './InterfaceInfoPage'

const { Header, Content, Footer } = Layout;
const { Text } = Typography;
export default class NavigationNar extends React.Component {
    state = {
        current: 'mail',
    };

    handleClick = (e: any) => {
        console.log(e.key)
        this.setState({ current: e.key });
    };
    render() {
        const { current } = this.state;
        let showView = <AlgInfoPage />
        let breadcrumb = "算法概述"
        if (current === "1") {
            showView = <AlgInfoPage />
            breadcrumb = "算法概述"
        } else if (current === "2") {
            showView = <AlgModelPage />
            breadcrumb = "算法模型"
        } else if (current === "3") {
            showView = <InterfaceInfoPage />
            breadcrumb = "接口描述"
        }
        return (
            <div>
                <Layout className="layout">
                    <Header>
                        <div className="logo" />
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1" onClick={this.handleClick}> <Text strong>算法概述</Text> </Menu.Item>
                            <Menu.Item key="2" onClick={this.handleClick}> <Text strong>算法模型</Text> </Menu.Item>
                            <Menu.Item key="3" onClick={this.handleClick}> <Text strong>接口描述</Text> </Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>新增算法</Breadcrumb.Item>
                            <Breadcrumb.Item>{breadcrumb}</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="site-layout-content">{showView}</div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>©2017-2020 新奥数能科技有限公司 版权所有 | 京ICP备18041593号-1</Footer>
                </Layout>
            </div>
        )
    }
}
