
import { useSelector } from 'react-redux'
import styles from './CompleteOrder.module.scss'

const CompleteOrder = () => {
	const { cartItems } = useSelector(store => store.cart)

	return (
		<section className={styles.completeOrderBlock}>
			<h3>Спасибо за ваш заказ!</h3>
			<p>
				Благодарим вас за ваш заказ в нашем интернет-магазине. Мы рады
				сообщить, что ваш заказ был успешно принят и обработан.
			</p>
			<h4>В вашем заказе:</h4>
			<ul className={styles.orderList}>
				{cartItems.map((item) => (
                    <li key={item.key}>{item.title} {item.amount} шт.</li>
                ))}
                
			</ul>
			<p>Ваш заказ будет доставлен курьером в течении часа.</p>
			<p>
				Если у вас возникнут какие-либо вопросы, пожалуйста, свяжитесь с
				нашей службой поддержки по телефону:{' '}
				<a className={styles.number} href='tel:+71234567890'>+7 (123) 456-78-90</a>
			</p>
		</section>
	)
}

export default CompleteOrder
