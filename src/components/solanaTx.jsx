import {
    Connection,
    PublicKey,
    clusterApiUrl,
    LAMPORTS_PER_SOL,
    Transaction,
    SystemProgram,
  } from '@solana/web3.js';
  
  // Connect to the devnet
  const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

  const receiverPublicKey = new PublicKey('6ZY41CVcdL7VNCgZsh29h2KuUjqdVLw9At6EpL5x3aQt');
  
  // Function to transfer SOL
  export const transferSol = async (senderPublicKey, amount, sendTransaction) => {
    
  try {
    // Create a transaction to transfer SOL
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: senderPublicKey,
        toPubkey: receiverPublicKey,
        lamports: +amount * LAMPORTS_PER_SOL, 
      })
    );

    const signature = await sendTransaction(transaction, connection)

    // Confirm the transaction
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');

    return confirmation;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Error transferring SOL');
  }
};