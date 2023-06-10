import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid'

const Tile = ({ data, functions, batch }) => {

    const handleDelete = async (id) => {
        const modalConfirm = confirm("Are you sure");
        if (modalConfirm)
            functions[0]({ query: id }).then(rs => window.location.reload())
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={data?.image} alt={data?.name} className="h-56 object-cover w-full" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {data?.name}
                    <div className="badge badge-secondary">L: {data?.level}</div>
                </h2>
                <p>{data?.description?.length > 100 ? data?.description.slice(0, 100) + '...' : data?.description}</p>
                <div className="card-actions justify-between">
                    <div className='flex gap-2'>
                        <PencilSquareIcon onClick={() => { functions[1](data); window.course_edit_modal.showModal() }} className='h-5 w-5 text-blue-500 cursor-pointer' />
                        <TrashIcon onClick={() => handleDelete(data?._id)} className='h-5 w-5 text-red-500 cursor-pointer' />
                    </div>
                    <div className='flex gap-1'>
                        {
                            batch?.map(itm => {
                                if (data?.batches?.includes(itm?._id)) {
                                    return <div key={itm?._id} className="badge badge-outline">{itm?.name}</div>
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tile;