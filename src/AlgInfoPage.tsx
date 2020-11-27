import React from 'react'
import {Button, Input, Select,Modal} from 'antd'
import {PlusCircleOutlined, RightOutlined} from '@ant-design/icons'

const {TextArea} = Input;
const {Option} = Select;

class PlatformView extends React.Component {
    render() {
        return (
            <div className="my-div" style={{marginLeft: 120}}>
                <div style={{marginBottom: 20}}>
                    <Select placeholder="请选择园区"></Select>
                    <RightOutlined style={{paddingLeft: 20}}/>
                    <Select placeholder="请选择业务域" style={{paddingLeft: 20}}></Select>
                    <RightOutlined style={{paddingLeft: 20}}/>
                    <Select placeholder="请选择能源系统" style={{paddingLeft: 20}}></Select>
                    <RightOutlined style={{paddingLeft: 20}}/>
                </div>
                <div style={{marginBottom: 20}}>
                    <Select placeholder="请选择设备类型"></Select>
                    <RightOutlined style={{paddingLeft: 20}}/>
                    <Select placeholder="请选择设备" style={{paddingLeft: 20}}></Select>
                </div>
            </div>
        )
    }
}

class DefinedView extends React.Component {
    render() {
        return (
            <div className="my-div" style={{marginLeft: 120}}>
                <TextArea placeholder="请输入自定义场景及目标描述" rows={5}></TextArea>
            </div>
        )
    }
}

export default class AlgInfoPage extends React.Component {
    state = {
        current: "",
        modalVisible:false
    };
    setModalVisible(modalVisible:boolean) {
        this.setState({ modalVisible });
    }
    handleClick = (e: any) => {
        this.setState({
            current: e
        })
    };
    render() {
        const {current} = this.state;
        let sceneView = <DefinedView/>;
        if (current === "自定义") {
            sceneView = <DefinedView/>
        } else if (current === "平台内") {
            sceneView = <PlatformView/>
        }
        return (
            <div className="main-div">
                {/* 第一块是算法概述 */}
                < div className="my-div">
                    <div style={{display: "inline-block"}}>
                        <p><span>*</span>算法名称:</p>
                    </div>
                    <div className="my-div-right" style={{paddingLeft: 60}}>
                        <Input placeholder="请输入算法名称" maxLength={50}/>
                    </div>
                </div>
                {/* 第二块是算法标签 */}
                < div className="my-div">
                    <div style={{display: "inline-block"}}>
                        <p><span>*</span>算法标签:</p>
                    </div>
                    <div className="icons-list my-div-right" style={{paddingLeft: 60}}>
                        <Button type="primary" onClick={()=>this.setModalVisible(true)}> <PlusCircleOutlined/> </Button>
                        <Modal
                            title="选择标签"
                            centered
                            width={800}
                            visible={this.state.modalVisible}
                            onOk={() => this.setModalVisible(false)}
                            onCancel={() => this.setModalVisible(false)}
                            okText="确定"
                            cancelText="取消"
                        >
                            <div>
                                <Input placeholder="请输入标签关键词"/>
                                <a style={{ paddingLeft:20}}>新建标签</a>
                            </div>
                            <div>
                                <p className="my-p-label">已选标签</p>
                            </div>
                            <p className="my-p-label">推荐标签</p>
                            <div style={{height:300,overflow:"auto"}}>
                                <div style={{overflow:"auto"}}>
                                    <p>标签1</p>
                                    <p>标签2</p>
                                    <p>标签3</p>
                                    <p>标签4</p>
                                </div>
                            </div>
                        </Modal>
                    </div>
                </div>
                {/* 第三块是算法功能 */}
                < div className="my-div">
                    <div style={{display: "inline-block", verticalAlign: "top"}}>
                        <p><span>*</span>算法功能:</p>
                    </div>
                    <div className="my-div-right" style={{paddingLeft: 60}}>
                        <TextArea placeholder="请输入算法功能" rows={5}></TextArea>
                    </div>
                </div>
                {/* 第四块是适用场景及目标 */}
                < div className="my-div">
                    <div style={{display: "inline-block"}}>
                        <p>适用场景及目标:</p>
                    </div>
                    <div className="my-div-right">
                        <Select onChange={this.handleClick} id="scene" defaultValue="自定义场景" style={{width: 200}}>
                            <Option value="自定义" key="1">自定义场景</Option>
                            <Option value="平台内" key="2">平台内项目</Option>
                        </Select>
                    </div>
                    {sceneView}
                    {/* <DefinedView />
                    <PlatformView /> */}
                </div>
                {/* 第五块是原理及参数介绍 */}
                < div className="my-div">
                    <div style={{display: "inline-block", verticalAlign: "top"}}>
                        <p>原理及参数介绍:</p>
                    </div>
                    <div className="my-div-right">
                        <TextArea placeholder="请输入原理及参数介绍" rows={5}></TextArea>
                    </div>
                </div>
                {/* 最后一块是取消和保存当前 */}
                < div style={{textAlign: "center"}}>
                    <Button>取消</Button>
                    <Button type="primary">保存当前</Button>
                </div>
            </div>
        )
    }
}