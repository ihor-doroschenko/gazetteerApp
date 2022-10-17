import MarkerContainer from 'components/MarkerContainer/MarkerContainer';
import { withReactMemo } from 'HOCs/withReactMemo';
import { divIcon } from 'leaflet';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Marker, Popup } from 'react-leaflet';
import { getIsMouseOverElementInfinite } from 'utils/Helpers/MapHelpers/getIsMouseOverElementInfinite';
import CustomPopup from './CustomPopup/CustomPopup';

class Markers extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (
      nextProps.mouseOverElementInfinite.id === this.props.id ||
      this.props.mouseOverElementInfinite.id === this.props.id
    ) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const isMouseOverElementInfinite = getIsMouseOverElementInfinite(
      this.props.mouseOverElementInfinite,
      this.props.id,
      this.props.gazName
    );
    return (
      <Marker
        key={this.props.id}
        position={this.props.position}
        icon={divIcon({
          iconSize: [30, 30],
          iconAnchor: [15, 30],
          popupAnchor: [0, -30],
          html: renderToString(
            <MarkerContainer
              internId={this.props.internId}
              color={this.props.color}
              isMouseOverElementInfinite={isMouseOverElementInfinite}
              position={this.props.position}
              mapMarker={true}
            />
          ),
        })}
        onMouseOver={this.props.mouseOver}
        onClick={this.props.handleMouseClick}
        onMouseOut={this.props.mouseOut}>
        <Popup maxWidth='400' maxHeight='100'>
          <CustomPopup gazName={this.props.gazName} name={this.props.name} id={this.props.id} />
        </Popup>
      </Marker>
    );
  }
}

export default withReactMemo(Markers);
