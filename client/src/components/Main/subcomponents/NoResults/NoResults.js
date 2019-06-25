import React, {useState} from 'react';
import Styles from './NoResults.module.css'

function NoResults() {
  let [message, setMessage] = useState({
  	title: 'lorem ipsum is an ipsum that lorens', 
  	text: 'Fruitcake tiramisu cotton candy muffin dragée. Pie macaroon powder. Caramels halvah sesame snaps. Liquorice pudding halvah sweet roll tiramisu chupa chups bear claw tootsie roll wafer. Liquorice powder cupcake cheesecake wafer biscuit apple pie pastry. Cupcake lemon drops marzipan muffin bear claw danish. Biscuit gingerbread chocolate bar carrot cake. Oat cake sugar plum chocolate dragée sugar plum liquorice lollipop. Lemon drops sesame snaps gummies. Icing muffin cookie croissant gummies pudding. Bonbon lemon drops oat cake cookie biscuit. Cheesecake jujubes jujubes chocolate bar jelly pie pastry tiramisu. Caramels macaroon sweet sweet ice cream. Gummi bears gingerbread cupcake halvah ice cream. Pastry cupcake liquorice liquorice candy canes cake tart. Jelly-o chupa chups candy macaroon tart soufflé croissant. Biscuit pastry cupcake carrot cake dessert carrot cake jujubes pudding. Bonbon pie dessert. Macaroon lollipop chocolate cake sesame snaps biscuit pie. Jelly beans marzipan gummi bears candy cake chocolate cake. Topping caramels sugar plum marshmallow jelly dessert liquorice candy canes. Chocolate bar pie toffee sugar plum jujubes tootsie roll cookie sugar plum. Candy canes chocolate muffin candy canes cake tiramisu marshmallow candy lemon drops. Danish powder sugar plum gummies bonbon. Halvah tart muffin.'
  })
  return (
    <div className={Styles.Message}>
    	<h2>{message.title}</h2>
    	<p>{message.text}</p>
    </div>
  );
}

export default NoResults;
