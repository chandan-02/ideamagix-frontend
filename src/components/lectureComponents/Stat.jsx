const Stat = ({ text, value }) => {
    return (<div class="stat place-items-center">
        <div class="stat-title">{text}</div>
        <div class="stat-value">{value}</div>
    </div>)
}

export default Stat