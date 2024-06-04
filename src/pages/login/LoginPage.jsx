import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { loginUser } from '../../store/thunks/auth'
import styles from './LoginPage.module.scss'

const LoginPage = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const { isLoading, error } = useSelector(state => state.auth)

	const handleSubmit = async (e) => {
		e.preventDefault()
		const email = e.target.email.value;
		const password = e.target.password.value;

		try {
      await dispatch(loginUser({email, password}))
    } catch (error) {
        alert(error)
    }
	}

	return (
		<div className={styles.registrationForm}>
			<h2>Авторизация</h2>
			<form onSubmit={handleSubmit}>
				<div className={styles.formGroup}>
					<label>Логин</label>
					<input type='email' id='email' name='email' required />
				</div>
				<div className={styles.formGroup}>
					<label>Пароль:</label>
					<input
						type='password'
						id='password'
						name='password'
						required
					/>
				</div>
				<button onClick={() => navigate('/profil')} type='submit' className={styles.submitBtn}>
					Войти
				</button>
				<span>У вас нет аккаунта?</span>
				{error && <div>{error}</div>}
				<button
					onClick={() => navigate('/register')}
					type='submit'
					className={styles.submitBtn}
				>
					Зарегистрироваться
				</button>
			</form>
		</div>
	)
}

export default LoginPage
