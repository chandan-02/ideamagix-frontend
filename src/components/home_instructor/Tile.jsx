import moment from "moment/moment";

const Tiles = ({ src, name, date }) => {
    return (<div className="card h-52 w-[22rem] bg-base-100 shadow-xl image-full ">
        <figure className="h-52 w-[22rem]"><img src={src} alt="Shoes " className="h-52 w-[22rem] object-cover" /></figure>
        <div className="card-body">
            <h2 className="card-title text-4xl">{name}</h2>
            <p className="text-xl">{moment(date).format('DD MMM YYYY')}</p>
        </div>
    </div>)
}

export default Tiles;