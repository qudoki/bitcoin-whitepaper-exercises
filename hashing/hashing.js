"use strict";

var crypto = require("crypto");

// The Power of a Smile
// by Tupac Shakur
var poem = [
	"The power of a gun can kill",
	"and the power of fire can burn",
	"the power of wind can chill",
	"and the power of a mind can learn",
	"the power of anger can rage",
	"inside until it tears u apart",
	"but the power of a smile",
	"especially yours can heal a frozen heart",
];

var Blockchain = {
	blocks: [],
};

// Genesis block
Blockchain.blocks.push({
	index: 0,
	hash: "000000",
	data: "",
	timestamp: Date.now(),
});

// TODO: insert each line into blockchain
for (let line of poem) {
	createBlock(line)
}

// Part 1
// Create a function called createBlock()
// 'index'
// 'prevHash'
// 'data'
// 'timestamp'
// 'hash'

function createBlock(data) {
	let block = {
		index: Blockchain.blocks.length,
		prevHash: Blockchain.blocks[Blockchain.blocks.length - 1].hash,
		data: data,
		timestamp: Date.now()
	}
	// can't include within object, because it becomes circular loop, can't hash the hash
	block.hash = blockHash(block);
	Blockchain.blocks.push(block);
	console.log(block);
	return block;
}

// Part 2
console.log(`Blockchain is valid: ${verifyChain(Blockchain)}`);

function verifyBlock() {
	if (bl.data == null) return false;
	if (bl.index = 0) {
		if (bl.hash !== "000000") return false;
	}
	else {
		if (!bl.prevHash) return false;
		if (!(
			typeof bl.index === "number" &&
			Number.isInteger(bl.index) &&
			bl.index > 0
		)) {
			return false;
		}
		if (bl.hash !== blockHash(bl)) return false;
	}
	return true;
}

function verifyChain(chain) {
	let prevHash;
	for (let bl of chain.blocks) {
		if (prevHash && bl.prevHash !== prevHash) return false;
		if (!verifyBlock(bl)) return false;
		prevHash = bl.hash;
	}
	return true;
}

// **********************************

function blockHash(bl) {
	return crypto.createHash("sha256").update(
		// TODO: use block data to calculate hash
		// `index`, `prevHash`, `data`, and `timestamp`
		`${bl.index};${bl.prevHash};${bl.data};${bl.timestamp}`
	).digest("hex");
}
