import './App.css'
import APIResponse  from './assets/APIResponse.png';
import Backend  from './assets/BackendCode.png';
import Frontend  from './assets/Frontend.png';
import FrontCode  from './assets/FrontendCode.png';
function Card({data}){
  return(
    <div className='card' id={data.id}>
      <h1>{data.name}</h1>
      <img src={data.imageLink} alt="Image" height={400} width={650}/>
    </div>
  )
}
function App() {
  return (
    <>
      <div className="box-grid">
        <Card data = {{imageLink: FrontCode,id: "frontend_code",name: "Frontend Code"}}/>
        <Card data = {{imageLink: Backend,id: "backend_code",name: "Backend Code"}}/>
        <Card data = {{imageLink: APIResponse,id: "api_response",name: "API Response"}}/>
        <Card data = {{imageLink: Frontend,id: "UI",name: "UI"}}/>
      </div>
    </>
  )
}
export default App;