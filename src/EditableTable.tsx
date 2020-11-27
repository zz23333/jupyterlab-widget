import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Form, Select } from 'antd';
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons'

const EditableContext = React.createContext<any>('');
const { Option } = Select;
interface Item {
    key: string;
    paramName: string;
    paramType: React.Component;
    info: string;
    note: string;
}

interface EditableRowProps {
    index: number;
}

const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};
interface EditableCellProps {
    title: React.ReactNode;
    editable: boolean;
    children: React.ReactNode;
    dataIndex: string;
    record: any;
    handleSave: (record: Item) => void;
}
const EditableCell: React.FC<EditableCellProps> = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    ...restProps
}) => {
    const [editing, setEditing] = useState(false);
    const inputRef: React.MutableRefObject<any> = useRef();
    const form = useContext(EditableContext);
    useEffect(() => {
        if (editing) {
            inputRef.current.focus();
        }
    }, [editing]);

    const toggleEdit = () => {
        setEditing(!editing);
        form.setFieldsValue({
            [dataIndex]: record[dataIndex],
        });
    };

    const save = async (e: any) => {
        try {
            const values = await form.validateFields();
            toggleEdit();
            handleSave({ ...record, ...values });
        } catch (errInfo) {
            console.log('Save failed:', errInfo);
        }
    };

    let childNode = children;

    if (editable) {
        childNode = editing ? (
            <Form.Item
                style={{
                    margin: 0,
                }}
                name={dataIndex}
                rules={[
                    {
                        required: true,
                        message: `${title} is required.`,
                    },
                ]}
            >
                <Input ref={inputRef} onPressEnter={save} onBlur={save} />
            </Form.Item>
        ) : (
                <div
                    className="editable-cell-value-wrap"
                    style={{
                        paddingRight: 24,
                    }}
                    onClick={toggleEdit}
                >
                    {children}
                </div>
            );
    }

    return <td {...restProps}>{childNode}</td>;
};
interface State {
    dataSource: any[];
    count: number;
}
export default class EditableTable extends React.Component<any, State> {
    column = [
        {
            title: '参数名',
            dataIndex: 'paramName',
            width: '20%',
            editable: true,
        },
        {
            title: '参数类型',
            width: '20%',
            dataIndex: 'paramType',
        },
        {
            title: '说明',
            dataIndex: 'info',
            width: '30%',
            editable: true,
        },
        {
            title: '备注',
            dataIndex: 'note',
            width: '15%',
            editable: true,
        },
        {
            title: '操作',
            dataIndex: 'operation',
            width: '15%',

            render: (text: any, record: Item) =>
                <div>
                    <a onClick={this.handleAdd} style={{ marginBottom: 16 }}><PlusCircleOutlined /></a>
                    <a onClick={() => this.handleDelete(record.key)} style={{ marginBottom: 16, paddingLeft: 20 }}><MinusCircleOutlined /></a>
                </div>
        },

    ];
    constructor(props: any) {
        super(props);

        this.state = {
            dataSource: [
                {
                    key: '0',
                    paramName: '参数名',
                    paramType: <Select defaultValue='string'>
                        <Option value='string'>string</Option>
                        <Option value='number'>number</Option>
                        <Option value='boolean'>boolean</Option>
                        <Option value='object'>object</Option>
                        <Option value='array'>array</Option>
                    </Select>,
                    info: '说明',
                    note: '0',
                },
            ],
            count: 1,
        };
    }

    handleDelete = (key: string) => {
        const dataSource = [...this.state.dataSource];
        if (dataSource.length > 1) {
            this.setState({
                dataSource: dataSource.filter((item) => item.key !== key),
            });
        }
    };
    handleAdd = () => {
        const { count, dataSource } = this.state;
        const newData = {
            key: count,
            paramName: `参数名 ${count}`,
            paramType: <Select defaultValue='string'>
                <Option value='string'>string</Option>
                <Option value='number'>number</Option>
                <Option value='boolean'>boolean</Option>
                <Option value='object'>object</Option>
                <Option value='array'>array</Option>
            </Select>,
            info: `说明 ${count}`,
            note: `${count}`,
        };
        this.setState({
            dataSource: [...dataSource, newData],
            count: count + 1,
        });
    };
    handleSave = (row: Item) => {
        const newData = [...this.state.dataSource];
        const index = newData.findIndex((item) => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        this.setState({
            dataSource: newData,
        });
    };

    render() {
        const { dataSource } = this.state;
        const components = {
            body: {
                row: EditableRow,
                cell: EditableCell,
            },
        };
        const columns = this.column.map((col) => {
            if (!col.editable) {
                return col;
            }

            return {
                ...col,
                onCell: (record: Item) => ({
                    record,
                    editable: col.editable,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    handleSave: this.handleSave,
                }),
            };
        });
        return (
            <div className="my-div-right">
                {/* <Button
                    onClick={this.handleAdd}
                    type="primary"
                    style={{
                        marginBottom: 16,
                    }}
                >
                    添加项
                </Button> */}
                <Table
                    components={components}
                    rowClassName={() => 'editable-row'}
                    bordered
                    dataSource={dataSource}
                    columns={columns}
                    style={{ width: 800 }}
                />
            </div>
        );
    }
}
