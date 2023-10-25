import React from 'react'


function UserProfile({greeting}) {
    console.log(greeting)
  return (
    <>
    <h1>Bienvenido a mi tienda {greeting}</h1>
    </>
  )
}

export default UserProfile