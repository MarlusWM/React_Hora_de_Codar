import './App.css'
import FirstForm from './components/FirstForm'
import SecondForm from './components/SecondForm'

function App() {

  return (
    <>
    <div>
      <h2>FORMULÁRIO</h2>
      <FirstForm/>
    </div>

    <div>
      <SecondForm user={{name:'Leandro', email:'leandro@gmail.com'}}/>
    </div>
    </>
  )
}

export default App
