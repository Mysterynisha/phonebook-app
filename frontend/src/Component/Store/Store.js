import {configureStore} from '@reduxjs/toolkit'
import phonebookSlice from './Slice'

 const store=configureStore(
    {
        reducer:{
            contact:phonebookSlice.reducer
        }
    }
 )



 export default store