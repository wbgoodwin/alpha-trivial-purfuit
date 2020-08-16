import Token from '../../components/GameBoard/Token'
import React from 'react'
import { colorMapping } from '../../colors'

export default class Player {
  constructor(categories, color, name, startPosition) {
		this.playerName = name;
		this.tokenRef = React.createRef();
		this.token = <Token
					ref={this.tokenRef}
                    key={startPosition}
                    startPosition={startPosition}
                    categories={categories}
                    color={colorMapping[color]}
				  />;
	}

	getToken() {
		return this.token;
	}

	updateTokenLocation(x,y) {
		this.tokenRef.current.updateLocation(x,y);
	}

	isTokenFull() {
		return this.tokenRef.current.isFull();
	}

	checkTokenChips(category) {
		return this.tokenRef.current.checkTokenChips(category);
	}

	addChipToToken(category) {
		this.tokenRef.current.updateChipList(category);
	}

}
