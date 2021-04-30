import {fireEvent,render,screen} from "@testing-library/react"

import userEvent from "@testing-library/user-event";
import Checkbox from './Checkbox'


describe('Card component', ()=>{

test("should render", ()=>{
  const {getByTestId}=render(<Checkbox checkboxLabel='Remember Me'/>);
  expect(getByTestId('checkbox-label')).toHaveTextContent('Remember Me')
})

test('toggle element by selecting checkbox', () => {
  render(<Checkbox/>);
  const cbEq = screen.getByTestId("checkbox");
  userEvent.click(cbEq);
  expect(cbEq).toBeChecked();
  userEvent.click(cbEq);
  expect(cbEq).not.toBeChecked();
})

})
