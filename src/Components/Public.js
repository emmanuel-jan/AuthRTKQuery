import React from 'react'
import { Link } from 'react-router-dom'

const Public = () => {
  return (
    <section>
        <header>
            <h1>Welcome to the Repair Store</h1>
        </header>
        <main>
            <p>Located in Kisumu</p>
        </main>
        <footer>
            <Link to='/login'>Employee Login</Link>
        </footer>
    </section>
  )
}

export default Public