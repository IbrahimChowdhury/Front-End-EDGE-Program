import logo from './logo.svg';
import './App.css';
import Functional_com from './component/functional_com';
import react,{ Component } from 'react';
import Props_passing from './component/props_passing';
import Style1 from './stying/style1';
import Module_css from './ModuleCss/module_css';

// class Class_com extends Component{
//   render(){
//       return(
//           <div>
//               <h1>This is Class Component</h1>
 
//           </div>
//       )
//   }
// }



function App() {
  return (
   <div>
        <Functional_com />

        <Props_passing name={"Mehedi"} age={"22"} address={"kusthia"} />
      
        {/* <Class_com /> */}


        {/* 
        tasks:
        make a component about yourself and passing the data using props
        */}



          {/*importing Styling Component  */}
          <Style1/>


          {/* CSS Module */}
          <Module_css/>
        
   </div>
  );
}

export default App;
