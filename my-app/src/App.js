import React, { useState, useEffect } from 'react';
import TransactionList from './components/TransactionList';
import TransactionForm from './components/TransactionForm';
import SearchBar from './components/SearchBar';

function App() {
  const [transactions, setTransactions] = useState([]);

  // Fetch data from the local JSON server
  useEffect(() => {
    fetch('http://localhost:8001/transactions')
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Function to add a new transaction
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  // Function to handle search term change
  const handleSearchChange = (searchTerm) => {
    // Logic to filter transactions based on search term
    // Update the filteredTransactions state with the filtered data
  };

  return (
    <div className="App">
      <h1>Bank Transactions</h1>
      <TransactionForm addTransaction={addTransaction} />
      <SearchBar onSearchChange={handleSearchChange} />
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default App;