import React from 'react'
import { Select, Button, Input } from 'antd'
// import { MinusCircleOutlined, PlusCircleOutlined, PlusOutlined } from '@ant-design/icons';
// import FormTemplate from './FormTemplate'
import EditableTable from './EditableTable'
import EditableTableTwo from './EditableTableTwo'

const { Option } = Select;
const { TextArea } = Input;


export default class InterfaceInfoPage extends React.Component {
    render() {
        return (
            <div className="main-div">
                {/* 第一块是请求参数示例 */}
                <div className="my-div">
                    <div style={{ display: "inline-block", verticalAlign: "top" }}>
                        <p>*请求参数示例:</p>
                    </div>
                    <div className="my-div-right">
                        <TextArea placeholder="请输入请求参数示例" rows={5}></TextArea>
                    </div>
                </div>
                {/* 第二块是请求参数说明 */}
                <div className="my-div">
                    <div style={{ display: "inline-block", verticalAlign: "top" }}>
                        <p>*请求参数说明:</p>
                    </div>
                    <EditableTable />
                    {/* <FormTemplate /> */}
                </div>
                {/* 第三块选择响应实时性 */}
                <div className="my-div">
                    <div style={{ display: "inline-block" }}>
                        <p>*响应实时性:</p>
                    </div>
                    <div className="my-div-right" style={{ paddingLeft: 35 }}>
                        <Select defaultValue="实时提供" style={{ width: 200 }}>
                            <Option value="实时提供">实时提供</Option>
                            <Option value="非实时提供">非实时提供</Option>
                        </Select>
                    </div>
                </div>
                {/* 第四块响应参数示例 */}
                <div className="my-div">
                    <div style={{ display: "inline-block", verticalAlign: "top" }}>
                        <p>*响应参数示例:</p>
                    </div>
                    <div className="my-div-right">
                        <TextArea placeholder="请输入响应参数示例" rows={5}></TextArea>
                    </div>
                </div>
                {/* 第五块响应参数说明 */}
                <div className="my-div">
                    <div style={{ display: "inline-block", verticalAlign: "top" }}>
                        <p>*响应参数说明:</p>
                    </div>
                    <EditableTable />
                    {/* <FormTemplate /> */}
                </div>
                {/* 第六块状态码说明 */}
                <div className="my-div">
                    <div style={{ display: "inline-block", verticalAlign: "top" }}>
                        <p>*状态码说明:</p>
                    </div>
                    <div className="my-div-right" style={{ paddingLeft: 10 }}>
                        <EditableTableTwo />
                    </div>
                </div>
                {/* 最后一块取消和保存 */}
                < div style={{ textAlign: "center" }} >
                    <Button>取消</Button>
                    <Button type="primary">保存当前</Button>
                </div >
            </div>
        )
    }
}