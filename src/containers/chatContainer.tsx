import {useState, useEffect} from 'react';
import axios from 'axios';
import { groupsURL, meURL } from '../config';
import { useSelector, useDispatch } from 'react-redux';
import MembersContainer from './membersContainer';
import MessagesContainer from './messagesContainer';
import GroupContainer from './groupContainers';
import { stateInterface } from '../store/store';
import { addGroup, setGroup } from '../store/reducers';

interface ChatContainerProps
{
    switchToLogin:Function
    switchToRegister:Function
}

function ChatContainer(props:ChatContainerProps)
{
    const [user,setUser] = useState("");
    const state = useSelector((state:stateInterface)=>state)
    const dispatch = useDispatch(); 
    
    async function fetchUser()
    {
        let temp;
        try
        {
            const res = await axios.post(meURL,{
                token:state.token,
            })
            if(res.status===200)
            {
                setUser(res.data)
            }
            
        }
        catch(err)
        {
            console.log(err);
        }
    }

    async function fetchGroups()
    {
        if(user==="")  return;

        try
        {
            const res = await axios.get(groupsURL+`?member=${user}`,{
                headers: {
                    authorization:state.token
                }
            })
            console.log(res);
            if(res.status===200)
            {
                dispatch(setGroup(res.data));
                return;
            }
            else return;
        }
        catch(err)
        {
            return;
        }
    }

    useEffect(()=>{
        fetchGroups();
        console.log('!');
    },[user])

    useEffect(()=>{
        fetchUser();
    },[])

    return(<>
    <GroupContainer/>
    <MessagesContainer/>
    <MembersContainer/>
    </>)
}

export default ChatContainer;