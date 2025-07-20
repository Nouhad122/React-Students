import React, { useState, useRef } from 'react'
import { Modal, message } from 'antd'
import StudentForm from '../AllStudents/StudentForm'

const ModalComponent = ({openModal, setOpenModal, onCreate, onUpdate, mode, selectedStudent}) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const formRef = useRef();

  const handleOk = async () => {
    setConfirmLoading(true);
    try {
      await formRef.current.validateFields();
      const values = formRef.current.getFieldsValue();
      
      const success = await (mode === 'create' ? onCreate(values) : onUpdate(selectedStudent.id, values));
      if (success) {
        setOpenModal(false);
        formRef.current.resetFields();
      }
    } catch (error) {
      if (error.errorFields) {
        message.error('Please fill in all required fields');
      } else {
        mode === 'create' ? message.error('An error occured while creating student') :
         message.error('An error occured while updating student');
      }
    } finally {
      setConfirmLoading(false); 
    }
  };
  
  const handleCancel = () => {
    setOpenModal(false);
    formRef.current?.resetFields();
  };
 
  return (
    <>
      <Modal
        title={mode === 'create' ? 'Add Student' : mode === 'update' ? 'Update Student' : 'View Student'}
        open={openModal}
        onOk={mode === 'view' ? handleCancel : handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        style={{textAlign: 'center'}}
        okText={mode === 'create' ? 'Create' : mode === 'update' ? 'Update' : ''}
        cancelText={mode === 'view' ? 'Close' : 'Dismiss'}
      >
        {mode === 'view' && (
          <div>
            <p>Name: {selectedStudent.name}</p>
            <p>Email: {selectedStudent.email}</p>
          </div>
        )}
        {mode !== 'view' && <StudentForm ref={formRef} mode={mode}/>}
      </Modal>
    </>
  )
}

export default ModalComponent
