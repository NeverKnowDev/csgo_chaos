import styles from './HomePage.module.scss';
import { t_Effect } from './../../../../interfaces/t_Effect';
import RestClient from '@api/RestClient';

function Effect_Button({ children }: { children: t_Effect }) {

  const toggleEffect = (status: boolean) => {
    RestClient.post("/api/startEffect/", {
      effect: children.command,
      status
    })
  }

  return (
    <div className={styles.effect_button}>
      <h2>{children.name}</h2>
      <p>{children.description}</p>
      <div className={styles.effect_button_controls}>
        <button onClick={() => {
          toggleEffect(true);
        }}>Start</button>
        <button onClick={() => {
          toggleEffect(false);
        }}>Stop</button>
      </div>
    </div>
  );
}

const HomePage = ({ effects }: { effects: Array<t_Effect> }) => {
  return (
    <div className={styles.content}>
      <div className={styles.effects}>
        {effects.map((effect) => {
          return <Effect_Button key={effect.command}>{effect}</Effect_Button>;
        })}
      </div>
    </div>
  );
};

export default HomePage;
