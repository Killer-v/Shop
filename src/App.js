import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Items from "./components/items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Стул',
          img: 'chair.jfif',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
          category: 'chairs',
          price: '22,00',
        },
        {
          id: 2,
          title: 'Стул',
          img: 'chair.jfif',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
          category: 'chairs',
          price: '22,00',
        },
        {
          id: 3,
          title: 'Стул',
          img: 'chair.jfif',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
          category: 'chairs',
          price: '22,00',
        },
        {
          id: 4,
          title: 'Стул',
          img: 'chair.jfif',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
          category: 'chairs',
          price: '22,00',
        },
        {
          id: 5,
          title: 'Стул',
          img: 'chair.jfif',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
          category: 'chairs',
          price: '22,00',
        },

      ]
    }
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items}/>
        <Footer />
      </div>
    );
  }
}

export default App;
