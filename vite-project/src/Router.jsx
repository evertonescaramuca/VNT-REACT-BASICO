import {Route, Routes} from 'react-router-dom'

import {Erro404, Inicial, SobreNos} from './pages'
import {LayoutPadrao} from './layouts'

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<LayoutPadrao/>}>
                <Route path="/" element={<Inicial/>} />
                <Route path="/sobre-nos" element={<SobreNos/>} />
            </Route>

            <Route path="*" element={<Erro404/>}/>
        </Routes>
    )
}

export {Router}