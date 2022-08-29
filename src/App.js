import Content from './Content.json';

const assignment1 = Content.map(
  
  (assignment1) =>{
    return(
      <div key={assignment1.item} className="border rounded shadow p-3 mb-3">
        <h1>{assignment1.item}</h1>
        <p>Object Class: {assignment1.objectClass}</p>
        <p>Containment: {assignment1.containment}</p>
        <p>Description: {assignment1.description}</p>
        <p className ="text-center"><img src={assignment1.image} alt="image" className="borer rounded" style ={{maxWidth:"250px"}}></img></p>
      </div>
    );
  }

)

function App() {
  return (
    <div>
      {assignment1}
    </div>
  );
}

export default App;
