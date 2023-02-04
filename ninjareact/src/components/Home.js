import { useState } from "react";

const Home = () => {

    // let usrname = 'tom'
    const [usrname, setName] = useState('tom');
    const shoot = () => {
        // usrname = 'sara'

        setName('sara') 


        // if (usrname == 'sara') {
        //     setName('tom')
        // } else {
        //   setName('sara')   
        // }
       
        console.log(usrname)
     }
    
    // const call = (name,e) => {
    //     alert("suuuuuuuuuuu " + name);
    //     console.log(e.timeStamp)
    // }
    
    return (  
        <>
            <div className="home">
                <p>{usrname}</p>

                <button onClick={shoot}>Take the shot!</button>
                
                {/* <button onClick={(e) => {
                    call('tom',e)
                }}>cr7</button> */}

            </div>
        </>
    );
}
 
export default Home;  