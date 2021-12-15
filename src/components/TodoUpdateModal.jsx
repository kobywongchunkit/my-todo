import React, { useState } from 'react';
import { Modal ,Input } from 'antd';
import { updateTodo } from '../apis/todo';
import { useDispatch } from 'react-redux';
import { UPDATE_TODO } from '../constants/constants';
const TodoUpdateModal = (props) => {
  const {id,text} = props; 
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalText, setModalText] = useState(text);
  const dispatch = useDispatch();
  

  const showModal = (event) => {
    event.stopPropagation();
    setModalText(props.text); 
    setIsModalVisible(true);
  };

  const handleOk = (event) => {
    event.stopPropagation();
    console.log(modalText)    
    updateTodo(id,{text:modalText.target.value}).then((reponse)=>{
      console.log(reponse)
      dispatch({type:UPDATE_TODO,payload: reponse})
    });
    setIsModalVisible(false);

  };

  const handleCancel = (event) => {
    event.stopPropagation();
    setIsModalVisible(false);
  };

  return (
    <>
      <span className='cross' onClick={showModal}>✏️</span>
      <Modal title="Edit Todo" visible={isModalVisible} onOk={handleOk}   onCancel={handleCancel} destroyOnClose={true}>
        <Input onChange={setModalText} defaultValue={modalText}/>
      </Modal>
    </>
  );
};

export default TodoUpdateModal;