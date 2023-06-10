import { PlusSmallIcon, XMarkIcon } from '@heroicons/react/24/solid'


const Chip = ({ id, name, selected, handler }) => {
    if (!selected) {
        return <div className={`flex gap-2 items-center border-2 p-2 px-4 rounded-full cursor-pointer`} onClick={() => handler('add', id)}>
            <h2 className='text-sm'>{name}</h2>
            <PlusSmallIcon className='h6 w-6 ' />
        </div>
    }

    return <div className={`flex gap-2 items-center bg-blue-200 p-2 px-4 rounded-full cursor-pointer`} onClick={() => handler('remove', id)}>
        <h2 className='text-base text-blue-500 whitespace-nowrap'>{name}</h2>
        <XMarkIcon className='h-5 w-5 text-blue-500' />
    </div>
}

export default Chip