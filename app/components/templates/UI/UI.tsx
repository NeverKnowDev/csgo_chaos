import styles from './UI.module.scss';
import { t_Effect } from '../../../../interfaces/t_Effect';
import { useState, useEffect } from 'react';
import RestClient from '@api/RestClient';

const ui = ({ effects }) => {
  let [options, setOptions] = useState([]);
  let [votes, setVotes] = useState(0);
  let [timePerc, setTimePerc] = useState(0)
  let [activeEffects, setActiveEffects] = useState([])

  const generateEffects = () => {
    let newOptions = [];
    while (newOptions.length < 3) {
      let effect = effects[Math.floor(Math.random() * effects.length)];
      if (newOptions.includes(effect)) continue;
      effect.votes = 0;
      effect.percent = 30;
      newOptions.push(effect);
    }
    newOptions.push({
      name: 'Random Effect',
      description: 'A random effect will occur',
      command: 'random',
      votes: 0,
      percent: 0,
    });
    setOptions(newOptions);
    options = newOptions;
  };

  const updateStats = async () => {
    let newOptions = options;
    const stats = (await RestClient.get('/api/votes')).data;
    let total = 0;
    for (var i in newOptions) {
      newOptions[i].votes = stats.votes[i];
      total += newOptions[i].votes;
    }
    setVotes(Math.floor(total));
    //Calculate percentes
    for (var i in newOptions) {
      if (total == 0 || newOptions[i].votes == 0) {
        newOptions[i].percent = 0;
        continue;
      }
      newOptions[i].percent = Math.round((newOptions[i].votes / total) * 100);
    }
    setOptions([...options, newOptions]);
    options = newOptions;
  };

  const launchNewEffect = async () => {
    let chosenEffect: any = { percent: 0 };

    for (var i in options) {
      if (options[i].percent > chosenEffect.percent) chosenEffect = options[i];
    }

    if(chosenEffect.command == "random")
      chosenEffect = effects[Math.floor(Math.random() * effects.length)];

    await RestClient.post('/api/startEffect', {
      effect: chosenEffect.command,
      status: true,
    });
    
    let newActive = activeEffects;
    newActive.push(chosenEffect);
    setActiveEffects(newActive);
    activeEffects = newActive;


    setTimeout(async () => {
      console.log("Disabling the effect: " + chosenEffect.name)
      await RestClient.post('/api/startEffect', {
        effect: chosenEffect.command,
        status: false,
      });
      let newActive = activeEffects;
      newActive.splice (newActive.indexOf(chosenEffect), 1)
      setActiveEffects(newActive);
    }, chosenEffect.time * 1000);

    await RestClient.get('/api/resetVotes');


    generateEffects();
  };

  const timeBetweenEffects = 30000;
  let timePassed = 0;

  const handleTimeInterval = 10;

  const handleTimeleft = () => {
    const perc = (( timePassed / timeBetweenEffects ) * 100);
    timePassed += handleTimeInterval;
    setTimePerc(perc)

    if(timePassed >= timeBetweenEffects) {
      launchNewEffect();
      setTimePerc(0);
      timePassed = 0;
    }
  }

  useEffect(() => {
    generateEffects();
    setInterval(() => {
      updateStats();
    }, 1000);
    setInterval(() => {
      handleTimeleft();
    }, handleTimeInterval)
  }, []);

  const Options_element = () => {
    return options.map((option, i) => {
      if (option.percent != undefined)
        return (
          <div key={option.name} className={styles.option}>
            <div
              style={{
                width: option.percent + '%',
              }}
              id={`${option.command}-slider`}
            ></div>
            <p className={styles.option_name}>
              {i + 1}.
            </p>
            <p className={styles.option_name}>{option.name}</p>
            <p>{option.percent}%</p>
          </div>
        );
    });
  };

  return (
    <div className={styles.content}>
      <div style={{
        width: timePerc + "%"
      }} className={styles.time_left}></div>
      <div className={styles.options}>
        {Options_element()}
        <p>{votes.toString()} total votes</p>
      </div>
      <div className={styles.active}>
        {activeEffects.map((active) => {
          return <div>
             <p>{active.name}</p> 
           </div>
        })}
      </div>
    </div>
  );
};
export default ui;
