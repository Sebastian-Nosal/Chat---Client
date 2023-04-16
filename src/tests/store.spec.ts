import store from '../store/store';
import { 
    addToken,dropToken,
    addMessage,dropMessage,clearMessages, 
    addGroup, dropGroup,clearGroups,
    addUser,dropUser,clearUsers
} from '../store/reducers';
import {render,screen} from '@testing-library/react';

describe('Reducer of token',()=>{
    
    it("Should add token to store",()=>{
        const action = addToken("Foo");
        store.dispatch(action)
        expect(store.getState().token).toStrictEqual('Foo');
    })

    it("Should drop token from store",()=>{
        const action = dropToken();
        store.dispatch(action)
        expect(store.getState().token).toStrictEqual("");
    })
})

describe('Reducer of users',()=>{
    it('Should add new user to users state array',()=>{
        const user={username: "Username1"}
        const action = addUser(user)
        store.dispatch(action);
        const res = store.getState().users;
        expect(Array.isArray(res)).toBe(true);
        expect(res[0]).toBe(JSON.stringify(user));
    })

    it('Shoud drop user from users state array',()=>{
        const action = dropUser(0);
        store.dispatch(action);
        expect(store.getState().users).toContain(undefined);
    })

    it('Should clear users state (state will be equal to [])',()=>{
        const action = clearUsers();
        store.dispatch(action);
        expect(store.getState().users).toHaveLength(0);
    })
})

describe('Reducer of messages',()=>{
    it('Should add new message to message state array',()=>{
        const group={members: ["user1","user2","user3"]}
        const action = addGroup(group)
        store.dispatch(action);
        const res = store.getState().group;
        expect(Array.isArray(res)).toBe(true);
        expect(res[0]).toBe(JSON.stringify(group));
    })

    it('Shoud drop message from messagess state array',()=>{
        const action = dropGroup(0);
        store.dispatch(action);
        expect(store.getState().group).toContain(undefined);
    })

    it('Should clear messages state (state will be equal to [])',()=>{
        const action = clearGroups();
        store.dispatch(action);
        expect(store.getState().group).toHaveLength(0);
    })
})


describe('Reducer of groups',()=>{
    it('Should add new group to groups state array',()=>{
        const user={username: "Username1"}
        const action = addUser(user)
        store.dispatch(action);
        const res = store.getState().users;
        expect(Array.isArray(res)).toBe(true);
        expect(res[0]).toBe(JSON.stringify(user));
    })

    it('Shoud drop group from groups state array',()=>{
        const action = dropUser(0);
        store.dispatch(action);
        expect(store.getState().users).toContain(undefined);
    })

    it('Should clear group state (state will be equal to [])',()=>{
        const action = clearUsers();
        store.dispatch(action);
        expect(store.getState().users).toHaveLength(0);
    })
})