import ReactDOM from 'react-dom';
import scrollIntoView from 'scroll-into-view-if-needed';

// Handle automatic scroll to subtable or entity by click event (on marker on the map)

export const autoScrollWrapper = ({
  ref,
  mouseClickMarkerToInitial,
  mainTable = false,
  id = null,
  isSwitched = false,
}) => {
  setTimeout(() => {
    if (ref && ref.current) {
      const { current } = ref;
      if (mainTable) {
        autoScrollToSubtable(current);
      } else {
        autoScrollToEntity(current, id, isSwitched);
      }
    }
  }, 0);
  mouseClickMarkerToInitial();
};

const autoScrollToEntity = (element, id, isSwitched) => {
  const node = ReactDOM.findDOMNode(element);
  const childList = node.getElementsByClassName('autoscrollClass');
  for (let child of childList) {
    if (child.children[1].textContent === id) {
      autoScrollToSubtable(child, isSwitched);
    }
  }
};

export const autoScrollToSubtable = (element, isSwitched) => {
  scrollIntoView(element, {
    behavior: 'smooth',
    boundary: parent => {
      if (getComputedStyle(parent)['overflow'] === 'hidden' && isSwitched) {
        return false;
      }
      return true;
    },
  });
};
