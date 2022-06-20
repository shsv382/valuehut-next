import React from 'react';
import './modal.module.scss';

class Modal extends React.Component {
	unmount = (e) => {
		if (e.target === document.getElementById("modal-window")) {
			e.stopPropagation();
            e.preventDefault();
			return false;
		}
		this.props.root.unmount()
	}

    permitClick = (e) => {
        if (e.target !== document.getElementById("addToCart")) {
			e.stopPropagation();
            e.preventDefault();
			return false;
		}
        this.props.root.unmount()
    }

	render() {
		return (<div id="modal-background" onClick={this.unmount}>
					<div id="modal-container">
						<div id="modal-window" onClick={this.permitClick}>
							<span id="closeWindow" onClick={this.unmount}>&#10006;</span>
							{ this.props.children }
						</div>
					</div>
				</div>)
	}
}

export default Modal;