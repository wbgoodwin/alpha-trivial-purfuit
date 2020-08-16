import Token from '../../components/GameBoard/Token'
import React from 'react'
import { colorMapping } from '../../colors'

export default class Player {
  constructor(categories, color, name, xPosition, yPosition) {
		this.playerName = name;
		this.token = <Token
                    key={color}
					xPosition={xPosition}
					yPosition={yPosition}
                    categories={categories}
                    color={colorMapping[color]}
                  />;
	}

	getToken() {
		return this.token;
	}

	updateTokenLocation(x,y) {
		this.token.updateLocation(x,y);
	}

	isTokenFull() {
		return this.token.isFull();
	}

	checkTokenChips(category) {
		return this.token.checkTokenChips(category);
	}

	addChipToToken(category) {
		this.token.updateChipList(category);
	}

}
