import { Button, Space, Table } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom';

const AdminCategory = (props) => {
    const columns = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: "stt",
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: "name",
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, item) => (
                <Space size="middle">
                    <Button type="primary">
                        <Link to={`category/edit/${item.id}`}>Edit</Link>
                    </Button>
                    <Button type="danger" onClick={() => props.onDeleteCate(item.id)}>
                        Delete
                    </Button>
                </Space>
            )
        },
    ];
    return (
        <div>
            <Table rowKey={'id'} columns={columns} dataSource={props.listCate} />
        </div>
    )
}

export default AdminCategory
