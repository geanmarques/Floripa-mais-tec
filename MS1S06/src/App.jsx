import './App.css'
import Card from './components/Card'

function App() {
  const usuario = {
    nome: 'Gean Marques',
    idade: 30,
    foto: "https://media.licdn.com/dms/image/C4D03AQHETt-dBhALpQ/profile-displayphoto-shrink_200_200/0/1652210608170?e=1684368000&v=beta&t=UhgGfRThuh0mCzebsX9kcs7pbxF6UMA6ojMSl8E1veI",
    github: "https://github.com/geanmarques",
    linkedin:"https://www.linkedin.com/in/gean-marques-veloso/",

  }

  return (

    <div>
      <Card usuario={usuario}/>
    </div>
  )
}

export default App
