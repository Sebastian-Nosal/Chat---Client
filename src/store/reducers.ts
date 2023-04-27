export type action = {
    type: string,
    value?:string|number|object|[]
}

export const addToken = (token:string)=>({type:"ADD_TOKEN",value:token});
export const dropToken = ()=>({type:"DROP_TOKEN"});

export const addGroup = (group:object) => ({type: "ADD_GROUP",value: group});
export const setGroup = (groups:any[]) =>({type: "SET_GROUP",value: groups})
export const dropGroup = (group:number) => ({type: "DROP_GROUP",value: group});
export const clearGroups = () => ({type:"CLEAR_GROUPS"});

export const addUser = (user:object) => ({type: "ADD_USER",value: user});
export const dropUser = (user:number) => ({type: "DROP_USER",value: user});
export const clearUsers = () => ({type:"CLEAR_USERS"});

export const addMessage = (message:object) => ({type: "ADD_MESSAGE",value:message});
export const dropMessage = (message:number) => ({type: "DROP_MESSAGE",value: message});
export const clearMessages = () => ({type:"CLEAR_MESSAGES"});

export function messagesReducer(state:Array<string> = [],action:action)
{
    switch(action.type)
    {
        case "ADD_MESSAGE":
            {
                const newState = [...state]
                if(action.value) 
                {
                    //@ts-ignore
                    newState.push(action.value)
                }
                return newState;
            }
        
        case "DROP_MESSAGE":
            {
                const newState = [...state];
                if(action.value||action.value===0)
                {
                    //@ts-ignore
                    delete newState[action.value];
                }
                return newState; 
            }
        
        case "CLEAR_MESSAGES":
            {
                const newState:string[] = [];
                return newState;
            }

        default:
            {
                return [...state];
            }
    }
}

export function groupsReducer(state:string[] = [],action:action)
{
    switch(action.type)
    {
        case "ADD_GROUP":
            {
                const newState = [...state]
                if(action.value) 
                {
                    //@ts-ignore
                    newState.push(action.value)
                }
                return newState;
            }
        
        case "DROP_GROUP":
            {
                const newState = [...state]
                if(action.value||action.value===0)
                {
                    //@ts-ignore
                    delete newState[action.value];
                }
                return newState; 
            }
        case "SET_GROUP":
            {
                let newState;
                if(Array.isArray(action.value))
                {
                    newState = [...action.value];
                }
                else
                {
                    newState = [action.value]
                }
                console.log(newState);
                return newState;
                
            }
        
        case "CLEAR_GROUPS":
            {
                const newState:string[] = []
                return newState;
            }

            default:
            {
                return [...state];
            }
    }
}

export function usersReducer(state:string[] = [],action:action)
{
    switch(action.type)
    {
        case "ADD_USER":
            {
                const newState = [...state]
                if(action.value) 
                {
                    //@ts-ignore
                    newState.push(action.value)
                }
                return newState;
            }
        
        case "DROP_USER":
            {
                const newState = [...state]
                if(action.value||action.value===0)
                {
                    //@ts-ignore
                    delete newState[action.value];
                }
                return newState; 
            }
        
        case "CLEAR_USERS":
            {
                const newState:string[] = []
                return newState;
            }

        default:
            {
                return [...state];
            }
    }
}

export function tokenReducer(state:string = "",action:action)
{
    switch(action.type)
    {
        case "ADD_TOKEN":
            {
                if(action.value&&typeof action.value==='string') return action.value
                else return "";
            }
        case "DROP_TOKEN":
            {
                return "";
            }
        default:
            {
                return state;
            }
    }
}