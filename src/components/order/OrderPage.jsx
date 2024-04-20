import React from 'react'
import { useSelector } from 'react-redux'

import OrderItem from './OrderItem'
import styles from './OrderPage.module.scss'

const OrderPage = () => {
	const { cartItems, totals } = useSelector(store => store.cart)
	let deliveryPrice = 600
	let summary = deliveryPrice + totals.total

	return (
		<section>
			<h2>Оформление заказа</h2>
			<div className={styles.orderContainer}>
				<div>
					<h3>Ваши контакты</h3>
					<form className={styles.formOrder}>
						<div className={styles.formGroupFlex}>
							<label htmlFor='name'></label>
							<input type='text' placeholder='Введите имя' />
							<label htmlFor='phone'></label>
							<input type='tel' placeholder='Введите телефон' />
						</div>
						<div className={styles.formGroup}>
							<label htmlFor='address'></label>
							<input type='text' placeholder='Введите адрес' />
						</div>
						<div className={styles.formGroupFlex}>
							<label htmlFor='entrance'></label>
							<input type='number' placeholder='Подъезд' />
							<label htmlFor='floor'></label>
							<input type='number' placeholder='Этаж' />
						</div>
						<div className={styles.formGroup}>
							<label htmlFor='apartment'></label>
							<input type='number' placeholder='Квартира' />
						</div>
						<div className={styles.formGroup}>
							<label htmlFor='comments'></label>
							<textarea placeholder='Комментарии к заказу'></textarea>
						</div>
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
				<button type='submit'>Оформить заказ</button>
			</div>
		</section>
	)
}

export default OrderPage
