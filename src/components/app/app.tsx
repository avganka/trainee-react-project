import Main from '../main/main';

type PlacesCountProp = {
  placesCount:number
}

function App({placesCount}:PlacesCountProp): JSX.Element {
  return <Main placesCount={placesCount}/>;
}

export default App;
