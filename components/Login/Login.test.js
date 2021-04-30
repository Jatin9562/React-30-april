import {render, getByTestId} from "@testing-library/react"
import Login from './Login'


describe('Login component', ()=>{
test('render login header', ()=>{
    const {getByTestId}= render(<Login/>);
    expect(getByTestId('header')).toHaveTextContent('Account Login')
})

// test('render Form',()=>{
//     const {getByTestId} =  render(<Login/>);
//     const formL= getByTestId('formL')
//     expect(formL)


})

