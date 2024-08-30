import { atom } from "recoil";


export const todoAtom = atom({
    key:"todoAtom",
    default:{
        todo_id:1,
        title:"Demo",
        description:"This is Demo Check"
    }
})