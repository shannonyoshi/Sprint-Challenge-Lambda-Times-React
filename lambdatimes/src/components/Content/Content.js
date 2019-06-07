import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Tabs from "./Tabs";
import Cards from "./Cards";

import { tabData, cardData } from "../../data";
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "all",
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({ tabs: tabData, cards: cardData });
  }
  // this function should take in the tab and update the state with the new tab.
  changeSelected = tab => {
    this.setState({ selected: tab });
  };

  filterCards = e => {
    if (this.state.selected === "all") {
      return this.state.cards;
    } else {
      return this.state.cards.filter(card => card.tab === this.state.selected);
    }
  };

  render() {
    return (
      <ContentContainer>
        <Tabs
          tabs={this.state.tabs}
          selectedTab={this.state.selected}
          selectTabHandler={this.changeSelected}
        />
        <Cards cards={this.filterCards()} />
      </ContentContainer>
    );
  }
}

Content.propTypes = {
  tabData: PropTypes.arrayOf(PropTypes.string),
  cardData: PropTypes.shape({
    headline: PropTypes.string,
    tab: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string
  })
};
