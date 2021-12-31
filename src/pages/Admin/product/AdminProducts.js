import React from 'react'
import { Table, Space, Button, Rate, Image } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
const AdminProducts = (props) => {
    const columns = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: "stt",
        },
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
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (thumbnail_cdn) => (
                <Image
                    width={80}
                    src={
                        "https://image.iventurecard.com/images/attractions/attraction_2716_main_5ad93f488496e.jpg"
                    }
                />
            ),
        },
        {
            title: 'Rate',
            dataIndex: 'rate',
            key: 'rate',
            render: (rate) => <Rate value={rate} disabled />,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
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
            <Table rowKey={'id'} columns={columns} dataSource={props.listProducts} />
        </div>
    )
}

export default AdminProducts
