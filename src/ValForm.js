import React,{useState, Fragment, useEffect} from 'react'
import validator from 'validator'
import { Redirect } from 'react-router-dom'

const ValForm = () => {
   const [formData,setFormData]=useState({
        pinCode:'',
        aadhar:''
    })
    const [formError,setFormError]=useState({
        zipError:'',
        aadharError:''
    })
    const {pinCode,aadhar}=formData;
    const {zipError,aadharError}=formError;

    useEffect(() => {

        if (window.performance) {
            if (performance.navigation.type === 1) {
              console.log( "stay on the same page" );
              window.location.href="/valform"
            } else {
              alert( "This page is not reloaded");
            }
          }
        
    }, [])

    const onZipChange = e => {

        setFormData({...formData,[e.target.name]:e.target.value})
        setFormError({...formError,zipError:''})
      
    }

    const onZipBlur = e => {
        handleZipChange(pinCode)
    }
    const onAadharChange = e => {
        setFormData({...formData,[e.target.name]:e.target.value})
        setFormError({...formError,aadharError:''})
    
    }
    const onAadharBlur = e => {
        handleAadharChange(pinCode)
    }

    const onSubmit = async e => {
        e.preventDefault();
        if (validator.isEmpty(pinCode)){
           // setFormError({...formError,zipError:"Please enter pin code."})
           setFormError(prevState=>{return{...prevState,zipError:"Please enter pin code."}} )
        }
        if (validator.isEmpty(aadhar)){
           setFormError(prevState=>{return{...prevState,aadharError:"Please enter aadhar number."}} )
        }

        if(!validator.isEmpty(pinCode) && !validator.isEmpty(aadhar) 
        && zipError === "" && aadharError === ""){
        // return  <Redirect to='/displaydata' />
        window.location.href="/displaydata";
        }
    }
    

    function handleZipChange(pinCode){
      if(!validator.isInt(pinCode)){
        setFormError(prevState=>{return{...prevState,zipError:"Please enter number only."}} )   
      }

      else if (!validator.isLength(pinCode,6)){
        setFormError(prevState=>{return{...prevState,zipError:"Please enter 6 digits pin code."}} )
      }
    }

    function handleAadharChange(aadhar){
        if(!validator.isInt(aadhar)){
            setFormError(prevState=>{return{...prevState,aadharError:"Please enter number only."}} )   
          }

    }
    return (
        <Fragment  >
            <div>
            <h1>Please make sure it's you only:</h1>
        <form onSubmit={e=>onSubmit(e)}> 
          <label>PinCode:</label>
          <br/>
          <input type="input" 
          placeholder="Enter your pin code" 
          name="pinCode"
          id="pinCode"
          value={pinCode}
          onBlur={e=>onZipBlur(e)}
          onChange={(e)=>onZipChange(e)}/>
          <br/>
          <div className="err_class">{zipError ? zipError : ''}</div>
          
          <label>Aadhar Number:</label>
          <br/>
          <input type="input" 
          placeholder="Enter your Aadhar number" 
          name="aadhar"
          id="aadhar"
          value={aadhar}
          onBlur={e=>onAadharBlur(e)}
          onChange={(e)=>onAadharChange(e)}/>
          <br/>
          <div className="err_class">{aadharError ? aadharError : ''}</div>
          <br/>
          <button type="submit">Submit</button>
        </form>
        </div>
        </Fragment>
    )
}

export default ValForm