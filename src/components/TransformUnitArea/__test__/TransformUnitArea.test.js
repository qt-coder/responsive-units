import { render, screen, fireEvent } from "@testing-library/react";
import TransformUnitArea from "../TransformUnitArea";

describe('Transform Unit Area', () => {
    it('should give correct rem unit based on px given', () => {
        render(<TransformUnitArea text='test'/>)

        const inputField = screen.getByTestId('inputField')
        const remValue = screen.getByRole('heading')

        fireEvent.change(inputField, { target: { value: 16 } })

        const remtest = screen.getByText(/1rem/i)
    })
})
