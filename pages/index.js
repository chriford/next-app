import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'

const App = () => {
    
    return (
        <div>
            <head>
                <title>Home page</title>
            </head>
            <main>
                <div className={styles.design}>
                    <p>
                        Api Purposes
                        <hr></hr>
                        <Link href="/add/post/">
                        <a>Post</a>
                        </Link>

                        <Link href="/posts/view">
                        <   a>Employees</a>
                        </Link>
                    </p>
                </div>
            </main>
        </div>
    )
}
export default App;