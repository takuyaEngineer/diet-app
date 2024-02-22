import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Top from './components/pages/top'

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Top></Top>}></Route>
        </Routes>
    )
}

export default App
