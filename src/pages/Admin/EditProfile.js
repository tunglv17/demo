import React, { useEffect, useState } from 'react'
import { Button, Form, Input, Modal } from "antd";
import { useParams, useHistory } from 'react-router-dom';
import ProfileAPI from '../../API/ProfileAPI';
const EditProfile = (props) => {
    const [name, setName] = useState({})
    const [fullname, setFullName] = useState({})
    const { id } = useParams();
    const history = useHistory();
    useEffect(() => {
        const getProfile = async () => {
            try {
                const { data } = await ProfileAPI.get(id)
                setName(data.name)
                setFullName(data.fullname)
            } catch (error) {
                console.log(error)
            }
        }
        getProfile()
    }, [])
    const handleSubmit = () => {
        const newPro = {
            id: id,
            name: name,
            fullname: fullname
        }
        props.onUpdate(newPro)
        history.push('/admin/user');
    }
    return (
        <div>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 12 }}
                initialValues={{ remember: true }}
                autoComplete="off"
            >
                <Form.Item label="Name" rules={[{ required: true }]}>
                    <Input value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Item>
                <Form.Item label="Full Name" rules={[{ required: true }]}>
                    <Input value={fullname} onChange={(e) => setFullName(e.target.value)} />
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

export default EditProfile
