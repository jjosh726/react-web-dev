import { beforeEach, describe, it, expect, vi } from "vitest";
import PaymentSummary from "./PaymentSummary";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, useLocation } from "react-router";
import axios from "axios";
import userEvent from "@testing-library/user-event";

function Location() {
    const location = useLocation();

    return (
        <div data-testid="url-path">
            {location.pathname}
        </div>
    )
}

vi.mock('axios');

describe('Payment summary component', () => {
    let paymentSummary;
    let loadCart;

    beforeEach(() => {
        paymentSummary = {
            "totalItems": 22,
            "productCostCents": 32023, 
            "shippingCostCents": 499, 
            "totalCostBeforeTaxCents": 32522, 
            "taxCents": 3252, 
            "totalCostCents": 35774
        }

        loadCart = vi.fn();
    });

    it('displays the correct payment summary', async() => {
        render(
            <MemoryRouter>
                <PaymentSummary 
                    paymentSummary={paymentSummary} 
                    loadCart={loadCart} 
                />
            </MemoryRouter>
        );

        const paymentSummaryRows = await screen.findAllByTestId('payment-summary-row');

        expect(paymentSummaryRows[0]).toHaveTextContent('$320.23');
        expect(paymentSummaryRows[1]).toHaveTextContent('$4.99');
        expect(paymentSummaryRows[2]).toHaveTextContent('$325.22');
        expect(paymentSummaryRows[3]).toHaveTextContent('$32.52');
        expect(paymentSummaryRows[4]).toHaveTextContent('$357.74');
    });

    it('places order correctly', async () => {
        render(
            <MemoryRouter>
                <Location />
                <PaymentSummary 
                    paymentSummary={paymentSummary} 
                    loadCart={loadCart} 
                />
            </MemoryRouter>
        );
        
        const orderButton = await screen.getByTestId('place-order-button');

        const user = userEvent.setup();
        await user.click(orderButton);

        expect(axios.post).toHaveBeenCalledWith('/api/orders');
        expect(loadCart).toHaveBeenCalled();

        expect(
            screen.getByTestId('url-path')
        ).toHaveTextContent('/orders');
    });
})