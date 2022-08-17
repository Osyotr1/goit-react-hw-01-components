import PropTypes from 'prop-types';
import style from './Statistics.module.css'

function StatList({ title, stats }) {
return (    
<section className={style.statistics}>
{ title ? <h2 className={style.title}>Upload Stats</h2> : '' }
    <ul className={style.statlist}>
    {stats.map(stat => (
        <li key={stat.id} className={style.item}>
        <span className={style.label}>{stat.label}</span>  
        <span className={style.percentage}>{stat.percentage}%</span>
        </li>
    ))}
    </ul>
</section>
)
}

export default StatList;

StatList.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.exact({
          id: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          percentage: PropTypes.number.isRequired
        })
    ),
} 