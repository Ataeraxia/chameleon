import React, { Component } from 'react';

// Record component - represents a single thought record
export default class Record extends Component {
  render(){
    return (
      <div>
        <p>{this.props.situation.date.toString()}</p>
        <p>{this.props.situation.description}</p>
        <MoodList moods={this.props.moods} />
        <AutoList autoThoughts={this.props.autoThoughts} />
        <ProList pro={this.props.pro} />
        <ConList con={this.props.con} />
        <AltList alt={this.props.alt} />
        <MoodAfterList moodsAfter={this.props.moodsAfter} />
      </div>
    );
  }
}

function MoodList(props) {
  const moods = props.moods;
  const moodItems = moods.map((mood) =>
    <li key={mood.name}>
      {mood.name}
      {mood.rating.toString()}
    </li>
  );
  return(
    <ul>
      {moodItems}
    </ul>
  );
}

function AutoList(props) {
  const autoThoughts = props.autoThoughts;
  const autoItems = autoThoughts.map((auto) =>
    <li key={auto.content}>
      {auto.content}
    </li>
  );
  return(
    <ul>
      {autoItems}
    </ul>
  );
}

function ProList(props) {
  const pros = props.pro;
  const proItems = pros.map((pro) =>
    <li key={pro.content}>
      {pro.content}
    </li>
  );
  return(
    <ul>
      {proItems}
    </ul>
  );
}

function ConList(props) {
  const cons = props.con;
  const conItems = cons.map((con) =>
    <li key={con.content}>
      {con.content}
    </li>
  );
  return(
    <ul>
      {conItems}
    </ul>
  );
}

function AltList(props) {
  const alts = props.alt;
  const altItems = alts.map((alt) =>
    <li key={alt.content}>
      {alt.content}
      {alt.beliefRating.toString()}
    </li>
  );
  return(
    <ul>
      {altItems}
    </ul>
  );
}

function MoodAfterList(props) {
  const moodsAfter = props.moodsAfter;
  const moodItems = moodsAfter.map((mood) =>
    <li key={mood.name}>
      {mood.name}
      {mood.rating.toString()}
    </li>
  );
  return(
    <ul>
      {moodItems}
    </ul>
  );
}