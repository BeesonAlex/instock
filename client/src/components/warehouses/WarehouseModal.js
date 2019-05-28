import React from 'react';
import './warehouseModal.scss';

const WarehouseModal = (props) => {
	return (
		<div className="modal-wrapper">
			<div className="modal-form-wrapper" >
				<div className="modal-header">
					<h1>Add New</h1>
				</div>
				<div className="modal-body">
					<div>
						{props.children}
					</div>
				</div>
				<div className="modal-footer">
					<button className="btn-cancel" onClick={props.close}>CANCEL</button>
					<button className="btn-save">SAVE</button>
				</div>
			</div>
		</div>
	)
}

export default WarehouseModal;