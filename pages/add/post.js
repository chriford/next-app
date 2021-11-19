import Head from 'next/head'
import Image from 'next/image'
// import styles from '.../styles/Home.module.css'

const Post = () => {
    return (
        <div>
            <head>
                <title>Post page</title>
            </head>
            <main>
                <div className="container">
                    <p>
                        Api Purposes 2
                        <hr></hr>
                        <input className='form-control mb-2'placeholder='employee'></input>
                        <input className='form-control mb-2'placeholder='address line 1'></input>
                        <input className='form-control mb-2'placeholder='mode of transport'></input>
                        <input className='form-control mb-2'placeholder='distance from home'></input>
                        <input className='btn btn-outline-primary' value={'submit'}></input>
                    </p>
                </div>
            </main>
        </div>
    )
}
export default Post;