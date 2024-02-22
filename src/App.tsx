import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Top from './components/pages/top'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Top />} />
        </Routes>
    )
}

export default App
