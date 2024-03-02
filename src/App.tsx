import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from "components/pages/landing/Landing"
import Login from "components/pages/login/Login"
import SignupNew from "components/pages/signupNew/SignupNew"
import SignupFin from "components/pages/signupFin/SignupFin"
import Top from './components/pages/top/Top'
import Calendar from './components/pages/calendar/Calendar'
import Setting from 'components/pages/setting/Setting'
import Graph from 'components/pages/graph/Graph'

const App: React.FC = () => {
    return (
        <Routes>
            {/* ログイン前トップ（LP） */}
            <Route path="/" element={<Landing></Landing>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/signup/new" element={<SignupNew></SignupNew>}></Route>
            <Route path="/signup/fin" element={<SignupFin></SignupFin>}></Route>
            <Route path="/top" element={<Top></Top>}></Route>
            <Route path="/setting" element={<Setting></Setting>}></Route>
            <Route path="/calendar" element={<Calendar></Calendar>}></Route>
            <Route path="/setting" element={<Setting></Setting>}></Route>
            <Route path="/graph" element={<Graph></Graph>}></Route>
        </Routes>
    )
}

export default App
