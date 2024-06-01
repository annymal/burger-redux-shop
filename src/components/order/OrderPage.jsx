import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import OrderItem from './OrderItem'
import styles from './OrderPage.module.scss'
import { NavLink } from 'react-router-dom'

const OrderPage = () => {
	const { cartItems, totals } = useSelector(store => store.cart)
	let deliveryPrice = 600
	let summary = deliveryPrice + totals.total

	const [formData, setFormData] = useState({})

	const handleChange = e => {
		const name = e.target.name
		const value = e.target.value
		setFormData(values => ({
			...values,
			[name]: value
		}))
	}

	const handleSubmit = e => {
		e.preventDefault()
		console.log('Отправка данных:', formData)
	}

	return (
		<section>
			<h2>Оформление заказа</h2>
			<div className={styles.orderContainer}>
				<div>
					<h3>Ваши контакты</h3>
					<form onSubmit={handleSubmit} className={styles.formOrder}>
						<div className={styles.formGroupFlex}>
							<label htmlFor='name'>Имя*</label>
							<input
								name='username'
								value={formData.username}
								onChange={handleChange}
								required
								type='text'
								placeholder='Введите имя'
							/>
							<label htmlFor='phone'>Телефон*</label>
							<input
								name='telephone'
								value={formData.telephone}
								onChange={handleChange}
								required
								type='number'
								placeholder='Введите телефон'
							/>
						</div>
						<div className={styles.formGroup}>
							<label htmlFor='address'>Адрес</label>
							<input
								name='address'
								value={formData.address}
								onChange={handleChange}
								required
								type='text'
								placeholder='Введите адрес'
							/>
						</div>
						<div className={styles.formGroupFlex}>
							<label htmlFor='entrance'>Подъезд</label>
							<input
								name='entrance'
								value={formData.entrance}
								onChange={handleChange}
								required
								type='number'
								placeholder='Подъезд'
							/>
							<label htmlFor='floor'>Этаж</label>
							<input
								name='floor'
								value={formData.floor}
								onChange={handleChange}
								type='number'
								placeholder='Номер этажа'
							/>
						</div>
						<div className={styles.formGroup}>
							<label htmlFor='apartment'>Квартира</label>
							<input
								name='apartment'
								value={formData.apartment}
								onChange={handleChange}
								type='number'
								placeholder='Введите номер квартиры'
							/>
						</div>
						<div className={styles.formGroup}>
							<label htmlFor='comments'>
								Комментарии к заказу
							</label>
							<textarea
								name='comments'
								value={formData.comments}
								onChange={handleChange}
								placeholder='Ваши пожелания к заказу'
							></textarea>
						</div>
						<NavLink to='/complete'><button className='btn-primary' type='submit'>Оформить заказ</button></NavLink>
					</form>
				</div>
				<div className={styles.summaryList}>
					<h3>Список товаров</h3>
					<form className={styles.formOrder}>
						{cartItems.map(item => (
							<OrderItem key={item} {...item} />
						))}
						<div className={styles.summaryBlock}>
							<div className={styles.summary}>
								<span>Подытог</span>
								<span>{totals.total} RUB </span>
							</div>
							<div className={styles.summary}>
								<span>Доставка курьером</span>
								<span>{deliveryPrice} RUB </span>
							</div>
							<div className={styles.summary}>
								<span>Итого</span>
								<span>{summary} RUB</span>
							</div>
						</div>
					</form>
				</div>
			</div>
			<div className={styles.btnContainer}>
				<button className='btn-primary' type='submit'>Оформить заказ</button>
			</div>
		</section>
	)
}

export default OrderPage
