import * as React from 'react';


export const CircleOfFifths = () => {

    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    
    return <>
         <div className="container py-4 m-auto">
            <svg
                className="m-auto text-lime-900"
                version="1.1"
                width="800"
                height="800"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 400 400" >
            <circle
                cx="50%"
                cy="50%"
                r="40%"
                stroke="currentColor"
                strokeWidth="5"
                fill="transparent" />

          
        </svg>
            
    </div>
</>
}
export default CircleOfFifths