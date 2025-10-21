export default function BlockchainProjects() {
  return (
    <div style={{ padding: "2rem", color: "#e0e0e0", background: "#0a0a0a", minHeight: "100vh" }}>
      <h1 style={{ color: "#00ffb3" }}>🔗 Blockchain Projects</h1>
      <p>These projects demonstrate my experience in smart contract development, dApp architecture, and blockchain system design using Solidity, Hardhat, and Next.js.</p>

      <section style={{ marginTop: "2rem" }}>
        <h2>🗳️ OnChain Election System</h2>
        <p>A decentralized election platform ensuring transparent and tamper-proof voting using Ethereum smart contracts. Features include voter authentication, candidate registration, and real-time vote tallying through blockchain.</p>

        <h2>🌍 ArdhiChain – Land NFT Registry</h2>
        <p>An innovative land registry built on blockchain, where each piece of land is tokenized as an NFT. The system provides ownership proof, secure transfers, and an immutable land record system for governments and citizens.
            GitHub repo: https://github.com/zico-hubb/ardhi-Chain
        </p>

        <h2>🏙️ UrbanScope – Smart City dApp</h2>
        <p>A blockchain-based platform designed for urban data management, integrating IoT and decentralized databases to support smart city governance and data transparency.</p>

        <h2>🏫 Campus Voting dApp</h2>
        <p>A university-level blockchain voting system built to test decentralized governance in campus elections. Implements smart contracts for vote counting and role-based access for admins and students.</p>
      </section>
    </div>
  );
}
