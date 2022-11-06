import { useState } from "react"

function Lists() {

    const [numbers, setNumbers] = useState([6, 2])

    // const elemenets = numbers.map((number) => {     //can be also declared here and on place of the function below write {elements}
    //     return <p>{number} Hello brooooo</p>
    // })

    const handleClick = () => {
        console.log("click is handled")
        const newArray = [...numbers]   //new array
        newArray.push(10) //changing array
        setNumbers(newArray)   //setting the state to the new array
    }

    return (
        <div>
            {numbers.map((number, i) => {
                return <p key={i}>{number} Hello brooooo</p>
            })}
            <button onClick={handleClick}>Add item lists</button>
        </div>


    )
}

//have the key so react doesnt complain
export default Lists