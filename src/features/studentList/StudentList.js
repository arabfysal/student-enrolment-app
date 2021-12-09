import React, {useEffect} from 'react';
import { Table, Typography } from 'antd';
import 'antd/dist/antd.css'
import { useSelector } from 'react-redux';

const { Title } = Typography
const StudentList = function StudentsList() {
  useEffect(()=>{
    console.log('Hello')
  })
  const students = useSelector( state => state.students)
  /* console.log('students ' + students[1].firstName) */
    const columns = [
        {
          title: 'First Name',
          dataIndex: 'firstName',
          key: 'name',
        },
        {
          title: 'Last Name',
          dataIndex: 'lastName',
          key: 'lastName',
        },
        {
          title: 'Gender',
          dataIndex: 'gender',
          key: 'gender',
        },
        {
            title: 'Departement',
            dataIndex: 'department',
            key: 'department',
          },
          {
            title: 'Level',
            dataIndex: 'level',
            key: 'level',
          }
      ];
      const dataSource = students
    return (
        <Table 
            dataSource={dataSource} 
            columns={columns}
            title={()=> <Title level={4}>Students List</Title>}
        />
    )
}
export default StudentList;