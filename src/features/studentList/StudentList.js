import React, {useEffect} from 'react';
import { Table, Typography } from 'antd';
import 'antd/dist/antd.css'
import { useSelector, useDispatch } from 'react-redux';
import {fetchAll} from './studentListSlice'

const { Title } = Typography
const StudentList = function StudentsList() {
  useEffect(()=>{
    console.log('Hello')
  })
  const dalibai = useSelector( state => state.students)
  console.log('dalibai ' + dalibai[1].FirstName)
    const columns = [
        {
          title: 'First Name',
          dataIndex: 'FirstName',
          key: 'name',
        },
        {
          title: 'Last Name',
          dataIndex: 'LastName',
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
      /* const dataSource = [
          {
            key: '1',
            FirstName: 'Mike',
            LastName: 'Musa',
            gender: 'Male',
            age: 32,
            department: 'Physics',
          },
          {
            key: '2',
            FirstName: 'Mike',
            LastName: 'Musa',
            gender: 'Female',
            age: 32,
            department: 'Chemistry',
          },
          {
            key: '3',
            FirstName: 'Mike',
            LastName: 'Musa',
            gender: 'Female',
            age: 32,
            department: 'Biology',
          },
          {
            key: '4',
            FirstName: 'Mike',
            LastName: 'Musa',
            gender: 'Male',
            age: 32,
            department: 'Mathematics',
          }
      ] */
      const dataSource = dalibai
    return (
        <Table 
            dataSource={dataSource} 
            columns={columns}
            title={()=> <Title level={4}>Students List</Title>}
        />
    )
}
export default StudentList;