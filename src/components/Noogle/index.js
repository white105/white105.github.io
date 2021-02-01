import React, { Component } from "react";
import NoogleLogo from "../../assets/media/newGoogle.png";
import NoogleMic from "../../assets/media/googleMic.png";
import $ from "jquery";

class Noogle extends Component {
	constructor() {
		super();

		this.state = {
			jsonData: {},
			availableMemes: [],
		};

		this.getMemes = this.getMemes.bind(this);
		this.displayMeme = this.displayMeme.bind(this);
		this.getRandomIntInclusive = this.getRandomIntInclusive.bind(this);
		this.noogleMic = this.noogleMic.bind(this);
		this.rickRoll = this.rickRoll.bind(this);
		this.feelingLucky = this.feelingLucky.bind(this);
		this.noogleSearch = this.noogleSearch.bind(this);
	}

	componentDidMount() {
		this.getMemes();
	}

	noogleSearch() {
		var searchText = $.trim($("#tags").val());
		if (searchText == "") {
			alert("You can't search for nothing bro beans");
		} else {
			if (this.state.availableMemes.contains(searchText)) {
				for (let i = 0; i < this.state.jsonData.length; i++) {
					if (this.state.jsonData[i].name == searchText) {
						this.displayMeme(this.state.jsonData[i].url);
						break;
					}
				}
			} else {
				alert("That's not even a meme bro");
			}
		}
	}

	feelingLucky() {
		alert("hahahahahahahah bro!!! you're not lucky at all!");
		this.rickRoll();
	}

	rickRoll() {
		document.body.innerHTML = "";
		let rick = document.createElement("IMG");
		rick.src = "media/rickRolled.gif";
		rick.style.display = "block";
		rick.style.margin = "auto";
		rick.style.width = "100%";
		rick.style.height = "100%";
		document.body.appendChild(rick);
		let audio = new Audio("media/rickRolling.mp3");
		audio.play();
	}

	getMemes() {
		$.when(
			$.getJSON("https://api.imgflip.com/get_memes", function (data) {
				this.state.jsonData = data.data.memes;
			})
		).then(function () {
			for (let i = 0; i < this.state.jsonData.length; i++) {
				this.state.availableMemes.push(this.state.jsonData[i].name);
			}
			$("#tags").autocomplete({
				source: this.state.availableMemes,
			});
		});
	}

	displayMeme(memeURL) {
		let noogle = document.getElementById("Noogle");
		let newMeme = document.createElement("IMG");
		newMeme.src = memeURL;
		newMeme.setAttribute("id", "Noogle");
		noogle.parentNode.replaceChild(newMeme, noogle);
	}

	getRandomIntInclusive(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	noogleMic() {
		//maybe add some more catchPhrases for the voice lady
		let catchPhrases = ["Do you even code"];
		let randomPhraseNumber = this.getRandomIntInclusive(
			0,
			catchPhrases.length - 1
		);
		//responsiveVoice.speak(catchPhrases[randomPhraseNumber]);
	}

	render() {
		return (
			<div className='noogleComponent'>
				<div class='ui-widget'>
					<img src={NoogleLogo} id='Noogle'></img>

					<div id='searchBarContainer'>
						<input
							id='tags'
							placeholder='Search Noogle or type URL'
							type='text'
						></input>

						<div id='delete'>
							<img
								src={NoogleMic}
								id='googleMic'
								onclick='noogleMic()'
								value='🔊 Play'
							></img>
						</div>

						<div id='buttons'>
							<button id='noogleSearch' onclick='noogleSearch()'>
								Noogle Search
							</button>
							<button id='feelingLucky' onclick='feelingLucky()'>
								I'm Feeling Lucky
							</button>
						</div>
					</div>
				</div>

				<p id='noogleDefinition'>Noogle -- The new and improved Google</p>
			</div>
		);
	}
}

export default Noogle;
