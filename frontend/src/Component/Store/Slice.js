import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
  import axios from 'axios'
   export const createphonebook=createAsyncThunk("phonebook/createphonebook",async(obj)=>
      {
        
        try {
            const response=await axios.post("http://localhost:9000/api/phonebook",obj)
            
         //  console.log(response.data);
            return response.data
        }
        
         catch (error)
          {
            console.log(error);
        }
        
      })

       export  const getphonebook=createAsyncThunk("phonebook/getphonebook",async()=>{

            try {
                const response=await axios.get("http://localhost:9000/api/phonebook")
            //    console.log(response.data);
                return response.data
            }
             catch (error)
              {
                console.log(error);
            }

         })
        

         export  const getviewphonebook=createAsyncThunk("phonebook/getviewphonebook",async(id)=>{

            try {
                const response=await axios.get(`http://localhost:9000/api/phonebook/view/${id}`)
           //   console.log(response.data);
                return response.data
            }
             catch (error)
              {
                console.log(error);
            }

         })
        
         




   const phonebookSlice=createSlice(
    {
        name:"phonebook",
        initialState:{
            data:[],
            isloading:false,
            isError:false,
            view:{},
             filter:[]
        },

        
         
          reducers:{
              filterAction:(state,action)=>{
               // console.log(action);
                if(action.payload==="All")
                {
                   state.filter=[...state.data]
                }
                else
                {
                   const newdata=state.data.filter((item)=>{
                       if(item.groups===action.payload)
                         return item;
                   })
                  
                   state.filter=newdata;
                }
                
              },

              
          SearchAction:(state,action)=>{
            console.log(action);
            const newdata=state.data.filter((item)=>{
              if(item.name.includes(action.payload))
              return item
            }  
          )
            state.filter=newdata;
          }


          },

        


        extraReducers:(builder)=>{
        builder.addCase(createphonebook.fulfilled,(state,action)=>{
         //console.log(action);
         if(action.payload.data)
           state.data=[...state.data,action.payload.data]
            
        })

        builder.addCase(getphonebook.fulfilled,(state,action)=>{
                 //  console.log(action);
                   state.data=[...action.payload.data]
                   state.filter=[...action.payload.data]
        })


        builder.addCase(getviewphonebook.fulfilled,(state,action)=>{
           //  console.log(action);
             state.view={...action.payload.data[0]}
          })

    }

    }
   )

   export const {filterAction,SearchAction}=phonebookSlice.actions   
   export default phonebookSlice