import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import AxiosService from '../utils/AxiosService';
import ApiRouter from '../utils/ApiRouter';
import { toast } from 'react-hot-toast';

function Create() {
  let[name,setName]=useState("")
  let[user,setUser]=useState("")
  let[email,setEmail]=useState("")
  let[street,setStreet]=useState("")
  let[suite,setSuite]=useState("")
  let[city,setCity]=useState("")
  let[code,setCode]=useState("")
  let[lat,setLat]=useState("")
  let [lng,setLng]=useState("")
  let [phone,setPhone]=useState("")
  let[web,setWeb]=useState("")
  let[company,setCompany]=useState("")
  let[cat,setCat]=useState("")
  let[bs,setBs]=useState("")
  let navigate=useNavigate()

  const newUser = {
    name,
    username: user,
    email,
    address: {
      street,
      suite,
      city,
      zipcode: code,
      geo: {
        lat,
        lng,
      },
    },
    phone,
    website: web,
    company: {
      name: company,
      catchPhrase: cat,
      bs,
    },
  };
  let handleSubmit= async()=>{
    try{
      
  
        let response=await AxiosService.post(ApiRouter.BLOG_APP.path,newUser)
        if(response.status===200 || response.status===201)
            {
                toast.success("Data Submitted Successfully")
                navigate('/dashboard')
            }
    }
    catch(error){
        toast.error("Internal Server Error")
      }
}

  return <>
   <Form>
    <div className='name-group'>
      <Form.Group className="name" >
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Enter Your Name" onChange={(e)=>setName(e.target.value)}  />
      </Form.Group>
      <Form.Group className="username" >
            <Form.Label>UserName</Form.Label>
            <Form.Control type="text" placeholder="Enter Your UserName" onChange={(e)=>setUser(e.target.value)} />
      </Form.Group> 
    </div>
      <Form.Group className="email" >
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Your Email" onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>
      <br/>
      <div className='address-wrapper'>
        <div className="address">
      <Form.Group >
        <Form.Label>Address</Form.Label>
        <br/>  
            <Form.Label>Street</Form.Label>
            <Form.Control type="address" className='input1' placeholder="Enter Your street" onChange={(e)=>setStreet(e.target.value)}  />
            <Form.Label>Suite</Form.Label>
            <Form.Control type="address" className='input1' placeholder="Enter Your suite" onChange={(e)=>setSuite(e.target.value)}  />
            <Form.Label>City</Form.Label>
            <Form.Control type="address"className='input1' placeholder="Enter Your city" onChange={(e)=>setCity(e.target.value)} />
            <Form.Label>Zipcode</Form.Label>
            <Form.Control type="address" className='input1' placeholder="Enter Your Zipcode" onChange={(e)=>setCode(e.target.value)} />
            <Form.Label>Latitude</Form.Label>
            <Form.Control type="address" className='input1' placeholder="Enter Your Latitude" onChange={(e)=>setLat(e.target.value)}  />
            <Form.Label>Longitude</Form.Label>
            <Form.Control type="address" className='input1' placeholder="Enter Your Longitude"  onChange={(e)=>setLng(e.target.value)} />
       </Form.Group>
       </div>
       <div className='company-address'>
      <Form.Group >
      <Form.Group className="mb-3" >
        <Form.Label>Phone</Form.Label>
        <Form.Control type="email" placeholder="Enter Your Phone Number" onChange={(e)=>setPhone(e.target.value)} />
      </Form.Group><Form.Group className="mb-3" >
        <Form.Label>Website</Form.Label>
        <Form.Control type="email" placeholder="Enter Your Website"  onChange={(e)=>setWeb(e.target.value)} />
      </Form.Group>
        <Form.Label>Company Name</Form.Label>
        <Form.Control type="email" placeholder="Enter Company Name" onChange={(e)=>setCompany(e.target.value)} />
        <Form.Label>catchPhrase</Form.Label>
        <Form.Control type="email" placeholder="Enter Catchphrase" onChange={(e)=>setCat(e.target.value)} />
        <Form.Label>bs</Form.Label>
        <Form.Control type="email" placeholder="Enter bs" onChange={(e)=>setBs(e.target.value)} />
      </Form.Group>
      </div>
      </div>
      <br/>
      <Button variant="primary" className='button' onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  </>
  
}

export default Create