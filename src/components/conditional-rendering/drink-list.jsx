import React from "react";

function Drink({ name }) {
  if(name==="tea"){
    return (
      <section>
        <h1>{name}</h1>
        <dl>
          <dt>Part of plant</dt>
          <dd>leaf</dd>
          <dt>Caffeine content</dt>
          <dd>15–70 mg/cup</dd>
          <dt>Age</dt>
          <dd>4,000+ years</dd>
        </dl>
      </section>
    );
  }else{
    return (
      <section>
        <h1>{name}</h1>
        <dl>
          <dt>Part of plant</dt>
          <dd>bean</dd>
          <dt>Caffeine content</dt>
          <dd>80–185 mg/cup</dd>
          <dt>Age</dt>
          <dd>80–185 mg/cup</dd>
        </dl>
      </section>
    );
  }
  
}

function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}

export default DrinkList;
