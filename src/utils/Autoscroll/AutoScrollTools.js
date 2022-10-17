import ReactDOM from 'react-dom';
import scrollIntoView from 'scroll-into-view-if-needed';

export const autoScroll = ({
  ref,
  mouseClickClear,
  mainTable = false,
  id = null,
  isSwitched = false,
}) => {
  setTimeout(() => {
    if (ref && ref.current) {
      if (mainTable) {
        autoScrollToElement(ref.current);
      } else {
        autoScrollToEntity(ref.current, id, isSwitched);
      }
    }
  }, 0);
  mouseClickClear();
};

const autoScrollToEntity = (element, id, isSwitched) => {
  const node = ReactDOM.findDOMNode(element);
  const childList = node.getElementsByClassName('autoscrollClass');
  for (let child of childList) {
    if (child.children[1].textContent === id) {
      autoScrollToElement(child, isSwitched);
    }
  }
};

export const autoScrollToElement = (element, isSwitched) => {
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
