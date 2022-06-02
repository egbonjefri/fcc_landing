import { createSlice } from '@reduxjs/toolkit'


import Item1 from '../../images/Capture10.PNG'
import Item2 from '../../images/Capture1.PNG'
import Item3 from '../../images/Capture11.PNG'
import Item4 from '../../images/Capture3.PNG'
import Item5 from '../../images/Capture9.PNG'
import Item6 from '../../images/Capture7.PNG'










const initialState = {
  value: 0,
  items: [
    {id:1, quantity: 1, stock: 5, title:'Debut Carbon Evo', desc: "The best starter turntable with all the features you'll ever need.", price:1100,img:Item1},
    {id:2, quantity: 1, stock: 1,  title:'Audio Technica', desc: "The best full automatic turntable that doesn't break the bank.", price:650,img: Item2},
    {id:3, quantity: 1, stock: 3,  title:'Fluance RT81', desc: "A blueetooth turntable perfect for beginners.",price:1120,img: Item3},
    {id:4, quantity: 1, stock: 2,  title:'Denon DP-300F', desc: "An excellent entry-level turntable for vinyl enthusiasts.", price:2160,img:Item4},
    {id:5, quantity: 1, stock: 3,  title:'Rega Planar 1', desc: "One of the best entry-level Hi-Fi turntables for tinkerers.", price:1160,img: Item5},
    {id:6, quantity: 1, stock: 5,  title:'Marantz TT-15S1', desc: "Best for going pro.",price:1190,img: Item6}
],
total: 0,
iterateItems: [],


}

export const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
      items: (state) => {
          return state.items
      },

    increment: (state, action) => {
               // eslint-disable-next-line 
        state.iterateItems.map(item => {
            if(item.id === action.payload && item.stock > 0) {
                item.quantity += 1;
                state.total += item.price;
                state.value += 1;
                item.stock -= 1;
            // eslint-disable-next-line 
            state.items.map(item2 => {
                if(item2.id === action.payload) {
                    item2.stock -= 1; 
                        }})
            }
          })
    },
    shipping: (state, action) => {
        if(action.payload) {
            state.total += 20;
        }
        else {
            state.total -= 20;
        }
    },
    decrement: (state, action) => {
               // eslint-disable-next-line 
        state.iterateItems.map(item => {
            if(item.id === action.payload) {
                item.quantity -= 1;
                state.total -= item.price;
                state.value -= 1;
            }
          })    
        },
    addToCart: (state, action) => {
        let existingItem = state.iterateItems.find(item => item.id === action.payload);


       // eslint-disable-next-line 
        state.items.map(item => {
            if (item.id === action.payload && !existingItem && item.stock > 0) {
            state.total += item.price;
            state.value += 1;
            item.stock -= 1;
            state.iterateItems.push(item);
            }
        })
        if (existingItem) {
            // eslint-disable-next-line 
            state.items.map(item => {
                if(item.id === action.payload && item.stock > 0) {
                    item.stock -= 1; 
                }})
            // eslint-disable-next-line 
            state.iterateItems.map(item => {
                if(item.id === action.payload && item.stock > 0) {
                    item.quantity += 1;
                    state.total += item.price;
                    state.value += 1;
                    item.stock -= 1; 
                }
            })
        }
    },
    removeFromCart: (state, action) => {

        // eslint-disable-next-line 
         state.iterateItems.map(item => {
            const index = state.iterateItems.indexOf(item)
            if (item.id === action.payload) {
            state.total -= item.price*item.quantity;
            state.value -= item.quantity;
            state.iterateItems.splice(index, 1);
            // eslint-disable-next-line
            state.items.map(item2 => {
                if(item2.id === action.payload) {
                    item2.stock += item.quantity; 
                }})
            }
        })
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, items, decrement, addToCart, removeFromCart, shipping } = cartSlice.actions

export default cartSlice.reducer