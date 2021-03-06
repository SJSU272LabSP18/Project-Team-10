import {
  FETCH_NODES,
  FETCH_ZONE_NODES,
  SUBSCRIBE_NOAA
} from '../actions/types';

export default function(state = null, action) {
  console.log(action.type);
  switch (action.type) {
    case FETCH_NODES:
    case SUBSCRIBE_NOAA:
      return action.payload || false;
    case FETCH_ZONE_NODES:
      return action.payload || false;

    default:
      return state;
  }
}
