import React, {Component} from 'react';
import {Modal, Steps} from 'antd';
import "./SearchProfileCreationModal.css"
import BeginScreen from "./BeginScreen";
import ThemeScreen from "./ThemeScreen";
import LocationScreen from "./LocationScreen";
import TypeScreen from "./TypeScreen";
import WorkersScreen from "./WorkersScreen";
import StartYearScreen from "./StartYearScreen";
import LawFormScreen from "./LawFormScreen";
import Footer from "./Footer";
const {Step} = Steps;
const steps = [
	{
		title:"Start"
	},
	{
		title:"Thema's"
	},
	{
		title:"Locatie"
	},
	{
		title:"Type"
	},
	{
		title:"Aantal werknemers"
	},
	{
		title:"Start jaar"
	},
	{
		title:"Rechtsvorm"
	},
	{
		title:"BAG"
	}
];
class SearchProfileCreationModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
			activeComponent: 0,
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
		this.setActiveComponent = this.setActiveComponent.bind(this);
		this.next = this.next.bind(this);
		this.prev = this.prev.bind(this);
	};

	showModal() {
		this.setState({
			visible: true
		});
	};

	handleCancel = e => {
		this.setState({
			visible: false,
			activeComponent: 0
		});
	};

	handleChange(event) {
		const {name, value} = event.target;
		this.setState({[name]: value});
	}

	next(current) {
		let next = current + 1;
		if(next <= 8) {
			this.setState({
				activeComponent: next
			});
		}
	}

	prev(current) {
		let prev = current - 1;
		if(prev >= 0) {
			this.setState({
				activeComponent: prev
			});
		}
	}

	getTitleName() {
		switch(this.state.activeComponent) {
			case 0:
				return "Zoekprofiel creëren";
			case 1:
				return "Thema's";
			case 2:
				return "Locatie";
			case 3:
				return "Type";
			case 4:
				return "Aantal werknemers";
			case 5:
				return "Start jaar";
			case 6:
				return "Rechtsvorm";
			case 7:
				return "BAG";
			default:
				return "Zoekprofiel creëren";
		};
	};

	setActiveComponent(component) {
		this.setState({
			activeComponent: component
		});
	}

	getActiveComponent() {
		switch(this.state.activeComponent) {
			case 0:
				return <BeginScreen/>;
			case 1:
				return <ThemeScreen/>;
			case 2:
				return <LocationScreen/>;
			case 3:
				return <TypeScreen/>;
			case 4:
				return <WorkersScreen/>;
			case 5:
				return <StartYearScreen/>;
			case 6:
				return <LawFormScreen/>;
			default:
				return <BeginScreen/>;
		};
	}

	render() {
		return (
			<Modal
				title={this.getTitleName()}
				visible={this.state.visible}
				footer={<Footer next={this.next} prev={this.prev} current={this.state.activeComponent}/>}
				onCancel={this.handleCancel}
			>
				{this.getActiveComponent()}
				<Steps current={this.state.activeComponent} size="small">
					{steps.map(item => (
						<Step key={item.title}/>
					))}
				</Steps>
			</Modal>
		);
	}
}

export default SearchProfileCreationModal;