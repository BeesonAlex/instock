import React from 'react';
import './inventoryModal.scss';

const InventoryModal = ({ children }) => {
	return (
		<div className="modal-wrapper">
			<div className="modal-form-wrapper">
				<div className="modal-header">
					<h1 className="modal-header-h1">Create New</h1>
				</div>
				<div className="modal-body">
					<div>{children}</div>
				</div>
			</div>
		</div>
	);
};

export default InventoryModal;