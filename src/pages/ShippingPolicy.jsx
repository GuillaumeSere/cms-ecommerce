import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import Meta from '../components/Meta'

const ShippingPolicy = () => {
    return (
        <>
            <Meta title={"Shipping Policy"} />
            <BreadCrumb title="Shipping Policy" />
            <Container class1="policy-wrapper py-5 home-wrapper-2">
                    <div className="row">
                        <div className="col-12">
                            <div className="policy">
                                <h4>SHIPPING & DELIVERY POLICY</h4>
                                <p>This Shipping & Delivery Policy is part of our Terms of Use ("Terms")
                                    and should be therefore read alongside our main Terms:
                                    Please carefully review our Shipping & Delivery Policy
                                    when purchasing our products. This policy will apply to any order you place with us.
                                </p><br />
                                <h5>WHAT ARE MY SHIPPING & DELIVERY OPTIONS?</h5><br />
                                <h6>In-Store Pickup</h6>
                                <p>We offer various shipping options. In some cases a
                                    third-party supplier may be managing our inventory
                                    and will be responsible for shipping your products.</p>
                                <h6>Free Shipping</h6>
                                <p>we offer shipping to command of 100€ for the client subscribe premium compte</p>
                                <h6>Expedited Shipping Fees</h6>
                                <p>If you select an expedited shipping option, we will
                                    follow up after you have placed the order with any additional shipping information.
                                    All times and dates given for delivery of the products are given in good faith but are estimates only.
                                </p><br/>
                                <p>For EU and UK consumers: This does not affect your statutory rights
                                Unless specifically noted, estimated delivery times reflect the earliest
                                 available delivery, and  deliveries will be made within 30 days after 
                                 the day we accept your order. For more information please refer to our Terms.
                                </p>

                            </div>
                        </div>
                    </div>
            </Container>
        </>
    )
}

export default ShippingPolicy
