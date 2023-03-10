import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowLeft } from "react-icons/hi"
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import Container from '../components/Container'

const SingleBlog = () => {
    return (
        <>
            <Meta title={"Dynamic Blog Name"} />
            <BreadCrumb title="Dynamic Blog Name" />
            <Container class1="blog-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="single-blog-card">
                            <Link to="/blogs" className='d-flex align-items-center gap-10'>
                                <HiOutlineArrowLeft className='fs-4' />Go Back to Blogs
                            </Link>
                            <h3 className="title">A Beatiful Sunday Morning Renaissance</h3>
                            <img src="../images/blog-1.jpg" className='img-fluid w-100 my-4' alt="blog" />
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Minima ipsa a, quasi
                                provident eius id rerum quod excepturi,
                                obcaecati enim exercitationem aut mollitia.
                                Officia praesentium, commodi minima nesciunt blanditiis explicabo?</p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default SingleBlog
