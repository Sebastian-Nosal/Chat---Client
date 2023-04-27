import { configureStore } from "@reduxjs/toolkit";
//import { DevToolsEnhancerOptions } from "@reduxjs/toolkit/dist/devtoolsExtension";
import {messagesReducer, groupsReducer, usersReducer, tokenReducer} from './reducers';

export interface stateInterface
{
    token:string,
    users:Array<object>,
    messages:Array<object>,
    groups:Array<object>
}

export const initialState:stateInterface = {
    token:"",
    users:[],
    messages:[],
    groups:[]
}

const store = configureStore(
    {
        reducer:{
            messages: messagesReducer,
            groups: groupsReducer,
            users: usersReducer,
            token:tokenReducer
        }
    }
)

export default store;