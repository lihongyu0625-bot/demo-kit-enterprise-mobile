import HotelFormPreviewPage from './pages/HotelFormPreviewPage'
import './App.css'

function App() {
  return (
    <main className="app-preview">
      <div className="app-preview__inner">
        <div className="app-preview__header">
          <p className="app-preview__eyebrow">本地组件验证页</p>
          <h1 className="app-preview__title">酒店填单页代码组件验证</h1>
          <p className="app-preview__copy">
            这一页已经拆成了本地代码组件，并通过页面配置和模拟数据进行组装，
            方便你先验证组件方案是不是可行。
          </p>
        </div>
        <HotelFormPreviewPage />
      </div>
    </main>
  )
}

export default App
