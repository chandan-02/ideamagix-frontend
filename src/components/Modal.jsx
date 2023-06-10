const Modal = ({ id, component }) => {
    return (<dialog id={id} className="modal">
        <form method="dialog" className="modal-box">
            {component}
        </form>
        <form method="dialog" className="modal-backdrop">
            <button>close</button>
        </form>
    </dialog>)
}

export default Modal; 