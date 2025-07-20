import React, { useState, useEffect } from 'react'
import StudentsCards from '../Components/AllStudents/StudentsCards'
import StudentsTable from '../Components/AllStudents/StudentsTable'
import { Button, message } from 'antd'
import axios from 'axios'
import ModalComponent from '../Components/Shared/ModalComponent'
import { getToken } from '../Auth/auth'

const Students = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [mode, setMode] = useState('create');
  const [selectedStudent, setSelectedStudent] = useState(null);

  const getAuthHeaders = () => {
    const token = getToken();
    return {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };
  };

  useEffect(() => {
    fetchStudents();
  }, []);


  const handleAddStudent = () => {
    setMode('create');
    setOpenModal(true);
  }

  const fetchStudents = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/student`, getAuthHeaders());
      setStudents(response.data.result);
    } catch (error) {
      message.error('An error occured while fetching students');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateStudent = async (values) => {
    try {
      setMode('create');
      await axios.post(`${import.meta.env.VITE_API_URL}/api/student`, values, getAuthHeaders());
      message.success('Student created successfully');
      await fetchStudents();
      return true;
    } 
    catch (error) {
      message.error('An error occured while creating student');
      return false;
    }
  };

  const handleUpdateStudent = async (id, values) =>{
    try {
      setMode('update');
      await axios.put(`${import.meta.env.VITE_API_URL}/api/student/${id}`, values, getAuthHeaders());
      message.success('Student updated successfully');
      await fetchStudents();
      return true;
    } catch (error) {
      message.error('An error occured while updating student');
      return false;
    }
  }

  const handleDeleteStudent = async (id) =>{
    try{
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/student/${id}`, getAuthHeaders());
      message.success('Student deleted successfully');
      await fetchStudents();
    }
    catch(error){
      message.error('An error occured while deleting student');
    }
  }

  return (
    <>
      <div style={{ margin: '2rem 0', textAlign: 'center' }}>
        <h1>Students</h1>
        <Button type='primary' style={{ margin: '1rem 0' }} onClick={handleAddStudent}>Add Student</Button>
      </div>
      <ModalComponent 
       openModal={openModal} 
       setOpenModal={setOpenModal} 
       onCreate={handleCreateStudent} 
       onUpdate={handleUpdateStudent}
       mode={mode}
       selectedStudent={selectedStudent}
      />

      <StudentsCards 
       students={students} 
       loading={loading} 
       setMode={setMode}
       setOpenModal={setOpenModal}
       setSelectedStudent={setSelectedStudent}
      />
      <StudentsTable
       students={students} 
       loading={loading} 
       setMode={setMode} 
       onDelete={handleDeleteStudent} 
       setOpenModal={setOpenModal}
       setSelectedStudent={setSelectedStudent}
       />
    </>
  );
}

export default Students
