

const State_lift_change = ({handleMsg}) => {
    const messages = ['Olá', 'Oi', 'Tudo bem?']

  return (
    <div>
        <button onClick={()=> handleMsg(messages[0])}>1</button>
        <button onClick={()=> handleMsg(messages[1])}>2</button>
        <button onClick={()=> handleMsg(messages[2])}>3</button>
    </div>
  )
}

export default State_lift_change