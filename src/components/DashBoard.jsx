import React, { useState ,useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import {toast} from 'react-hot-toast';
import { useNavigate  } from 'react-router-dom';
import AxiosService from '../utils/AxiosService';
import ApiRouter from '../utils/ApiRouter';
import Button from 'react-bootstrap/Button';

function DashBoard() {
  let[data,setData]=useState([])
  let navigate=useNavigate()

   let getData=async()=>{
    try{
      let response=await AxiosService.get(ApiRouter.BLOG_APP.path)
      if(response.status===200){
          setData(response.data)
      }
    }

    catch(error){
      toast.error(error.response.message ||" Internal Server Error")
    }
      
    }

  useEffect(()=>{
    getData()
  },[])
  let handleDelete=async(id)=>{
    try{
        let response=await AxiosService.delete(`${ApiRouter.BLOG_APP.path}/${id}`)
        if(response.status===200)
          {
            toast.success("Data deleted successfully")
            getData()
          }
    }
    catch(error){
      toast.error(" Internal Server Error")
    }
  }
  return <>
  <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
          <th>Street</th>
          <th>Suite</th>
          <th>City</th>
          <th>Zipcode</th>
          <th>Latitude</th>
          <th>Longtitude</th>
          <th>Phone</th>
          <th>Website</th>
          <th>Company</th>
          <th>catch Phrase</th>
          <th>Bs</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((e,i)=>{
            return <tr key={i}>
              <td>{i+1}</td>
              <td>{e.name}</td>
              <td>{e.username}</td>
              <td>{e.email}</td>
              <td>{e.address.street}</td>
              <td>{e.address.suite} </td>
              <td>{e.address.city} </td>
              <td>{e.address.zipcode} </td>
              <td>{e.address?.geo?.lat} </td>
              <td>{e.address?.geo?.lng} </td>
              <td>{e.phone} </td>
              <td>{e.website} </td>
              <td>{e.company.name} </td>
              <td>{e.company.catchPhrase} </td>
              <td>{e.company.bs} </td>
              <td>        
              <Button variant="primary" onClick={()=>navigate(`/view/${e.id}`)}>Edit</Button><br/>
              <Button variant="danger" onClick={()=>handleDelete(e.id)}>Del</Button>
              </td>
            </tr>

          })
        }
      
      </tbody>
    </Table>
  </>
}

export default DashBoard