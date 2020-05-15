import React, { useRef, useState } from 'react'
import './Password.css'

export default function Password () {
  const [password, setPassword] = useState(null)
  const password_lenght = useRef(6)
  const poke_name = useRef(true)
  const uppercase = useRef(false)
  const lowercase = useRef(false)
  const numbers = useRef(true)
  const symbols = useRef(false)

  function generatePassword () {
    if (password_lenght.current.value > 20 || password_lenght.current.value < 6) {
      alert('Invalid password lenght, min = 6 and max = 20!')
      return undefined
    }
    return 'password'
  }

  return (
    <div className='container'>
      <h2>Password Generator</h2>
      <p>Password: {password}</p>
      <div>
        <div>
          <label>Password lenght</label>
          <input type='number' id='number_password_lenght' min='6' max='20' ref={password_lenght} />
        </div>

        <div>
          <label>Include pokemon custom name</label>
          <input type='checkbox' id='check_poke_names' defaultChecked value={password_lenght} ref={poke_name} />
        </div>

        <div>
          <label>Include uppercase letters</label>
          <input type='checkbox' id='check_uppercase' defaultChecked={false} ref={uppercase} />
        </div>

        <div>
          <label>Include lowercase letters</label>
          <input type='checkbox' id='check_lowercase' defaultChecked={false} ref={lowercase} />
        </div>

        <div>
          <label>Include numbers</label>
          <input type='checkbox' id='check_numbers' defaultChecked ref={numbers} />
        </div>

        <div>
          <label>Include symbols</label>
          <input type='checkbox' id='check_symbols' defaultChecked={false} ref={symbols} />
        </div>
      </div>

      <button
        id='buttom_generate' onClick={() => {
          const genereted_password = generatePassword()
          setPassword(genereted_password)
        }}
      >
                Generate password
      </button>
    </div>
  )
}
