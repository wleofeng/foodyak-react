import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import Rating from '../components/rating'

export default ({ name }) => (
  <Card>
    <h1>{ name }</h1>
    <Rating yelp="5" foursquare="4" places="5"></Rating>
  </Card>
)