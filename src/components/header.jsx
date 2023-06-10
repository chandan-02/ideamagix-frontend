import { ArrowLeftOnRectangleIcon, PlusCircleIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation()
    const navigate = useHistory();
    const tabs = [
        { name: "Lecture", url: '', id: 'lecture_add_modal', n: 0 },
        { name: "User", url: 'user', id: 'user_add_modal', n: 1 },
        { name: "Course", url: 'course', id: 'course_add_modal', n: 2 },
        { name: "Batch", url: 'batch', id: 'batch_add_modal', n: 3 }
    ];
    const [activeTab, setActiveTab] = useState(tabs.find(itm => location.pathname == '/' + itm.url)?.n ?? 0)

    const onTabChange = (i, url) => {
        setActiveTab(i)
        localStorage.setItem("tab", i);
        navigate.push(`/${url}`)
    }

    const onSignOut = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        window.location.reload()
    }

    return <div className="navbar">
        <div className="mx-8 my-5 w-full py-2 flex rounded bg-white items-center" >
            <img className="mx-auto h-7 w-auto pl-4" src="https://www.ideamagix.com/assets/images/ideamagix-logo-g.png" alt="Idea Magix" />
            <div className="w-full flex justify-center items-center gap-3">
                {
                    JSON.parse(localStorage.getItem('user'))?.role == 'admin' ?
                        <div className="tabs tabs-boxed">
                            {
                                tabs?.map((itm, i) => <a className={`tab ${activeTab == i ? 'tab-active' : ''}`} key={i} onClick={() => onTabChange(i, itm.url)}>{itm.name}</a>)
                            }
                        </div>
                        : null
                }
            </div>

            {
                JSON.parse(localStorage.getItem('user'))?.role == 'admin' ?

                    <button className="btn btn-primary mr-4" onClick={() => window[tabs[activeTab]?.id].showModal()}>
                        <p className='text-sm capitalize'>Add {tabs[activeTab]?.name}</p>
                        <PlusCircleIcon className="h-6 w-6" />
                    </button> : null
            }

            <button className="btn btn-outline mr-4" onClick={onSignOut}>
                <p className='text-sm capitalize'>Sign Out</p>
                <ArrowLeftOnRectangleIcon className="h-5 w-5" />
            </button>

        </div>
    </div>
}

export default Header;