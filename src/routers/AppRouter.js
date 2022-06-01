import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AntojitosScreen } from '../components/antojitos/AntojitosScreen'
import { BebidasScreen } from '../components/bebidas/BebidasScreen'
import { MainMenuScreen } from '../components/main/MainMenuScreen'
import { TacosScreen } from '../components/tacos/TacosScreen'
import { TamalScreen } from '../components/tamales/TamalScreen'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainMenuScreen />} />
                <Route path="/tacos" element={<TacosScreen />} />
                <Route path="/antojitos" element={<AntojitosScreen />} />
                <Route path="/tamales" element={<TamalScreen/>} />
                <Route path="/bebidas" element={<BebidasScreen />} />
                <Route path="*" element={<MainMenuScreen />} />
            </Routes>
        </BrowserRouter>
    )
}
