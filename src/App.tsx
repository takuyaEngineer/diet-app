import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Top from './components/pages/top/Top'
import Calendar from './components/pages/calendar/Calendar'
import Setting from 'components/pages/setting/Setting'
import Graph from 'components/pages/graph/Graph'

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Top></Top>}></Route>
            <Route path="/setting" element={<Setting></Setting>}></Route>
            <Route path="/calendar" element={<Calendar></Calendar>}></Route>
            <Route path="/graph" element={<Graph></Graph>}></Route>
        </Routes>
    )
}

export default App
