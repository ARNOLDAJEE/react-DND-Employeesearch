import { useState } from "react";
import React from 'react';
import { datas } from "./data"
import { DragDropContext,Droppable,Draggable } from 'react-beautiful-dnd';


const Treeanddnd = () => {

    const [empdetails,setempdetails]=useState(datas.employeedetails)

   // const [supervicer,setsupervicer]=useState()

        let supervicer =empdetails.filter((item)=>{
         return    item.job_title === "supervisor"
          })

        console.log(supervicer)

        let teamlead =empdetails.filter((item)=>{
            return    item.job_title === "Team Lead"
             })

          // console.log(teamlead)


          let developer =empdetails.filter((item)=>{
            return     item.job_title === " Developer" ||  item.job_title === "Senior Developer"
             })

           console.log(developer)



    const Handledrag=(result)=>{
      console.log(result)
        if (!result.destination) {
            return;
          }
        if(result.destination.droppableId === "supervisor")  {
           const name=result.destination.droppableId
            console.log(name)

           let startIndex =  result.source.index
             console.log(startIndex)
           let endIndex =    result.destination.index



           const Empnew = Array.from(supervicer);
              console.log(Empnew)
           const valueone=Empnew[endIndex].project
           const valuetwo=Empnew[startIndex].project

           console.log(valueone)  

           console.log(valuetwo)  


           const [removed] = Empnew.splice(startIndex, 1);


           console.log([removed])  


           Empnew.splice(endIndex, 0, removed);
           supervicer=Empnew
           console.log(Empnew[endIndex])
           removed.project=valueone
           Empnew[startIndex].project=valuetwo
              }

           //for teamlead
           else if(result.destination.droppableId === "teamlead"){
            const name=result.draggableId
            console.log(result)
            console.log(name)
            let startIndex =  result.source.index
              console.log(startIndex)
            let endIndex =    result.destination.index



            const Empnew = Array.from(teamlead);
               console.log(Empnew)
            const valueone=Empnew[endIndex].project
            const valuetwo=Empnew[startIndex].project

            //console.log(valueone)  

           // console.log(valuetwo)  


            const [removed] = Empnew.splice(startIndex, 1);


            console.log([removed])  


            Empnew.splice(endIndex, 0, removed);
            teamlead=Empnew
            console.log(Empnew[endIndex])
            removed.project=valueone
            Empnew[startIndex].project=valuetwo
           }

           //for teamone
           else if(result.destination.droppableId === "developer"){
            const name=result.destination.droppableId

            let startIndex =  result.source.index
              console.log(startIndex)
            let endIndex =    result.destination.index



           const Empnew = Array.from(developer);
               console.log(Empnew)
            const valueone=Empnew[endIndex].project
            const valuetwo=Empnew[startIndex].project

            console.log(valueone)  

            console.log(valuetwo)  


            const [removed] = Empnew.splice(startIndex, 1);


            console.log([removed])  


            Empnew.splice(endIndex, 0, removed);
            developer=Empnew
            console.log(Empnew[endIndex])
            removed.project=valueone
            Empnew[startIndex].project=valuetwo
           }



        }



    return (

        <div className="relative">
          <DragDropContext onDragEnd={Handledrag}>
              {/* manager part */}

          <div className="flex  justify-center items-center mb-[50px]">
            {
                empdetails.filter((item)=>{
                    return item.job_title === "Manager"
                }).map((item,index)=>(

                         <div key={item.id} className='w-[200px] h-[130px] bg-gray-50 shadow-xl rounded-lg relative '>
                                    <div className='w-[180px] h-[30px] bg-black text-white mx-auto text-right p-[1px] mt-[4px] rounded-md'>
                                        ABC.CO
                                    </div>
                                    <div className='w-[50px] h-[50px] pt-6 pl-2'>
                                    <img src={item.profile}></img>
                                    </div>
                                    <div className='absolute top-[32px] right-[12px]'>
                                        <h1 className='capitalize font-bold '>{item.first_name} {item.last_name}</h1>
                                        <h2>{item.job_title}</h2>
                                        <h3>ID : {item.id}</h3>
                                        <h3 className="capitalize">BRANCH : {item.branch}</h3>
                                    </div>
                          </div>

                ))
            }
          </div>
          <div className="bottmline"></div>
          <div className="h-[50px] ">
                           <div className="supervisorborder w-[750px] h-[50px]  ml-[260px] ">
                           <div className="w-[4px] h-[50px] bg-black ml-[376px]"></div>
                           </div> 
                        </div>

            {/* supervisor part */}
            <Droppable  droppableId="supervisor" direction='horizontal'>
                {(provided,snapshot)=>(


                    <div 
                    {...provided.droppableProps}
                     ref={provided.innerRef}
                     className="flex  justify-center items-center  border-black relative">
                       <div className="topline1 mx-auto absolute"></div>
                      <div className="topline2 mx-auto absolute"></div>
                      <div className="topline3 mx-auto absolute"></div> 

                    {
                          supervicer.map((item,index)=>(
                            <>

                            <Draggable key={item.id} draggableId={item.id} index={index}>
                            {(provided,snapshot)=>(
                            <div 
                            ref={provided.innerRef}
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}                
                            key={item.id} className=' w-[200px] h-[130px] bg-gray-50 shadow-xl rounded-lg relative mx-[80px] '>
                            <div className='w-[180px] h-[30px] bg-black text-white mx-auto text-right p-[1px] mt-[4px] rounded-md'>
                                ABC.CO
                            </div>
                            <div className='w-[50px] h-[50px] pt-6 pl-2'>
                            <img src={item.profile}></img>
                            </div>
                            <div className='absolute top-[32px] right-[12px]'>
                                <h1 className='capitalize font-bold '>{item.id} {item.first_name}</h1>
                                <h2>{item.job_title}</h2>
                                <h3>ID : {item.id}</h3>
                                <h3 className="capitalize">Project : {item.project}</h3>
                            </div>
                             </div>

                            )}

                          </Draggable> 
                          </>   
                          ))

                    }

                     {provided.placeholder}
                    </div>  

                )}

          </Droppable>    


          {/* Team lead part */}
          <Droppable  droppableId="teamlead" direction='horizontal'>
                {(provided,snapshot)=>(
                    <div 
                    {...provided.droppableProps}
                     ref={provided.innerRef}
                     className="flex  justify-center items-center   relative">
                      <div className="topline1 mx-auto absolute"></div>
                      <div className="topline2 mx-auto absolute"></div>
                      <div className="topline3 mx-auto absolute"></div>
                    {
                          teamlead.map((item,index)=>(
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                            {(provided,snapshot)=>(
                            <div 
                            ref={provided.innerRef}
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}                
                            key={item.id} className='w-[200px] h-[130px] bg-gray-50 shadow-xl rounded-lg relative mx-[80px] mt-[50px]'>
                            <div className='w-[180px] h-[30px] bg-black text-white mx-auto text-right p-[1px] mt-[4px] rounded-md'>
                                ABC.CO
                            </div>
                            <div className='w-[50px] h-[50px] pt-6 pl-2'>
                            <img src={item.profile}></img>
                            </div>
                            <div className='absolute top-[32px] right-[12px]'>
                                <h1 className='capitalize font-bold '>{item.id} {item.last_name}</h1>
                                <h2>{item.job_title}</h2>
                                <h3>ID : {item.id}</h3>
                                <h3 className="capitalize">Project : {item.project}</h3>
                            </div>
                             </div>

                            )}

                          </Draggable>    
                          ))

                    }
                     {provided.placeholder}
                    </div>                      
                )}

          </Droppable>  
          <div className="flex relative h-[50px]">
                      <div className="topline7  absolute left-[280px] "></div>
                      <div className="topline8  absolute left-[50%] "></div>
                      <div className="topline9  absolute right-[280px] "></div>
          </div>
          <div className=" h-[50px] flex relative">
                <div className=" toplinedeveloper h-[50px] w-[320px] absolute left-[40px] ">
                <div className="w-[4px] h-[50px] bg-black ml-[55%]"></div>
                </div>
                <div className=" toplinedeveloper h-[50px] w-[320px] absolute left-[484px]  ">
                <div className="w-[4px] h-[50px] bg-black ml-[152px]"></div>
                </div>
                <div className=" toplinedeveloper h-[50px] w-[320px] absolute  right-[40px] ">
                <div className="w-[4px] h-[50px] bg-black ml-[48%]"></div>
                </div>
                   {/*<div className="topline4 mx-auto absolute top-[0] left-[25px]"></div>
                   <div className="topline5 mx-auto absolute"></div>
                   <div className="topline6 mx-auto absolute"></div> */}
          </div>
         {/*developer part*/}
        <Droppable  droppableId="developer" direction='horizontal'>
         {(provided,snapshot)=>(

            <div 
            {...provided.droppableProps}
            ref={provided.innerRef} 
            className="  w-screen flex  ">

            {/* team one */}

              <div className="w-[500px]  flex relative ">

              {
                  developer.map((item,index)=>(
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided,Screenshot)=>(
                      <div 
                       {...provided.dragHandleProps}
                       {...provided.draggableProps}
                       ref={provided.innerRef}  
                      key={item.id} className='w-[100px] h-[220px] bg-white shadow-xl rounded-lg relative mx-[34px] '>
                      <div className='developer w-[70px] h-[25px] bg-black text-white mx-auto text-center p-[1px] rounded-md'>
                          ABC.CO
                      </div>
                      <div className='w-[50px] h-[50px] mx-auto mt-[1px]  text-center'>
                      <img src={item.profile}></img>
                      </div>
                      <div className=' top-[25px] right-[20px] text-center'>
                          <h1 className='capitalize font-bold '>{item.first_name}</h1>
                          <h2>{item.job_title}</h2>
                          <h3>ID : {item.id}</h3>
                        
                      </div>
                    </div>
                    )}

                     </Draggable>    
                          ))
                }  

              </div>                            
        </div> 

         )}   

          </Droppable>

          </DragDropContext> 

        </div>


    );
};

export default Treeanddnd;