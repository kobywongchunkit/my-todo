import React, { useState } from 'react';
import { Modal ,Input } from 'antd';
import { updateTodo } from '../apis/todo';
import { useDispatch } from 'react-redux';
import { UPDATE_TODO } from '../constants/constants';

const TodoUpdateModal = (props) => {
  const {id,text,setIsModalVisible,isModalVisible} = props; 
  const [modalText, setModalText] = useState(text);
  const dispatch = useDispatch();
  

  const handleOk = () => {
    if(modalText !== text){
      updateTodo(id,{text:modalText}).then((reponse)=>{
        dispatch({type:UPDATE_TODO,payload: reponse})
      });
    }
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
      <Modal title={"Edit Todo: "+text} visible={isModalVisible} onOk={handleOk}  onCancel={handleCancel} destroyOnClose={true}>
        <Input onChange={text => setModalText(text.target.value)} defaultValue={modalText}/>
      </Modal>
  );
};

export default TodoUpdateModal;