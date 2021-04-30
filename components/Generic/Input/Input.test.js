import {fireEvent, render,screen} from "@testing-library/react"
import Input from './Input'
import userEvent from "@testing-library/user-event";


test("should render", ()=>{
    const {getByTestId}=render(<Input inputLabel='Username :' />);
    expect(getByTestId('input')).toHaveTextContent('Username :')
})



// test('pass valid input to test input field', () => {
//     const {getByTestId} =render (<Input/>);
//     const inputEq = getByTestId('inputL');
//     expect(inputEq.value).toBe('');
//     fireEvent.change(inputEq, {
//         target:{
//             value:'jatin'
//         }

//     });
//     expect(inputEq.value).toBe('jatin');
    
//   });


