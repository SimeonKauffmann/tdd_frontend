import { render, screen, fireEvent} from "@testing-library/react"
import { act } from 'react-dom/test-utils';
import LoginView from '../views/LoginView'
import { shallow, mount, ReactWrapper } from "enzyme"

describe("Login component", () => {
    it("Render without error", ()=> {
        shallow(<LoginView/>)
    })
    it("Render mount without error", ()=> {
        mount(<LoginView/>)
    })

    it("Renders response element correct initially", async() => {
        const component = shallow(<LoginView/>)
        const expectedText = ""
        const actualText = component.find("#response").text()
        expect(await actualText).toBe(expectedText)
    })

    it("Check if Login button is present", () => {
        render(<LoginView/>)
        const button = screen.getByRole("button")
        expect(button).toHaveTextContent(/login/i)
    })
    it("Button sends error message if user is not valid", () => {
        render(<LoginView/>)
        fireEvent.click(screen.getByText(/login/i))
        expect(screen.getByText(/invalid username/i)).toBeInTheDocument();
    })

    it("Check if login label is present", () => {
        render(<LoginView/>)
        const loginLabel = screen.getByText(/username/i)
        expect(loginLabel).toBeInTheDocument();
    })

//     test('Login and render welcome response', ()=> {
//         const component = shallow(<LoginView/>);
// component.find('input[type="text"]').simulate('change', {target: {name: 'username', value: 'Samuel'}});
// component.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'password'}});
// component.find("button").simulate("click", {
//   preventDefault: () => {
//   }
//  })    
//  const response = component.find("#response").text()
// expect(response).toEqual("Welcome Samuel")
//     });
})

