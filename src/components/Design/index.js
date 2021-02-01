import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";

class Design extends Component {
	render() {
		return (
			<div className='designComponentContainer'>
				<h1 className='designComponentHeader'>Design Portfolio</h1>

				<div className='designsContainer'>
					<div className='designsRow'>
						<div className='designContainer'>
							<img
								className='designPhoto'
								src={require("../../assets/design_folder/bar-tabs.png")}
							></img>
							<div className='designDescriptionContainer'>
								<p className='designDescription'>BarTab IOS logo</p>
								<p className='designSubtext'>
									This logo was developed for the IOS application BarTabs.
									BarTabs is an application that informs users about the number
									of people currently at bars near them.
								</p>
							</div>
						</div>

						<div className='designContainer'>
							<img
								className='designPhoto'
								src={require("../../assets/design_folder/bar-tabs.png")}
							></img>
							<div className='designDescriptionContainer'>
								<p className='designDescription'>Brain Juice Company Logo</p>
								<p className='designSubtext'>
									This logo was developed for the merchandise company Brain
									Juice. A link to the company store front can be found here!
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Design;
