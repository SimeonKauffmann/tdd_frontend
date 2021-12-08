import { render, screen, fireEvent } from "@testing-library/react"
import LoginView from '../views/LoginView'
import React from "react"
import { shallow, mount } from "enzyme"

describe("Login component", () => {
    it("Render without error", ()=> {
        shallow(<LoginView/>)
    })
    it("Render mount without error", ()=> {
        mount(<LoginView/>)
    })

    it("Renders response element correct initially", () => {
        const component = shallow(<LoginView/>)
        const expectedText = ""
        const actualText = component.find("#response").text()
        expect(actualText).toBe(expectedText)
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
})

