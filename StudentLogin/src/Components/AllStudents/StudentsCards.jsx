import React from 'react'
import { Col, Row, Card, Typography, Button, Spin } from 'antd'

const StudentsCards = ({students, loading, setOpenModal, setMode, setSelectedStudent}) => {
    const {Title, Text} = Typography;
  if (loading) {
    return (
      <div style={{ textAlign: 'center', margin: '2rem' }}>
        <Spin size="large" />
      </div>
    );
  }

  if (students.length === 0) {
    return (
      <div style={{ textAlign: 'center', margin: '5rem' }}>
        <p>No students found</p>
      </div>
    );
  }

  const handleViewDetails = (student) => {
    setSelectedStudent(student);
    setMode('view');
    setOpenModal(true);
  }

  return (
    <Row gutter={[30,30]} style={{ width: '100%', margin: '0 auto' }}>
      {
        students.map((student) => (
          <Col key={student.id} className="gutter-row" xs={24} sm={12} md={6}>
          <Card 
          style={{cursor: 'default'}}
          hoverable
          actions={[
          <Button type='primary' key='1' onClick={() => handleViewDetails(student)}>View Details</Button>
          ]}>

          <Title level={4}>{student.name}</Title>
          <Text type='secondary'>{student.email}</Text>
        </Card>
        </Col>
        ))
      }
      
    </Row>
  )
}

export default StudentsCards
