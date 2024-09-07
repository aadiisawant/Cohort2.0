
import { useRecoilState, useRecoilValue } from 'recoil'
import './App.css'
import { jobsAtom, messagesAtom, networkAtom, notificationsAtom, totalNotifiacationsSelector } from './store/atoms'

function App() {
  const networkValue = useRecoilValue(networkAtom);
  const notificationsValue = useRecoilValue(notificationsAtom);
  const jobsValue = useRecoilValue(jobsAtom);
  const messagesValue = useRecoilValue(messagesAtom);
  // const [messagesValue, setMessagesValue] = useRecoilState(messagesAtom)

  //selectors
  const totalNotifications = useRecoilValue(totalNotifiacationsSelector)
  return (
    <>
    <button>Home</button>

    <button>My Network {networkValue >= 100 ? ("99+"): networkValue}</button>
    <button>Jobs {jobsValue >= 100 ? ("99+"): jobsValue}</button>
    <button>Messages {messagesValue >= 100 ? ("99+"): messagesValue}</button>
    <button>Notifications {notificationsValue >= 100 ? ("99+"): notificationsValue}</button>

    <button>Me {totalNotifications}</button>
    </>
  )
}

export default App
