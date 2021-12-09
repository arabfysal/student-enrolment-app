import React, {useState} from 'react';
import { Form, Input, Button, Select, Radio, Typography, Space, Layout } from 'antd';
import 'antd/dist/antd.css'
import { enrolStudent } from '../studentList/studentListSlice';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

const {Option} = Select;
const {Title} = Typography

const EnrolmentForm = function EnrolmentForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [gender, setGender] = useState('')
    const [department, setDepartment] = useState('')
    const [level, setLevel] = useState('')
    const dispatch = useDispatch()
    const onSubmitForm = ()=>{
        const data = {firstName, lastName, gender, level, department, key: nanoid()}
        console.log(data)
        dispatch(enrolStudent(data))

    }
    return (
        <Layout style={{background: '#fff'}}> 
            <Form layout='vertical' onFinish={onSubmitForm}>
                <Form.Item>
                    <Title level={4}>Enrolment Form</Title>
                </Form.Item>
                <Form.Item label='First Name'>
                    <Input 
                        required 
                        placeholder='Enter first name'
                        type='text'
                        defaultValue={firstName}
                        onChange={(e)=>{setFirstName(e.target.value)}}
                />
                </Form.Item>
                <Form.Item label='Last Name'>
                    <Input 
                        required 
                        placeholder='Enter last name'
                        type='text'
                        defaultValue={lastName}
                        onChange={(e)=>{setLastName(e.target.value)}}
                    />
                </Form.Item>
                <Form.Item>
                    <span style={{ paddingRight: 12 }}>Gender</span>
                    <Radio.Group name='gender' onChange={(e)=>setGender(e.target.value)} value={gender}>
                        <Space size={15}>
                            <Radio value={'Male'}>Male</Radio>
                            <Radio value={'Female'}>Female</Radio>
                        </Space>
                    </Radio.Group>
                </Form.Item>
                <Form.Item>
                    <span style={{ paddingRight: 12 }}>Level</span>
                        <Select 
                            placeholder='Select level' 
                            style={{ width: 124 }} 
                            onChange={ selectedVal => {setLevel(selectedVal)} }
                        >
                            <Option value='Level 1'>Level 1</Option>
                            <Option value='Level 2'>Level 2</Option>
                            <Option value='Level 3'>Level 3</Option>
                            <Option value='Level 4'>Level 4</Option>
                        </Select>
                </Form.Item>
                <Form.Item>
                    <span style={{ paddingRight: 12 }}>Departement:</span>
                    <Select 
                        placeholder='Select department' 
                        style={{ width: 175 }} 
                        onChange={selectedVal => {setDepartment(selectedVal)}}>
                        <Option value='Biology'> Biology </Option>
                        <Option value='Chemistry'> Chemistry </Option>
                        <Option value='Mathematics'> Mathematics </Option>
                        <Option value='Physics'> Physics </Option>
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
export default EnrolmentForm;