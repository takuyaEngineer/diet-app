import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from 'components/pages/landingPage/LandingPage'
import Loading from 'components/pages/loading/Loading'
import SignupNew from 'components/pages/signupNew/SignupNew'
import SignupFin from 'components/pages/signupFin/SignupFin'
import Top from './components/pages/top/Top'
import Calendar from './components/pages/calendar/Calendar'
import Setting from 'components/pages/setting/Setting'
import Graph from 'components/pages/graph/Graph'

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage></LandingPage>}></Route>
            <Route path="/loading" element={<Loading></Loading>}></Route>
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
