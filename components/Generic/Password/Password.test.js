import {render,screen,getByTestId,fireEvent} from "@testing-library/react"
import Password from './Password'
import userEvent from "@testing-library/user-event";


test("should render", ()=>{
    const {getByTestId}=render(<Password passwordLabel='Password :'/>);
    expect(getByTestId('password')).toHaveTextContent('Password :')
})


// test('pass valid password to test input field', () => {
//     const {getByTestId} =render (<Password/>);
//     const inputEq = getByTestId('passwordL');
//     expect(inputEq.value).toBe('');
//     fireEvent.change(inputEq, {
//         target:{
//             value:'jatin@123'
//         }

//     });
//     expect(inputEq.value).toBe('jatin@123');
    
//   });