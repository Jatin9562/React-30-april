import {render,screen} from "@testing-library/react"
import Button from './Button'


describe('Button component', ()=>{
test("should render label correctly", ()=>{
    const {getByTestId}= render(<Button buttonName="Login" />);
     expect(getByTestId('button')).toHaveTextContent('Login')
 })

test("should be disabled", ()=>{
    const{getByTestId} = render(<Button/>);
    expect(getByTestId("button").closest('button')).toHaveAttribute('disabled');
})

// test("buttonCall should be true",()=>{
//     const{getByTestId}= render(<Button buttonCall='true'/>);
//     expect(getByTestId('button')).toBeTruthy()
// })
test("button should have secondary styling ",()=>{
    const{getByTestId}= render(<Button variant='secondary'/>);
    const buttonL= getByTestId('button');
    expect(buttonL.className).toBe('button secondary') 
})

})
