import React, { useState } from 'react'
import { auth } from './firebase'

export default function UserForm() {
    const [name, setName] = useState('')
    async function handleSubmit(e) {
        e.preventDefault()
        localStorage.setItem('userName', name)
        await auth.signInAnonymously()
    }
    return (
        <form className="user-form" onSubmit={handleSubmit}>
            <h1>Введите своё имя, чтобы начать игру</h1>
            <br />
            <div className="field">
                <p className="control">
                    <input type="text"
                        name="" id=""
                        className="input"
                        placeholder="Имя"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required />

                </p>
            </div>
            <div className="field">
                <p className="control">
                    <button className="button is-success" type="submit">
                        Начать
                    </button>
                </p>
            </div>
        </form>
    )
}