import React,{Fragment} from 'react'

export const Displaydata = () => {
    let aadhar="1234567895124521";
    let showval=aadhar.substr(0, aadhar.length/4) +" "+
    new  Array(aadhar.length+1 - aadhar.length/2 ).join('x') + " "+
    aadhar.substr(aadhar.length-aadhar.length/4, aadhar.length/4);

    return (
        <Fragment>
            <p><b>Aadhar:</b> {aadhar.match(/.{4}/g).join(" ")}</p>
            <p><b>Masked Aadhar:</b> {showval}</p>
        <hr />

        </Fragment>
    )
}

export default Displaydata