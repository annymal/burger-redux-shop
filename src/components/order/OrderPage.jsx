import React from 'react'

import styles from './OrderPage.module.scss'

const OrderPage = () => {
	return (
		<section>
			<h2>Оформление заказа</h2>
			<form className={styles.formOrder}>
				<h3>Ваши контакты</h3>
				<div className={styles.formGroupFlex}>
					<label htmlFor='name'></label>
					<input type='text' placeholder='Введите имя' />
					<label htmlFor='phone'></label>
					<input type='tel' placeholder='Введите телефон' />
				</div>
				<div className='form-group'>
					<label htmlFor='address'></label>
					<input type='text' placeholder='Введите адрес' />
				</div>
				<div className={styles.formGroupFlex}>
					<label htmlFor='entrance'></label>
					<input type='number' placeholder='Подъезд' />
					<label htmlFor='floor'></label>
					<input type='number' placeholder='Этаж' />
				</div>
				<div className='form-group'>
					<label htmlFor='apartment'></label>
					<input type='number' placeholder='Квартира' />
				</div>
				<div className='form-group'>
					<label htmlFor='comments'></label>
					<textarea placeholder='Комментарии к заказу'></textarea>
				</div>
				<button type='submit'>Оформить заказ</button>
			</form>
		</section>
	)
}

export default OrderPage
