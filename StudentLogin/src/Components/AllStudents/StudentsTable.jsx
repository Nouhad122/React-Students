import React from 'react'
import { Table, Space, Button } from 'antd';

const StudentsTable = ({ students, loading, setMode, onDelete, setOpenModal, setSelectedStudent }) => {

  const handleUpdateClick = (student) => {
    setSelectedStudent(student);
    setMode('update');
    setOpenModal(true);
  };

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <p>{text}</p>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Actions',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type='primary' key="1" danger onClick={() => onDelete(record.id)}>Delete</Button>
          <Button type='primary' key="2" onClick={() => handleUpdateClick(record)}>Update</Button>
        </Space>
      ),
    },
  ];

  const data = students.map((student) => ({
    ...student,
    key: student.id,
  }));

  return (
    <Table 
      columns={columns} 
      dataSource={data} 
      loading={loading}
      style={{margin: '3rem 1rem', borderTop: '1px solid var(--blue-color)'}}
    />
  );
};

export default StudentsTable
