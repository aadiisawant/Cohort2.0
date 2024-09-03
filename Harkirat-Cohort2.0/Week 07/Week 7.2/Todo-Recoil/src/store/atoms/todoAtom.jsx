import { atom, selector } from "recoil";


export const todoAtom = atom({
    key:"todoAtom",
    default:[]
})
export const searchQueryAtom = atom({
    key: 'searchQueryAtom',
    default: ""
})
export const FilterTodos = selector({
    key: "FilterTodos",
    get: ({get})=>{
        const Todos = get(todoAtom);
        const filter = get(searchQueryAtom);

        return Todos.filter(todo =>
            todo.title.toLowerCase().includes(filter.toLowerCase()) || todo.description.toLowerCase().includes(filter.toLowerCase())
        );
    }
});

export const searchQueryState = selector({
    key: 'searchQueryState',
    set: ({set}, newValue)=>{
        set(searchQueryAtom, newValue);
    },
    get: ({get}) => {
        return get(searchQueryAtom);
    }
})