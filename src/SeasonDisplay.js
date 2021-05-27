import React from 'react';

const seasonConfig={
    summer:{
        text:'I know you are sweating like a pig',
        iconName : 'sun'
    },
    winter:{
        text: "Hey, I know it's too cold out there.",
        iconName:'snowflake'
    }
}; 

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const {text,iconName}= seasonConfig[season];
  return (
    <div>
      <i className={`${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
