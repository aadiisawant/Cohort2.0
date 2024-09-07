import {atom, selector} from 'recoil'

export const networkAtom = atom({
    key: "networkAtom",
    default:35
})
export const messagesAtom = atom({
    key: "messagesAtom",
    default:0
})
export const jobsAtom = atom({
    key: "jobsAtom",
    default:0
})
export const notificationsAtom = atom({
    key: "notificationsAtom",
    default:150
})

export const totalNotifiacationsSelector = selector({
    key:"totalNotifiacationsSelector",
    get: ({get})=>{
        const networkAtomCount = get(networkAtom);
        const jobsAtomCount = get(jobsAtom);
        const messagesAtomCount = get(messagesAtom);
        const notificationsAtomCount = get(notificationsAtom);
        return networkAtomCount+jobsAtomCount+messagesAtomCount+notificationsAtomCount;
    }
})