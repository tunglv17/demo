import React from 'react'
import { Table, Tag, Space, Button } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
const AdminProducts = (props) => {
    console.log(props.listProducts)
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, item) => (
                <Space size="middle">
                    <Button type="primary">
                        <Link to={`product/edit/${item.id}`}>Edit</Link>
                    </Button>
                    <Button type="danger" onClick={() => props.onDeletePro(item.id)}>
                        Delete
                    </Button>
                </Space>
            )
        },
    ];
    return (
        <div>
            <Table columns={columns} dataSource={props.listProducts} />
        </div>
    )
}

export default AdminProducts
