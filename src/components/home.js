import React, { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {datas } from "./data";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Treeanddnd from './Treeanddnd';


const Home = () => {

  // state for set text from select option
  const[select,setselect]=useState("")

  // state for set data from json server
  const[data,setdata]=useState([])

  // state for store text from search input
  const[search,setsearch]=useState("") 

  //state to store filter data from datastate
  const[filterdatas,setfilterdatas]=useState([])

  // state to store data of a single employee
  const[singledata,setsingledata]=useState([])


     // function to get data from json server by axios
      const getdata=()=>{
           setdata(datas.employeedetails)
           console.log(data)
           setfilterdatas(datas.employeedetails)
           console.log(filterdata)
       }

       // use effect to run getdata function
       useEffect(()=>{
        console.log("working")
        getdata()
       },[])



       // function to show and hide menu css is writen in app.css 
       const[showmenu,setshowmenu]=useState("menu")
       const Handlemenu=()=>{
        if(showmenu==="menu"){
           setshowmenu("menu active")
        }else{
          setshowmenu("menu")
        }
       }

       // state to store the check value for show single employee details
       const[check,setcheck]=useState("")

        // function to show single employee details
        const Handleopen=(id)=>{
           if(check===""){
            setcheck("check")
          }

        // const which has the filter methods for single employee data   
          const singleinfo=data.filter((data)=>{
            return data.id === id
          })
          setsingledata(singleinfo)
          console.log(singleinfo)
        } 

        // function to hide single employee data
          const Handleclose=()=>{
          if(check==="check"){
           setcheck("")
          }
          } 

          // function to search input and filter method for search
         const Handlechange=(e)=>{
          setselect(e.target.value)
          }
         const filterdata=data.filter((data)=>{
          if(select === "ALL")
          {
            return data
          }else if(select === "Manager")
          {
            return data.job_title === select;
          }else if(select === "supervisor") {
            return data.job_title === select;
          }else if(select === "project")
          {
            return data.project ;
          } else if(select === "Team Lead")
          {
            return data.job_title === select;
          }
        })

         // function happens when filter button is clicked
         const Handlefilter=()=>{
              console.log("working")
              setfilterdatas(filterdata)
              console.log(filterdata)
              console.log(data)
            }


    return (
              //header div
           <div className='relative text-white'>
            <div className='w-screen h-[70px] bg-black text-white text-center text-5xl relative'>
               <h1 className='pt-2 cursor-default'>ABC.CO</h1>
            <button onClick={()=>Handlemenu()} className='absolute top-[4px] left-[10px]  hover:text-red-500   ' ><i className=' '><MenuIcon/></i></button>   
            </div>


              {/* this div is for tree structure and employee details */}

              <div className='text-black'>
               {/* if check state is empty it show tree if check state has value it will show emp details */}
                {
                 check === "" ? <div className='bg-gray-50 '>
                  <span className='text-4xl'>TREE STRUCTURE</span>
                  <Treeanddnd/>
                  </div>:

                   //div for single employee details
                  <div>
                      {/* this div is for employee single details */}
                  <div className='  w-screen h-screen  bg-gray-50 flex justify-center items-center'>
                  <div className='  w-[550px] h-[360px] bg-white relative shadow-xl rounded-lg '>
                        {
                          singledata.map((data)=>(
                            <div key={data.id}>
                            <button  onClick={Handleclose} className='absolute top-[2px] right-[0] hover:text-red-500   text-right' ><CloseIcon/></button>
                            <div className='absolute top-[80px] left-[35px]  w-[130px] h-[130px]'>
                            <img src={data.profile}></img>
                            </div>
                            <div className='bg-black w-[500px] h-[70px] mx-auto mt-2 rounded-lg text-right '>
                              <h3 className='text-white text-4xl pt-4 pr-2'>ABC.CO</h3>
                            </div>
                            <div className=''>
                              <h1 className='capitalize text-4xl font-bold pl-[100px] pt-6 text-center' >{data.first_name} {data.last_name}</h1>
                              <h2 className='text-center font-light pl-[100px] pt-4 text-2xl '>{data.job_title}</h2>
                            </div> 
                            <div className='absolute bottom-[20px] left-[26px] bg-gray-100 shadow-xl rounded-lg w-[500px] h-[120px] pl-4 text-justify'>
                               <p>ID : {data.id}</p>
                               <h2>EMAIL : {data.email}</h2>
                               <h2>GENDER : {data.gender}</h2>
                               <h2>PHONE  : {data.phone}</h2>
                               <h2>BRANCH : {data.branch}</h2>
                            </div> 
                            </div>
                          ))
                        }
                  </div>
                  </div>
                </div>

              }
             </div>

             {/* menu div */}

            <div className={showmenu}>

            <button onClick={()=>Handlemenu()} className='absolute  right-[0] p-[2px]   hover:text-red-500  '><i className=''><CloseIcon/></i></button> 
            <h3 className='text-2xl cursor-default'>EMPLOYEE LIST</h3>
            <div className='p-2 translate-y-10 translate-x-4'>
               <input value={search} placeholder='  search here' onChange={(e)=>setsearch(e.target.value)} className="w-[200px] h-[30px] text-black  rounded-md  "></input>
            </div>
              <div className='translate-y-10 translate-x-6'>
                <h3 className=' text-2xl cursor-default '>FILTER BY</h3>
               <select value={select} onChange={Handlechange} className='cursor-pointer rounded w-[150px] h-[30px] text-center text-black'>
                   <option>ALL</option>
                   <option>Manager</option>
                   <option>supervisor</option>
                   <option>project</option>
                   <option>Team Lead</option>
               </select>
               <button onClick={Handlefilter} className='pl-2 pb-4'><i><FilterAltIcon/></i></button>
               </div>

              {/* list div */}
              <div className='rounded-lg bg-white h-[450px] w-[252px] bg-indigo-600 translate-y-12   overflow-scroll '>
                <h3 className='text-center text-4xl  font-bold text-black cursor-default '>LIST</h3>

                   {/* using ternary operator and show the name of employee by filter the name by search and map the data */}
                   <ul className='text-black list-disc pl-8 text-2xl font-bold cursor-pointer'>
                     { data != undefined ? filterdatas.filter((item)=>{
                       return search.toLowerCase() === "" ? item : item.first_name.toLowerCase().includes(search) 
                     }) 
                         .map(item=>(
                           <li onClick={()=>Handleopen(item.id)} key={item.id} className='pb-[2px] '>{item.first_name}</li>
                            )) : <div>no data</div>
                     }
                   </ul>

              </div>
           </div>
        </div>
    );
};

export default Home;