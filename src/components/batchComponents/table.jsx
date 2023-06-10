import { ExclamationCircleIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid'

const Table = ({ tableHeading, tableData, functions }) => {

    const handleDelete = async (id) => {
        const modalConfirm = confirm("Are you sure");
        if (modalConfirm)
            functions[0]({ query: id }).then(rs => window.location.reload())
    }

    return (<div className="overflow-x-auto">

        {tableData !== null ? tableData ?
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        {tableHeading?.map((itm, i) => <th key={i} >{itm}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData?.map((itm, i) => {
                            return (<tr key={itm?._id}>
                                <th>{i + 1}</th>
                                <td>{itm?.name}</td>
                                <td>{itm?.description}</td>
                                <td className='flex gap-3 items-center'>
                                    <PencilSquareIcon onClick={() => { functions[1](itm); window.batch_edit_modal.showModal() }} className='h-5 w-5 text-blue-500 cursor-pointer' />
                                    <TrashIcon onClick={() => handleDelete(itm?._id)} className='h-5 w-5 text-red-500 cursor-pointer' />
                                </td>
                            </tr>)
                        })
                    }

                </tbody>
            </table>
            :
            <span className="m-4 py-4 px-4 loading loading-spinner loading-sm"> </span> : <div className="alert alert-error">
            <ExclamationCircleIcon className='h-10 w-10' />
            <span>Sorry! No Data Found</span>
        </div>}
    </div >)
}

export default Table;