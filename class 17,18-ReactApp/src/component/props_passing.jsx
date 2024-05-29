import react from "react";

function Props_passing(props){
            let data=[
                {
                    name:"someone",
                    age:"any",
                    address:"something"
                },
                {
                    name:"somone",
                    age:"an",
                    address:"somethin"
                },
                {
                    name:"omeone",
                    age:"ny",
                    address:"omething"
                },
                
            ];
            let [one, two,three]=data
console.log(one, two, three)

    return(
            <div>
                <button className="btn1">Know my name</button>
               <h1>My name is <i>{props.name}</i></h1>
               <h1>My name is <i>{props.age}</i></h1>
               <h1>My name is <i>{props.address}</i></h1>
            </div>       
    )
}
export default Props_passing;