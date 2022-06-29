import Default from '@layout/Default/Default';
import HomePage from '@template/HomePage/HomePage';
import effects from './../services/effects';


export async function getServerSideProps(context) {

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
