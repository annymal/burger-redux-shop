import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { registerUser } from '../../store/thunks/auth'
import styles from './RegisterPage.module.scss'
import { Eye } from 'lucide-react'

const RegisterPage = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const [passwordError, setPasswordError] = useState(false)
	const [showPassword, setShowPassword] = useState(false)
	const [showRepeatPassword, setShowRepeatPassword] = useState(false)

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword)
	}

	const toggleRepeatPasswordVisibility = () => {
		setShowRepeatPassword(!showRepeatPassword)
	}

	const handleSubmit = e => {
		e.preventDefault()
		const email = e.target.email.value
		const password = e.target.password.value
		const confirmPassword = e.target.confirmPassword.value
		const firstName = e.target.text.value

		if (password !== confirmPassword) {
			setPasswordError(true)
			return
		}
		setPasswordError(false)
		dispatch(registerUser({ email, password, firstName }))
		navigate('/login')
	}

	return (
		<div>
			<div className={styles.registrationForm}>
				<h2>Регистрация</h2>
				<form onSubmit={handleSubmit}>
					<div className={styles.formGroup}>
						<label>Введите ваше имя</label>
						<input type='text' name='text' required />
					</div>
					<div className={styles.formGroup}>
						<label>Введите логин</label>
						<input type='email' id='email' name='email' required />
					</div>
					<div className={styles.formGroup}>
						<label>Введите пароль</label>
						<input className={styles.psw}
							type={showPassword? 'text' : 'password'}
							id='password'
							name='password'
							required
						/>
						<button className={styles.btnVisible} onClick={togglePasswordVisibility}><Eye /></button>
					</div>
					<div className={styles.formGroup}>
						<label>Повторите пароль</label>
						<input
							type={showRepeatPassword? 'text' : 'password'}
							id='confirmPassword'
							name='confirmPassword'
							required
						/>
						<button className={styles.btnVisible} onClick={toggleRepeatPasswordVisibility}><Eye /></button>
					</div>
					{passwordError && (
						<div className={styles.error}>
							Пароли должны совпадать
						</div>
					)}
					<button
						type='submit'
						className={styles.submitBtn}
					>
						Зарегистрироваться
					</button>
				</form>
			</div>
		</div>
	)
}

export default RegisterPage
