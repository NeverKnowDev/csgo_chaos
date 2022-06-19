import Default from '@layout/Default/Default';
import HomePage from '@template/HomePage/HomePage';
import { ToggleEffect } from './../services/effect';
import { t_Effect } from '../interfaces/t_Effect';


export async function getServerSideProps(context) {

  const effects: Array<t_Effect> = [{
    name: "Force Shoot",
    description: "You are constantly shooting",
    command: "force_shoot"
  }];

  return {
    props: { effects },
  };
}

const App = (props) => (
  <Default>
    <HomePage {...props} />
  </Default>
);

export default App;
