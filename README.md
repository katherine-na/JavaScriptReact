<h1>JavaScript React</h1>

React es una biblioteca de JavaScript

## React.Component

```js
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Lista de compras para {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
        </ul>
      </div>
    );
  }
}
```