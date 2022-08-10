import Statistics from './Statistics';

function StatList({ title, stats }) {
<section class="statistics">
    <h2 class="title">{ title ? 'Upload stats' : '' }</h2>

    <ul class="stat-list">
    {stats.map(stat => (
        <li key={stat.id} class="item">
        <Statistics
        label={stat.label}
        percentage={stat.percentage}
        />
        </li>
    ))}
    </ul>
</section>
}

export default StatList;