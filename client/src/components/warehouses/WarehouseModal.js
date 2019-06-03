import React from 'react';
import './warehouseModal.scss';

const WarehouseModal = ({children}) => {
	return (
		<div className="modal-wrapper">
			<div className="modal-form-wrapper" >
				<div className="modal-header">
					<h1>Add New</h1>
				</div>
				<div className="modal-body">
					<div>
						{children}
					</div>
				</div>
			</div>
		</div>
	)
}

export default WarehouseModal;