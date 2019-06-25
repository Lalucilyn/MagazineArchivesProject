import React, {useState} from 'react';
import Filters from './subcomponents/Filters/Filters'
import NoResults from './subcomponents/NoResults/NoResults'
import Searchbar from './subcomponents/Searchbar/Searchbar'
import Results from './subcomponents/Results/Results'
import Styles from './Main.module.css'
function Main() {
  let [results, setResults] = useState(null)	
  return (
    <main className={Styles.Main}>
    <Filters/>
    	<div className={Styles.Browser}>
    	    <Searchbar/>
    		{results ? <Results/> : <NoResults/>}
    	</div>
    </main>
  );
}

export default Main;
