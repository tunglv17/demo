import React from 'react'
import { Table, Tag, Space, Button } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
const ListUsers = (props) => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'fullname',
            key: 'fullname',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, item) => (
                <Space size="middle">
                    <Button type="primary">
                        <Link to={`user/${item.id}`}>Edit</Link>
                    </Button>
                    <Button type="danger" onClick={() => props.onDelete(item.id)}>
                        Delete
                    </Button>
                </Space>
            )
        },
    ];
    return (
        <div>
            <Table columns={columns} dataSource={props.profile} />
        </div>
    )
}

export default ListUsers
