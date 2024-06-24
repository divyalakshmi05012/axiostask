import React,{useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate} from 'react-router-dom';
import AxiosService from '../utils/AxiosService';
import ApiRouter from '../utils/ApiRouter';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';

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
  let{id}=useParams()
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
  let getData= async()=>{
    try{
        let response=await AxiosService.get(`${ApiRouter.BLOG_APP.path}/${id}`)
        console.log(response)
        if(response.status===200 || response.status===201)
            {
              setName(response.data.name)
              setUser(response.data.username)
              setEmail(response.data.email)
              setStreet(response.data.address.street)
              setSuite(response.data.address.suite)
              setCity(response.data.address.city)
              setCode(response.data.address.zipcode)
              setLat(response.data.address.geo.lat)
              setLng(response.data.address.geo.lng)
              setPhone(response.data.phone)
              setWeb(response.data.website)
              setCompany(response.data.company.name)
              setCat(response.data.company.catchPhrase)
              setBs(response.data.company.bs)
            }
    }
    catch(error){
        toast.error("Internal Server Error")
      }
}
useEffect(()=>{
  if(id)
    getData(id)
},[])
let handleSubmit = async()=>{
  try{
    let response = await AxiosService.put(`${ApiRouter.BLOG_APP.path}/${id}`,newUser)
    if(response.status===200)
    {
      toast.success("Blog Edited Successfully!!")
      navigate('/dashboard')
    }
  } 
  catch(error){
    toast.error(error.response.message || "Internal Server Error")
  }
}

  return <>
   <Form>
    <div className='name-group'>
      <Form.Group className="name" >
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Enter Your Name" value={name} onChange={(e)=>setName(e.target.value)}  />
      </Form.Group>
      <Form.Group className="username" >
            <Form.Label>UserName</Form.Label>
            <Form.Control type="text" placeholder="Enter Your UserName" value={user} onChange={(e)=>setUser(e.target.value)} />
      </Form.Group> 
    </div>
      <Form.Group className="email" >
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Your Email"  value={email} onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>
      <br/>
      <div className='address-wrapper'>
        <div className="address">
      <Form.Group >
        <Form.Label>Address</Form.Label>
        <br/>  
            <Form.Label>Street</Form.Label>
            <Form.Control type="address" className='input1' placeholder="Enter Your street" value={street} onChange={(e)=>setStreet(e.target.value)}  />
            <Form.Label>Suite</Form.Label>
            <Form.Control type="address" className='input1' placeholder="Enter Your suite" value={suite} onChange={(e)=>setSuite(e.target.value)}  />
            <Form.Label>City</Form.Label>
            <Form.Control type="address"className='input1' placeholder="Enter Your city"  value={city} onChange={(e)=>setCity(e.target.value)} />
            <Form.Label>Zipcode</Form.Label>
            <Form.Control type="address" className='input1' placeholder="Enter Your Zipcode" value={code} onChange={(e)=>setCode(e.target.value)} />
            <Form.Label>Latitude</Form.Label>
            <Form.Control type="address" className='input1' placeholder="Enter Your Latitude" value={lat} onChange={(e)=>setLat(e.target.value)}  />
            <Form.Label>Longitude</Form.Label>
            <Form.Control type="address" className='input1' placeholder="Enter Your Longitude" value={lng}  onChange={(e)=>setLng(e.target.value)} />
       </Form.Group>
       </div>
       <div className='company-address'>
      <Form.Group >
      <Form.Group className="mb-3" >
        <Form.Label>Phone</Form.Label>
        <Form.Control type="email" placeholder="Enter Your Phone Number" value={phone} onChange={(e)=>setPhone(e.target.value)} />
      </Form.Group><Form.Group className="mb-3" >
        <Form.Label>Website</Form.Label>
        <Form.Control type="email" placeholder="Enter Your Website" value={web} onChange={(e)=>setWeb(e.target.value)} />
      </Form.Group>
        <Form.Label>Company Name</Form.Label>
        <Form.Control type="email" placeholder="Enter Company Name" value={company} onChange={(e)=>setCompany(e.target.value)} />
        <Form.Label>catchPhrase</Form.Label>
        <Form.Control type="email" placeholder="Enter Catchphrase"  value={cat} onChange={(e)=>setCat(e.target.value)} />
        <Form.Label>bs</Form.Label>
        <Form.Control type="email" placeholder="Enter bs"value={bs} onChange={(e)=>setBs(e.target.value)} />
      </Form.Group>
      </div>
      </div>
      <br/>
      <Button variant="primary" className='button' onClick={handleSubmit} >
        Submit
      </Button>
    </Form>
  </>
  
}

export default Create