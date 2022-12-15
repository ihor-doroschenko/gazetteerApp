import { Breadcrumb } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changePartOfImageProperty } from 'redux/details-reducer';
import CustomBreadcrumbClasses from './CustomBreadCrumb.module.css';

// Component to contain breacrumb element to use in part-of attribute of GOV entities to switch between text and graphic representations

const CustomBreadcrumb = ({ id, image }) => {
  const dispatch = useDispatch();
  const imageState = image && image.isOpened;
  return (
    <Breadcrumb>
      <Breadcrumb.Item
        className={
          !imageState
            ? CustomBreadcrumbClasses.clickedCrumb
            : CustomBreadcrumbClasses.unClickedCrumb
        }
        onClick={() => dispatch(changePartOfImageProperty(id, 'isOpened', false))}>
        Text view
      </Breadcrumb.Item>
      <Breadcrumb.Item
        className={
          !imageState
            ? CustomBreadcrumbClasses.unClickedCrumb
            : CustomBreadcrumbClasses.clickedCrumb
        }
        onClick={() => dispatch(changePartOfImageProperty(id, 'isOpened', true))}>
        Image view
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default CustomBreadcrumb;
