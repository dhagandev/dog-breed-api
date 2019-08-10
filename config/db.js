'use strict;'

let crypto = require('crypto');

module.exports = function() {
	return {
		breedList: [],

		save(breed) {
			this.breedList.push(breed)
			return 1;
		},

		find(breedType) {
			if (breedType) {
				return this.breedList.find(breedElement => {
					return breedElement.breedType === breedType;
				})
			} else {
				return this.breedList;
			}
		},

		remove(breedType) {
			let found = 0;
			this.breedList = this.breedList.filter(breedElement => {
				if (breedElement.breedType === breedType) {
					found = 1;
				} else {
					return breedElement.breedType === breedType;
				}
			})
			return found;
		},

		update(breedType, breed) {
			let breedIndex = this.breedList.findIndex(breedElement => { return breedElement.breedType === breedType});
			if (breedIndex !== -1) {
				this.breedList[breedIndex] = breed;
				return 1;
			} else {
				return 0;
			}
		},
	}
}