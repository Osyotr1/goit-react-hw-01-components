const Statistics = ({ label, percentage }) => {
    return (
    <>
    <span class="label">{label}</span>  
    <span class="percentage">{percentage}%</span>
    </>
    )
};


export default Statistics;