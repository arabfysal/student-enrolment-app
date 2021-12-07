import React from 'react';
import { Table, Typography } from 'antd';
import 'antd/dist/antd.css'
import { useSelector, useDispatch } from 'react-redux';
import {fetchAll} from './studentListSlice'

const { Title } = Typography
const StudentList = function studentsList() {
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
            key: 'departement',
          }
      ];
      const dataSource = [
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
      ]
    return (
        <Table 
            dataSource={dataSource} 
            columns={columns}
            title={()=> <Title level={4}>Students List</Title>}
        />
    )
}
export default StudentList;