import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CarrinhoState = {
  items: Produto[]
}

const initialState: CarrinhoState = {
  items: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.items.find((p) => p.id === produto.id)) {
        alert('Item já adicionado')
      } else {
        state.items.push(produto)
      }
    },
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.items.find((p) => p.id === produto.id)) {
        state.items = state.items.filter((p) => p.id !== produto.id)
      } else {
        state.items.push(produto)
      }
    }
  }
})
export const { adicionar } = carrinhoSlice.actions
export const { favoritar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
