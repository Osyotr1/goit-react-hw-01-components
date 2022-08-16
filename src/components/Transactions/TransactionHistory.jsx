import PropTypes from 'prop-types';
import style from './Transaction.module.css';

function Transactions ({ items }) {
    return (
    <table className={style.transactionHistory}>
        <thead className={style.tableHead}>
            <tr>
                <th className={style.name}>Type</th>
                <th className={style.name}>Amount</th>
                <th className={style.name}>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map (item => (
                <tr className={style.elem} key={item.id}>
                <td className={style.text}>{item.type}</td>
                <td className={style.text}>{item.amount}</td>
                <td className={style.text}>{item.currency}</td>
              </tr>
            ))}
        </tbody>
    </table>
    )
}

export default Transactions;

Transactions.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        })
    )
};