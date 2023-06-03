import { Button, Divider, Typography } from "antd"
import { Context as ProductContext } from "../../context/product/product.context"
import { useContext } from "react"

export const OrderSummary = () => {

const {orderTotal} = useContext(ProductContext)

    return (
        <>
         <Typography.Paragraph
          style={{ fontSize: "1.2rem", fontWeight: "bold" }}
        >
          Order Summary
        </Typography.Paragraph>
           <div className="order-summary-container">
              <div className="sub-total-container">
                  <Typography.Paragraph>Subtotal</Typography.Paragraph>
                  <Typography.Paragraph>${orderTotal}</Typography.Paragraph>
              </div>
           </div>
           <Divider/>
           <Button className="process-transaction-button" type="primary">Process Transaction</Button>
        </>
    )
}