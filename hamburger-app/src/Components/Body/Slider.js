import React, { Component } from 'react';

const sliderContents = [
	{
		review:
			'Vocent mandamus ad ius, vel ea nulla aliquip constituam. Case latine regione ex his, et utamur adversarium vim, et mei sonet invenire. Ius nisl bonorum corpora eu. Munere sanctus vel eu.',
		person: '-John Doe',
		number: 'slide1'
	},
	{
		review:
			'An mel prima mollis facilisis, in pri viris omittantur. Velit disputando no nam, te dico dignissim sit. Per aeque docendi accusam id. Erant dissentiunt pri cu, saepe scriptorem complectitur in vis, officiis prodesset pro id. No eos scripta lobortis mnesarchum, et repudiare scribentur est.',
		person: '-Jane Doe',
		number: 'slide2'
	},
	{
		review:
			'Iisque fuisset temporibus duo et, nec augue detracto interesset et. Mel et veniam verterem senserit, purto evertitur elaboraret vim ex. Ad mea latine epicurei suscipiantur, paulo inimicus ne pro, est cu denique lucilius. In nec summo vocent impedit.',
		person: '-Joanna Doe',
		number: 'slide3'
	}
];

class Slider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeIndex: 0
		};
		this.handleLeftClick = this.handleLeftClick.bind(this);
		this.handleRightClick = this.handleRightClick.bind(this);
	}

	goToSlide(index) {
		this.setState({ activeIndex: index });
	}

	handleLeftClick(e) {
		e.preventDefault();

		let index = this.state.activeIndex;
		let slidesLength = sliderContents.length;
		if (index < 1) {
			index = slidesLength;
		}
		--index;
		this.setState({
			activeIndex: index
		});
		console.log(index);
	}

	handleRightClick(e) {
		e.preventDefault();

		let index = this.state.activeIndex;
		let slidesLength = sliderContents.length - 1;

		if (index === slidesLength) {
			index = -1;
		}
		++index;
		this.setState({
			activeIndex: index
		});
		console.log(index, sliderContents);
	}

	render() {
		return (
			<div className="wrap">
				<div id="arrow-left" className="arrow" onClick={(e) => this.handleLeftClick(e)} />
				<div className="slidesWrap">
					{sliderContents.map((content, index) => (
						<div
							id={content.number}
							index={index}
							className={`slider ${index === this.state.activeIndex ? 'active' : 'hidden'}`}
							key={index}
						>
							<div className="slide-content">
								<span>{content.review}</span>
								<p>{content.person}</p>
							</div>
						</div>
					))}
				</div>
				<div id="arrow-right" className="arrow" onClick={(e) => this.handleRightClick(e)} />
			</div>
		);
	}
}

export default Slider;
