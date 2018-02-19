import { connect } from 'react-redux';
import calendar from 'constants/calendar';
import * as events from 'constants/events';
import JourneyToTheWest from '../components/JourneyToTheWest';

export const mapStateToProps = (
  state,
  { match: { params: { server, eventName } } },
) => ({
  server,
  event: {
    ...calendar[server].find(({ name }) => name === eventName),
    ...events[eventName],
  },
});

export const mapDispatchToProps = () => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(JourneyToTheWest);
