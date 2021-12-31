import React, { useState } from 'react'
import { Button, Form, Input, Modal, Select, Upload } from "antd";
import { useHistory } from 'react-router-dom';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';

const AddProducts = (props) => {
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [rate, setRate] = useState(0)

    const [form] = Form.useForm();
    const [requiredMark, setRequiredMarkType] = useState("");

    const onRequiredTypeChange = ({ requiredMarkValue }) => {
        setRequiredMarkType(requiredMarkValue);
    };
    const normFile = (e) => {
        console.log('Upload event:', e);

        if (Array.isArray(e)) {
            return e;
        }

        return e && e.fileList;
    };
    const history = useHistory()
    const handleSubmit = () => {
        const newProduct = {
            name: name,
            category: category,
            price: price,
            image: image,
            description:description,
            rate: rate
        }
        console.log(newProduct)
        props.onAddProduct(newProduct)
        history.push('/admin/product');
    }
    return (
        <div>
            <Form
                form={form}
                layout="vertical"
                initialValues={{
                    requiredMarkValue: requiredMark,
                }}
                onValuesChange={onRequiredTypeChange}
                requiredMark={requiredMark}
            >
                <Form.Item label="Name" rules={[{ required: true }]}>
                    <Input placeholder="Name" onChange={(e) => setName(e.target.value)} />
                </Form.Item>
                <Form.Item label="Category" rules={[{ required: true }]}>
                    <Input placeholder="Category" onChange={(e) => setCategory(e.target.value)} />
                </Form.Item>
                <Form.Item label="Price" rules={[{ required: true }]}>
                    <Input type="number" placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
                </Form.Item>
                <Form.Item label="Description" rules={[{ required: true }]}>
                    <Input type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
                </Form.Item>
                <Form.Item label="Rate">
                    <Select onChange={(e) => setRate(e)}>
                        <Select.Option value={0}>Yếu</Select.Option>
                        <Select.Option value={1}>Kém</Select.Option>
                        <Select.Option value={2}>Trung Bình</Select.Option>
                        <Select.Option value={3}>Khá</Select.Option>
                        <Select.Option value={4}>Giỏi</Select.Option>
                        <Select.Option value={5}>Xuất Sắc</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="Image"
                    label="Image"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    extra=""
                >
                    <Upload name="logo" action="/upload.do" listType="picture" onChange={(e) => setImage(e.file.name)}>
                        <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AddProducts
