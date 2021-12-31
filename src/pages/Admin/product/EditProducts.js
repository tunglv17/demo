import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import ProductAPI from '../../../API/ProductAPI';
import { Button, Form, Input, Modal, Select, Upload } from "antd";
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
const EditProducts = (props) => {
    const [name, setName] = useState({})
    const [category, setCategory] = useState({})
    const [price, setPrice] = useState({})
    const [image, setImage] = useState({})
    const [description, setDescription] = useState({})
    const [rate, setRate] = useState({})
    const { id } = useParams();
    const history = useHistory();
   
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
    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await ProductAPI.get(id);
                setName(data.name)
                setCategory(data.category)
                setPrice(data.price)
                setImage(data.image)
                setRate(data.rate)
                setDescription(data.description)
            } catch (error) {
                console.log(error)
            }
        }
        getProduct()
    }, [])
    const handleSubmit = () => {
        const newProduct = {
            id: id,
            name: name,
            category: category,
            price: price,
            image: image,
            rate:rate,
            description:description
        }
        props.onUpdatePro(newProduct);
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
                    <Input value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Item>
                <Form.Item label="Category" rules={[{ required: true }]}>
                    <Input value={category} onChange={(e) => setCategory(e.target.value)} />
                </Form.Item>
                <Form.Item label="Price" rules={[{ required: true }]}>
                    <Input value={price} onChange={(e) => setPrice(e.target.value)} />
                </Form.Item>
                <Form.Item label="Description" rules={[{ required: true }]}>
                    <Input value={description} onChange={(e) => setDescription(e.target.value)} />
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
                <Form.Item label="Rate">
                    <Select value={rate} onChange={(e) => setRate(e)}>
                        <Select.Option value={0}>Yếu</Select.Option>
                        <Select.Option value={1}>Kém</Select.Option>
                        <Select.Option value={2}>Trung Bình</Select.Option>
                        <Select.Option value={3}>Khá</Select.Option>
                        <Select.Option value={4}>Giỏi</Select.Option>
                        <Select.Option value={5}>Xuất Sắc</Select.Option>
                    </Select>
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

export default EditProducts
