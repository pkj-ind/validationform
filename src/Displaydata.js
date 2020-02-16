import React,{Fragment} from 'react'

export const Displaydata = () => {
    let aadhar="123456789512";
    let showval=aadhar.substr(0, aadhar.length/4) +" "+
    new  Array(aadhar.length+1 - aadhar.length/2 ).join('x') + " "+
    aadhar.substr(aadhar.length-aadhar.length/4, aadhar.length/4);

    return (
        <Fragment>
            <h3>Aadhar: {aadhar}</h3>
            <p>Masked Aadhar: {showval}</p>
        <hr />

        </Fragment>
    )
}

export default Displaydata