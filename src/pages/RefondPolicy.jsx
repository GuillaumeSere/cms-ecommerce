import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import Meta from '../components/Meta'

const RefondPolicy = () => {
    return (
        <>
            <Meta title={"Refund Policy"} />
            <BreadCrumb title="Refund Policy" />
            <Container class1="policy-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="policy">
                            <h6>Learn about refunds onDevReact</h6>
                            <p>Google may give refunds for some Google Play
                                purchases, depending on the refund policies
                                described below. You can also contact the developer directly.
                                If a purchase was accidentally made by a friend or
                                family member using your account, request a refund on the Google Play website.
                                If you find a Google Play purchase on your card or other
                                payment method that you didn't make and that wasn't made by anyone
                                you know, report unauthorized charges within 120 days of the transaction.
                                If your refund request has been approved, see how long your refund will take.</p><br />
                            <h6>For United Kingdom and European Economic Area users</h6>
                            <p>If you are located in the European Economic Area or
                                the United Kingdom and made a purchase on or after
                                March 28, 2018, learn how to get a refund.</p><br />
                            <h5>Request a refund for recent purchases</h5>
                            <p>If it’s been less than 48 hours since you bought an app or
                                made an in-app purchase: You can request a refund through Google Play.
                                If you bought movies, books, or other content:
                                You may be able to request a refund more than 48 hours after your purchase (check policy below).
                                You’ll usually get a decision within 1 business day but it can take up to 4 business days.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default RefondPolicy
