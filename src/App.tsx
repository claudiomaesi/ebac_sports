import { Provider } from 'react-redux'
import Header from './components/Header'
import Produtos from './containers/Produtos'

import { store } from './store'

import { GlobalStyle } from './styles'

export type Produto = {
  produto: unknown
  find(arg0: (fav: unknown) => boolean): unknown
  filter(arg0: (p: unknown) => boolean): unknown
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos />
      </div>
    </Provider>
  )
}

export default App
