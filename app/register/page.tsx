import { useState } from 'react';
import { ethers } from 'ethers';

const RegisterDapp = () => {
  const [repoUrl, setRepoUrl] = useState('');
  const [tags, setTags] = useState('');
  const [signature, setSignature] = useState('');

  const registerDapp = async () => {
    try {
      // Connect to the Ethereum provider
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      // Get the signer
      const signer = provider.getSigner();

      // Your smart contract address and ABI
      const contractAddress = 'YOUR_CONTRACT_ADDRESS';
      const contractABI = [...]; // Replace with your actual ABI

      // Create the contract instance
      const contract = new ethers.Contract(contractAddress, contractABI, signer);

      // Call the registerDapp function
      const transaction = await contract.registerDapp(repoUrl, tags, signature);

      // Wait for the transaction to be mined
      await transaction.wait();

      // Success, handle the result
      console.log('Dapp registered successfully!');
    } catch (error) {
      console.error('Error registering dApp:', error);
    }
  };

  return (
    <div>
      <label>
        Repo URL:
        <input type="text" value={repoUrl} onChange={(e) => setRepoUrl(e.target.value)} />
      </label>
      <br />
      <label>
        Tags (comma-separated):
        <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} />
      </label>
      <br />
      <label>
        Signature:
        <input type="text" value={signature} onChange={(e) => setSignature(e.target.value)} />
      </label>
      <br />
      <button onClick={registerDapp}>Register dApp</button>
    </div>
  );
};

export default RegisterDapp;
