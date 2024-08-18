import React, { Fragment, memo } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './layout'
// import Login from './pages/login'
import Market from './pages/market'
import Shop from './pages/shop'
import Omborxona from './pages/omborxona'
import Setting from './pages/setting'
import Tashkilotlar from './pages/setting/tashkilotlar'
import Categories from './pages/setting/categories'
import OlchovBirliklari from './pages/setting/olchov-birligi'
import Mahsulotlar from './pages/setting/mahsulotlar'
import YukXatlari from './pages/setting/yuk-xatlari'
import KirimQilish from './pages/setting/kirim-qilish'
// import MainLayout from './layout/MainLayout'

const App = () => {
  return (
    <Fragment>
      <Routes>
        {/* <Route path='/' element={<Login />} ></Route> */}
        <Route path='/' element={<Navigate to='/admin/menu' replace />} />
        <Route path='/admin/' element={<Layout />} >
          <Route path='menu' element={<Market />} />
          <Route path='sotuv-bolimi' element={<Market />} />
          <Route path='magazine' element={<Shop />} />
          <Route path='omborxona' element={<Omborxona />} />
          <Route path='setting/' element={<Setting />} />
          <Route path='setting/tashkilotlar' element={<Tashkilotlar />} />
          <Route path='setting/categories' element={<Categories />} />
          <Route path='setting/olchov-birligi' element={<OlchovBirliklari />} />
          <Route path='setting/mahsulotlar' element={<Mahsulotlar />} />
          <Route path='setting/yuk-xatlari' element={<YukXatlari />} />
          <Route path='setting/kirim-qilish' element={<KirimQilish />} />
        </Route>
      </Routes>
    </Fragment >
  )
}

export default memo(App)