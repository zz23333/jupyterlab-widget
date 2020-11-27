import React from 'react'
import {Button, Input, Switch, Select, Radio, Checkbox} from 'antd'

const {Option} = Select;

export default class AlgModelPage extends React.Component {
    state = {
        isDisabled:true
    };
    handleClick = ()=>{
        this.setState({isDisabled: !this.state.isDisabled})
    };
    render() {
        const disabled = this.state;
        return (
            <div className="main-div">
                {/* 第一块包含的模型 */}
                <div className="my-div">
                    <div style={{display: "inline-block"}}>
                        <p>包含模型:</p>
                    </div>
                    <div className="my-div-right">
                        <Radio.Group>
                            <Radio value={1}>是</Radio>
                            <Radio value={2}>否</Radio>
                        </Radio.Group>
                    </div>
                </div>
                {/* 第二块模型类型 */}
                <div className="my-div">
                    <div style={{display: "inline-block"}}>
                        <p>模型类型:</p>
                    </div>
                    <div className="my-div-right">
                        <Select defaultValue="xgboost" style={{width: 200}}>
                            <Option value="xgboost">xgboost</Option>
                            <Option value="scikit-learn">scikit-learn</Option>
                            <Option value="Tensorflow">Tensorflow</Option>
                            <Option value="lightgbm">lightgbm</Option>
                        </Select>
                    </div>
                    <div className="my-div-right" style={{paddingLeft: 280}}>
                        <Button type="primary">+新增模型</Button>
                    </div>
                </div>
                {/* 第三块模型训练 */}
                <div className="my-div">
                    <div style={{display: "inline-block"}}>
                        <p>在线训练:</p>
                    </div>
                    <div className="my-div-right">
                        <Switch defaultChecked={false}/>
                    </div>
                    <div className="my-div-right" style={{paddingLeft: 440}}>
                        <Button type="primary">立即训练</Button>
                    </div>
                </div>
                {/* 第四块训练周期 此处应该是crontab表达式*/}
                <div className="my-div">
                    <div style={{display: "inline-block"}}>
                        <p>训练周期:</p>
                    </div>
                    <div className="my-div-right" style={{width: 100}}>
                        <Input suffix="秒"/>
                    </div>
                    <div className="my-div-right" style={{width: 100}}>
                        <Input suffix="分"/>
                    </div>
                    <div className="my-div-right" style={{width: 100}}>
                        <Input suffix="时"/>
                    </div>
                    <div className="my-div-right" style={{width: 100}}>
                        <Input suffix="日"/>
                    </div>
                    <div className="my-div-right" style={{width: 100}}>
                        <Input suffix="月"/>
                    </div>
                    <div className="my-div-right" style={{width: 100}}>
                        <Input suffix="周"/>
                    </div>
                </div>
                {/* 第五块在线评估 */}
                <div className="my-div">
                    <div style={{display: "inline-block"}}>
                        <p>在线评估:</p>
                    </div>
                    <div className="my-div-right">
                        <Switch defaultChecked={false} onClick={this.handleClick}/>
                    </div>
                    <div className="my-div-right" style={{paddingLeft: 380}}>
                        <Checkbox disabled={disabled.isDisabled}>训练完成后立即评估</Checkbox>
                    </div>
                </div>
                {/* 第六块评估周期 crontab表达式*/}
                <div className="my-div">
                    <div style={{display: "inline-block"}}>
                        <p>评估周期:</p>
                    </div>
                    <div className="my-div-right" style={{width: 100}}>
                        <Input suffix="秒"/>
                    </div>
                    <div className="my-div-right" style={{width: 100}}>
                        <Input suffix="分"/>
                    </div>
                    <div className="my-div-right" style={{width: 100}}>
                        <Input suffix="时"/>
                    </div>
                    <div className="my-div-right" style={{width: 100}}>
                        <Input suffix="日"/>
                    </div>
                    <div className="my-div-right" style={{width: 100}}>
                        <Input suffix="月"/>
                    </div>
                    <div className="my-div-right" style={{width: 100}}>
                        <Input suffix="周"/>
                    </div>
                </div>
                {/* 第七块评估模型数量 */}
                <div className="my-div">
                    <div style={{display: "inline-block"}}>
                        <p>额外评估模型数量:</p>
                    </div>
                    <div className="my-div-right">
                        <Select defaultValue="0" style={{width: 200}}>
                            <Option value="0">0</Option>
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                            <Option value="4">4</Option>
                            <Option value="5">5</Option>
                        </Select>
                    </div>
                </div>
                {/* 第八块默认模型切换规则 */}
                <div className="my-div">
                    <div style={{display: "inline-block"}}>
                        <p>默认模型切换规则:</p>
                    </div>
                    <div className="my-div-right">
                        <Select defaultValue="最新模型" style={{width: 200}}>
                            <Option value="最新模型">最新模型</Option>
                            <Option value="评估得分最高">评估得分最高</Option>
                            <Option value="评估得分最低">评估得分最低</Option>
                            <Option value="禁用自动切换">禁用自动切换</Option>
                        </Select>
                    </div>
                </div>
                {/* 最后一块取消和保存 */}
                < div style={{textAlign: "center"}}>
                    <Button>取消</Button>
                    <Button type="primary">保存当前</Button>
                </div>
            </div>
        )
    }
}