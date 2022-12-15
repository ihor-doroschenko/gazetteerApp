// Return a values which defines whether a marker on the map should be rerendered

export const shouldMarkersRerender = (props, nextProps) => {
  return (
    nextProps.mouseOverElementInfinite.id === props.id ||
    props.mouseOverElementInfinite.id === props.id ||
    nextProps.internId !== props.internId
  );
};
