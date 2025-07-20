import React, { forwardRef, useImperativeHandle } from 'react'
import { Form, Input } from 'antd'

const StudentForm = forwardRef(({mode}, ref) => {
  const [form] = Form.useForm();

  useImperativeHandle(ref, () => ({
    getFieldsValue: () => form.getFieldsValue(),
    validateFields: () => form.validateFields(),
    resetFields: () => form.resetFields(),
  }));

  return (
    <>
      <Form
        form={form}
        layout="vertical"
        style={{ maxWidth: 600 }}
      >
        <Form.Item 
         label="Name" 
         name="name"
         rules={[{ required: true, message: 'Please input the name!' }]}
         >
          <Input />
        </Form.Item>
    {
        mode !== 'update' && (
        <Form.Item
         label="Email"
         name="email"
         rules={[{ required: true, message: 'Please input the email!' }]}
        >
            <Input />
        </Form.Item>
    )}
      </Form>
      </>
  )
});

StudentForm.displayName = 'StudentForm';

export default StudentForm
