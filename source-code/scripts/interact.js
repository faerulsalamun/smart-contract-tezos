const dotenv = require('dotenv');
const {TezosToolkit} = require('@taquito/taquito');
const {InMemorySigner} = require('@taquito/signer');

dotenv.config();

const { RPC_URL, PRIVATE_KEY, CONTRACT_ADDRESS } = process.env;

const increment = async() => {
    const signer = await InMemorySigner.fromSecretKey(PRIVATE_KEY);
    const Tezos = new TezosToolkit(RPC_URL);
    Tezos.setProvider({signer:signer});

    const contract = await Tezos.contract.at(CONTRACT_ADDRESS);

    const tx = await contract.methods.increment(1).send();

    console.log(await tx.confirmation(1));
}

const decrement = async() => {
    const signer = await InMemorySigner.fromSecretKey(PRIVATE_KEY);
    const Tezos = new TezosToolkit(RPC_URL);
    Tezos.setProvider({signer:signer});

    const contract = await Tezos.contract.at(CONTRACT_ADDRESS);

    const tx = await contract.methods.decrement(1).send();

    console.log(await tx.confirmation(1));
}

// increment();
decrement();