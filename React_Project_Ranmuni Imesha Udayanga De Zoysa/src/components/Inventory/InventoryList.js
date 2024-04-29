import React from 'react';

class InventoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    // Fetch inventory items from API or any other data source
    this.fetchInventoryItems();
  }

  fetchInventoryItems = () => {
    // Mock API call to fetch inventory items
    // Replace this with actual API call
    const mockItems = [
      { id: 1, name: 'Item 1', quantity: 10 },
      { id: 2, name: 'Item 2', quantity: 5 },
      { id: 3, name: 'Item 3', quantity: 3 },
    ];

    // Simulate delay for demonstration purposes
    setTimeout(() => {
      this.setState({ items: mockItems });
    }, 1000); // 1 second delay
  };

  render() {
    return (
      <div>
        <h2>Inventory List</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default InventoryList;
