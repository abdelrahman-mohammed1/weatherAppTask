import Row from '../ui/Row';
import SmallContainer from '../ui/SmallContainer';
import PropTypes from 'prop-types';

WeatherDetail.propTypes = {
  kindDetail: PropTypes.string.isRequired,
  result: PropTypes.node.isRequired,
  Icon: PropTypes.element.isRequired,
};
export default function WeatherDetail({ kindDetail, result, Icon }) {
  return (
    <SmallContainer>
      <p>{kindDetail}</p>
      <Row gap="small">
        {parseFloat(result).toLocaleString()}
        {Icon}
      </Row>
    </SmallContainer>
  );
}
