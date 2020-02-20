import React,{Fragment,useState} from 'react'
import validator from 'validator'

export const Register = () => {

    const [formData,setFormData]=useState({
        userName:'',
        password:''
    })
    const [formError,setFormError]=useState({
        userNameError:'',
        passwordError:''
    })
    const {userName,password}=formData;
    const {userNameError,passwordError}=formError;

    const onUserNameChange = e => {

        setFormData({...formData,[e.target.name]:e.target.value})
        setFormError({...formError,userNameError:''})
      
    }
    const onPasswordChange = e => {
        setFormData({...formData,[e.target.name]:e.target.value})
        setFormError({...formError,passwordError:''})
    
    }
    const onUserNameBlur = e => {
        handleUserNameChange(userName)
    }

    const onPasswordBlur = e => {
        handlePasswordChange(password)
    }
    
    const onSubmit= async e => {
        e.preventDefault();


    }

    function handleUserNameChange(userName){
        console.log("Typed UserName", userName)
        console.log("Username validator is empty",validator.isEmpty(userName))
        if(validator.isEmpty(userName)){
          setFormError(prevState=>{return{...prevState,userNameError:"Please create your userName."}} )   
        }
  
        else if (!validator.isLength(userName,6,14)){
          setFormError(prevState=>{return{...prevState,userNameError:"Please try again, userName length should be between 6 to 14."}} )
        }
      }
  
      function handlePasswordChange(password){
        console.log("Typed password" , password)
        console.log("Password validator is empty",validator.isEmpty(password))
          if(validator.isEmpty(password)){
              setFormError(prevState=>{
                  return{...prevState,passwordError:"Please create your password."}} )   
            }
          else if(password.toLowerCase() === "password"){
                setFormError(prevState=>{
                    return{...prevState,passwordError:'You can not use the word "password".'}} )   
            }
          else if(password === userName){
                setFormError(prevState=>{
                    return{...prevState,passwordError:"You should not use username as your password."}} )   
            }
          else if(!password.match(/^[A-Za-z0-9_@./#&+-]*$/)){
                setFormError(prevState=>{
                    return{...prevState,passwordError:
                        "Please use alpha numneric and only following special char _@./#&+- with no space"}} )   
            }
  
      }

    return (
        <Fragment>
        <h1>Please Create UserName and Password:</h1>
        <form onSubmit={e=>onSubmit(e)}> 
          <label>UserName:</label>
          <br/>
          <input type="input" 
          placeholder="Enter UserId" 
          name="userName"
          id="userName"
          value={userName}
          onChange={(e)=>onUserNameChange(e)}
          onBlur={e=>onUserNameBlur(e)}
          />
          <br/>
          <div className="err_class">{userNameError ? userNameError : ''}</div>
          
          <label>Password:</label>
          <br/>
          <input type="input" 
          placeholder="Enter your Password" 
          name="password"
          id="password"
          value={password}
          onBlur={e=>onPasswordBlur(e)}
          onChange={(e)=>onPasswordChange(e)}
          />
          <br/>
          <div className="err_class">{passwordError ? passwordError : ''}</div>
          <br/>
          <button type="submit">Submit</button>
        </form>
        </Fragment>
    )
}

export default Register
