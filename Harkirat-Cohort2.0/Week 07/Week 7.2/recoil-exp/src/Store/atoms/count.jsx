
import {atom, selector} from "recoil";


export const customCount = atom({
    key : "customCount",
    default:0
})
export const EvenSelector = selector({
    key: "EvenSelector",
    get: ({get}) =>{
        const count = get(customCount);
        return count % 2==0 && count!=0;
    }
})