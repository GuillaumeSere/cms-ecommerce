import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import Meta from '../components/Meta'

const PrivacyPolicy = () => {
    return (
        <>
            <Meta title={"Privacy Policy"} />
            <BreadCrumb title="Privacy Policy" />
            <Container class1="policy-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="policy">
                            <h6>When you use our services, you’re trusting us
                                with your information. We understand this is
                                a big responsibility and work hard to protect
                                your information and put you in control.</h6>
                            <p>This Privacy Policy is meant to help you understand what
                                information we collect, why we collect it, and how you
                                can update, manage, export, and delete your information.<br />
                                If European Union or United Kingdom data protection
                                law applies to the processing of your information,
                                you can review the European requirements section
                                below to learn more about your rights and Google’s
                                compliance with these laws.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default PrivacyPolicy
