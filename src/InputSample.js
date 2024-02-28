import React, { useRef, useState } from "react";

function InputSample(){
  const [inputs, setInputs] = useState({
    aname:'',
    nickname:''
  })

  const nameInput = useRef();

  const {pullname, nickname} = inputs;

  const onChange = (e) => {
    const { value, name} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const onReset = () => {
    setInputs({
      pullname:'',
      nickname:'',
    });
    nameInput.current.focus();
  };

  return(
    <div>
      <input 
        name="pullname" 
        placeholder="이름" 
        onChange={onChange} 
        value={pullname}
        ref={nameInput}
      />
      <input 
        name="nickname" 
        placeholder="닉네임" 
        onChange={onChange} 
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값 : </b>
        {pullname} {nickname}
      </div>
    </div> 
  )
}

export default InputSample;