import React from 'react';
import { Form, Input, Button, Select, Radio, Typography, Space, Layout } from 'antd';
import 'antd/dist/antd.css'

const {Option} = Select;
const {Title} = Typography

const enrolmentForm = function enrolmentForm() {
    return (
        <Layout style={{background: '#fff'}}>
            {/* <Title level={4}>Enrolment Form</Title> */}
            <Form layout='vertical'>
                <Form.Item>
                    <Title level={4}>Enrolment Form</Title>
                </Form.Item>
                <Form.Item label='First Name'>
                    <Input required placeholder='Enter first name'/>
                </Form.Item>
                <Form.Item label='Last Name'>
                    <Input required placeholder='Enter last name'/>
                </Form.Item>
                <Form.Item>
                    <span style={{ paddingRight: 12 }}>Gender</span>
                    <Radio.Group>
                        <Space size={15}>
                            <Radio value={1}>Male</Radio>
                            <Radio value={2}>Female</Radio>
                        </Space>
                    </Radio.Group>
                </Form.Item>
                <Form.Item>
                    <span style={{ paddingRight: 12 }}>Level</span>
                        <Select placeholder='Select level' style={{ width: 124 }}>
                            <Option>Level 1</Option>
                            <Option>Level 2</Option>
                            <Option>Level 3</Option>
                            <Option>Level 4</Option>
                        </Select>
                </Form.Item>
                <Form.Item>
                    <span style={{ paddingRight: 12 }}>Gender:</span>
                    <Select placeholder='Select department' style={{ width: 175 }}>
                        <Option>Biology</Option>
                        <Option>Chemistry</Option>
                        <Option>Mathematics</Option>
                        <Option>Physics</Option>
                    </Select>
                </Form.Item>
                <div style={{width: 100, margin: 'auto' }}>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                </div>
            </Form>
        </Layout>
    )
}
export default enrolmentForm;